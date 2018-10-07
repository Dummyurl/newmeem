@extends('backend.layouts.app')
@section('content')
    <div class="portlet box blue">
        @include('backend.partials.forms.form_title')
        <div class="portlet-body form">
            <form role="form" method="post"
                  class="horizontal-form"
                  action="{{ route('backend.setting.update',$element->id) }}" enctype="multipart/form-data">
                @csrf
                <input type="hidden" name="_method" value="patch">
                <div class="form-body">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="form-body">
                                <div class="form-group form-md-line-input">
                                    <input type="text" class="form-control" name="company_ar" placeholder="..."
                                           value="{{ $element->company_ar }}">
                                    <label for="form_control_1">Name Ar*</label>
                                    <span class="help-block">Website or Company Name Ar</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="form-body">
                                <div class="form-group form-md-line-input">
                                    <input type="text" class="form-control" name="company_en" placeholder="..."
                                           value="{{ $element->company_en }}">
                                    <label for="form_control_1">Name En*</label>
                                    <span class="help-block">Website or Company Name En</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="form-body">
                                <div class="form-group form-md-line-input">
                                    <input type="file" class="form-control" name="logo" placeholder="...">
                                    <label for="form_control_1">Logo*</label>
                                    <span class="help-block">logo will appear in the website</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="form-body">
                                <div class="form-group form-md-line-input">
                                    <input type="file" class="form-control" name="size_chart" placeholder="...">
                                    <label for="form_control_1">Size Chart</label>
                                    <span class="help-block">size_chart will appear in the website 600 * 600 </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="form-body">
                                <div class="form-group form-md-line-input">
                                    <input type="text" class="form-control" name="instagram" placeholder="..."
                                           value="{{ $element->instagram }}">
                                    <label for="form_control_1">instagram URL*</label>
                                    <span class="help-block">instagram</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="form-body">
                                <div class="form-group form-md-line-input">
                                    <input type="text" class="form-control" name="snapchat" placeholder="..."
                                           value="{{ $element->snapchat }}">
                                    <label for="form_control_1">snapchat URL*</label>
                                    <span class="help-block">snapchat</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="form-body">
                                <div class="form-group form-md-line-input">
                                    <input type="text" class="form-control" name="twitter" placeholder="..."
                                           value="{{ $element->twitter }}">
                                    <label for="form_control_1">URL twitter*</label>
                                    <span class="help-block">twitter</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="row">
                    <div class="col-lg-4">
                        <div class="form-body">
                            <div class="form-group form-md-line-input">
                                <input type="text" class="form-control" name="youtube" placeholder="..."
                                       value="{{ $element->youtube }}">
                                <label for="form_control_1">youtube</label>
                                <span class="help-block">youtube</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="form-body">
                            <div class="form-group form-md-line-input">
                                <input type="text" class="form-control" name="facebook" placeholder="..."
                                       value="{{ $element->facebook }}">
                                <label for="form_control_1">facebook</label>
                                <span class="help-block">facebook</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="form-body">
                            <div class="form-group form-md-line-input">
                                <input type="text" class="form-control" name="phone" placeholder="..."
                                       value="{{ $element->phone }}">
                                <label for="form_control_1">phone</label>
                                <span class="help-block">phone</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="form-body">
                            <div class="form-group form-md-line-input">
                                <input type="text" class="form-control" name="mobile" placeholder="..."
                                       value="{{ $element->mobile }}">
                                <label for="form_control_1">mobile</label>
                                <span class="help-block">mobile</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="form-body">
                            <div class="form-group form-md-line-input">
                                <input type="text" class="form-control" name="whatsapp" placeholder="..."
                                       value="{{ $element->whatsapp }}">
                                <label for="form_control_1">whatsapp</label>
                                <span class="help-block">whatsapp</span>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="row">
                    <div class="col-lg-2">
                        <div class="form-body">
                            <div class="form-group form-md-line-input">
                                <input type="text" class="form-control" name="email" placeholder="..."
                                       value="{{ $element->email }}">
                                <label for="form_control_1">email</label>
                                <span class="help-block">email</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="form-body">
                            <div class="form-group form-md-line-input">
                                <input type="text" class="form-control" name="address_ar" placeholder="..."
                                       value="{{ $element->address_ar }}">
                                <label for="form_control_1">address_ar</label>
                                <span class="help-block">address_ar</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="form-body">
                            <div class="form-group form-md-line-input">
                                <input type="text" class="form-control" name="address_en" placeholder="..."
                                       value="{{ $element->address_en }}">
                                <label for="form_control_1">address_en</label>
                                <span class="help-block">address_en</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="form-body">
                            <div class="form-group form-md-line-input">
                                <input type="text" class="form-control" name="country_ar" placeholder="..."
                                       value="{{ $element->country_ar }}">
                                <label for="form_control_1">country_ar</label>
                                <span class="help-block">country_ar</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="form-body">
                            <div class="form-group form-md-line-input">
                                <input type="text" class="form-control" name="country_en" placeholder="..."
                                       value="{{ $element->country_en }}">
                                <label for="form_control_1">country_en</label>
                                <span class="help-block">country_en</span>
                            </div>
                        </div>
                    </div>

                </div>


                @include('backend.partials.forms._btn-group')
            </form>
        </div>
@endsection