@extends('____frontend.layouts.app')



@section('body')
    @section('slider')
        <!--slider-area start-->
        @include('____frontend.partials.slider')
        <!--slider-area end-->

        {{--@include('frontend.modules.ad.show')--}}
    @show
    <!--feature-product-area start-->
    {{--col-lg-4 col-md-4 col-sm-4--}}
    @include('____frontend.modules.product.partials.product_carousel',['products'=>$newArrivals,'carousel' => true ,'heading'=> trans('general.new_arrival'),'backgroundColor'=>'#e7e7e7', 'cols' => 'col-lg-4 col-md-4 col-sm-4'])
    <!--feature-product-area end-->

    <!--news-product-area start-->
    @include('____frontend.modules.product.partials.product_carousel',['products'=>$onSaleProducts,'carousel' => true , 'heading'=> trans('general.on_sale_products'), 'cols' => 'col-lg-4 col-md-4 col-sm-4'])

    @include('____frontend.modules.product.partials.product_carousel',['products'=>$bestSalesProducts, 'carousel' => true , 'heading'=>trans('general.best_sale_products'),'backgroundColor'=>'#e7e7e7','cols' => 'col-lg-4 col-md-4 col-sm-4'])

    <!--news letter-->
    {{--@include('frontend.partials.newsletter')--}}
    <!--slider-area end-->
@endsection
