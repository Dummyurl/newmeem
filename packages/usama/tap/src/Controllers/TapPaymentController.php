<?php

namespace Usama\Tap;

use App\Http\Controllers\Controller;
use App\Mail\OrderComplete;
use App\Models\Ad;
use App\Models\Setting;
use App\Models\Deal;
use App\Models\Order;
use App\Models\OrderAttribute;
use App\Models\Plan;
use Illuminate\Http\Request;
use Illuminate\Mail\Markdown;
use Illuminate\Support\Facades\Mail;

/**
 * Created by PhpStorm.
 * User: usamaahmed
 * Date: 7/15/17
 * Time: 6:04 PM
 */
class TapPaymentController extends Controller
{
    public function getGateWay()
    {
        return ["Name" => config('tap.gatewayDefault')];
    }

    public function getMerchant($totalPrice)
    {
        return [
            "AutoReturn" => config('tap.autoReturn'),
            "ErrorURL" => config('tap.errorUrl'),
            "HashString" => $this->getHashString($totalPrice),
            "LangCode" => config('tap.langCode'),
            "MerchantID" => config('tap.merchantId'),
            "Password" => config('tap.password'),
            "PostURL" => config('tap.postUrl'),
            "ReferenceID" => '',
            "ReturnURL" => config('tap.returnUrl'),
            "UserName" => config('tap.userName')
        ];
    }

    public function setHashString($totalPrice)
    {
        return $toBeHashedString = 'X_MerchantID' . config('tap.merchantId') .
            'X_UserName' . config('tap.userName') .
            'X_ReferenceID' . '45870225000' .
            'X_Mobile' . '1234567' .
            'X_CurrencyCode' . config('tap.currencyCode') .
            'X_Total' . $totalPrice;
    }

    public function getHashString($totalPrice)
    {
        return hash_hmac('sha256', $this->setHashString($totalPrice), config('tap.apiKey'));
    }

    public function makePayment(Request $request)
    {
        $className = config('tap.order');
        $order = new $className();
        $order = $order->whereId($request->id)->with('order_metas.product', 'order_metas.product_attribute')->first();
        $user = auth()->user();
        $finalArray = [
            'CustomerDC' => [
                "Email" => $order->email,
                "Floor" => $order->floor ? $order->floor : "0",
                "Gender" => $order->gender ? $order->gender : "0",
                "ID" => $user ? $user->id : "0",
                "Mobile" => $order->mobile,
                "Name" => $user->name,
                "Nationality" => $order->nationality ? $order->nationality : "KWT",
                "Street" => $order->address ? $order->address : $user->address,
                "Area" => $order->area ? $order->area : $user->area_id,
                "CivilID" => $order->mobile ? $order->mobile : "0",
                "Building" => $user->address,
                "Apartment" => $user->address,
                "DOB" => $user->created_at
            ],
            'lstProductDC' => $this->getProducts($order),
            'lstGateWayDC' => [$this->getGateWay()],
            'MerMastDC' => $this->getMerchant($order->net_price),
        ];
        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_URL => config('tap.paymentUrl'),
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "POST",
            CURLOPT_POSTFIELDS => json_encode($finalArray, JSON_UNESCAPED_SLASHES),
            CURLOPT_HTTPHEADER => array(
                "content-type: application/json"
            ),
        ));

        $response = curl_exec($curl);
        $err = curl_error($curl);
        curl_close($curl);
        if ($err) {
            echo "cURL Error #:" . $err;
        } else {
            $response = (\GuzzleHttp\json_decode($response));
            if (!$response->ResponseCode) {
                /* response how it looks
                * {#966 ▼
                    +"PaymentURL": "http://live.gotapnow.com/webpay.aspx?ref=210092017100407130&sess=kEh3R7REOFWP0b3BFM6Kkm2O7AQck8Jg"
                    +"ReferenceID": "210092017100407130"
                    +"ResponseCode": "0"
                    +"ResponseMessage": "Success"
                    +"TapPayURL": "http://live.gotapnow.com/webpay.aspx"
                }
             * store the payment and update it with the refrence
                * */
                // create the order here
                $order->update(['reference_id' => $response->ReferenceID]);
//                return $response->PaymentURL;
                return redirect()->to($response->PaymentURL);
            }

            return redirect()->back()->with('error', trans('message.payment_url_error'));
//            return response()->json($response->ResponseMessage);

        }
    }

    public function result(Request $request)
    {
        // once the result is success .. get the deal from refrence then delete all other free deals related to such ad.
        $order = Order::where(['reference_id' => $request->ref])->with('order_metas.product', 'user', 'order_metas.product_attribute.size', 'order_metas.product_attribute.color')->first();
        $order->order_metas->each(function ($orderMeta) use ($order) {
            $orderMeta->product->check_stock && $orderMeta->product_attribute->qty > 0 ? $orderMeta->product_attribute->decrement('qty', 1) : null;
        });
        $done = $order->update(['status' => 'success']);
        $coupon = session('coupon');
        if ($coupon && $done) {
            $coupon->update(['consumed' => true]);
        }
        $contactus = Setting::first();
        Mail::to($order->email)->cc($contactus->email)->send(new OrderComplete($order, $order->user));
        $this->clearCart();
        $markdown = new Markdown(view(), config('mail.markdown'));
        return $markdown->render('emails.order-complete', ['order' => $order, 'user' => $order->user]);
    }

    public function error(Request $request)
    {
        $order = Order::withoutGlobalScopes()->where(['reference_id' => $request->ref])->first();
        $order->update(['status' => 'failed']);
        return abort('404', 'Your payment process is unsuccessful .. your deal is not created please try again or contact us.');
    }

    public function getProducts($order)
    {
        $productsList = [];
        foreach ($order->order_metas as $orderMeta) {
            array_push($productsList, [
                'CurrencyCode' => env('TAP_CURRENCY_CODE'),
                'ImgUrl' => asset(env('LARGE')) . $orderMeta->product->image,
                'Quantity' => $orderMeta->qty,
                'TotalPrice' => $orderMeta->product->on_sale ? $orderMeta->product->sale_price : $orderMeta->product->price,
                'UnitID' => $orderMeta->product->id,
                'UnitName' => $orderMeta->product->name_en,
                'UnitPrice' => $orderMeta->product->price,
                'UnitDesc' => $orderMeta->product->description,
                'VndID' => '',
            ]);
        }
        if ($order->shipping_cost > 0) {
            array_push($productsList, [
                'CurrencyCode' => env('TAP_CURRENCY_CODE'),
                'ImgUrl' => asset(env('LARGE')) . Setting::first()->logo,
                'Quantity' => 1,
                'TotalPrice' => $order->shipping_cost,
                'UnitID' => $order->id,
                'UnitName' => 'Shipping Cost',
                'UnitPrice' => $order->shipping_cost,
                'UnitDesc' => 'Shipping Cost',
                'VndID' => '',
            ]);
        }
        return $productsList;
    }

    public function clearCart()
    {
        session()->forget('cart');
    }
}

