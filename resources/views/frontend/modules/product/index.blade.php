@extends('frontend.layouts.app')

@section('body')
    <!-- CONTENT AREA -->
    <div class="content-area">

        <!-- BREADCRUMBS -->
        <section class="page-section breadcrumbs">
            <div class="container">
                <div class="page-header">
                    <h1>{{ request()->has('category_id') ? $categoriesList->where('id',request('category_id'))->first()->name : trans('general.products_search_results') }}</h1>
                </div>
                @include('frontend.partials._breadcrumbs',['name' => request()->has('category_id') ? $categoriesList->where('id',request('category_id'))->first()->name : trans('general.products_search_results')])
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
                        <div class="widget">
                            <div class="widget-search">
                                <Form method="get" action="{{ route('frontend.product.search') }}">
                                    @csrf
                                    <input class="form-control" type="text" name="search"
                                           placeholder="{{ trans('general.search') }}">
                                    <button><i class="fa fa-search"></i></button>
                                </Form>
                            </div>
                        </div>
                        <!-- /widget search -->
                        <div class="widget widget-colors">
                            <div class="widget-content">
                                <a class="btn btn-theme-sm"
                                   href="{{ route('frontend.product.search') }}">{{ trans('general.remove') }}</a>
                            </div>
                        </div>
                        <!-- widget shop categories -->
                        <div class="widget shop-categories">
                            <h4 class="widget-title">{{ trans('general.categories') }}</h4>
                            <div class="widget-content">
                                <ul>
                                    @if(!$categoriesList->isEmpty())
                                        @if(!$categoriesList->where('parent_id',0)->isEmpty())
                                            @foreach($categoriesList->where('parent_id',0) as $parent)
                                                <li>
                                                    <span class="arrow"><i class="fa fa-angle-down"></i></span>
                                                    <a href="{!! request()->fullUrlWithQuery(['category_id' => $parent->id]) !!}">
                                                        {{ $parent->name }}
                                                        <span class="count">{{ $parent->children->pluck('products')->flatten()->count() }}</span>
                                                    </a>
                                                    @if(!$parent->children->isEmpty())
                                                        <ul class="children">
                                                            @foreach($parent->children as $child)
                                                                <li>
                                                                    <a href="{!! request()->fullUrlWithQuery(['category_id' => $child->id]) !!}">{{ $child->name }}
                                                                        <span class="count">{{ $child->products->count() }}</span>
                                                                    </a>
                                                                </li>
                                                            @endforeach
                                                        </ul>
                                                    @endif
                                                </li>
                                            @endforeach
                                        @else
                                            @foreach($categoriesList as $cat)
                                                <li>
                                                    <span class="arrow"><i class="fa fa-angle-down"></i></span>
                                                    <a href="{!! request()->fullUrlWithQuery(['category_id' => $cat->id]) !!}">
                                                        {{ $cat->name }}
                                                        <span class="count">{{ $cat->products->count() }}</span>
                                                    </a>
                                                    @if(!$cat->children->isEmpty())
                                                        <ul class="children">
                                                            @foreach($cat->children as $sub)
                                                                <li>
                                                                    <a href="{!! request()->fullUrlWithQuery(['category_id' => $sub->id]) !!}">{{ $sub->name }}
                                                                        <span class="count">{{ $sub->products->count() }}</span>
                                                                    </a>
                                                                </li>
                                                            @endforeach
                                                        </ul>
                                                    @endif
                                                </li>
                                            @endforeach
                                        @endif
                                    @endif
                                </ul>

                            </div>
                        </div>
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
                            <div class="widget widget-tag-cloud">
                                <h4 class="widget-title"><span>{{ trans('general.sizes') }}</span></h4>
                                <ul>
                                    @foreach($sizes as $size)
                                        <li style="background-color:{{ request()->has('size_id') && request('size_id') == $size->id ? 'darkgoldenrod' : null}} ">
                                            <a href="{!! request()->fullUrlWithQuery(['size_id' => $size->id]) !!}">{{ $size->name }}</a>
                                        </li>
                                    @endforeach
                                </ul>
                            </div>
                        @endif

                    <!-- widget tag cloud -->
                        @if(!$tags->isEmpty())
                            <div class="widget widget-tag-cloud">
                                <h4 class="widget-title"><span>{{ trans('general.tags') }}</span></h4>
                                <ul>
                                    @foreach($tags as $tag)
                                        <li style="background-color:{{ request()->has('tag_id') && request('tag_id') == $tag->id ? 'darkgoldenrod' : null}} ">
                                            <a href="{!! request()->fullUrlWithQuery(['tag_id' => $tag->id]) !!}">{{ $tag->slug }}</a>
                                        </li>
                                    @endforeach
                                </ul>
                            </div>
                    @endif
                    <!-- /widget tag cloud -->


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
                                                <a class="media-link" data-gal="prettyPhoto"
                                                   href="{{ asset(env('LARGE').$element->image) }}">
                                                    <img src="{{ asset(env('THUMBNAIL').$element->image) }}"
                                                         alt="{{ $element->name }}"/>
                                                    <span class="icon-view">
                                                        <strong><i class="fa fa-eye"></i></strong>
                                                    </span>
                                                </a>
                                            </div>
                                            <div class="caption text-center">
                                                <h4 class="caption-title">{{ $element->name }}</h4>
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

