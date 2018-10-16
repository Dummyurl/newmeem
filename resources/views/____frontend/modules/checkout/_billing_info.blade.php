<div class="col-lg-12 col-md-12 col-sm-12">
    {{--<form action="{{ route("frontend.cart.store") }}" method="post">--}}
        {{--@csrf--}}
        <div class="form">
            <div class="card-control">
                <ul>
                    <li>
                        <div class="field fix">
                            <div class="input-box">
                                <label class="label" for="first">Full Name
                                    <em>*</em></label>
                                <input type="text" class=" border-color"
                                       name="name"
                                       value="{{ auth()->check() ? auth()->user()->name : old('first_name') }}"
                                       id="first" required>
                            </div>
                            <div class="input-box">
                                <label class="label" for="email">Email Address
                                    <em>*</em></label>
                                <input type="email" class=" border-color"
                                       name="email"
                                       value="{{ auth()->check() ? auth()->user()->email : old('email') }}"
                                       id="email" required>
                            </div>
                            <div class="input-box">
                                <label class="label"
                                       for="email">{{ trans('general.mobile') }}
                                    <em>*</em></label>
                                <input type="text" class=" border-color"
                                       name="mobile"
                                       placeholder="+96566666666"
                                       value="{{ auth()->check() ? auth()->user()->mobile : old('mobile') }}"
                                       id="mobile" required>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="field fix">
                            <div class="input-box">
                                <label class="label"
                                       for="Telephone">{{ trans("general.phone") }}</label>
                                <input type="text" class=" border-color"
                                       name="phone"
                                       value="{{ auth()->check() ? auth()->user()->phone : old('phone') }}"
                                       id="phone">
                            </div>
                            <div class="input-box">
                                    <label class="label"
                                           for="addr">{{ trans('general.full_address') }}<em>*</em></label>
                                    <input type="text" class=" border-color"
                                           name="address"
                                           id="addr"
                                           required
                                           value="{{ auth()->check() ? auth()->user()->address : old('address') }}"/>

                            </div>
                            <div class="input-box">
                                <label class="label"
                                       for="country">{{ trans('general.country') }}
                                    <em>*</em></label>
                                <select class="border-color"
                                        name="country" id="country"
                                        required
                                        placeholder='{{ trans('general.select_country') }}'>
                                    @foreach($countriesWorld as $country)
                                        <option value="{{ $country }}" {{ auth()->user()->country === $country ? 'selected' : null }}>{{ $country }}</option>
                                    @endforeach
                                </select>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="field fix">

                        </div>
                    </li>
                    <li>
                        <div class="field fix">
                            <div class="input-box">
                                <label class="label"
                                       for="area">{{ trans('general.area') }}</label>
                                <input type="text" class=" border-color"
                                       name="area"
                                       value="{{ auth()->check() ? auth()->user()->area : old('area') }}"
                                       id="area">
                            </div>
                            <div class="input-box">
                                <label class="label"
                                       for="Block">{{ trans('general.block') }}</label>
                                <input type="text" class=" border-color"
                                       name="block"
                                       value="{{ auth()->check() ? auth()->user()->block : old('block') }}"
                                       id="Block">
                            </div>
                            <div class="input-box">
                                <label class="label"
                                       for="Building">{{ trans('general.building_no') }}</label>
                                <input type="text" class=" border-color"
                                       name="building"
                                       value="{{ auth()->check() ? auth()->user()->building : old('building') }}"
                                       id="Building">
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="field fix">
                            <div class="input-box">
                                <label class="label"
                                       for="street">{{ trans('general.street') }}</label>
                                <input type="text" class=" border-color"
                                       name="street"
                                       value="{{ auth()->check() ? auth()->user()->street : old('street') }}"
                                       id="street">
                            </div>
                            <div class="input-box">
                                <label class="label"
                                       for="floor">{{ trans('general.floor') }}</label>
                                <input type="text" class=" border-color"
                                       name="floor"
                                       value="{{ auth()->check() ? auth()->user()->floor : old('floor') }}"
                                       id="floor">
                            </div>
                            <div class="input-box">
                                <label class="label"
                                       for="apartment">{{ trans('general.apartment') }}</label>
                                <input type="text" class=" border-color"
                                       name="apartment"
                                       value="{{ auth()->check() ? auth()->user()->apartment : old('apartment') }}"
                                       id="apartment">
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            {{--<div class="button-check">--}}
                {{--<div class="">--}}
                                                            {{--<span class="left-btn"><a--}}
                                                                        {{--href="{{ route('frontend.cart.index') }}">{{ trans('general.back') }}</a></span>--}}
                    {{--<button type="submit" class="btn right-btn custom-button">--}}
                        {{--{{ trans('general.save_information') }}--}}
                    {{--</button>--}}
                {{--</div>--}}
            {{--</div>--}}
        </div>
    {{--</form>--}}
</div>