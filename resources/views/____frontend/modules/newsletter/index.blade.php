@extends('____frontend.layouts.app')

@section('body')

    <div class="feature-product-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-lg-push-3">
                    <div class="heading">{{ trans('general.newsletter') }}</div>
                    @include('____frontend.partials._form_newsletter')
                </div>
            </div>
        </div>
    </div>

@endsection
