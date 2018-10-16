<div class="row">
    <div class="col-lg-12 col-md-12 col-sm-12">
        {{--@if(request()->has('country_id') && $settings->aramex_service && $shippingCost > 0)--}}
            <div class="col-lg-12">
                <input type="hidden" id="shipping_aramex_cost" class="hidden"
                     value="{{ $charge }}"/>
                <div class="place-headline border-below">
                    <h5>{{ trans('cart.estimate_shipping_and_tax') }}</h5>
                </div>
                <br>
                <p> <h5>{{ trans('cart.destination') }}</h5> {{ trans('general.country') }} : </p>
            </div>
            <div class="col-lg-6">
                <p>
                    <input type="radio" name="delivery_method" value="aramex" {{ $charge > 0 ? 'checked' : null }}/>
                    {{ trans('general.delivery_within_4_days') }}

                </p>
            </div>
            <div class="col-lg-6">
                <p>
                    {{ trans("general.cost") }}
                    : {{ $charge }} {{ trans('general.kd') }}
                </p>
            </div>
            <div class="col-lg-1 col-lg-push-5">
                <img src="{{ asset('images/aramex.png') }}" alt="" class="img-responsive img-sm">
            </div>
    </div>
    {{--@endif--}}
    {{--@if($country->code === 'KW' && $settings->delivery_service)--}}
        {{--<div class="col-lg-12">--}}
            {{--<div class="col-lg-12">--}}
                {{--<div class="place-headline border-below">--}}
                    {{--<h5>{{ trans('cart.delivery_charge_cost') }}</h5>--}}
                {{--</div>--}}
                {{--<br>--}}
            {{--</div>--}}
            {{--<div class="col-lg-12">--}}
                {{--<p>--}}
                    {{--<input type="radio" name="delivery_method" value="delivery" {{ !$shippingCost > 0  ? 'checked' : null }}/>--}}
                    {{--{{ trans('message.shipping_method_message_with_no_aramex') }}--}}
                {{--</p>--}}
            {{--</div>--}}
            {{--<div class="col-lg-6">--}}
                {{--<p>--}}
                    {{--{{ trans('general.country') }} : {{  $country->name }}--}}
                {{--</p>--}}
                {{--<p>--}}
                    {{--{{ trans('general.delivery_inside_kuwait') }} : <span id="delivery_cost" class=""--}}
                                                                          {{--value="{{ getDeliveryServiceCost() }}">{{ getDeliveryServiceCost() }}  {{ trans("general.kd") }} </span>--}}
                {{--</p>--}}
            {{--</div>--}}
            {{--<div class="col-lg-1 col-lg-push-5">--}}
                {{--<img src="{{ asset('img/cash-delivery.png') }}" alt="" class="img-responsive img-sm">--}}
            {{--</div>--}}
        {{--</div>--}}
    {{--@endif--}}
</div>