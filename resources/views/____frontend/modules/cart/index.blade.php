@extends('____frontend.layouts.app')
@section('body')
    <div class="feature-product-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="feature-headline section-heading text-center">
                        <h2>{{ trans('general.shopping_cart') }}</h2>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    @if($cart->isEmpty())
                        <div class="text-center">
                            <h1>{{ trans('cart.empty') }}</h1>
                            <p><a href={{route('frontend.home')}}> {{trans('cart.browse')}} </a></p>
                        </div>
                    @else
                        <div class="table-content table-responsive">
                            <table>
                                <thead>
                                <tr>
                                    <th class="product-remove">{{ trans('cart.remove') }}</th>
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
                                        <td class="product-remove">
                                            <a href="{{ route('frontend.cart.remove',$item->id) }}">
                                                <i class="fa fa-times"></i>
                                            </a>
                                        </td>

                                        <td class="product-thumbnail">
                                            <a href="{{ route('frontend.product.show',$item->options->product->id) }}">
                                                <img src="{{ asset('storage/uploads/images/thumbnail/'.$item->options->product->image) }}"
                                                     width="100" height="100" alt="" class="img-rounded img-thumbnail"/>
                                            </a>
                                        </td>

                                        <td class="product-thumbnail">
                                            <div class="col-lg-1 col-lg-push-4"
                                                 style="text-align: center; border: 1px solid lightgrey; min-height : 30px; margin: 3px; background-color : {!! $item->options->colorName !!}"></div>
                                        </td>

                                        <td class="product-thumbnail">
                                            {{ $item->options->sizeName }}
                                        </td>

                                        <td class="product-name">
                                            <a href="{{ route('frontend.product.show',$item->options->product->id) }}">{{ $item->name }}</a>
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
                            <div class="cart-s-btn">
                                <div class="row">
                                    <div class="col-lg-4 col-md-4 col-sm-8 col-xs-12">
                                        <div class="buttons-cart">
                                            <a href="{{ route('frontend.home') }}">{{ trans('cart.continue_shopping') }}</a>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-3 col-sm-8 col-xs-12 col-md-push-2">
                                        {{--<div class="buttons-cart button-cart-right">--}}
                                        {{--<span class="shopping-btn">--}}
                                        {{--<button type="submit"--}}
                                        {{--class="btn custom-button">{{ trans('cart.update_shopping_cart') }}--}}
                                        {{--</button>--}}
                                        {{--</span>--}}
                                        {{--</div>--}}
                                    </div>
                                    <div class="col-lg-3 col-md-3 col-sm-8 col-xs-12 col-md-push-2">
                                        <div class="place-section" style="padding: 0px;">
                                            <Form action="{{ route('frontend.cart.clear') }}" method="get">
                                                <button type="submit"
                                                        class="col-lg-12 btn custom-button">{{ trans('cart.clear_cart') }}
                                                </button>
                                            </Form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <!-- table end -->
                        <!-- place selection start -->
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="col-lg-8">
                                    <div class="place-section">
                                        <Form action="{{ route('frontend.cart.checkout') }}" method="post">
                                            @csrf
                                            <div class="col-lg-12">
                                                <div class="place-headline">
                                                    <h4>{{ trans('general.estimate_shipping_and_tax') }}</h4>
                                                    <div class="col-lg-12">
                                                        <p>
                                                            <span>{{ trans('general.enter_ur_destination') }}</span>
                                                        </p>
                                                        <p class="{{ app()->isLocale('ar') ? 'pull-right' : 'pull-left' }} ">{{ trans('message.delivery_message') }}</p>
                                                    </div>
                                                    {{--<div class="col-lg-12">--}}
                                                    {{--<img src="{{ asset('images/aramex.png') }}" alt=""--}}
                                                    {{--class="{{ app()->isLocale('ar') ? 'pull-left' : 'pull-right' }} img-responsive"--}}
                                                    {{--style="width: 60px; padding: 5px;">--}}
                                                    {{--<img src="{{ asset('img/cash-delivery.png') }}" alt=""--}}
                                                    {{--class="{{ app()->isLocale('ar') ? 'pull-left' : 'pull-right' }} img-responsive"--}}
                                                    {{--style="width: 60px;">--}}
                                                    {{--</div>--}}
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="search-category">
                                                    <h4>{{ trans('general.shipment_package') }}</h4>
                                                    <div class="category">
                                                        <select class="orderby shipment-dropdown"
                                                                name="package_id" id="shipment_package"
                                                                placeholder='{{ trans('general.select_shipment_package') }}'>
                                                            <option value="">{{ trans('general.shipment_package') }}</option>
                                                            @foreach($packages as $package)
                                                                <option value="{{ $package->id }}"
                                                                        data-is_local="{{ $package->is_local }}"
                                                                        data-charge="{{ $package->charge }}">{{ $package->slug }}</option>
                                                            @endforeach
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-lg-6">
                                                <div class="search-category">
                                                    <h4 class="free_shipment hidden">{{ trans('general.branch') }}</h4>
                                                    <div class="category hidden free_shipment">
                                                        <label for="free_shipment">{{ trans('general.message_free_shipment_branch_receiving') }}</label>
                                                        <input type="checkbox" name="free_shipment" id="free_shipment"
                                                               value="1">
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-lg-6">
                                                <div class="search-category">
                                                    <h4 class="branches hidden">{{ trans('general.branch') }}</h4>
                                                    <div class="category hidden branches">
                                                        <select class="orderby shipment-dropdown"
                                                                name="branch" id="branch"
                                                                placeholder='{{ trans('general.select_branch') }}'>
                                                            @foreach($branches as $branch)
                                                                <option value="{{ $branch->id }}"
                                                                        data-address="{{ $branch->address }}">{{ $branch->name }}</option>
                                                            @endforeach
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-12">
                                                <div class="search-category">
                                                    <div id="branch_address" class="hidden">
                                                        <h4>{{ trans('general.branch_address') }}</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            {{--<div class="col-lg-6">--}}
                                            {{--<div class="search-category">--}}
                                            {{--<h5>{{ trans('general.country') }}</h5>--}}
                                            {{--<div class="category">--}}
                                            {{--<select class="orderby country-dropdown"--}}
                                            {{--name="country_id" id="country"--}}
                                            {{--placeholder='{{ trans('general.select_country') }}'>--}}
                                            {{--<option value="">{{ trans('general.country') }}</option>--}}
                                            {{--@foreach($countries as $country)--}}
                                            {{--<option value="{{ $country->id }}">{{ $country->name }}</option>--}}
                                            {{--@endforeach--}}
                                            {{--</select>--}}
                                            {{--</div>--}}
                                            {{--</div>--}}
                                            {{--</div>--}}
                                            {{--<div class="col-lg-6">--}}
                                            {{--<div class="search-category">--}}
                                            {{--<h5>{{ trans('general.area') }}</h5>--}}
                                            {{--<div class="category">--}}
                                            {{--<select class="disabled country-dropdown" name="area"--}}
                                            {{--id="areas">--}}
                                            {{--<option value="">{{ trans('general.area') }}</option>--}}
                                            {{--</select>--}}
                                            {{--</div>--}}
                                            {{--</div>--}}
                                            {{--</div>--}}
                                            @endif
                                            <div class="col-lg-12">
                                                <div class="rate-fsubtotal">
                                                    @if(getCouponValue())
                                                        <div class="col-lg-12">
                                                            <h2 class="{{ app()->isLocale('ar') ? 'pull-left' : 'pull-right' }}">{{ trans('general.discount') }}
                                                            </h2>
                                                            <h2>
                                                                <span>{{ getCouponValue() }} {{ trans('general.kd') }}</span>
                                                            </h2>
                                                        </div>
                                                    @endif
                                                    <div class="col-lg-12">
                                                        <h2 style="text-align: right;">{{ trans('general.grand_total') }}</h2>
                                                    </div>
                                                    <div class="col-lg-12">
                                                        <p style="font-size: large">{{ trans('general.sub_total') }}</p>
                                                        <h2 class="grandTotal"
                                                            value="{{ getCartNetTotal() }}">{{ number_format(getCartNetTotal(), 2, '.',',') }}</h2> {{ trans('general.kd') }}
                                                        <input type="hidden" name="grandTotal" class="grandTotal"
                                                               value="">
                                                    </div>
                                                    <div class="col-lg-12">
                                                        <p style="font-size: large">{{ trans('general.gross_total') }}</p>
                                                        <h2 id="grossTotal"
                                                            class="grossTotal"></h2> {{ trans('general.kd') }}
                                                        <input type="hidden" name="grossTotal" class="grossTotal"
                                                               value="">
                                                    </div>
                                                </div>
                                                <input type="hidden" name="charge" class="charge" value="">
                                                <button type="submit" id="forward" disabled="disabled"
                                                        class="col-lg-12 btn custom-button">{{ trans('general.proceed_to_checkout') }}
                                                </button>
                                            </div>
                                        </Form>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                    <div class="place-section">
                                        <div class="place-headline">
                                            <h4>{{ trans('general.coupon') }}</h4>
                                            <p>{{ trans('message.have_coupon_message') }}</p>
                                            <form action="{{ route('frontend.cart.coupon') }}" method="post">
                                                @csrf
                                                <div class="code-search">
                                                    <input type="text" name="code" value=""
                                                           placeholder="{{ trans('general.coupon_code') }}">
                                                    <button type="submit">{{ trans('general.apply_coupon') }}</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
@endsection






