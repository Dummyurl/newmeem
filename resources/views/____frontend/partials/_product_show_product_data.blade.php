<div class="col-lg-7 col-md-7 col-sm-6 col-xs-12 single-product-details">
    <div class="product-details shop-review">
        <div class="col-lg-12">
            <div class="col-lg-10">
                <div class="product-name">
                    <h3>{{$product->name}}</h3>
                </div>
            </div>
            <div class="col-lg-2">
                <div class="sin-product-icons fix">
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

                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="product-name">
            <h3 style="font-size: 15px;">{{ trans('general.sku') }} : ({{$product->sku}})</h3>
        </div>
        @include('____frontend.partials._social_btns')
        @include('____frontend.partials._product_show_price')
        <hr>
        @if($product->totalQty > 0)
            <p class="availability in-stock">{{ trans('general.availability') }}:
                <span>In stock</span></p>
            </br>
            <div class="product-review">
                <p>{!! $product->description !!}</p>
            </div>
            <hr>
            @include('____frontend.partials._product_show_sizes_colors')
        @else
            <p class="availability in-stock">{{ trans('general.availability') }} : <span
                        style="color: #ff0000;">{{ trans('general.out_of_stock') }}</span>
            </p>
        @endif
    </div>
</div>