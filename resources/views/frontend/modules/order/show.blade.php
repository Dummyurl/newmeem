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
            <h3 class="block-title alt"><i class="fa fa-angle-down"></i>{{ trans('general.information') }}</h3>
                <div class="row">
                    <div class="col-md-6 col-xs-12">
                        <label for="name">{{ trans('general.full_name') }}</label>
                        <div class="form-group"><input  name="name" value="{{ auth()->user()->name }}"
                                                       class="form-control" type="text"
                                                        disabled
                                                       placeholder="{{ trans('general.full_name') }}">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <label for="email">{{ trans('general.email') }}</label>
                        <div class="form-group"><input  name="email" value="{{ auth()->user()->email }}"
                                                       class="form-control" type="text"
                                                        disabled
                                                       placeholder="{{ trans('general.email') }}">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <label for="phone">{{ trans('general.phone') }}</label>
                        <div class="form-group"><input name="phone" value="{{ auth()->user()->phone }}"
                                                       class="form-control" type="text"
                                                       disabled
                                                       placeholder="{{ trans('general.full_name') }}">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <label for="mobile">{{ trans('general.mobile') }}</label>
                        <div class="form-group"><input  name="mobile" value="{{ auth()->user()->mobile }}"
                                                       class="form-control" type="text"
                                                        disabled
                                                       placeholder="{{ trans('general.email') }}">
                        </div>
                    </div>
                    <div class="col-md-12">
                        <label for="address">{{ trans('general.full_address') }}</label>
                        <div class="form-group"><input  name="address" value="{{ auth()->user()->address }}"
                                                       class="form-control" type="text"
                                                        disabled
                                                       placeholder="{{ trans("general.full_address") }}"></div>
                    </div>
                    <div class="col-md-6">
                        <label for="area">{{ trans('general.area') }}</label>
                        <div class="form-group"><input name="area" value="{{ auth()->user()->area }}"
                                                       class="form-control" type="text"
                                                       placeholder="{{ trans('general.email') }}">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group selectpicker-wrapper">
                            <label for="country_id">{{ trans('general.country') }}</label>
                            <select
                                    name="country"
                                    disabled
                                    class="selectpicker input-price" data-live-search="true" data-width="100%"
                                    data-toggle="tooltip" title="Select">
                                @foreach($countriesWorld as $country)
                                    <option value="{{ $country }}" {{ auth()->user()->country === $country ? 'selected' : null }}>{{ $country }}</option>
                                @endforeach
                            </select>
                        </div>
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
                            @foreach($order->order_metas as $item)
                                <tr>
                                    <td class="image">
                                        <a class="media-link" href="#"><i class="fa fa-plus"></i>
                                            <img class="img-sm"
                                                 src="{{ asset(env('THUMBNAIL').$item->product->image) }}"
                                                 alt="{{ $item->name }}"/></a></td>
                                    <td class="quantity">{{ $item->product_attribute->color->name }}</td>
                                    <td class="quantity">{{ $item->product_attribute->size->name }}</td>
                                    <td class="quantity">{{ $item->product->name }}</td>
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
                                    <td ><b>{{ $order->price }}</b></td>
                                    <td>{{ trans('general.kwd') }}</td>
                                </tr>
                                @if($order->shipping_cost > 0)
                                    <tr>
                                        <td>{{ trans('general.shipment') }}:</td>
                                        <td>{{ $order->shipping_cost }}</td>
                                        <td>{{ trans('general.kwd') }}</td>
                                    </tr>
                                @endif
                                <tfoot>
                                <tr>
                                    <td>{{ trans('general.total') }}:</td>
                                    <td ><b>{{ $order->net_price }}</b></td>
                                    <td>{{ trans('general.kwd') }}</td>
                                </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="overflowed">
                    <form action="{{ route('myfatoorah.web.payment.create') }}" method="post">
                        @csrf
                        <input type="hidden" name="id" value="{{ $order->id }}">
                        <button type="submit" class="btn btn-theme btn-theme-dark">{{ trans('general.go_to_payment') }}</button>
                    </form>
                </div>
        </div>
    </section>
    <!-- /PAGE -->
@endsection