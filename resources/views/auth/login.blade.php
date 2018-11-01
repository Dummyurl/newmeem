@extends('frontend.layouts.app')

@section('content')
    <!-- PAGE -->
    <section class="page-section color">
        <div class="container">
            <div class="row">
                <div class="col-sm-6">
                    <h3 class="block-title"><span>{{ trans('general.login') }}</span></h3>
                    <form method="POST" action="{{ route('login') }}" class="form-login">
                        @csrf
                        <div class="row">
                            <div class="col-md-12 hello-text-wrap">
                                <span class="hello-text text-thin">{{ trans('general.welcome_message') }}</span>
                            </div>
                            {{--<div class="col-md-12 col-lg-6">--}}
                            {{--<a class="btn btn-theme btn-block btn-icon-left facebook" href="#"><i class="fa fa-facebook"></i>Sign in with Facebook</a>--}}
                            {{--</div>--}}
                            {{--<div class="col-md-12 col-lg-6">--}}
                            {{--<a class="btn btn-theme btn-block btn-icon-left twitter" href="#"><i class="fa fa-twitter"></i>Sign in with Twitter</a>--}}
                            {{--</div>--}}
                            <div class="col-md-12">
                                <div class="form-group">
                                    <input class="form-control" name="email" type="text" placeholder="{{ trans('general.email') }}"></div>
                                @if ($errors->has('email'))
                                    <span class="invalid-feedback">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <input class="form-control" name="password" type="password" placeholder="{{ trans('general.password') }}">
                                </div>
                                @if ($errors->has('password'))
                                    <span class="invalid-feedback">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
                            </div>
                            <div class="col-md-12 col-lg-6">
                                <div class="checkbox">
                                    <label><input type="checkbox" name="remember" {{ old('remember') ? 'checked' : '' }}> {{ trans('general.remember_me') }}</label>
                                </div>
                            </div>
                            <div class="col-md-12 col-lg-6 text-right-lg">
                                <a class="forgot-password" href="{{ route('password.request') }}">{{ trans('general.forget_password') }}</a>
                            </div>
                            <div class="col-md-6">
                                <button class="btn btn-theme btn-block btn-theme-dark" type="submit">Login</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="col-sm-6">
                    <h3 class="block-title"><span>{{ trans('general.create_new_account') }}</span></h3>
                    <form action="#" class="create-account">
                        <div class="row">
                            <div class="col-md-12">
                                <h3 class="block-title">{{ trans('general.sign_up_today_and_get') }}</h3>
                                <ul class="list-check">
                                    <li>{{ trans('message.features') }}</li>
                                </ul>
                            </div>
                            <div class="col-md-6">
                                <a class="btn btn-block btn-theme btn-theme-dark btn-create" href="{{ route('register') }}">{{ trans('general.register') }}</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <!-- /PAGE -->
@endsection
