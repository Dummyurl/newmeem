<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    @section('head')
        <meta charset="utf-8">
        <!--[if IE]>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"><![endif]-->
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="{{ config('app.name') }}" content="E-commerce">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        @include('frontend.partials.head')
    @show
    @section('styles')
        @include('frontend.partials.styles')
    @show
</head>

<body id="home" class="wide">
@include('frontend.partials._preloader')
<div class="wrapper">
@section('header')
    @include('frontend.partials._top_bar')
    @include('frontend.partials.header')
    @include('frontend.partials._notification')
@show
@section('content')
    <!-- CONTENT AREA -->
        <div class="content-area">
            @yield('body')
        </div>
        <!-- /CONTENT AREA -->
@show

<!--footer start-->
@section('footer')
    @include('frontend.partials.footer')
@show
<!--footer end-->
</div>
<!--script for this page-->
@section('scripts')
    @include('frontend.partials.scripts')
@show
@include('frontend.partials._pop_up_cart')
</body>
</html>