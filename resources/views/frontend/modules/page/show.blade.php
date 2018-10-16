@extends('frontend.layouts.app')
@section('body')

    <!-- CONTENT AREA -->
    <div class="content-area">
        <section class="page-section with-sidebar">
            <div class="container">
                <div class="row" style="min-height: 400px;">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    @include('frontend.partials._breadcrumbs',['name' => $element->slug])

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
        </section>
    </div>
    <!-- About page body end -->
@endsection
