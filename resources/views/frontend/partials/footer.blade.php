<!-- FOOTER -->
<footer class="footer">
    <div class="footer-widgets">
        <div class="container">
            <div class="row">

                <div class="col-md-3">
                    <div class="widget">
                        <h4 class="widget-title">{{ trans('general.aboutus') }}</h4>
                        <p>{{ trans('message.aboutus_message') }}</p>
                        <ul class="social-icons">
                            @if($settings->facebook)
                                <li><a href="{{ $settings->facebook }}" class="facebook"><i class="fa fa-facebook"></i></a>
                                </li>
                            @endif
                            @if($settings->twitter)
                                <li><a href="{{ $settings->twitter }}" class="twitter"><i class="fa fa-twitter"></i></a>
                                </li>
                            @endif
                            @if($settings->youtube)
                                <li><a href="{{ $settings->youtube }}" class="twitter"><i
                                                class="fa fa-fw fa-youtube"></i></a></li>
                            @endif
                            @if($settings->whatsapp)
                                <li><a href="https://api.whatsapp.com/send?phone={{ $settings->whatsapp  }}"
                                       class="instagram">
                                        <img
                                                class="img-grey"
                                                src="{{ asset('images/whatsapp.png') }}"
                                                style="width: 15px; color : black;">
                                    </a></li>
                            @endif
                            @if($settings->snapchat)
                                <li><a href="{{ $settings->snapchat }}" class="snapchat">
                                        <img class="img-grey" src="{{ asset('images/snap.png') }}"
                                                style="width: 15px; color : black;"></a></li>
                            @endif
                        </ul>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="widget widget-categories">
                        <h4 class="widget-title">{{ trans('general.information') }}</h4>
                        <ul>
                            @if($settings->phone)
                                <li><i class="fa fa-phone"></i> &nbsp; {{ $settings->phone }}</li>
                            @endif
                            @if($settings->email)
                                <li><i class="fa fa-inbox"></i> &nbsp; {{ $settings->email }}</li>
                            @endif
                            @if($settings->mobile)
                                <li><i class="fa fa-mobile-phone"></i> &nbsp; {{ $settings->mobile }}</li>
                            @endif
                            @if($settings->whatsapp)
                                <li><i class="fa fa-whatsapp"></i> &nbsp; {{ $settings->whatsapp }}</li>
                            @endif
                                @if($settings->address)
                                <li><i class="fa fa-address-book"></i> &nbsp; {{ $settings->address }}</li>
                            @endif
                        </ul>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="widget widget-categories">
                        <h4 class="widget-title">{{ trans('general.pages') }}</h4>
                        <ul>
                            @foreach($pages->where('on_footer', true) as $page)
                                <li><a href="{{ $page->url }}">{{ $page->slug }}</a></li>
                            @endforeach
                        </ul>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="widget widget-tag-cloud">
                        <h4 class="widget-title">{{ $settings->company }}</h4>
                        <img src="{{ asset(env('THUMBNAIL').$settings->logo) }}" class="img-sm center-block"
                             alt="{{ $settings->company_ar .''. $settings->company_en}}">
                    </div>
                </div>

            </div>
        </div>
    </div>
    <div class="footer-meta">
        <div class="container">
            <div class="row">

                <div class="col-sm-6">
                    <div class="copyright">{{ trans("mesage.copy_right") }}</div>
                </div>
                <div class="col-sm-6">
                    <div class="payments">
                        <ul>
                            @if($currency->currency_symbol_en === 'KWD')
                                <li><img class="img-grey" src="{{ asset('img/k-net-icon.png') }}" alt="knet"/></li>
                            @endif
                            <li><img src="{{ asset('img/preview/payments/visa.jpg') }}" alt="{{ $settings->company }}"/></li>
                            <li><img src="{{ asset('assets/img/preview/payments/mastercard.jpg') }}" alt="{{ $settings->company }}"/></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </div>
</footer>
<div id="to-top" class="to-top"><i class="fa fa-angle-up"></i></div>
<!-- /FOOTER -->