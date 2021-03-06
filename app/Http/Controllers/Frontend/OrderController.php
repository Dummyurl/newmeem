<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Http\Requests\Frontend\OrderStore;
use App\Mail\sendReturnOrder;
use App\Models\Order;
use App\Models\OrderMeta;
use App\Models\Product;
use App\Models\Setting;
use App\Models\User;
use Gloudemans\Shoppingcart\Cart;
use Illuminate\Http\Request;
use Illuminate\Mail\Markdown;
use Illuminate\Support\Facades\Mail;

class OrderController extends Controller
{
    public function __construct(Cart $cart)
    {
        $this->cart = $cart;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $orders = Order::where(['user_id' => auth()->user()->id, 'status' => 'success'])->with('order_metas.product')->get();
        $ids = $orders->pluck('order_metas')->flatten()->unique()->pluck('product.id')->toArray();
        $elements = Product::whereIn('id', $ids)->paginate(12);
        return view('frontend.modules.order.index', compact('elements', 'orders'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(OrderStore $request)
    {
        if (auth()->check()) {
            $user = auth()->user();
            $user->update([
//            'email' => $request->email,
                'country' => $request->country,
                'mobile' => $request->mobile,
                'address' => $request->address,
                'phone' => $request->phone,
                'area' => $request->area,
                'block' => $request->block,
                'building' => $request->building,
                'street' => $request->street,
                'floor' => $request->floor,
                'apartment' => $request->apartment,
            ]);
        } else {
            $user = User::where('email', $request->email)->first();
            if ($user) {
                $user->update([
//            'email' => $request->email,
                    'country' => $request->country,
                    'mobile' => $request->mobile,
                    'address' => $request->address,
                    'phone' => $request->phone,
                    'area' => $request->area,
                    'block' => $request->block,
                    'building' => $request->building,
                    'street' => $request->street,
                    'floor' => $request->floor,
                    'apartment' => $request->apartment,
                ]);
            } else {
                $user = User::create([
                    'name' => $request->email,
                    'email' => $request->email,
                    'password' => bcrypt($request->mobile),
                    'country' => $request->country,
                    'mobile' => $request->mobile,
                    'address' => $request->address,
                    'phone' => $request->phone,
                    'area' => $request->area,
                    'block' => $request->block,
                    'building' => $request->building,
                    'street' => $request->street,
                    'floor' => $request->floor,
                    'apartment' => $request->apartment,
                ]);
            }

        }
        if ($user) {
            $shipment = session('shipment');
            $coupon = session('coupon');
            auth()->login($user);
            $order = Order::create([
                'shipping_cost' => $shipment['charge'],
                'price' => $shipment['grandTotal'],
                'net_price' => $shipment['grossTotal'],
                'discount' => $coupon ? $coupon->value : null,
                'mobile' => $request->mobile,
                'phone' => $request->phone,
                'country' => $request->country,
                'email' => $request->email,
                'address' => $request->address,
                'area' => $request->area,
                'user_id' => $user->id,
                'receive_on_branch' => isset($shipment['free_shipment']) && $shipment['free_shipment'] ? $shipment['free_shipment'] : false,
                'branch_id' => isset($shipment['branch']) ? $shipment['branch'] : null,
                'payment_method' => $request->payment_method,
                'coupon_id' => $coupon ? $coupon['id'] : null
            ]);
            if ($order) {
                $this->cart->content()->each(function ($item) use ($order, $request) {
                    $order->order_metas()->create([
                        'order_id' => $order->id,
                        'product_id' => $item->options->product->id,
                        'product_attribute_id' => $item->id,
                        'qty' => $item->qty,
                        'price' => $item->options->product->on_sale ? $item->options->product->sale_price : $item->options->product->price,
                    ]);
                });
                return redirect()->route('frontend.order.show', $order->id);
            }
        } else {
            return redirect()->route('frontend.cart.index')->with('error', trans('please_check_your_information_again'));
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $order = Order::whereId($id)->with('order_metas.product', 'order_metas.product_attribute.color', 'order_metas.product_attribute.size')->first();
        $coupon = session('coupon') ? session('coupon') : null;
        return view('frontend.modules.order.show', compact('order', 'coupon'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function getReturn() {
        return view('frontend.modules.order.return');
    }

    public function postReturn(Request $request) {
        $settings = Setting::first();
        Mail::to($settings->email)->cc('info@meemonoon.com')->cc($request->email)->send(new sendReturnOrder($request));
        $markdown = new Markdown(view(), config('mail.markdown'));
        return $markdown->render('emails.order-return', [
            'name' => $request->name,
            'email' => $request->email,
            'mobile' => $request->mobile,
            'order_no' => $request->order_no,
            'purchase_date' => $request->purchase_date,
            'address' => $request->address,
            'notes' => $request->notes,
        ]);
    }
}
