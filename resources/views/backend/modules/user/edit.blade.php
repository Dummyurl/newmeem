@extends('backend.layouts.app')
@section('content')
    <div class="portlet box blue">
        @include('backend.partials.forms.form_title')
        <div class="portlet-body form">
            <form class="horizontal-form" role="form" method="POST"
                  action="{{ route('backend.user.update', $element->id) }}" enctype="multipart/form-data">
                @csrf
                <input type="hidden" name="_method" value="put">
                <input type="hidden" name="api_token" value="{{ str_random(rand(10,99)) }}">
                <div class="form-body">
                    <h3 class="form-section">Create User</h3>
                    {{--name arabic / name english --}}
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group {{ $errors->has('name') ? ' has-error' : '' }}">
                                <label for="name_ar" class="control-label">Name*</label>
                                <input id="name_ar"
                                       type="text"
                                       class="form-control"
                                       name="name"
                                       value="{{ $element->name }}"
                                       placeholder="name in arabic"
                                       required autofocus>
                                @if ($errors->has('name'))
                                    <span class="help-block">
                                        <strong>
                                            {{ $errors->first('name') }}
                                        </strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        {{-- email + mobile --}}

                        <div class="col-md-4">
                            <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                                <label for="email" class="control-label">email *</label>
                                <input id="email"
                                       type="text"
                                       class="form-control"
                                       name="email"
                                       value="{{ $element->email }}"
                                       placeholder="email"
                                       required autofocus>
                                @if ($errors->has('email'))
                                    <span class="help-block">
                                        <strong>
                                            {{ $errors->first('email') }}
                                        </strong>
                                    </span>
                                @endif
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group{{ $errors->has('mobile') ? ' has-error' : '' }}">
                                <label for="mobile" class="control-label">mobile *</label>
                                <input id="mobile"
                                       type="text"
                                       class="form-control"
                                       name="mobile"
                                       value="{{ $element->mobile }}"
                                       placeholder="mobile"
                                       required autofocus>
                                @if ($errors->has('mobile'))
                                    <span class="help-block">
                                        <strong>
                                            {{ $errors->first('mobile') }}
                                        </strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="form-group{{ $errors->has('phone') ? ' has-error' : '' }}">
                                <label for="phone" class="control-label">phone</label>
                                <input id="phone"
                                       type="text"
                                       class="form-control"
                                       name="phone"
                                       placeholder="phone"
                                       value="{{ $element->phone }}"
                                       autofocus>
                                @if ($errors->has('phone'))
                                    <span class="help-block">
                                        <strong>
                                            {{ $errors->first('phone') }}
                                        </strong>
                                    </span>
                                @endif
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group{{ $errors->has('address') ? ' has-error' : '' }}">
                                <label for="address" class="control-label">address</label>
                                <input id="address"
                                       type="text"
                                       class="form-control"
                                       name="address"
                                       placeholder="address"
                                       value="{{ $element->address }}"
                                       autofocus>
                                @if ($errors->has('address'))
                                    <span class="help-block">
                                        <strong>
                                            {{ $errors->first('address') }}
                                        </strong>
                                    </span>
                                @endif
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group{{ $errors->has('area') ? ' has-error' : '' }}">
                                <label for="area" class="control-label">area</label>
                                <input id="area"
                                       type="text"
                                       class="form-control"
                                       name="area"
                                       placeholder="area"
                                       value="{{ $element->area }}"
                                       autofocus>
                                @if ($errors->has('area'))
                                    <span class="help-block">
                                        <strong>
                                            {{ $errors->first('area') }}
                                        </strong>
                                    </span>
                                @endif
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group{{ $errors->has('block') ? ' has-error' : '' }}">
                                <label for="block" class="control-label">block</label>
                                <input id="block"
                                       type="text"
                                       class="form-control"
                                       name="block"
                                       placeholder="block"
                                       value="{{ $element->block }}"
                                       autofocus>
                                @if ($errors->has('block'))
                                    <span class="help-block">
                                        <strong>
                                            {{ $errors->first('block') }}
                                        </strong>
                                    </span>
                                @endif
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group{{ $errors->has('street') ? ' has-error' : '' }}">
                                <label for="street" class="control-label">street</label>
                                <input id="street"
                                       type="text"
                                       class="form-control"
                                       name="street"
                                       placeholder="street"
                                       value="{{ $element->street }}"
                                       autofocus>
                                @if ($errors->has('street'))
                                    <span class="help-block">
                                        <strong>
                                            {{ $errors->first('street') }}
                                        </strong>
                                    </span>
                                @endif
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group{{ $errors->has('building') ? ' has-error' : '' }}">
                                <label for="building" class="control-label">building</label>
                                <input id="building"
                                       type="text"
                                       class="form-control"
                                       name="building"
                                       placeholder="building"
                                       value="{{ $element->building }}"
                                       autofocus>
                                @if ($errors->has('building'))
                                    <span class="help-block">
                                        <strong>
                                            {{ $errors->first('building') }}
                                        </strong>
                                    </span>
                                @endif
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group{{ $errors->has('floor') ? ' has-error' : '' }}">
                                <label for="floor" class="control-label">floor</label>
                                <input id="floor"
                                       type="text"
                                       class="form-control"
                                       name="floor"
                                       placeholder="floor"
                                       value="{{ $element->floor }}"
                                       autofocus>
                                @if ($errors->has('floor'))
                                    <span class="help-block">
                                        <strong>
                                            {{ $errors->first('floor') }}
                                        </strong>
                                    </span>
                                @endif
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group{{ $errors->has('apartment') ? ' has-error' : '' }}">
                                <label for="apartment" class="control-label">apartment</label>
                                <input id="apartment"
                                       type="text"
                                       class="form-control"
                                       name="apartment"
                                       placeholder="apartment"
                                       value="{{ $element->apartment }}"
                                       autofocus>
                                @if ($errors->has('apartment'))
                                    <span class="help-block">
                                        <strong>
                                            {{ $errors->first('apartment') }}
                                        </strong>
                                    </span>
                                @endif
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group{{ $errors->has('country') ? ' has-error' : '' }}">
                                <label for="country" class="control-label">country *</label>
                                <input id="country"
                                       type="text"
                                       class="form-control"
                                       name="country"
                                       value="{{ $element->country }}"
                                       placeholder="country"
                                       required autofocus>
                                @if ($errors->has('country'))
                                    <span class="help-block">
                                        <strong>
                                            {{ $errors->first('country') }}
                                        </strong>
                                    </span>
                                @endif
                            </div>
                        </div>


                        <div class="col-md-6">
                            <div class="form-group">
                                <label class="control-label sbold">active</label></br>
                                <label class="radio-inline">
                                    <input type="radio" name="active" id="optionsRadios1" {{ $element->active ? 'checked' : null }}
                                    value="1"> active </label>
                                <label class="radio-inline">
                                    <input type="radio" name="active" id="optionsRadios2" {{ !$element->active ? 'checked' : null }}
                                    value="0"> not_Active</label>
                            </div>
                        </div>

                        <div class="col-lg-12">
                            @include('backend.partials.forms._btn-group')
                        </div>

                    </div>
            </form>
        </div>
    </div>
@endsection