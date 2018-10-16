@extends('frontend.layouts.app')
@section('body')
    <!-- BREADCRUMBS -->
    <section class="page-section breadcrumbs">
        <div class="container">
            <div class="page-header">
                <h1>{{ trans('general.favorites') }}</h1>
            </div>
            @include('frontend.partials._breadcrumbs',['name' => trans('general.favorites')])
        </div>
    </section>
    <!-- /BREADCRUMBS -->

    <!-- PAGE -->
    <section class="page-section">
        <div class="container">

            @include('frontend.partials._product_carousel_lg',['elements' => $elements , 'title' => trans('general.favorites')])
        </div>
    </section>
    <!-- /PAGE -->
@endsection


