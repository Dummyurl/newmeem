@extends('____frontend.layouts.app')


@section('styles')
    @parent
    <link rel="stylesheet" href="{{ mix('css/order-review.css') }}">
@endsection

@section('body')
    <div class="col-lg-12" style="background-color: white">
        <div class="col-lg-6 col-lg-push-3 col-sm-12">
            <table align="center" cellpadding="0" cellspacing="0" class="container-for-gmail-android"
                   width="100%">
                <tr>
                    <td align="center" valign="top" width="100%" style="background-color: #f7f7f7;"
                        class="content-padding">
                        <center>
                            <table cellspacing="0" cellpadding="0" width="600" class="w320">
                                <tr>
                                    <td class="header-lg">
                                        {{ trans('general.order_review') }}
                                    </td>
                                </tr>
                                <tr>
                                    <td class="w320">
                                        <table cellpadding="0" cellspacing="0" width="100%">
                                            <tr>
                                                <td class="mini-container-left">
                                                    <table cellpadding="0" cellspacing="0" width="100%">
                                                        <tr>
                                                            <td class="mini-block-padding">
                                                                <table cellspacing="0" cellpadding="0"
                                                                       width="100%"
                                                                       style="border-collapse:separate !important;">
                                                                    <tr>
                                                                        <td class="mini-block"
                                                                            style="height: 170px;">
                                                                            <span class="header-sm">{{ trans('general.shipping_address') }}</span><br/>
                                                                            {{ $order->address}}<br/>
                                                                            <br/>
                                                                            <span class="header-sm">{{ trans('general.country') }}</span><br/>
                                                                            {{ $order->country }}<br/>
                                                                            <br/>
                                                                            <span class="header-sm">{{ trans('general.mobile') }}</span><br/>
                                                                            {{ $order->mobile}}<br/>
                                                                            <br/>
                                                                            <span class="header-sm">{{ trans('general.payment_method') }}</span>
                                                                            <br/>
                                                                            {{ $order->payment_method }}
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td class="mini-container-right">
                                                    <table cellpadding="0" cellspacing="0" width="100%">
                                                        <tr>
                                                            <td class="mini-block-padding">
                                                                <table cellspacing="0" cellpadding="0"
                                                                       width="100%"
                                                                       style="border-collapse:separate !important;">
                                                                    <tr>
                                                                        <td class="mini-block"
                                                                            style="height: 170px;">
                                                                            <span class="header-sm">{{ trans('general.name') }}</span><br/>
                                                                            {{ auth()->user()->name  }} <br/>
                                                                            <br/>
                                                                            <span class="header-sm">{{ trans('general.email') }}</span><br/>
                                                                            {{ auth()->user()->email  }} <br/>
                                                                            <br/>
                                                                            <span class="header-sm">{{ trans('general.order_date') }}</span><br/>
                                                                            {{Carbon\Carbon::now()->format('F j, Y')}}
                                                                            <br/>
                                                                            <br/>
                                                                            @if(isset($coupon))
                                                                                <span class="header-sm">{{ trans('general.coupon') }}</span>
                                                                                <br/>
                                                                                {{ $coupon->value }}
                                                                            @endif
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </center>
                    </td>
                </tr>
            </table>
        </div>
        <div class="col-lg-12">
            <div class="col-lg-6 col-lg-push-3 col-sm-12">
                <div class="table-content table-responsive">
                    <table>
                        <thead>
                        <tr>
                            <th class="product-thumbnail">{{ trans('cart.image') }}</th>
                            <th class="product-thumbnail">{{ trans('cart.color') }}</th>
                            <th class="product-thumbnail">{{ trans('cart.size') }}</th>
                            <th class="product-name">{{ trans('cart.product_name') }}</th>
                            <th class="real-product-price">{{ trans('cart.unit_price') }}</th>
                            <th class="product-quantity">{{ trans('cart.qty') }}</th>
                            <th class="product-subtotal">{{ trans('cart.sub_total') }}</th>
                        </tr>
                        </thead>
                        <tbody>

                        @foreach($order->order_metas as $item)
                            <tr>
                                <td class="product-thumbnail">
                                    <a href="{{ route('frontend.product.show',$item->product_id) }}">
                                        <img src="{{ asset('storage/uploads/images/thumbnail/'.$item->product->image) }}"
                                             width="100" height="100" alt="" class="img-rounded img-thumbnail"/>
                                    </a>
                                </td>

                                <td class="product-thumbnail">
                                    <div class="col-lg-1 col-lg-push-4"
                                         style="text-align: center; border: 1px solid lightgrey; min-height : 30px; margin: 3px; background-color : {!! $item->product_attribute->colorName !!}"></div>
                                </td>

                                <td class="product-thumbnail">
                                    {{ $item->product_attribute->sizeName }}
                                </td>

                                <td class="product-name">
                                    <a href="{{ route('frontend.product.show',$item->product_id) }}">{{ $item->product->name }}</a>
                                </td>

                                <td class="real-product-price">
                                    <span class="price">{{$item->price}} {{ trans('general.kd') }} </span>
                                    {{--<span class="amounte">{{ $item->options->product->sale_price }} KD </span>--}}
                                </td>

                                <td class="product-quantity">
                                    {{--<input type="number" name="quantity_{{$item->options->product->id}}" disabled="disabled"--}}
                                    {{--value="{{ $item->qty }}"/>--}}
                                    {{ $item->qty }}
                                </td>

                                <td class="product-subtotal">{{ number_format($item->price * $item->qty,'2','.',',') }} {{ trans('general.kd') }}</td>
                            </tr>
                        @endforeach
                        </tbody>
                    </table>
                    <br>
                    <form action="{{ route('myfatoorah.web.payment.create') }}" method="post">
                        @csrf
                        <input type="hidden" name="id" value="{{ $order->id }}">
                        <button type="submit" class="btn right-btn custom-button">{{ trans('general.go_to_payment') }}</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
