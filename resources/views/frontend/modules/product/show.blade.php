@extends('frontend.layouts.app')

@section('head')
    @parent
@section('title')
    <title>{{ $product->name_ar .' ' . $product->name_en .' '. $product->description_ar . '' . $product->description_en }}</title>
@endsection
<meta name="description" content="{!! $product->description_ar .' '. $product->description_en !!}">
<meta name="keywords" content="{{ $product->notes . config('app.name')  }}"/>
<!-- You can use Open Graph tags to customize link previews.
Learn more: https://developers.facebook.com/docs/sharing/webmasters -->
<meta property="og:url" content="{{ request()->fullUrl() }}"/>
<meta property="og:type" content="website"/>
<meta property="og:title" content="{{ $product->name }}"/>
<meta property="og:description" content="{!! strip_tags($product->description) !!}"/>
<meta property="og:image" content="{{asset(env('THUMBNAIL').$product->image)}}"/>
@endsection

@section('body')
    <!-- CONTENT AREA -->
    <div class="content-area">
        <section class="page-section">
            <div class="container">

                <div class="row product-single">

                    <div class="col-md-6">
                        <div class="badges">
                            @if($product->isOnSale)
                                <div class="hot">{{ trans('general.on_sale') }}</div>
                            @endif
                            @if($product->on_sale_on_home)
                                <div class="new">{{ trans('general.deal') }}</div>
                            @endif
                        </div>
                        <div class="owl-carousel img-carousel">
                            <div class="item">
                                <a class="btn btn-theme btn-theme-transparent btn-zoom"
                                   @desktop
                                   data-gal="prettyPhoto"
                                   href="{{ asset(env('LARGE').$product->image) }}"
                                   @enddesktop
                                ><i
                                            class="fa fa-plus"></i></a>
                                <a
                                        @desktop
                                        data-gal="prettyPhoto"
                                        href="{{ asset(env('LARGE').$product->image) }}"
                                        @enddesktop
                                >
                                    <img class="img-responsive" src="{{ asset(env('MEDIUM').$product->image) }}"
                                         alt=""{{ $product->name }}/>
                                </a>
                            </div>
                            @if($product->gallery->images->isNotEmpty())
                                @foreach($product->gallery->images as $img)
                                    <div class="item">
                                        <a class="btn btn-theme btn-theme-transparent btn-zoom"
                                           @desktop
                                           data-gal="prettyPhoto"
                                           href="{{ asset(env('LARGE').$img->path) }}"
                                           @enddesktop
                                        >
                                            <i class="fa fa-plus"></i>
                                        </a>
                                        <a
                                                @desktop
                                                data-gal="prettyPhoto"
                                                href="{{ asset(env('LARGE').$img->path) }}"
                                                @enddesktop
                                        >
                                            <img class="img-responsive" src="{{ asset(env('MEDIUM').$img->path) }}"
                                                 alt="{{ $img->caption }}"/>
                                        </a>
                                    </div>
                                @endforeach
                            @endif
                        </div>

                        @if($product->gallery->images->isNotEmpty())
                            <div class="row product-thumbnails">
                                <div class="col-xs-2 col-sm-2 col-md-3">

                                    <a
                                            @desktop
                                            data-gal="prettyPhoto"
                                            href="{{ asset(env('LARGE').$product->image) }}"
                                            @enddesktop
                                    >
                                        <img class="img-responsive" src="{{ asset(env('MEDIUM').$product->image) }}"
                                             alt=""{{ $product->name }}/>
                                    </a>
                                </div>
                                @foreach($product->gallery->images as $img)
                                    <div class="col-xs-2 col-sm-2 col-md-3">
                                        <a
                                                @desktop
                                                data-gal="prettyPhoto"
                                                href="{{ asset(env('LARGE').$img->path) }}"
                                                @enddesktop
                                        >
                                            <img class="img-responsive" src="{{ asset(env('MEDIUM').$img->path) }}"
                                                 alt=""{{ $img->path}}/>
                                        </a>
                                    </div>
                                @endforeach
                            </div>
                        @endif
                    </div>
                    <div class="col-md-6">
                        <div class="back-to-category">
                            <span class="link">
                                <i class="fa fa-angle-{{ app()->isLocale('ar') ? 'left' : 'right' }}"></i> {{ trans('general.back_to') }}
                                <a href="{{ route('home') }}">{{ trans('general.home') }}</a>
                            </span>
                            @if($products->isNotEmpty())
                                <div class="{{ app()->isLocale('ar') ? 'pull-left' : 'pull-right' }}">
                                    <a class="btn btn-theme btn-theme-transparent btn-previous"
                                       href="{{ route('frontend.product.show',$products->first()->id) }}"><i
                                                class="fa fa-angle-{{ app()->isLocale('ar') ? 'right' : 'left' }}"></i></a>
                                    <a class="btn btn-theme btn-theme-transparent btn-next"
                                       href="{{ route('frontend.product.show', $products->last()->id) }}"><i
                                                class="fa fa-angle-{{ app()->isLocale('ar') ? 'left' : 'right' }}"></i></a>
                                </div>
                            @endif
                        </div>
                        <h2 class="product-title">{{ $product->name }}</h2>
                        <table>
                            <tr>
                            @if($product->brands->isNotEmpty())
                                <tr>
                                    <td class="title">{{ trans("general.brands") }}:</td>
                                    <td>
                                        @foreach($product->brands as $brand)
                                            <a href="{{ route('frontend.product.search',['brand_id' => $brand->id]) }}">
                                                {{ $brand->slug }},
                                            </a>
                                        @endforeach
                                    </td>
                                </tr>
                            @endif
                                <td class="title">{{ trans('general.categories') }}:</td>
                                <td>
                                    @foreach($product->categories as $cat)
                                        <a href="{{ route('frontend.product.search',['category_id' => $cat->id]) }}">
                                            {{ $cat->name }},
                                        </a>
                                    @endforeach
                                </td>
                            </tr>
                            @if($product->sku)
                                <tr>
                                    <td class="title">{{ trans('general.sku') }}:</td>
                                    <td>{{ $product->sku }}</td>
                                </tr>
                            @endif
                            @if($product->tags->isNotEmpty())
                                <tr>
                                    <td class="title">{{ trans("general.tags") }}:</td>
                                    <td>
                                        @foreach($product->tags as $tag)
                                            <a href="{{ route('frontend.product.search',['tag_id' => $tag->id]) }}">
                                                {{ $tag->slug }},
                                            </a>
                                        @endforeach
                                    </td>
                                </tr>
                            @endif
                        </table>
                        <hr class="dropdown-divider"/>
                        <div class="product-availability">{{ trans('general.status') }}:
                            <strong>{{ $product->totalQty > 0 ? trans('general.in_stock')  : trans('general.out_of_stock') }}</strong> {{ $product->totalQty }} {{ trans('general.items') }}
                        </div>

                        <hr class="dropdown-divider"/>

                        <div class="product-text">
                            <h4>{{ trans('general.price') }}</h4>
                        </div>
                        <hr class="dropdown-divider"/>
                        <table>
                            <tr>
                                <td>
                                    <div class="product-price">
                                        <span style="color : {{ $product->isOnSale ? 'red' : null }}">
                                        {{ $product->isOnSale ? $product->convertedSalePrice : $product->convertedPrice }} {{ $currency->symbol }}
                                        </span>
                                    </div>
                                </td>
                                <td>
                                    @if($product->isOnSale)
                                        <del>{{ $product->convertedPrice }}
                                            <span style="color : {{ $product->isOnSale ? $product->convertedSalePrice : $product->convertedPrice }} {{ $currency->symbol }}"><strong>{{ $currency->symbol }}</strong></span>
                                        </del>
                                    @endif
                                </td>
                            </tr>
                            @if($currency->symbol_en != 'kwd')
                                <tr>
                                    <td>
                                        <div class="product-price"><span
                                                    style="font-size: 14px; color : {{ $product->isOnSale ? 'red' : null }}">{{ $product->isOnSale ? $product->sale_price : $product->price }} {{ trans('general.kwd') }}</span>
                                        </div>
                                    </td>
                                    <td>
                                        @if($product->isOnSale)
                                            <del>{{ $product->price }}
                                                <span><strong>{{ trans('general.kwd') }}</strong></span>
                                            </del>
                                        @endif
                                    </td>
                                </tr>
                            @endif
                            <tr>
                                @if($currency->symbol_en != 'kwd')
                                    <div class="product-text pull-{{ app()->isLocale('ar') ? 'left' : 'right' }} hidden-xs" style="min-width: 130px; list-style: none">
                                            @include('frontend.partials._top_bar_currencies')
                                    </div>
                                @endif
                            </tr>
                        </table>
                        <hr class="dropdown-divider"/>

                        <div class="product-text">
                            @if($product->description)
                                <h4>{{ trans('general.description') }}</h4>
                                <p>{{ $product->description }}
                            @endif
                            @if($product->notes)
                                <h4>{{ trans('general.notes') }}</h4>
                                <p>{{ $product->notes }}
                            @endif
                        </div>
                        <hr class="dropdown-divider"/>


                        <form class="row variable" method="post" class="cart"
                              action="{{ route('frontend.cart.add') }}">
                            @csrf
                            <input type="hidden" name="product_id" value="{{ $product->id }}" id="product_id">
                            <div class="col-sm-6">
                                <div class="form-group selectpicker-wrapper">
                                    <label for="exampleSelect2">{{ trans('general.color') }}</label>
                                    <select
                                            id="color"
                                            name="color_id"
                                            class="selectpicker input-price" data-live-search="true"
                                            data-width="100%"
                                            data-toggle="tooltip" title="{{ trans('select_color') }}">
                                        <option value="">{{ trans('general.select_color') }}</option>
                                        @foreach($product->product_attributes->unique('color')->pluck('color') as $color)
                                            <option value="{{ $color->id }}">{{ $color->name }}</option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group selectpicker-wrapper">
                                    <label for="exampleSelect1">{{ trans('general.size') }}</label>
                                    <select
                                            name="size_id"
                                            id="size"
                                            class="col-sm-6 size-menu input-price" data-live-search="true"
                                            data-width="100%"
                                            data-toggle="tooltip" title="{{ trans('select_size') }}">
                                        <option value="">{{ trans('general.select_size') }}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="buttons">
                                    <div class="quantity">
                                        <a class="btn qty-decrease btn-qty"><i class="fa fa-minus"></i></a>
                                        <input class="form-control qty" type="text" name="qty"
                                               value="1"
                                               title="{{ trans('general.quantity') }}"
                                               id="qty">
                                        <a class="btn qty-increase btn-qty"><i class="fa fa-plus"></i></a>
                                    </div>
                                    <button class="btn btn-theme btn-cart btn-icon-left" type="submit"><i
                                                class="fa fa-shopping-cart"></i>{{ trans('general.add_to_cart') }}
                                    </button>
                                    @if($product->isFavorited)
                                        <a class="btn btn-theme btn-wish-list btn-outline-danger"
                                           href="{{ route("frontend.favorite.remove", $product->id) }}"><i
                                                    class="fa fa-fw fa-heart"></i></a>
                                    @else
                                        <a class="btn btn-theme btn-wish-list"
                                           href="{{ route("frontend.favorite.add", $product->id) }}"><i
                                                    class="fa fa-fw fa-heart"></i></a>
                                    @endif
                                    <a class="btn btn-theme btn-cart btn-icon-left" type="submit"
                                       href="#" data-toggle="modal"
                                       data-target="#imagemodal"></i>{{ trans('general.size_charts') }}
                                    </a>
                                </div>
                            </div>
                        </form>

                        <hr class="dropdown-divider small"/>
                        @include('frontend.partials._social_btns')

                    </div>
                </div>

            </div>
        </section>

        @include('frontend.partials._product_carousel_lg',['elements' => $products, 'title' => trans('general.related_products')])
    </div>
    {{--<div class="single-page-area shop-product-area">--}}
    {{--@include('frontend.partials._breadcrumbs',['name' => $product->name])--}}

    {{--<!-- Single Product details Area -->--}}
    {{--<div class="single-product-details-area">--}}
    {{--<div class="single-product-view-area">--}}
    {{--<div class="container">--}}
    {{--<div class="row">--}}
    {{--@include('frontend.partials._product_show_gallery')--}}
    {{--@include('frontend.partials._product_show_product_data')--}}
    {{--</div>--}}
    {{--</div>--}}
    {{--</div>--}}
    {{--</div>--}}

    {{--<!--product-Description-area start-->--}}
    {{--@include('frontend.modules.product.partials.productDescription')--}}

    {{--<!--related-products-area start-->--}}
    {{--@if(!$products->isEmpty())--}}
    {{--@include('frontend.modules.product.partials.product_carousel',[$products ,'heading'=> trans('general.related_products'),'backgroundColor'=>'#e7e7e7', 'cols' => 'col-lg-3 col-md-3 col-sm-3'])--}}
    {{--@endif--}}
    {{--</div>--}}
    {{--</div>--}}
    <!-- Single Product Area end -->
    <!-- Creates the bootstrap modal where the image will appear -->
    {{-- moved to modal blade quick view--}}
    @if(!is_null($product->size_chart_image) || $settings->size_chart)
        <div class="modal fade" id="imagemodal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
             aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"
                                style="padding-left: 15px; padding-right: 15px;"><span
                                    aria-hidden="true">&times;</span><span
                                    class="sr-only"> {{ trans('general.close') }}</span></button>
                        <h4 class="modal-title" id="myModalLabel">{{ trans('general.size_charts') }}</h4>
                    </div>
                    <div class="modal-body" style="text-align: center;">
                        <img src="{{ !is_null($product->size_chart_image) ? asset(env('LARGE').$product->size_chart_image) : asset(env('LARGE').$settings->size_chart) }}"
                             id="imagepreview"
                             style="width: 400px; height: 264px;">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default"
                                data-dismiss="modal">{{ trans('general.close') }}</button>
                    </div>
                </div>
            </div>
        </div>
    @endif
    <!-- END quickview product -->
@endsection

@section('scripts')
    @parent
    <script async src="https://static.addtoany.com/menu/page.js"></script>
@endsection
