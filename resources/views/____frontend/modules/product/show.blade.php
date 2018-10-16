@extends('____frontend.layouts.app')

@section('head')
    @parent
    <title>{{ $product->name }}</title>
    <!-- You can use Open Graph tags to customize link previews.
    Learn more: https://developers.facebook.com/docs/sharing/webmasters -->
    <meta property="og:url" content="{{ request()->fullUrl() }}"/>
    <meta property="og:type" content="website"/>
    <meta property="og:title" content="{{ $product->name }}"/>
    <meta property="og:description" content="{!! strip_tags($product->description) !!}"/>
    <meta property="og:image" content="{{asset(env('THUMBNAIL').$product->image)}}"/>
@endsection

@section('body')
    <div class="single-page-area shop-product-area">
    @include('____frontend.partials._breadcrumbs',['name' => $product->name])
    <!-- Single Product details Area -->
        <div class="single-product-details-area">
            <div class="single-product-view-area">
                <div class="container">
                    <div class="row">
                        @include('____frontend.partials._product_show_gallery')
                        @include('____frontend.partials._product_show_product_data')
                    </div>
                </div>
            </div>
        </div>

        <!--product-Description-area start-->
    @include('____frontend.modules.product.partials.productDescription')
    <!--related-products-area start-->
        @if(!$products->isEmpty())

            @include('____frontend.modules.product.partials.product_carousel',[$products ,'heading'=> trans('general.related_products'),'backgroundColor'=>'#e7e7e7', 'cols' => 'col-lg-3 col-md-3 col-sm-3'])
        @endif
    </div>
    </div>
    <!-- Single Product Area end -->
    <!-- Creates the bootstrap modal where the image will appear -->
    {{-- moved to modal blade quick view--}}
@endsection

@section('scripts')
    @parent
    <script async src="https://static.addtoany.com/menu/page.js"></script>
@endsection
