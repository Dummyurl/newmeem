@extends('frontend.layouts.app')
@section('body')
    <!-- BREADCRUMBS -->
    <section class="page-section breadcrumbs">
        <div class="container">
            <div class="page-header">
                <h1>{{ trans('general.order_history') }}</h1>
            </div>
            @include('frontend.partials._breadcrumbs',['name' => trans('general.order_return')])
        </div>
    </section>
    <!-- /BREADCRUMBS -->
    <!-- BREADCRUMBS -->
    <section class="page-section breadcrumbs">
        <div class="container">
            <div class="page-header">
                {{ trans('general.order_return') }}
            </div>
        </div>
    </section>
    <!-- /BREADCRUMBS -->

    <!-- PAGE -->
    <section class="page-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h3 class="block-title alt text-center"><i
                                class="fa fa-list-alt"></i>{{ trans('general.order_return') }}</h3>
                    <!-- Contact form -->
                    <form name="contact-form" method="post" action="{{ route('frontend.order.return') }}"
                          class="contact-form">
                        @csrf
                        <div class="col-md-6 col-xs-12">
                            <div class="form-group"><input class="form-control" type="text" name="name" required
                                                           placeholder="{{ trans('general.name') }}*"></div>
                        </div>
                        <div class="col-md-6 col-xs-12">
                            <div class="form-group"><input class="form-control" type="text" name="mobile" required
                                                           placeholder="{{ trans('general.mobile') }}*"></div>
                        </div>
                        <div class="col-md-6 col-xs-12">
                            <div class="form-group"><input class="form-control" type="text" name="order_no"
                                                           placeholder="{{ trans('general.order_no') }}*"></div>
                        </div>
                        <div class="col-md-6 col-xs-12">
                            <div class="form-group">
                                <input required class="form-control" type="date" name="purchase_date"
                                       placeholder="{{ trans('general.purchase_date') }}*"></div>
                        </div>
                        <div class="col-md-8 col-xs-12">
                            <div class="form-group"><input required class="form-control" type="text" name="address"
                                                           placeholder="{{ trans('general.address') }}*"></div>
                        </div>
                        <div class="col-md-4 col-xs-12">
                            <div class="form-group"><input required class="form-control" type="email" name="email"
                                                           placeholder="{{ trans('general.email') }}"></div>
                        </div>
                        <div class="col-md-12 col-xs-12">
                            <div class="form-group">
                                <label class="sr-only" for="input-message">{{ trans('general.notes') }}</label>
                                <textarea name="notes" placeholder="{{ trans('general.notes') }}" rows="4" cols="50"
                                          data-toggle="tooltip" title="{{ trans('general.notes') }}"
                                          class="form-control placeholder"></textarea>
                            </div>
                        </div>
                        <div class="col-md-4 col-xs-12">
                            <div class="form-group">
                                <button type="submit" class="form-control" name="submit"
                                        class="btn btn-theme btn-theme-dark"
                                        placeholder="{{ trans('general.email') }}">{{ trans('general.submit') }}</button>
                            </div>
                        </div>

                    </form>
                    <!-- /Contact form -->
                </div>
                <hr class="page-divider small"/>
            </div>
        </div>
    </section>
    <!-- /PAGE -->
@endsection