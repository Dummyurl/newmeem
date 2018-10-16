<!-- header right4 start -->
<div class="header-right header-right4">

    <div class="header-right-link">

        @auth
            <div class="top-menu wishlist">
                <nav>
                    <ul>
                        <li>
                            <a href="#">
                                {{--<img src="{{asset('meem/frontend/img/icons/ac-links.png')}}" alt="">--}}
                                {{ trans('general.welcome') }}, {{  auth()->user()->firstname }}
                            </a>
                            <ul style="left: 0px;" id="profile-list">
                                @if(Auth::id() == 1)
                                    <li><a href="{{ url('/backend') }}">{{ trans('general.dashboard') }}</a></li>
                                @endif
                                {{--<li>--}}
                                    {{--<a href="{{ route('frontend.user.show', auth()->user()->id) }}">{{ trans('general.my_account') }}</a>--}}
                                {{--</li>--}}
                                <li>
                                    <a href="{{ route('frontend.favorite.index') }}">{{ trans('general.my_wishlist') }}</a>
                                </li>
                                <li>
                                    <a href="{{ route('frontend.cart.index') }}">{{ trans('general.shopping_cart') }}</a>
                                </li>
                                <li style="display: block;">
                                    <a href="{{ url('/logout') }}"
                                       onclick="event.preventDefault();
                                                 document.getElementById('logout-form').submit();">
                                        {{ trans('general.logout') }}
                                    </a>
                                    <form id="logout-form" action="{{ url('/logout') }}" method="POST"
                                          style="display: none;">
                                        @csrf
                                    </form>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        @else
            <a href="{{URL('login')}}" class="golden-link">{{ trans('general.login') }}</a>
        @endif
    </div>

    <div class="header-right-link">
        <Form method="get" action="{{ route('frontend.product.search') }}">
            <div class="search-option" style="left: 0px;bottom: -27px;">
                <input type="text" name="search" placeholder="{{ trans('general.search') }}"
                       style="margin-bottom: 0px;height: 30px;border: none;">
                <button class="button" type="submit"><i class="fa fa-search"></i></button>
            </div>
            <a class="search-img" href="#"><img src="{{asset('img/icons/seach.png')}}" alt=""></a>
        </Form>
    </div>
    <div class="header-right-link">
        <div class="cart-item">
            <div class="cart-item-title">
                <a href="{{ route('frontend.cart.index') }}"><img src="{{asset('img/icons/card.png')}}" alt="">
                    <span class="total-cart">{{ $cartCount }}</span>
                </a>
                {{--@if(!$cart->isEmpty())--}}
                    {{--<div class="cart-content">--}}
                        {{--<div style="display: none;">{{$cart->count()}}</div>--}}
                        {{--@foreach($cart as $key => $item)--}}
                                {{--<div class="product-items-cart">--}}
                                    {{--<div class="cart-img">--}}
                                        {{--<a href="{{ route('frontend.product.show',$item['product_id']) }}">--}}
                                            {{--<img width="50" height="60"--}}
                                                 {{--src="{{ asset(env('THUMBNAIL').$item['color_id'])}}" alt=""/>--}}
                                        {{--</a>--}}
                                    {{--</div>--}}
                                    {{--<div class="cart-text-2">--}}
                                        {{--<a class="btn-remove" title="Remove This Item"--}}
                                           {{--href="{{ route('frontend.cart.remove',$key) }}"><i--}}
                                                    {{--class="fa fa-times"></i></a>--}}
                                        {{--<p class="product-name"><a--}}
                                                    {{--href="{{ route('frontend.product.show',$item['product_id']) }}">{{ $item['name'] }}</a>--}}
                                        {{--</p>--}}
                                        {{--<p><strong>{{ $item['qty'] }}</strong> x<span class="price">{{ $item['price'] }}--}}
                                                {{--KD</span></p>--}}
                                    {{--</div>--}}
                                {{--</div>--}}
                                {{--<div style="display: none;">{{$itemCount++}}</div>--}}
                        {{--@endforeach--}}

                        {{--<div class="cart-btn-3">--}}
                            {{--<a class="button" href="{{ route('frontend.cart.show') }}"--}}
                               {{--style="margin-left: 10%;">{{trans('general.view_all_items')}}</a>--}}
                        {{--</div>--}}
                    {{--</div>--}}
                {{--@endif--}}
            </div>
        </div>
        <!-- cart item end -->
    </div>
</div>
<!-- header right4 end -->