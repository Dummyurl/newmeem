<div class="row">
    <div class="feature-product-4 {{ isset($carousel) && $carousel ? 'product-carousel' : null }} derection-key">
    {{--<div class="bestseller-product product-carousel derection-key">--}}
    <!-- single-product start -->
        @foreach($products as $product)
            <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                <!-- single-product end -->
                <div class="single-product">
                    <div class="product-details">
                        <div class="price-box">
                            @if($product->on_sale)
                                <span class="old-price">
                                    {{ $product->convertedPrice }} - {{ $currency->symbol }}
                                </span>
                                <span class="new-price">{{ $product->convertedSalePrice }}
                                    - {{ $currency->symbol }}</span>
                            @else
                                <span class="new-price">{{ $product->convertedPrice }} - {{ $currency->symbol }}
                                </span>
                            @endif
                        </div>
                    </div>
                    <div class="product-img">
                        @if($product->on_sale)
                            <span class="sale-text on-sale" style="background-color: red !important;">{{ trans('general.sale') }}</span>
                        @else
                            <span class="sale-text new-sale">{{ trans('general.new') }}</span>
                        @endif
                        <a href="{{ route('frontend.product.show',$product->id) }}">
                            <img class="primary-img"
                                 src="{{ asset(env('THUMBNAIL').$product->image) }} "
                                 alt="{{ $product->name }}">
                            @if($product->gallery)
                                @if($product->gallery->cover)
                                    <img class="secondary-img"
                                         src="{{ asset(env('THUMBNAIL').$product->gallery->cover) }} "
                                         alt="{{ $product->name }}">
                                @else
                                    <img class="secondary-img"
                                         src="{{ asset(env('THUMBNAIL').$product->gallery->images->sortBy('order')->first()->path) }} "
                                         alt="{{ $product->name }}">
                                @endif
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
    </div>
</div>
<!-- carousel-end -->
