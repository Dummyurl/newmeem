<div class="row">
    @auth
        <div class="col-lg-6 col-sm-6">
            <form class="checkout-form product-form">
                <h2>{{ trans('message.you_are_logged_in_as') }} {{ auth()->user()->name }}</h2>
                <div class="checkout-form-inner">
                    <p>{{ trans('message.checkout') }}</p>
                </div>
            </form>
        </div>
    @endauth
    {{--@guest--}}
        {{--<div class="col-lg-6 col-sm-6">--}}
            {{--<form class="checkout-form product-form">--}}
                {{--<h2>{{ trans("general.check_in_as_guest_or_user") }}</h2>--}}
                {{--<div class="checkout-form-inner">--}}
                    {{--<p>{{ trans("message.register_with_us") }}</p>--}}
                    {{--<div class="i-boxb">--}}
                        {{--<input class="checkout-radio" type="radio" name="tag"--}}
                               {{--id="credio"/>--}}
                        {{--<label class="cradio"--}}
                               {{--for="credio">{{ trans('checkout_as_guest') }}</label>l--}}
                    {{--</div>--}}
                    {{--<div class="i-boxb">--}}
                        {{--<input class="checkout-radio" type="radio" name="tag"--}}
                               {{--id="craiot"/>--}}
                        {{--<label class="cradio"--}}
                               {{--for="craiot">{{ trans('general.register') }}</label>--}}
                    {{--</div>--}}
                    {{--<p>--}}
                        {{--<span>{{ trans("message.register_and_save_time") }}</span><br/>--}}
                    {{--</p>--}}
                {{--</div>--}}
                {{--<div class="user-bottom fix pull-right">--}}
                    {{--<a class="btn btn-lg btn-default btn-theme"--}}
                       {{--href="{{ route('register') }}"--}}
                    {{-->{{ trans('general.register') }}--}}
                    {{--</a>--}}
                {{--</div>--}}
            {{--</form>--}}
        {{--</div>--}}
        {{--<div class="col-lg-6 col-sm-6">--}}
                {{--<h2>Login</h2>--}}
                {{--<div class="submit-review">--}}
                    {{--<p class="title"><b>{{ trans('general.already_registered') }}</b></p>--}}
                    {{--<p>{{ trans('general.plz_login_below') }}</p>--}}
                    {{--<div class="account-form">--}}
                        {{--<div class="form-goroup">--}}
                            {{--<label>{{ trans('email') }}<sup>*</sup></label>--}}
                            {{--<input type="text"--}}
                                   {{--class="form-control">--}}
                        {{--</div>--}}
                        {{--<div class="form-goroup">--}}
                            {{--<label>{{ trans('general.password') }} <sup>*</sup></label>--}}
                            {{--<input type="password"--}}
                                   {{--class="form-control">--}}
                        {{--</div>--}}
                    {{--</div>--}}
                {{--</div>--}}
                {{--<div class="user-bottom fix">--}}
                    {{--<a href="#">{{ trans('general.forget_password') }}</a>--}}
                    {{--<a  href="{{ route('login') }}" class="btn custom-button" type="button">{{ trans('general.login') }}--}}
                    {{--</a>--}}
                {{--</div>--}}
        {{--</div>--}}
    {{--@endguest--}}
</div>