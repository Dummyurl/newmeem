<?php

namespace Usama\MyFatoorah;

use App\Http\Controllers\Controller;
use App\Mail\OrderComplete;
use App\Models\Setting;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Mail\Markdown;
use Illuminate\Support\Facades\Mail;

/**
 * Created by PhpStorm.
 * User: usamaahmed
 * Date: 7/15/17
 * Time: 6:04 PM
 */
class MyFatoorahPaymentController extends Controller
{
    public function getCustomer($user)
    {
        return '<CustomerDC>
    <Name>' . $user->name . '</Name>
    <Email>' . $user->email . '</Email>
    <Mobile>' . $user->mobile . '</Mobile>
    </CustomerDC>';
    }

    public function getMerchant()
    {
        return '
        <MerchantDC>
        <merchant_code>' . env('MYFATOORAH_MERCHANT_CODE') . '</merchant_code>
        <merchant_username>' . env('MYFATOORAH_USERNAME') . '</merchant_username>
        <merchant_password>' . env('MYFATOORAH_PASSWORD') . '</merchant_password>
        <merchant_ReferenceID>' . env('MYFATOORAH_MERCHANT_ID') . '</merchant_ReferenceID>
        <ReturnURL>' . env('MYFATOORAH_PAYMENT_URL') . '</ReturnURL>
        <merchant_error_url>' . env('MYFATOORAH_ERROR_URL') . '</merchant_error_url>
    </MerchantDC>
        ';
    }

    public function createXMLPaymentDetails($user, $order)
    {
        return $this->postString = '<?xml version="1.0" encoding="windows-1256"?>
<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
<soap12:Body>
    <PaymentRequest xmlns="http://tempuri.org/">
    <req>
    ' . $this->getCustomer($user) . '
    ' . $this->getMerchant() . '
    <lstProductDC>
        ' . $this->createProductsList($order) . '
    </lstProductDC>
    </req>
    </PaymentRequest>
</soap12:Body>
</soap12:Envelope>';
    }

    public function createProductsList($order)
    {
        $products = '';
        foreach ($order->order_metas as $orderMeta) {
            $price = $orderMeta->product->on_sale ? $orderMeta->product->sale_price : $orderMeta->product->price;
            $products .= <<<PRODUCTS
        <ProductDC>
            <product_name>{$orderMeta->product->name}</product_name>
            <unitPrice>{$price}</unitPrice>
            <qty>{$orderMeta->qty}</qty>
        </ProductDC>'
PRODUCTS;
        }
        if ($order->shipping_cost > 0) {
            $products .= <<<PRODUCTS
        <ProductDC>
            <product_name>Shipping Cost</product_name>
            <unitPrice>{$order->shipping_cost}</unitPrice>
            <qty>1</qty>
        </ProductDC>'
PRODUCTS;
        }

        return $products;
    }

    public function makePayment(Request $request)
    {
        $className = env('ORDER_MODEL_PATH');
        $order = new $className();
        $order = $order->whereId($request->id)->with('order_metas.product', 'order_metas.product_attribute')->first();
        $user = auth()->user();
        $postString = $this->createXMLPaymentDetails($user, $order);
        $soap_do = curl_init();

// User Name, Password To be provided by Myfatoorah
        curl_setopt($soap_do, CURLOPT_HTTPHEADER, array(
            'Content-type: text/xml'
        ));

        $soap_do = curl_init();

        curl_setopt($soap_do, CURLOPT_URL, env('MYFATOORAH_PAYMENT_URL'));

        curl_setopt($soap_do, CURLOPT_CONNECTTIMEOUT, 10);

        curl_setopt($soap_do, CURLOPT_TIMEOUT, 10);

        curl_setopt($soap_do, CURLOPT_RETURNTRANSFER, true);

        curl_setopt($soap_do, CURLOPT_SSL_VERIFYPEER, false);

        curl_setopt($soap_do, CURLOPT_SSL_VERIFYHOST, false);

        curl_setopt($soap_do, CURLOPT_POST, true);

        curl_setopt($soap_do, CURLOPT_POSTFIELDS, $postString);

        curl_setopt($soap_do, CURLOPT_HTTPHEADER, array('Content-Type: text/xml; charset=utf-8', 'Content-Length: ' . strlen($postString)));

        curl_setopt($soap_do, CURLOPT_USERPWD, env('MYFATOORAH_USERNAME') . ":" . env('MYFATOORAH_PASSWORD'));

        try {

            $result = curl_exec($soap_do);

            $file_contents = htmlspecialchars($result);

            $doc = new \DOMDocument();

            $doc->loadXML(html_entity_decode($file_contents));

            $ResponseCode = $doc->getElementsByTagName("ResponseCode");

            $ResponseCode = $ResponseCode->item(0)->nodeValue;

            $ResponseMessage = $doc->getElementsByTagName("ResponseMessage");

            $ResponseMessage = $ResponseMessage->item(0)->nodeValue;

            try {
                if ($ResponseCode == 0) {

                    $referenceId = $doc->getElementsByTagName("referenceID")->item(0)->nodeValue;

                    $responseMessage = $doc->getElementsByTagName("ResponseMessage")->item(0)->nodeValue;

                    $paymentURL = $doc->getElementsByTagName("paymentURL")->item(0)->nodeValue;

                    $paymentDetails = (object)[
                        'paymentURL' => $paymentURL,
                        'responseMessage' => ($responseMessage == 'SUCCESS') ? true : false,
                        'referenceId' => $referenceId
                    ];
                    curl_close($soap_do);
                    $order->update(['reference_id' => $referenceId]);
                    return redirect()->to($paymentURL);

                }

            } catch (\Exception $e) {
                curl_close($soap_do);
                return $e->getMessage();
            }

        } catch (\Exception $e) {
            echo curl_errno($soap_do);
            echo curl_error($soap_do);
            $err = curl_error($soap_do);
            curl_close($soap_do);
            echo 'case 0';
            return ($e->getMessage() . '+' . $err);
        }
    }

    public function result(Request $request)
    {
        // once the result is success .. get the deal from refrence then delete all other free deals related to such ad.
        $order = Order::where(['reference_id' => $request->id])->with('order_metas.product', 'user', 'order_metas.product_attribute.size', 'order_metas.product_attribute.color')->first();
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
        $order = Order::withoutGlobalScopes()->where(['reference_id' => $request->id])->first();
        $order->update(['status' => 'failed']);
        abort('404', 'Your payment process is unsuccessful .. your deal is not created please try again or contact us.');
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

