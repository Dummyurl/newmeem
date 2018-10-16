@extends('frontend.layouts.app')
@section('body')
    <!-- BREADCRUMBS -->
    <section class="page-section breadcrumbs">
        <div class="container">
            <div class="page-header">
                <h1>{{ $element->slug }}</h1>
            </div>
            @include('frontend.partials._breadcrumbs',['name' => $element->slug])
        </div>
    </section>
    <!-- /BREADCRUMBS -->

    <!-- PAGE -->
    <section class="page-section">
        <div class="container">

            <h2 class="section-title"><span>{{ $element->slug }}</span></h2>
            <div style="min-height: 400px;">
                {!! $element->content !!}
            </div>
            <hr class="page-divider small"/>
        </div>
    </section>
    <!-- /PAGE -->
@endsection
