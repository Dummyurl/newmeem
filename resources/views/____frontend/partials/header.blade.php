<!-- Header-area start -->
<header>
    <div class="header-area">
        <!-- header-top start -->
        <div class="header-top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-4 col-sm-4">
                        @include('____frontend.partials._nav_left')
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4">
                        <div class="logo">
                            <a href="{{ route('frontend.home') }}"><img class="img-responsive" style="max-height: 100px;"
                                                               src="{{asset('storage/uploads/images/medium/'.$settings->logo)}}"
                                                               alt=""></a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4">
                        @include('____frontend.partials._nav_right')
                    </div>
                </div>
            </div>
        </div>
        <!-- header-top end -->
        <!-- header-bottom start -->
        @include('____frontend.partials._desktop_nav')
        <!-- header-bottom end -->
    </div>
    <!-- mobile-menu-area start -->
    @include('____frontend.partials._mobile_nav')
    </div>
    <!-- mobile-menu-area end -->
</header>
<!-- header area end -->
<!--[if lt IE 8]>
<p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a
        href="http://browsehappy.com/">upgrade
    your browser</a> to improve your experience.</p>
<![endif]-->
<input type="hidden" name="language" value="{{ app()->getLocale() }}" id="language">