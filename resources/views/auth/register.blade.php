@extends('frontend.layouts.app')

@section('content')
    <!-- CONTENT AREA -->
    <div class="content-area">
        <section class="page-section">
            <div class="wrap container">
                <div class="row">
                    <!--start main contain of page-->
                    <div class="col-lg-12 col-md-12 col-sm-12">
                        <div class="information-title">{{ trans('general.register') }}</div>
                        <div class="details-wrap">
                            <div class="block-title alt"><i
                                        class="fa fa-angle-down"></i> {{ trans('message.register') }}</div>
                            <div class="details-box">

                                <form class="form-delivery" method="POST" action="{{ route('register') }}">
                                    @csrf
                                    <div class="row">
                                        <div class="col-md-6 col-sm-6">
                                            <div class="form-group">
                                                <label for="name">{{ trans('general.name') }}*</label>
                                                <input id="name" type="text"
                                                       class="form-control {{ $errors->has('name') ? ' is-invalid' : '' }}"
                                                       name="name" value="{{ old('name') }}" required autofocus>
                                                @if ($errors->has('name'))
                                                    <span class="invalid-feedback">
                                                    <strong>{{ $errors->first('name') }}</strong>
                                                    </span>
                                                @endif
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-sm-6">
                                            <div class="form-group">

                                                <label for="email">{{ trans('general.email') }}*</label>
                                                <input id="email" type="email"
                                                       class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}"
                                                       name="email" value="{{ old('email') }}" required>

                                                @if ($errors->has('email'))
                                                    <span class="invalid-feedback">
                                                            <strong>{{ $errors->first('email') }}</strong>
                                                        </span>
                                                @endif

                                            </div>
                                        </div>
                                        <div class="col-md-6 col-sm-6">
                                            <div class="form-group">
                                                <label for="password">{{ trans('general.password') }}*</label>
                                                <input id="password" type="password"
                                                       class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}"
                                                       name="password" required>

                                                @if ($errors->has('password'))
                                                    <span class="invalid-feedback">
                                                        <strong>{{ $errors->first('password') }}</strong>
                                                    </span>
                                                @endif
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-sm-6">
                                            <div class="form-group">
                                                <label for="password_confirmation">{{ trans('general.password_confirmation') }}
                                                    *</label>
                                                <input id="password-confirm" type="password" class="form-control"
                                                       name="password_confirmation" required>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-sm-6">
                                            <label for="mobile">{{ trans('general.mobile') }}*</label>
                                            <div class="form-group"><input type="text"
                                                                           required
                                                                           name="mobile"
                                                                           placeholder="{{ trans('general.mobile') }}"
                                                                           class="form-control"></div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group selectpicker-wrapper">
                                                <label for="country_id">{{ trans('general.country') }}</label>
                                                <select
                                                        name="country" id="country"
                                                        required
                                                        class="selectpicker input-price" data-live-search="true" data-width="100%"
                                                        data-toggle="tooltip" title="Select">
                                                    @foreach($countriesWorld as $country)
                                                        <option value="{{ $country }}">{{ $country }}</option>
                                                    @endforeach
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-12 col-sm-12">
                                            <button class="btn btn-theme btn-theme-dark"
                                                    type="submit"> {{ trans('general.submit') }}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <!--end main contain of page-->
                </div>

            </div>
        </section>
    </div>
    <!-- /CONTENT AREA -->
@endsection
