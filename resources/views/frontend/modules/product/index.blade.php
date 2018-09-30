@extends('frontend.layouts.app')

@section('body')
    <!--Products start-->
    <!-- shop page area start -->
    <div class="shop-product-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-3 col-sm-4 col-xs-12">
                    <!-- Left Sidebar-->
                    <div class="left-sidebar">
                        <div class="left-sidebar-title">
                            <h3>shopping options</h3>
                        </div>
                        <div class="left-layout">
                            <div class="price-filter-area single-layout">
                                @include('frontend.partials._product_index_categories')
                                @include('frontend.partials._product_index_brands')
                                @include('frontend.partials._product_index_sizes')
                                {{--<div class="price-filter">--}}
                                {{--<div class="layout-title">--}}
                                {{--<h4>Price</h4>--}}
                                {{--</div>--}}
                                {{--<p>--}}
                                {{--Range: <input type="text" id="amount" readonly style="border:0; color:#F3652A; font-weight:bold;">--}}
                                {{--</p>--}}
                                {{--<div id="slider-range"></div>--}}
                                {{--</div>--}}
                                {{--</div><!-- End Price Filter Area -->--}}
                                {{--<div class="single-layout">--}}
                                {{--<div class="layout-title">--}}
                                {{--<h4>color</h4>--}}
                                {{--</div>--}}
                                {{--<div class="layout-list">--}}
                                {{--<ul>--}}
                                {{--<li><a href="#">Black <span>(4)</span></a></li>--}}
                                {{--<li><a href="#">Blue <span>(6)</span></a></li>--}}
                                {{--<li><a href="#">Brown <span>(2)</span></a></li>--}}
                                {{--<li><a href="#">Pink <span>(3)</span></a></li>--}}
                                {{--<li><a href="#">Red <span>(1)</span></a></li>--}}
                                {{--<li><a href="#">White <span>(5)</span></a></li>--}}
                                {{--<li><a href="#">Yellow <span>(4)</span></a></li>--}}
                                {{--</ul>--}}
                                {{--</div>--}}
                            </div>
                        </div>
                        {{--<div class="left-sidebar-title">--}}
                            {{--<div class="layout-title bottom-tag">--}}
                                {{--<h4>Compare Products </h4>--}}
                            {{--</div>--}}
                            {{--<p>You have no items to compare.</p>--}}
                            {{--<div class="layout-title bottom-tag">--}}
                                {{--<h4>Popular Tags</h4>--}}
                                {{--<div class="shop-layout">--}}
                                    {{--<div class="popular-tag">--}}
                                        {{--<div class="tag-list">--}}
                                            {{--<ul>--}}
                                                {{--<li><a href="#">Clothing</a></li>--}}
                                                {{--<li><a href="#">accessories</a></li>--}}
                                                {{--<li><a href="#">good</a></li>--}}
                                                {{--<li><a href="#">footwear</a></li>--}}
                                                {{--<li><a href="#">fashion</a></li>--}}
                                                {{--<li><a href="#">kid</a></li>--}}
                                                {{--<li><a href="#">Men</a></li>--}}
                                                {{--<li><a href="#">Women</a></li>--}}
                                            {{--</ul>--}}
                                        {{--</div>--}}
                                        {{--<div class="tag-action">--}}
                                            {{--<ul>--}}
                                                {{--<li><a href="#">View all tags</a></li>--}}
                                            {{--</ul>--}}
                                        {{--</div>--}}
                                    {{--</div>--}}
                                {{--</div><!-- End Shop Layout -->--}}
                            {{--</div>--}}
                        {{--</div>--}}
                        {{--<div class="banner-left">--}}
                            {{--<div class="single-banner">--}}
                                {{--<a href="#">--}}
                                    {{--<img src="img/banner/banner-left.jpg" alt="">--}}
                                {{--</a>--}}
                            {{--</div>--}}
                        {{--</div>--}}
                    </div>
                </div>
                <div class="col-lg-9 col-md-9 col-sm-8 col-xs-12">
                    <!--breadcrumbs start-->
                @include('frontend.partials._breadcrumbs',['name' => trans('general.search_results')])
                <!--breadcrumbs end-->
                    <div class="layout-title bottom-tag">
                        <h4>{{ trans('general.products_search_results') }}</h4>
                        <hr>
                    </div>
                    <div class="shop-product-view">
                        <!-- Shop Product Tab Area -->
                        <div class="product-tab-area">
                        <!-- Tab Content -->
                            <div class="clearfix"></div>
                            <div class="tab-content">
                                <div id="shop-grid" class="tab-pane active" role="tabpanel">
                                    <div class="row">
                                        @include('frontend.modules.product.partials.product_category',['products' => $elements ,'cols' => 'col-lg-4 col-md-4 col-sm-6'])
                                    </div>
                                </div>
                            </div>
                            {{--@include('frontend.modules.category.partials._bottom_toolbar')--}}
                        </div>
                        @include('frontend.modules.category.partials._tags')
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- shop page area end -->
    <!--Products end-->
@endsection

