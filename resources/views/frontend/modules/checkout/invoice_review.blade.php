@extends('frontend.layouts.app')


@section('styles')
    @parent
    {{--<link rel="stylesheet" href="{{ mix('css/order-review.css') }}">--}}
@endsection

@section('body')
    <div class="col-lg-12" style="background-color: white; margin: 20px;">
        <div class="col-lg-6 col-lg-push-3 col-sm-12">
            <table align="center" cellpadding="0" cellspacing="0" class="container-for-gmail-android"
                   width="100%">
                <tr>
                    <td align="center" valign="top" width="100%" style="background-color: #f7f7f7;"
                        class="content-padding">
                            <table cellspacing="0" cellpadding="0" width="600" class="w320">
                                <tr>
                                    <td>
                                        <h2>{{ trans('general.order_review') }}</h2>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="w320">
                                        <table cellpadding="0" cellspacing="0" width="100%">
                                            <tr>
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
                                                                            <span class="header-sm"><strong>{{ trans('general.name') }}</strong></span><br/>
                                                                            {{ auth()->user()->name  }} <br/>
                                                                            <br/>
                                                                            <span class="header-sm"><strong>{{ trans('general.email') }}</strong></span><br/>
                                                                            {{ auth()->user()->email  }} <br/>
                                                                            <br/>
                                                                            <span class="header-sm"><strong>{{ trans('general.order_date') }}</strong></span><br/>
                                                                            {{Carbon\Carbon::now()->format('F j, Y')}}
                                                                            <br/>
                                                                            <br/>
                                                                            @if(isset($coupon))
                                                                                <span class="header-sm"><strong>{{ trans('general.coupon') }}</strong></span>
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
                                                                            <span class="header-sm"><strong>{{ trans('general.shipping_address') }}</strong></span><br/>
                                                                            {{ $order->address}}<br/>
                                                                            <br/>
                                                                            <span class="header-sm"><strong>{{ trans('general.country') }}</strong></span><br/>
                                                                            {{ $order->country }}<br/>
                                                                            <br/>
                                                                            <span class="header-sm"><strong>{{ trans('general.mobile') }}</strong></span><br/>
                                                                            {{ $order->mobile}}<br/>
                                                                            <br/>
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
                    </td>
                </tr>
            </table>
        </div>
        <div class="col-lg-12">
            <div class="col-lg-6 col-lg-push-3 col-sm-12">
                <table class="table" style="margin: 20px;">
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
                            <td class="image">
                                <a class="media-link" href="#">
                                    <img class="img-sm"
                                         src="{{ asset(env('THUMBNAIL').$item->product->image) }}"
                                         alt="{{ $item->name }}"/></a></td>
                            <td class="quantity">
                                <div class="col-lg-1"
                                     style="text-align: center; border: 1px solid lightgrey; min-height : 30px; margin: 3px; background-color : {!! $item->product_attribute->colorName !!}"></div>
                            </td>
                            <td class="quantity">{{ $item->product_attribute->sizeName }}</td>
                            <td class="quantity">{{ $item->product->name }}</td>
                            <td class="quantity">{{ $item->price }}</td>
                            <td class="quantity">{{ $item->qty }}</td>
                            <td class="total">{{ number_format($item->price * $item->qty,'2','.',',') }} {{ trans('general.kwd') }}
                                <a href="{{ route('frontend.cart.remove',$item->id) }}"><i class="fa fa-close"></i></a>
                            </td>
                        </tr>
                    @endforeach
                    <tr>
                        <td>
                            <form action="{{ route('web.payment.create') }}" method="post">
                                @csrf
                                <input type="hidden" name="id" value="{{ $order->id }}">
                                <button type="submit" class="btn btn-theme btn-theme-dark">{{ trans('general.go_to_payment') }}</button>
                            </form>
                        </td>

                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
@endsection
