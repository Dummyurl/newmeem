@extends('frontend.layouts.app')

@section('body')


    <!-- BREADCRUMBS -->
    <section class="page-section breadcrumbs">
        <div class="container">
            <div class="page-header">
                <h1>{{ trans('general.shopping_cart') }}</h1>
            </div>
            @include('frontend.partials._breadcrumbs',['name' => trans('general.checkout')])
        </div>
    </section>
    <!-- /BREADCRUMBS -->

    <!-- PAGE -->
    <section class="page-section color">
        <div class="container">

                {{--<form method="POST" action="{{ route('login') }}" class="form-sign-in">--}}
                    {{--@csrf--}}
                    {{--<div class="row ">--}}
                        {{--<div class="col-md-6">--}}
                            {{--<div class="form-group">--}}
                                {{--<input class="form-control" name="email" type="text"--}}
                                       {{--placeholder="{{ trans('general.email') }}">--}}
                            {{--</div>--}}
                        {{--</div>--}}
                        {{--<div class="col-md-6">--}}
                            {{--<div class="form-group">--}}
                                {{--<input class="form-control" name="password" type="password"--}}
                                       {{--placeholder="{{ trans('general.password') }}">--}}
                            {{--</div>--}}
                        {{--</div>--}}
                        {{--<div class="col-md-6">--}}
                            {{--<a class="btn btn-theme btn-block btn-theme-dark"--}}
                                    {{--href="{{ route('login') }}">{{ trans('general.login') }}</a>--}}
                        {{--</div>--}}
                    {{--</div>--}}
                {{--</form>--}}
            <form method="POST" action="{{ route('frontend.order.store') }}" class="form-delivery">
                @if(!auth()->check())
                    <h3 class="block-title alt"><i class="fa fa-angle-down"></i><a href="{{ route('login') }}">{{ trans('general.login') }}</a></h3>
                @endif
                <hr class="nav-divider">
                @csrf
                <h3 class="block-title alt"><i class="fa fa-angle-down"></i>{{ trans('general.purchase_without_register') }}</h3>
                <div class="row">
                    <div class="col-md-6 col-xs-12">
                        <label for="name">{{ trans('general.full_name') }}</label>
                        <div class="form-group"><input required name="name"
                                                       value="{{ auth()->check() ? auth()->user()->name : null }}"
                                                       class="form-control" type="text"
                                                       placeholder="{{ trans('general.full_name') }}">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <label for="email">{{ trans('general.email') }}</label>
                        <div class="form-group"><input required name="email"
                                                       value="{{ auth()->check() ? auth()->user()->email : null }}"
                                                       class="form-control" type="text"
                                                       placeholder="{{ trans('general.email') }}">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <label for="mobile">{{ trans('general.mobile') }}*</label>
                        <div class="form-group"><input required name="mobile"
                                                       value="{{ auth()->check() ? auth()->user()->mobile : null }}"
                                                       class="form-control" type="text"
                                                       placeholder="{{ trans('general.mobile') }}">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <label for="phone">{{ trans('general.phone') }}</label>
                        <div class="form-group"><input name="phone"
                                                       value="{{ auth()->check() ? auth()->user()->phone : null }}"
                                                       class="form-control" type="text"
                                                       placeholder="{{ trans('general.phone') }}">
                        </div>
                    </div>
                    <div class="col-md-12">
                        <label for="address">{{ trans('general.full_address') }}*</label>
                        <div class="form-group"><input required name="address"
                                                       value="{{ auth()->check() ? auth()->user()->address : null }}"
                                                       class="form-control" type="text"
                                                       minlength="5"
                                                       placeholder="{{ trans("general.full_address") }}"></div>
                    </div>
                    <div class="col-md-6">
                        <label for="area">{{ trans('general.area') }}</label>
                        <div class="form-group"><input name="area"
                                                       value="{{ auth()->check() ? auth()->user()->area : null }}"
                                                       class="form-control" type="text"
                                                       placeholder="{{ trans('general.area') }}">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group selectpicker-wrapper">
                            <label for="country_id">{{ trans('general.country') }}</label>
                            <select
                                    name="country" id="country"
                                    required
                                    class="selectpicker input-price" data-live-search="true" data-width="100%"
                                    data-toggle="tooltip" title="Select">
                                @foreach($countriesWorld as $country)
                                    <option value="{{ $country }}" {{  $country == 'Kuwait' ? 'selected' : null }}>{{ $country }}</option>
                                @endforeach
                            </select>
                        </div>
                    </div>
                </div>
                <hr class="nav-divider">
                <h3 class="block-title alt"><i class="fa fa-angle-down"></i>{{ trans('general.payment_method') }}
                </h3>
                <div class="panel-group payments-options" id="accordion" role="tablist" aria-multiselectable="true">

                    <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="headingThree">
                            <h4 class="panel-title">
                                <a class="collapsed" data-toggle="collapse" data-parent="#accordion"
                                   href="#collapse3" aria-expanded="false" aria-controls="collapseThree">
                                    <span class="dot"></span> {{ trans("general.my_fatorrah") }}
                                </a>
                                <input type="hidden" name="payment_method" value="myfatoorah">
                                <span class="overflowed {{ app()->isLocale('ar') ? 'pull-left' : 'pull-right' }}">
                                            <img src="{{ asset('img/preview/payments/visa.jpg') }}" alt=""/>
                                            <img src="{{ asset('img/preview/payments/mastercard.jpg') }}" alt=""/>
                                            <img class="img-grey img-xs" src="{{ asset('img/k-net.png') }}" alt=""/>
                                        </span>
                            </h4>
                        </div>
                        <div id="collapse3" class="panel-collapse collapse" role="tabpanel"
                             aria-labelledby="heading3"></div>
                    </div>
                </div>


                <h3 class="block-title alt"><i class="fa fa-angle-down"></i>{{ trans('general.order') }}</h3>
                <div class="row orders">
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
                                                href="{{ route('frontend.product.show', $item->options->product->id) }}">{{ $item->name }}</a>
                                    </td>
                                    <td class="quantity">{{ $item->price }}</td>
                                    <td class="quantity">{{ $item->qty }}</td>
                                    <td class="total">{{ number_format($item->price * $item->qty,'2','.',',') }} {{ trans('general.kwd') }}
                                    </td>
                                </tr>
                            @endforeach
                            </tbody>
                        </table>
                    </div>
                    <div class="col-md-12">
                        <h3 class="block-title"><span>{{ trans('general.shopping_cart') }}</span></h3>
                        <div class="shopping-cart">
                            <table>
                                <tr>
                                    <td>{{ trans('general.sub_total') }}:</td>
                                    <td id="grandTotal" value=""><b>{{ $shipment['grandTotal'] }}</b></td>
                                    <td>{{ trans('general.kwd') }}</td>
                                </tr>
                                @if(!isset($shipment['free_shipment']))
                                    <tr>
                                        <td>{{ trans('general.shipment') }}:</td>
                                        <td id="charge"
                                            value="{{ $shipment['charge'] }}">{{ $shipment['charge'] }}</td>
                                        <td>{{ trans('general.kwd') }}</td>
                                    </tr>
                                @endif
                                <tfoot>
                                <tr>
                                    <td>{{ trans("general.total") }}:</td>
                                    <td id="grossTotal"><b>{{ $shipment['grossTotal'] }}</b></td>
                                    <td>{{ trans('general.kwd') }}</td>
                                </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="overflowed">
                    {{--<a class="btn btn-theme btn-theme-dark"--}}
                       {{--href="{{ route('frontend.cart.clear') }}">{{ trans('general.clear_cart') }}</a>--}}
                    <button class="btn btn-theme" type="submit">{{ trans('general.place_order') }}</button>
                </div>
            </form>
        </div>
    </section>
    <!-- /PAGE -->
@endsection