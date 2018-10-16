<div class="product-tab-area">
    <!-- Tab Bar -->
@include('____frontend.modules.category.partials._top_toolbar')
<!-- End Tab Bar -->
    <!-- Tab Content -->
    <div class="clearfix"></div>
    <div class="tab-content">
        <div id="shop-grid" class="tab-pane active" role="tabpanel">
            <div class="row">
                <!-- single-product start -->
                @foreach($products as $product)
                    <div class="{{ isset($cols)  ? $cols : 'col-lg-4 col-md-4 col-sm-4' }} col-xs-12"
                         style="height: 550px !important; max-height: 550px !important; margin-bottom: 21px;padding-top: 40px;">
                        <!-- single-product end -->
                        <div class="single-product">
                            <div class="product-details">
                                <div class="price-box">
                                    @if($product->on_sale)
                                        <span class="old-price">
                                    {{ $product->convertedPrice }} - {{ $currency->symbol }}
                                </span>
                                        <span class="new-price">
                                            {{ $product->convertedSalePrice }} - {{ $currency->symbol }}
                                </span>
                                    @else
                                        <span class="new-price">{{ $product->convertedPrice }} - {{ $currency->symbol }}
                                </span>
                                    @endif
                                </div>
                            </div>
                            <div class="product-img">
                                @if($product->on_sale)
                                    <span class="sale-text">{{ trans('general.sale') }}</span>
                                @elseif($product->created_at)
                                    <span class="sale-text new-sale">{{ trans('general.new') }}</span>
                                @endif
                                <a href="{{ route('frontend.product.show',$product->id) }}">
                                    <img class="primary-img"
                                         src="{{ asset(env('MEDIUM').$product->image) }}"
                                         alt="{{ $product->description }}">

                                    @if(!$product->gallery->images->isEmpty())
                                        <img class="secondary-img"
                                             src="{{ asset(env('MEDIUM').$product->gallery->images->sortBy('order')->first()->path) }}"
                                             alt="{{ $product->caption }}">
                                    @endif
                                </a>
                                <div class="add-action">
                                    <ul>
                                        <li>
                                            @auth
                                                @if($product->isFavorited)
                                                    <a href="{{ route('frontend.favorite.remove',$product->id) }}"
                                                       data-toggle="tooltip"
                                                       title="{{ trans('general.remove_from_favorite') }}">
                                                        <i class="fa fa-heart" style="color: red"></i>
                                                    </a>
                                                @else
                                                    <a href="{{ route('frontend.favorite.add',$product->id) }}"
                                                       data-toggle="tooltip"
                                                       title="{{ trans('general.add_to_favorite') }}">
                                                        <i class="fa fa-heart-o"></i>
                                                    </a>
                                                @endif
                                            @else
                                                <a href="{{ route('login') }}"
                                                   data-toggle="tooltip"
                                                   title="{{ trans('general.add_to_favorite') }}">
                                                    <i class="fa fa-heart-o"></i>
                                                </a>
                                            @endauth
                                        </li>
                                        <li class="quickview" data-toggle="tooltip" title="Quick view">
                                            <a href="#" title="Quick view"
                                               data-toggle="modal"
                                               data-target="#productModal"
                                               data-name="{{ $product->name }}"
                                               data-saleprice="{{ $product->convertedFinalPrice  }} KD"
                                               data-price="{{ $product->price }} KD"
                                               data-link="{{ route('frontend.product.show',$product->id) }}"
                                               data-image="{{ asset(env('MEDIUM').$product->image) }}"
                                               data-description="{{ $product->description }}">

                                                <i class="fa fa-eye"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="product-details">
                                <div class="product-name">
                                    <h3>
                                        <a href="{{ route('frontend.product.show',$product->id) }}">{{  str_limit($product->name, 20) }}</a>
                                    </h3>
                                </div>
                            </div>
                            <div class="add-to-cart" style="padding-top: 15px;">
                                <a href="{{ route('frontend.product.show',$product->id)  }}">{{ ucfirst(trans('general.view_product_details')) }}</a>
                            </div>
                        </div>
                    </div>
            @endforeach
            <!-- single-product end -->
            </div>
        </div>
        {{--<div id="shop-list" class="tab-pane shop-list" role="tabpanel">--}}
            {{--<div class="row">--}}
                {{--<!-- single blog start -->--}}
                {{--@foreach($products as $product)--}}
                    {{--<div class="single-product">--}}
                        {{--<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">--}}
                            {{--<div class="product-img">--}}
                                {{--@if($product->on_sale)--}}
                                    {{--<span class="sale-text">{{ trans('general.sale') }}</span>--}}
                                {{--@elseif($product->created_at)--}}
                                    {{--<span class="sale-text new-sale">{{ trans('general.new') }}</span>--}}
                                {{--@endif--}}
                                {{--<a href="#">--}}
                                    {{--<img class="primary-img"--}}
                                         {{--src="{{ asset(env('MEDIUM').$product->image) }} "--}}
                                         {{--alt="{{ $product->description }}">--}}

                                    {{--@if(isset($product->gallery->images->first()->path))--}}
                                        {{--@if(file_exists(env('MEDIUM').$product->gallery->images->first()->path)))--}}
                                        {{--<img class="secondary-img"--}}
                                             {{--src="{{ asset(env('MEDIUM').$product->gallery->images->first()->path) }} "--}}
                                             {{--alt="{{ $product->caption }}">--}}
                                        {{--@else--}}
                                            {{--<img class="secondary-img"--}}
                                                 {{--src="{{ asset(env("MEDIUM").$product->image) }} "--}}
                                                 {{--alt="{{ $product->caption }}">--}}
                                        {{--@endif--}}
                                    {{--@endif--}}
                                {{--</a>--}}
                                {{--<div class="add-action">--}}
                                    {{--<ul>--}}
                                        {{--<li>--}}
                                            {{--@if($product->liked())--}}
                                            {{--<a href="{{ route('wishlist.remove',$product->id) }}"--}}
                                            {{--data-toggle="tooltip"--}}
                                            {{--title="Remove from Wishlist">--}}
                                            {{--<i class="fa fa-heart" style="color: red"></i>--}}
                                            {{--</a>--}}
                                            {{--@else--}}
                                            {{--<a href="{{ route('wishlist.add',$product->id) }}" data-toggle="tooltip"--}}
                                            {{--title="Add to Wishlist">--}}
                                            {{--<i class="fa fa-heart-o"></i>--}}
                                            {{--</a>--}}
                                            {{--@endif--}}
                                        {{--</li>--}}
                                        {{--<li class="quickview" data-toggle="tooltip" title="Quick view">--}}
                                            {{--<a href="#" title="Quick view"--}}
                                               {{--data-toggle="modal"--}}
                                               {{--data-target="#productModal"--}}
                                               {{--data-name="{{ $product->name }}"--}}
                                               {{--data-saleprice="{{ $product->finalPrice  }} KD"--}}
                                               {{--data-price="{{ $product->price }} KD"--}}
                                               {{--data-link="{{ route('frontend.product.show',$product->id) }}"--}}
                                               {{--data-image="{{ asset(env('MEDIUM').$product->image) }}"--}}
                                               {{--data-description="{!! $product->description !!}"--}}
                                            {{-->--}}
                                                {{--<i class="fa fa-eye"></i>--}}
                                            {{--</a>--}}
                                        {{--</li>--}}
                                    {{--</ul>--}}
                                {{--</div>--}}
                            {{--</div>--}}
                        {{--</div>--}}
                        {{--<div class="col-lg-8 col-md-8 col-sm-12 col-xs-12 ">--}}
                            {{--<div class="product-details shop-review">--}}
                                {{--<div class="product-name">--}}
                                    {{--<h3><a href="#">{{ $product->name }}</a></h3>--}}
                                {{--</div>--}}
                                {{--<div class="price-box">--}}
                                    {{--@if($product->on_sale)--}}
                                        {{--<span class="old-price">--}}
                                    {{--{{ $product->convertedPrice }} - {{ $currency->symbol }}--}}
                                {{--</span>--}}
                                        {{--<span class="new-price">{{ $product->convertedSalePrice }}--}}
                                            {{--{{ $product->symbol }}--}}
                                {{--</span>--}}
                                    {{--@else--}}
                                        {{--<span class="new-price">{{ $product->convertedPrice }} - {{ $currency->symbol }}--}}
                                {{--</span>--}}
                                    {{--@endif--}}
                                {{--</div>--}}
                                {{--<div class="product-reveiw">--}}
                                    {{--<p>{!! $product->description !!}</p>--}}
                                {{--</div>--}}
                                {{--<div class="add-to-cart" style="padding-top: 15px;">--}}
                                    {{--<a href="{{ route('frontend.product.show',$product->id)  }}">{{ ucfirst(trans('general.view_product_details')) }}</a>--}}
                                {{--</div>--}}
                            {{--</div>--}}
                        {{--</div>--}}
                    {{--</div>--}}
                    {{--<!-- single blog end -->--}}
                {{--@endforeach--}}
            {{--</div>--}}
        {{--</div>--}}
    </div>
    <!-- bottom toolbar start-->
@include('____frontend.modules.category.partials._bottom_toolbar')
<!-- End Tab Bar -->
</div>
@include('____frontend.modules.product.partials.quick-view')