<!--footer-area start -->
<footer>
    <div class="footer-area footer-2-area">
        <!--footer-top-area start -->
        <div class="footer-top-area">
            <div class="container">
                <div class="footer-top foote-2-top">
                    <div class="row">
                        <div class="col-lg-3 col-md-3col-sm-6 col-xs-12">
                            <!-- single-footer-service start -->
                            <div class="single-footer-service footer-2-service" style="min-height: 95px;">
                                <div class="footer-service-icon">
                                    {{--<img class="box-icon" src="{{asset('meem/frontend/img/icons/ft-img_2.png')}}" alt="">--}}
                                    <i class="fa fa-truck fa-fw fa-3x" aria-hidden="true"
                                       style="color : white; opacity: 0.4"></i>
                                </div>
                                <div class="footer-service-text">
                                    <h2>{{ trans('general.free_shipping_in_kuwait') }}</h2>
                                    <p> {{ trans('general.send_within_24_hours') }}</p>
                                </div>
                            </div>
                            <!-- single-footer-service end -->
                        </div>
                        <div class="col-lg-3 col-md-3col-sm-6 col-xs-12">
                            <!-- single-footer-service start -->
                            <div class="single-footer-service footer-2-service" style="min-height: 95px;">
                                <div class="footer-service-icon">
                                    <img class="box-icon" src="{{asset('img/icons/ft-img_2.png')}}"
                                         alt="">
                                </div>
                                <div class="footer-service-text">
                                    <h2>{{ trans('general.shipping_to_gulf_countries') }}</h2>
                                    <p>{{ trans('general.send_within_3_4_days') }}</p>
                                </div>
                            </div>
                            <!-- single-footer-service end -->
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                            <!-- single-footer-service start -->
                            <div class="single-footer-service footer-2-service" style="min-height: 95px;">
                                <div class="footer-service-icon">
                                    <img class="box-icon" src="{{asset('img/icons/ft-img_3.png')}}"
                                         alt="">
                                </div>
                                <div class="footer-service-text">
                                    <h2>{{ trans('general.customer_support') }}</h2>
                                    <p>{{ $settings->email }}</p>
                                </div>
                            </div>
                            <!-- single-footer-service end -->
                        </div>
                        <div class="col-lg-3 col-md-3 hidden-sm col-xs-12">
                            <!-- single-footer-service start -->
                            <div class="single-footer-service footer-2-service" style="min-height: 95px;">
                                <div class="footer-service-icon">
                                    <img class="box-icon" src="{{asset('img/icons/ft-img_4.png')}}"
                                         alt="">
                                </div>
                                <div class="footer-service-text">
                                    <h2>{{ trans('general.money_back_after_return') }}</h2>
                                    <p>{{ trans('general.send_within_2_weeks') }}</p>
                                </div>
                            </div>
                            <!-- single-footer-service end -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--footer-top-area end -->
        <!--footer-middle-area start -->
        <div class="footer-middle-area ">
            <div class="container">
                <div class="footer-middle">
                    <div class="row">
                        <div class="col-lg-3 col-md-3 col-sm-5 col-xs-12">
                            <!-- middle-footer-text start-->
                            <div class="middle-footer-text middle-footer-text4">
                                <div class="footer-logo">
                                    <a href="#"><img src="{{asset('storage/uploads/images/medium/'.$settings->logo)}}"
                                                     alt=""></a>
                                </div>
                                <div class="middle-text">
                                    <p>{{ trans('general.online_shopping_in_gulf') }}</p>
                                    <ul class="footer-icon">
                                        <li><a href="https://www.instagram.com/{{ $settings->instagram }}/"
                                               target="_blank"><i
                                                        class="fa fa-instagram"></i></a></li>
                                        <li><a href="https://www.twitter.com/{{ $settings->twitter }}/" target="_blank"><i
                                                        class="fa fa-twitter"></i></a></li>
                                        <li><a href="https://www.facebook.com/{{ $settings->facebook }}/"
                                               target="_blank"><i
                                                        class="fa fa-facebook"></i></a></li>
                                        <li><a href="{{ $settings->youtube }}" target="_blank"><i
                                                        class="fa fa-youtube"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <!-- middle-footer-text end-->
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-5 col-xs-12">
                            <!-- middle-footer-text start-->
                            <div class="middle-footer-text middle-footer-text2">
                                <h3>{{ trans('general.contactus') }}</h3>
                                <div class="footer-address">
                                    <ul>
                                        @if(!is_null($settings->address))
                                            <li><i class="fa fa-map-marker"> </i>{{ trans('general.address') }}
                                                : {{$settings->address}}</li>
                                        @endif
                                        @if(!is_null($settings->email))
                                            <li><i class="fa fa-envelope-o"> </i>
                                                {{$settings->email}}</li>
                                        @endif
                                        @if(!is_null($settings->mobile))
                                            <li><i class="fa fa-mobile-phone"> </i>
                                                {{$settings->mobile}}</li>
                                        @endif
                                        @if(!is_null($settings->whatsapp))
                                            <li><i class="fa fa-whatsapp"> </i>
                                                {{$settings->whatsapp}}</li>
                                        @endif

                                    </ul>
                                </div>
                            </div>
                            <!-- middle-footer-text end-->
                        </div>
                        {{--<div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">--}}
                        {{--<!-- middle-footer-text start-->--}}
                        {{--<div class="middle-footer-text middle-footer-text2">--}}
                        {{--<h3>{{ trans('general.information') }}</h3>--}}
                        {{--<div class="footer-menu">--}}
                        {{--<ul>--}}
                        {{--@foreach($pages as $page)--}}
                        {{--<li>--}}
                        {{--<a href="{{ $page->url }}">{{ $page->slug }}</a>--}}
                        {{--</li>--}}
                        {{--@endforeach--}}
                        {{--</ul>--}}
                        {{--</div>--}}
                        {{--</div>--}}
                        {{--<!-- middle-footer-text end-->--}}
                        {{--</div>--}}
                        <div class="col-lg-4 col-md-4 hidden-sm col-xs-12">
                            <!-- middle-footer-text start-->
                            <div class="middle-footer-text middle-footer-text2">
                                <h3>{{ trans('general.pages') }}</h3>
                                <div class="footer-menu">
                                    <ul>
                                        @foreach($pages->where('on_footer', true) as $page)
                                            <li>
                                                <a href="{{ $page->url }}">{{ $page->slug }}</a>
                                            </li>
                                        @endforeach
                                    </ul>
                                </div>
                            </div>
                            <!-- middle-footer-text end-->
                        </div>
                        <div class="col-lg-2 col-md-2 hidden-sm col-xs-12">
                            <!-- middle-footer-text start-->
                            <div class="middle-footer-text middle-footer-text2">
{{--                                <h3>{{ strtoupper(trans('general.my_account')) }}</h3>--}}
                                <div class="footer-menu">
                                    <ul>
                                        {{--@auth--}}
                                            {{--<li>--}}
                                                {{--<a href="{{ route('frontend.user.show', auth()->user()->id) }}">{{ trans('general.my_account') }}</a>--}}
                                            {{--</li>--}}
                                        {{--@endauth--}}
                                        <li>
                                            <a href="{{ route('frontend.order.index') }}">{{ trans('general.order_history') }}</a>
                                        </li>
                                        <li>
                                            <a href="{{route('frontend.favorite.index')}}">{{ trans('general.wlist') }}</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <!-- middle-footer-text end-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--footer-middle-area end -->
        <!--footer-bottom-area start -->
        <div class="footer-bottom-area footer-bottom2-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div class="footer-copyright" style="color : white;">
                            <address>{{ trans('general.all_rights_reserved') }}
                                &nbsp; {{ trans('general.designed_by') }} &nbsp;
                                <a href="http://ideasowners.net/">IdeasOwners</a> &nbsp;
                            </address>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div class="payment-history">
                            <ul>
                                @if($currency->symbol === 'KWD')
                                    <li>
                                        <a href="#">
                                            <img class="img-sm" src="{{asset('img/k-net-icon.png')}}" alt="knet">
                                        </a>
                                        <a href="#"><img class="img-sm-visa" src="{{asset('img/payment.png')}}"
                                                         alt="payment">
                                        </a>
                                        <a href="#"><img class="img-sm" src="{{asset('img/cash-icon.png')}}" alt="cash"></a>
                                    </li>
                                @else
                                    <li><a href="#"><img class="img-sm"
                                                         src="{{asset('img/payment.png')}}" alt="payment"></a>
                                    </li>
                                @endif
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--footer-bottom-area end -->
    </div>
</footer>
<!--footer-area end -->