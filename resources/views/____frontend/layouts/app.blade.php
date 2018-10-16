<!doctype html>
<html class="no-js"
      lang="{{ app()->getLocale() }}"
      dir="{{ app()->isLocale('ar') ? 'rtl' : 'ltr'}}"
      xmlns="http://www.w3.org/1999/xhtml"
      xmlns:fb="http://ogp.me/ns/fb#"
>
<head>
    @section('head')
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="{{ config('app.name') }}" content="E-commerce">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        @include('____frontend.partials.head')
    @show
    @section('styles')
        @include('____frontend.partials.styles')
    @show
</head>

<body>
@section('header')
    @include('____frontend.partials.header')
    @include('____frontend.partials._notification')
    @include('____frontend.modules.product.partials.quick-view')
@show
@section('content')
    @yield('body')
@show

<!--footer start-->
@section('footer')
    @include('____frontend.partials.footer')
@show
<!--footer end-->

<!--script for this page-->
@section('scripts')
    @include('____frontend.partials.scripts')
@show
</body>
</html>