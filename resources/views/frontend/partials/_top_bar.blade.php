<!-- Header top bar -->
<div class="top-bar">
    <div class="container">
        <div class="top-bar-left">
            <ul class="list-inline">
                @guest
                    <li class="icon-user"><a href="{{ route('login') }}"><img src="assets/img/icon-1.png" alt=""/>
                            <span>Login</span></a></li>
                    <li class="icon-form"><a href="{{ route('register') }}"><img src="assets/img/icon-2.png" alt=""/>
                            <span>Not a Member? <span class="colored">{{ trans('general.register') }}</span></span></a>
                    </li>
                @endguest
                @auth
                    @if(auth()->user()->isAdmin)
                        <li class="dropdown currency">
                            <a href="#" class="dropdown-toggle"
                               data-toggle="dropdown">{{ trans('general.welcome') }} {{ auth()->user()->name }}<i
                                        class="fa fa-angle-down"></i></a>
                            <ul role="menu" class="dropdown-menu">
                                <li class="icon-form"><a href="{{ route('backend.home') }}">
                                        <i class="fa fa-fw fa-key"></i>
                                        {{ trans('general.dashboard') }}
                                    </a>
                                </li>
                                <li class="icon-form">
                                    <a href="{{ url('/logout') }}"
                                       onclick="event.preventDefault();
                                                 document.getElementById('logout-form').submit();">
                                        <i class="fa fa-fw fa-sign-out"></i>
                                        {{ trans('general.logout') }}
                                    </a>
                                    <form id="logout-form" action="{{ url('/logout') }}" method="POST"
                                          style="display: none;">
                                        @csrf
                                    </form>
                                </li>
                            </ul>
                        </li>
                    @endif
                @endauth
                <li><a href="mailto:{{ $settings->email }}"><i class="fa fa-envelope"></i>
                        <span>{{ $settings->email }}</span></a></li>
            </ul>
        </div>
        <div class="top-bar-right">
            <ul class="list-inline">
                <li class="hidden-xs">
                    <a href="{{ route('frontend.home') }}">{{ trans('general.home') }}</a></li>
                <li class="hidden-xs">
                    <a href="{{ route('frontend.cart.index') }}">{{ trans('general.shopping_cart') }}</a></li>
                <li class="hidden-xs">
                    <a href="{{ route('frontend.favorite.index') }}">{{ trans('general.my_wishlist') }}
                    </a>
                </li>
                {{--@foreach($pages->where('on_footer', true) as $page)--}}
                    {{--<li class="hidden-xs">--}}
                        {{--<a href="{{ $page->url }}">{{ $page->title }}--}}
                        {{--</a>--}}
                    {{--</li>--}}
                {{--@endforeach--}}
                @include('frontend.partials._currency_language')
            </ul>
        </div>
    </div>
</div>
<!-- /Header top bar -->