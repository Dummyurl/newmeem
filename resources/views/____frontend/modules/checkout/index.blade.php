@extends('____frontend.layouts.app')

@section('body')
    <!-- Checkout area -->
    <div class="checkout-area">
        <div class="container">
            <div class="row">
                <form method="POST" action="{{ route('frontend.order.store') }}">
                    @csrf
                    <div class="col-lg-12 col-sm-12">
                        <!-- Payment Method -->
                        <div class="payment-method">
                            <!-- Panel Gropup -->
                            <div class="panel-group" id="accordion_one">
                                <!-- Panel Default -->
                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        <h4 class="check-title">
                                            <a data-toggle="collapse" data-parent="#accordion" href="#checkut1">
                                                <span class="number">1</span>{{ trans('general.login') }}</a>
                                        </h4>
                                    </div>
                                    <div id="checkut1" class="panel-collapse collapse">
                                        <div class="panel-body">
                                            @include('____frontend.modules.checkout._guest_register')
                                        </div>
                                    </div>
                                </div><!-- End Panel Default -->
                                <!-- Panel Default -->
                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        <h4 class="check-title">
                                            <a data-toggle="collapse" data-parent="#accordion" href="#checkut2">
                                                <span class="number">2</span>{{ trans('general.billing_information') }}
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="checkut2" class="panel-collapse collapse in show">
                                        <div class="panel-body">
                                            @include('____frontend.modules.checkout._billing_info')
                                        </div>
                                    </div>
                                </div><!-- End Panel Default -->
                                <!-- Panel Default -->
                            {{--<div class="panel panel-default">--}}
                            {{--<div class="panel-heading">--}}
                            {{--<h4 class="check-title">--}}
                            {{--<a data-toggle="collapse" data-parent="#accordion" href="#checkut4">--}}
                            {{--<span class="number">3</span>{{ trans('general.shipping_method') }}</a>--}}
                            {{--</h4>--}}
                            {{--</div>--}}
                            {{--<div id="checkut4" class="panel-collapse collapse in">--}}
                            {{--<div class="panel-body">--}}
                            {{--@include('frontend.modules.checkout._shipment_method')--}}
                            {{--</div>--}}
                            {{--</div>--}}
                            {{--</div><!-- End Panel Default -->--}}
                            <!-- Panel Default -->
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h4 class="check-title">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#checkut3">
                                        <span class="number">3</span>{{ trans('general.payment_information') }}</a>
                                </h4>
                            </div>
                            <div id="checkut3" class="panel-collapse collapse in show">
                                <div class="panel-body">
                                    @include('____frontend.modules.checkout._payment_info')
                                </div>
                            </div>
                        </div><!-- End Panel Default -->
                        <!-- Panel Default -->
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h4 class="check-title">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#checkut4">
                                        <span class="number">4</span>{{ trans('general.order_review') }}</a>
                                </h4>
                            </div>
                            <div id="checkut4" class="panel-collapse collapse in show">
                                <div class="panel-body">
                                    @include('____frontend.modules.checkout._order_review')
                                </div>
                            </div>
                        </div>
                        <!-- End Panel Default -->
                    </div>
                    <!-- End Panel Gropup -->
                </form>
            </div>
        </div>
    </div>
@endsection