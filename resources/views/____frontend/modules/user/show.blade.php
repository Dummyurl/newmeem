@extends('____frontend.layouts.app')
@section('body')

    <!-- About page body start -->
    <div class="contact-page-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="shop-head furniture-head">
                        <ul class="shop-head-menu ">
                            <li><i class="fa fa-home"></i><a class="home" href="#"><span>Home</span></a></li>
                            <li><i class="fa fa-user"></i>{{$element->name}}</li>
                        </ul>
                    </div>

                    <!--about-body-area start-->
                    <div class="row">
                        <!-- About info -->
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="contact-info">
                                <h1>{{ trans('general.order_history') }}</h1>
                                <table class="table table-bordered text-center"
                                       style="font-weight: bolder; font-size: medium; text-align: justify">
                                    <thead>
                                    <tr class="c-head">
                                        <th>{{ trans('general.id') }}</th>
                                        <th>{{ trans('general.status') }}</th>
                                        <th>{{ trans('general.shipping_cost') }}</th>
                                        <th>{{ trans('general.price') }}</th>
                                        <th>{{ trans('general.discount') }}</th>
                                        <th>{{ trans('general.net_price') }}</th>
                                        <th>{{ trans('general.more_information') }}</th>
                                    </tr>
                                    </thead>
                                    <tr>
                                        @foreach($element->orders as $order)
                                            <td>{{ $order->id }}</td>
                                            <td>{{ $order->status }}</td>
                                            <td>{{ $order->shipping_cost }}</td>
                                            <td>{{ $order->price }}</td>
                                            <td>{{ $order->discount }}</td>
                                            <td>{{ $order->net_price }}</td>
                                            <td>
                                                {{ trans('general.email') }} : {{ $order->email }} <br>
                                                {{ trans('general.mobile') }} : {{ $order->mobile }} <br>
                                                {{ trans('general.phone') }} : {{ $order->phone}} <br>
                                                {{ trans('general.address') }} : {{ $order->address}}
                                                / {{ $order->country }} <br>
                                                {{ trans('general.reference_id') }} : {{ $order->reference_id}} <br>
                                                {{ trans('general.payment_method') }} : {{ $order->payment_method }}
                                                <br>
                                                {{ trans('general.delivery_branch_location') }}
                                                : {{ $order->branch ? $order->branch->name .'-'. $order->branch->address : ''}}
                                            </td>
                                        @endforeach
                                    </tr>
                                </table>
                            </div>
                        </div><!-- End About info -->

                    </div>
                    <!--about-body-area end-->
                </div>
            </div>
        </div>
    </div>
    <!-- About page body end -->
@endsection
