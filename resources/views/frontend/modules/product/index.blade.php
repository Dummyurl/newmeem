@extends('frontend.layouts.app')
@section('title')
    @if($currentCategory)
        <title>{{ $currentCategory->name_ar . ' ' . $currentCategory->name_en . ' ' . $currentCategory->desription_ar .' ' . $currentCategory->description_en }}</title>
    @else
        <title>{{ trans('general.search') . config('app.name')}}</title>
    @endif
@endsection

@section('body')
    <!-- CONTENT AREA -->
    <div class="content-area">
        <!-- BREADCRUMBS -->
        <section class="page-section breadcrumbs">
            <div class="container">
                <div class="page-header">
                    <h1>{{ $currentCategory ? $currentCategory->name : trans('general.products_search_results') }}</h1>
                </div>
                @include('frontend.partials._breadcrumbs',['name' => request()->has('category_id')  && $categoriesList->where('id',request('category_id'))->first() ? $categoriesList->where('id',request('category_id'))->first()->name : trans('general.products_search_results')])
            </div>
        </section>
        <!-- /BREADCRUMBS -->

        <!-- PAGE WITH SIDEBAR -->
        <section class="page-section with-sidebar">
            <div class="container">
                <div class="row">
                    <!-- SIDEBAR -->
                    <aside class="col-md-3 sidebar" id="sidebar">
                        <!-- widget search -->
                    {{--<div class="widget">--}}
                    {{--<div class="widget-search">--}}
                    {{--<Form method="get" action="{{ route('frontend.product.search') }}">--}}
                    {{--@csrf--}}
                    {{--<input class="form-control" type="text" name="search"--}}
                    {{--placeholder="{{ trans('general.search') }}">--}}
                    {{--<button><i class="fa fa-search"></i></button>--}}
                    {{--</Form>--}}
                    {{--</div>--}}
                    {{--</div>--}}
                    <!-- /widget search -->
                        <div class="widget widget-colors">
                            <div class="widget-content">
                                <a class="btn btn-theme-sm"
                                   href="{{ route('frontend.product.search') }}">{{ trans('general.show_all_search_results') }}</a>
                            </div>
                        </div>
                        <!-- widget shop categories -->
                    @include('frontend.partials._product_index_categories')
                    <!-- /widget shop categories -->
                    @if(!$colors->isEmpty())
                        <!-- widget product color -->
                            <div class="widget widget-colors">
                                <h4 class="widget-title">{{ trans('general.colors') }}</h4>
                                <div class="widget-content">
                                    <ul>
                                        @foreach($colors as $color)
                                            <li style="border:{{ request()->has('color_id') && request('color_id') == $color->id ? '3px solid darkblue' : null}} ">
                                                <a href="{!! request()->fullUrlWithQuery(['color_id' => $color->id]) !!}"><span
                                                            style="background-color: {{ $color->code }}"></span></a>
                                            </li>
                                        @endforeach
                                    </ul>
                                </div>
                            </div>
                    @endif

                    <!-- widget sizes cloud -->
                        @if(!$sizes->isEmpty())
                            <div class="widget shop-categories">
                                <h4 class="widget-title">{{ trans('general.sizes') }}</h4>
                                <div class="widget-content">
                                    <ul>
                                        @foreach($sizes as $size)
                                            <li style="display:block; background-color:{{ request()->has('size_id') && request('size_id') == $size->id ? 'darkgoldenrod' : null}} ">
                                                <a href="{!! request()->fullUrlWithQuery(['size_id' => $size->id]) !!}">{{ $size->name }}</a>
                                            </li>
                                        @endforeach
                                    </ul>
                                </div>
                            </div>
                        @endif

                    <!-- widget tag cloud -->
                        {{--@if(!$tags->isEmpty())--}}
                        {{--<div class="widget widget-tag-cloud">--}}
                        {{--<h4 class="widget-title"><span>{{ trans('general.tags') }}</span></h4>--}}
                        {{--<ul>--}}
                        {{--@foreach($tags as $tag)--}}
                        {{--<li style="background-color:{{ request()->has('tag_id') && request('tag_id') == $tag->id ? 'darkgoldenrod' : null}} ">--}}
                        {{--<a href="{!! request()->fullUrlWithQuery(['tag_id' => $tag->id]) !!}">{{ $tag->slug }}</a>--}}
                        {{--</li>--}}
                        {{--@endforeach--}}
                        {{--</ul>--}}
                        {{--</div>--}}
                        {{--@endif--}}

                    <!-- widget brands cloud -->
                        {{--@if(!$brands->isEmpty())--}}
                        {{--<div class="widget widget-tag-cloud">--}}
                        {{--<h4 class="widget-title"><span>{{ trans('general.brands') }}</span></h4>--}}
                        {{--<ul>--}}
                        {{--@foreach($brands as $brand)--}}
                        {{--<li style="background-color:{{ request()->has('brand_id') && request('brand_id') == $brand->id ? 'darkgoldenrod' : null}} ">--}}
                        {{--<a href="{!! request()->fullUrlWithQuery(['brand_id' => $brand->id]) !!}">{{ $brand->slug }}</a>--}}
                        {{--</li>--}}
                        {{--@endforeach--}}
                        {{--</ul>--}}
                        {{--</div>--}}
                        {{--@endif--}}


                    </aside>
                    <!-- /SIDEBAR -->
                    <!-- CONTENT -->
                    <div class="col-md-9 content" id="content">
                        <!-- shop-sorting -->
                    @include('frontend.modules.category.partials._top_toolbar')
                    <!-- /shop-sorting -->

                        <!-- Products grid -->
                        <div class="row products grid">
                            @if(!$elements->isEmpty())
                                @foreach($elements as $element)
                                    <div class="col-md-4 col-sm-6">
                                        <div class="thumbnail no-border no-padding">
                                            <div class="media">
                                                <a class="media-link"
                                                   @desktop
                                                   data-gal="prettyPhoto"
                                                   href="{{ asset(env('LARGE').$element->image) }}"
                                                   @elsedesktop
                                                   href="{{ route('frontend.product.show',$element->id) }}"
                                                   @enddesktop
                                                >
                                                    <img src="{{ asset(env('THUMBNAIL').$element->image) }}"
                                                         alt="{{ $element->name }}"/>
                                                    <span class="icon-view">
                                                        <strong><i class="fa fa-eye"></i></strong>
                                                    </span>
                                                </a>
                                            </div>
                                            <div class="caption text-center">
                                                <h4 class="caption-title">
                                                    <a href="{{ route('frontend.product.show', $element->id) }}">{{ str_limit($element->name,25,'') }}</a>
                                                </h4>
                                                @if($element->brands->isNotEmpty())
                                                    <h4 class="caption-title">
                                                        <a href="{{ route('frontend.product.show', $element->id) }}">{{ str_limit($element->brands->first()->name,25,'') }}</a>
                                                    </h4>
                                                @elseif($element->tags->isNotEmpty())
                                                    <h4 class="caption-title">
                                                        <a href="{{ route('frontend.product.show', $element->id) }}">{{ str_limit($element->tags->first()->slug,25,'') }}</a>
                                                    </h4>
                                                @else
                                                    <h4 class="caption-title">
                                                        <a href="{{ route('frontend.product.show', $element->id) }}">{{ str_limit($element->sizes->first()->name,25,'') }}</a>
                                                    </h4>
                                                @endif
                                                <div class="price">
                                                    @if($element->isOnSale)
                                                        <ins>{{ $element->convertedSalePrice}}
                                                            <span>{{ $currency->symbol }}</span></ins>
                                                        <del>{{ $element->convertedPrice }}
                                                            <span>{{ $currency->symbol }}</span></del>
                                                    @else
                                                        <ins>{{ $element->convertedPrice }}
                                                            <span>{{ $currency->symbol }}</span></ins>
                                                    @endif
                                                </div>
                                                <div class="buttons">
                                                    <a class="btn btn-theme btn-theme-transparent btn-wish-list"
                                                       href="{{ route('frontend.favorite.add', $element->id) }}"><i
                                                                class="fa fa-heart"></i></a>
                                                    <a class="btn btn-theme btn-theme-transparent btn-icon-left"
                                                       href="{{ route('frontend.product.show',$element->id) }}"><i
                                                                class="fa fa-shopping-cart"></i>{{ trans('general.view_product_details') }}
                                                    </a>
                                                    {{--<a class="btn btn-theme btn-theme-transparent btn-compare"--}}
                                                    {{--href="#"><i class="fa fa-exchange"></i></a>--}}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                @endforeach
                            @endif
                        </div>
                        <!-- /Products grid -->

                        <div class="col-lg-12">
                            @include('frontend.partials.pagination')
                        </div>


                    </div>
                    <!-- /CONTENT -->

                </div>
            </div>
        </section>
        <!-- /PAGE WITH SIDEBAR -->
    </div>
    <!-- /CONTENT AREA -->
@endsection

