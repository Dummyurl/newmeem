@extends('____frontend.layouts.app')
@section('body')

    <!-- About page body start -->
    <div class="contact-page-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                @include('____frontend.partials._breadcrumbs',['name' => $element->title])

                    <!--about-body-area start-->
                    <div class="row">
                        <!-- About info -->
                        <div class="col-lg-12">
                            <div class="contact-info">
                                <h3>{{$element->slug}}</h3>
                                <p>{!! $element->content !!}</p>
                            </div>
                        </div><!-- End About info -->

                    </div>
                    <!--about-body-area end-->
                </div>
            </div>
        </div>
    </div>
    <!-- About page body end -->
@endsection
