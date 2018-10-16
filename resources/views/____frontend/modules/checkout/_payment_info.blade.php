<div class="row">
    <div class="col-lg-12 col-md-12 col-sm-12">
        <div class="">
            <p><input type="radio" id="knet" name="payment_method" value="knet" checked/>
                <img class="img-xs"
                     src="{{asset('img/k-net-icon.png')}}"
                     alt="">
                <label for="knet">{{ trans('general.knet') }}</label>
            </p>
            <p><input type="radio" id="master" name="payment_method" value="visa"/>
                <img class="img-xs-visa"
                     src="{{asset('img/payment.png')}}" alt="payment">
                <label for="master">{{ trans("general.master_or_visa") }}</label>
            </p>
            {{--@if($country->code === 'KW' && $settings->delivery_service)--}}
                {{--<p><input type="radio" id="delivery" name="payment_method" value="cash"/>--}}
                    {{--<img class="img-xs"--}}
                         {{--src="{{asset('img/cash-icon.png')}}"--}}
                         {{--alt="cash">--}}
                    {{--<label--}}
                            {{--for="delivery">{{ trans("general.cash_on_delivery") }}</label>--}}
                {{--</p>--}}
            {{--@endif--}}
        </div>
        {{--<div class="button-check">--}}
            {{--<div class=""><span class="left-btn"><a href="{{ route('frontend.cart.index') }}">{{ trans("general.back") }}</a></span>--}}
                {{--<button type="submit" class="btn right-btn custom-button">--}}
                    {{--{{ trans('general.continue') }}--}}
                {{--</button>--}}
            {{--</div>--}}
        {{--</div>--}}
    </div>
</div>