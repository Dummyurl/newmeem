@extends('frontend.layouts.app')
@section('body')

    <!-- BREADCRUMBS -->
    <section class="page-section breadcrumbs">
        <div class="container">
            <div class="page-header">
                <h1>{{ trans('general.shopping_cart') }}</h1>
            </div>
            @include('frontend.partials._breadcrumbs',['name' => trans('general.shop')])
        </div>
    </section>
    <!-- /BREADCRUMBS -->

    <!-- PAGE -->
    <section class="page-section color">
        <div class="container">
            <h3 class="block-title alt"><i class="fa fa-angle-down"></i>{{ trans('general.products') }}</h3>
            <div class="row orders">
                @if($cartCount > 0)
                    <div class="col-md-12">

                        <table class="table">
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

                            @foreach($cart as $item)
                                <tr>
                                    <td class="image">
                                        <img class="img-sm"
                                             src="{{ asset(env('THUMBNAIL').$item->options->product->image) }}"
                                             alt="{{ $item->name }}"/></td>
                                    <td class="quantity">{{ $item->options->colorName }}</td>
                                    <td class="quantity">{{ $item->options->sizeName }}</td>
                                    <td class="quantity"><a
                                                href="{{ route('frontend.product.show',$item->options->product->id) }}">{{ $item->name }}</a>
                                    </td>
                                    <td class="quantity">{{ $item->price }}</td>
                                    <td class="quantity">{{ $item->qty }}</td>
                                    <td class="total">{{ number_format($item->price * $item->qty,'2','.',',') }} {{ trans('general.kwd') }}
                                        <a href="{{ route('frontend.cart.remove',$item->id) }}"><i
                                                    class="fa fa-close"></i></a>
                                    </td>
                                </tr>
                            @endforeach
                            </tbody>
                        </table>
                    </div>
                    <div class="col-md-8 col-md-push-2 col-sm-12">
                        <h3 class="block-title"><span>{{ trans("general.have_coupon") }}</span></h3>
                        <div class="shopping-cart">
                            <form action="{{ route('frontend.cart.coupon') }}" method="post">
                                @csrf
                                <div class="form-group">
                                    <input class="form-control" name="code" type="text"
                                           placeholder="{{ trans('general.coupon_code') }}"/>
                                </div>
                                <div class="form-group">
                                    <button class="btn btn-theme btn-theme-dark btn-view-more-block">{{ trans('general.apply_coupon') }}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-md-8 col-md-push-2 col-sm-12">
                        <h3 class="block-title"><span>{{ trans("general.shopping_cart") }}</span></h3>
                        <div class="shopping-cart">
                            <form action="{{ route('frontend.cart.checkout') }}" method="post">
                                @csrf
                                <table>
                                    <tr>
                                        <td>{{ trans('general.sub_total') }}:</td>
                                        <td>{{ getCartNetTotal() }}</td>
                                        <td>{{ trans('general.kwd') }}</td>
                                    </tr>
                                    <tr>
                                    <tr>
                                        <div class="form-group selectpicker-wrapper">
                                            <label class="cart-padding"
                                                   for="package_id">{{ trans('general.select_shipment_package') }}</label>
                                            <select
                                                    name="package_id" id="shipment_package"
                                                    class="col-sm-6 size-menu input-price" data-live-search="true"
                                                    data-width="100%"
                                                    data-toggle="tooltip"
                                                    title="{{ trans('general.shippment_package') }}">
                                                <option value="">{{ trans('general.shipment_package') }}</option>
                                                @foreach($packages as $package)
                                                    <option value="{{ $package->id }}"
                                                            data-is_local="{{ $package->is_local }}"
                                                            data-charge="{{ $package->charge }}">{{ $package->slug }}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                    </tr>
                                    <tr>
                                        <div class="category hidden free_shipment">
                                            <label class="cart-padding"
                                                   for="free_shipment">{{ trans('general.message_free_shipment_branch_receiving') }}</label>
                                            <input type="checkbox" name="free_shipment" id="free_shipment"
                                                   value="1">
                                        </div>
                                    </tr>
                                    <tr>
                                        <div class="form-group selectpicker-wrapper">
                                            <div class="category hidden branches">
                                                <select class="orderby shipment-dropdown col-sm-6 size-menu input-price"
                                                        name="branch" id="branch"
                                                        data-live-search="true"
                                                        data-width="100%"
                                                        data-toggle="tooltip" title="{{ trans('general.branch') }}">
                                                    @foreach($branches as $branch)
                                                        <option value="{{ $branch->id }}"
                                                                data-address="{{ $branch->address }}">{{ $branch->name }}</option>
                                                    @endforeach
                                                </select>
                                            </div>
                                        </div>
                                    </tr>
                                    <tr>
                                        <div id="branch_address" class="hidden">
                                            <h4>{{ trans('general.branch_address') }}</h4>
                                        </div>
                                    </tr>
                                    <tr>
                                        <td>{{ trans("general.shippment") }}:</td>
                                        <td id="chargeVal"></td>
                                        <td>{{ trans('general.kwd') }}</td>
                                    </tr>
                                    @if(session('coupon'))
                                        <tr>
                                            <td>{{ trans("general.discount") }}:</td>
                                            <td>{{ getCouponValue() }} {{ trans('general.kd') }}</td>
                                        </tr>
                                    @endif
                                    <tfoot>
                                    <tr>
                                        <td>{{ trans('general.gross_total') }}:</td>
                                        <td id="grossTotal" class="grossTotal">
                                        </td>
                                        <td>{{ trans('general.kwd') }}</td>
                                    </tr>
                                    </tfoot>
                                </table>
                                {{--cart--}}
                                {{--@auth--}}
                                    <div>
                                        <input type="hidden" name="charge" class="charge" value="">
                                        <input type="hidden" name="grandTotal" class="grandTotal"
                                               value="{{ getCartNetTotal() }}">
                                        <input type="hidden" name="grossTotal" class="grossTotal"
                                               value="">
                                    </div>
                                    <button type="submit" id="forward" disabled="disabled"
                                            class="btn btn-theme btn-theme-dark btn-view-more-block"
                                            href="#">{{ trans('cart.proceed_to_checkout') }}</button>
                                {{--@endauth--}}
                            </form>
                        </div>
                    </div>
                @else
                    <hr class="page-divider small"/>
                    <div class="col-lg-12">
                        <section class="page-section breadcrumbs">
                            <div class="container">
                                <div class="page-header">
                                    <h1>{{ trans('message.no_products') }}</h1>
                                </div>
                            </div>
                        </section>
                    </div>
                @endif
            </div>
        </div>
    </section>
    <!-- /PAGE -->
@endsection






