@extends('backend.layouts.app')

@section('content')
    <div class="portlet box blue">
        @include('backend.partials.forms.form_title')
        <div class="portlet-body form">
            <form class="horizontal-form" role="form" method="POST"
                  action="{{ route('backend.product.update',$element->id) }}" enctype="multipart/form-data">
                @csrf
                <input type="hidden" name="_method" value="put">
                <div class="form-body">
                    <h3 class="form-section">Edit Product</h3>
                    {{--name arabic / name english --}}
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group {{ $errors->has('sku') ? ' has-error' : '' }}">
                                <label for="sku" class="control-label">sku *</label>
                                <input id="sku"
                                       type="text"
                                       class="form-control"
                                       name="sku"
                                       value="{{ $element->sku }}"
                                       placeholder="name in arabic"
                                       required autofocus>
                                @if ($errors->has('sku'))
                                    <span class="help-block">
                                        <strong>
                                            {{ $errors->first('sku') }}
                                        </strong>
                                    </span>
                                @endif
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group {{ $errors->has('name_ar') ? ' has-error' : '' }}">
                                <label for="name_ar" class="control-label">Name Arabic*</label>
                                <input id="name_ar"
                                       type="text"
                                       class="form-control"
                                       name="name_ar"
                                       value="{{ $element->name_ar }}"
                                       placeholder="name in arabic"
                                       required autofocus>
                                @if ($errors->has('name_ar'))
                                    <span class="help-block">
                                        <strong>
                                            {{ $errors->first('name_ar') }}
                                        </strong>
                                    </span>
                                @endif
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group{{ $errors->has('name_en') ? ' has-error' : '' }}">
                                <label for="name_en" class="control-label">Name English*</label>
                                <input id="name_en"
                                       type="text"
                                       class="form-control"
                                       name="name_en"
                                       value="{{ $element->name_en }}"
                                       placeholder="name in english"
                                       required autofocus>
                                @if ($errors->has('name_en'))
                                    <span class="help-block">
                                        <strong>
                                            {{ $errors->first('name_en') }}
                                        </strong>
                                    </span>
                                @endif
                            </div>
                        </div>
                    </div>


                    {{-- email + mobile --}}
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group{{ $errors->has('price') ? ' has-error' : '' }}">
                                <label for="price" class="control-label">price *</label>
                                <input id="price"
                                       type="text"
                                       class="form-control"
                                       name="price"
                                       value="{{ $element->price }}"
                                       placeholder="price"
                                       maxlength="5"
                                       required autofocus>
                                @if ($errors->has('price'))
                                    <span class="help-block">
                                        <strong>
                                            {{ $errors->first('price') }}
                                        </strong>
                                    </span>
                                @endif
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group{{ $errors->has('sale_price') ? ' has-error' : '' }}">
                                <label for="sale_price" class="control-label">sale_price *</label>
                                <input id="sale_price"
                                       type="text"
                                       class="form-control"
                                       name="sale_price"
                                       maxlength="5"
                                       value="{{ $element->sale_price }}"
                                       placeholder="sale_price"
                                       autofocus>
                                @if ($errors->has('sale_price'))
                                    <span class="help-block">
                                        <strong>
                                            {{ $errors->first('sale_price') }}
                                        </strong>
                                    </span>
                                @endif
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group{{ $errors->has('weight') ? ' has-error' : '' }}">
                                <label for="weight" class="control-label">weight *</label>
                                <input id="weight"
                                       type="text"
                                       class="form-control"
                                       name="weight"
                                       maxlength="4"
                                       minlength="1"
                                       value="{{ $element->weight }}"
                                       placeholder="weight"
                                       required autofocus>
                                @if ($errors->has('weight'))
                                    <span class="help-block">
                                        <strong>
                                            {{ $errors->first('weight') }}
                                        </strong>
                                    </span>
                                @endif
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-3">
                            <div class="form-group{{ $errors->has('start_sale') ? ' has-error' : '' }}">
                                <label for="start_sale" class="control-label">start_sale Arabic</label>
                                <input id="start_sale"
                                       type="date"
                                       class="form-control"
                                       name="start_sale"
                                       value="{{ $element->start_sale ? $element->start_sale->format('Y-d-m') : null }}"
                                       placeholder="name in arabic"
                                       autofocus>
                                @if ($errors->has('start_sale'))
                                    <span class="help-block">
                                        <strong>
                                            {{ $errors->first('start_sale') }}
                                        </strong>
                                    </span>
                                @endif
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group{{ $errors->has('end_sale') ? ' has-error' : '' }}">
                                <label for="end_sale" class="control-label">end_sale English</label>
                                <input id="end_sale"
                                       type="date"
                                       class="form-control"
                                       name="end_sale"
                                       value="{{ $element->end_sale ? $element->end_sale->format('Y-d-m') : null }}"
                                       placeholder="name in english"
                                       autofocus>
                                @if ($errors->has('end_sale'))
                                    <span class="help-block">
                                        <strong>
                                            {{ $errors->first('end_sale') }}
                                        </strong>
                                    </span>
                                @endif
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group">
                                <input type="file" class="form-control" name="image" placeholder="image">
                                <label for="form_control_1">Main Image</label>
                                <div class="help-block text-left">
                                    W * H - Best fit ['1080', '1440'] pixels
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group">
                                <input type="file" class="form-control" name="size_chart_image"
                                       placeholder="size_chart_image">
                                <label for="form_control_1">Image Chart</label>
                                <div class="help-block text-left">
                                    W * H - Best fit 500 x 500 pixels
                                </div>
                                `
                            </div>
                        </div>
                    </div>


                    <div class="row">
                        <hr>
                        <div class="col-md-6">
                            <div class="form-group{{ $errors->has('notes_ar') ? ' has-error' : '' }}">
                                <label for="notes_ar" class="control-label">notes_ar arabic</label>
                                <input id="notes_ar"
                                       type="text"
                                       class="form-control"
                                       name="notes_ar"
                                       placeholder="notes_ar arabic"
                                       value="{{ $element->notes_ar }}"
                                       autofocus>
                                @if ($errors->has('notes_ar'))
                                    <span class="help-block">
                                        <strong>
                                            {{ $errors->first('notes_ar') }}
                                        </strong>
                                    </span>
                                @endif
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group{{ $errors->has('notes_en') ? ' has-error' : '' }}">
                                <label for="notes_en" class="control-label">notes_en english</label>
                                <input id="notes_en"
                                       type="text"
                                       class="form-control"
                                       name="notes_en"
                                       placeholder="notes_en"
                                       value="{{ $element->notes_en }}"
                                       autofocus>
                                @if ($errors->has('notes_en'))
                                    <span class="help-block">
                                        <strong>
                                            {{ $errors->first('notes_en') }}
                                        </strong>
                                    </span>
                                @endif
                            </div>
                        </div>
                    </div>


                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="description" class="control-label">description arabic</label>
                                <textarea type="text" class="form-control" id="description_ar" name="description_ar"
                                          aria-multiline="true" maxlength="500">{{ $element->description_ar }}</textarea>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="description" class="control-label">description english</label>
                                <textarea type="text" class="form-control" id="description_en" name="description_en"
                                          aria-multiline="true" maxlength="500">{{ $element->description_en }}</textarea>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <hr>
                        <div class="col-lg-4">
                            <div class="form-group">
                                <label class="control-label">Categories</label>
                                <select multiple="multiple" class="multi-select" id="my_multi_select1"
                                        name="categories[]">
                                    @foreach($categories as $category)
                                        <option value="{{ $category->id }}"
                                                {{ in_array($category->id,$element->categories->pluck('id')->toArray()) ? 'selected' : null  }} style="background-color: {{ $category->isParent ? 'lightblue' : null  }}">{{ $category->name }}</option>
                                        @if(!$category->children->isEmpty())
                                            @foreach($category->children as $child)
                                                <option value="{{ $child->id }}"
                                                        {{ in_array($child->id,$element->categories->pluck('id')->toArray()) ? 'selected' : null  }}  style="padding-left: 15px">{{ $child->name }}</option>
                                                @if(!$child->children->isEmpty())
                                                    @foreach($child->children as $subChild)
                                                        <option value="{{ $subChild->id }}"
                                                                {{ in_array($subChild->id,$element->categories->pluck('id')->toArray()) ? 'selected' : null  }}  style="padding-left: 35px">{{ $subChild->name }}</option>
                                                    @endforeach
                                                @endif
                                            @endforeach
                                        @endif
                                    @endforeach
                                </select>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="form-group">
                                <label class="control-label">Tags</label>
                                <select multiple="multiple" class="multi-select" id="my_multi_select2"
                                        name="tags[]">
                                    @foreach($tags as $tag)
                                        <option value="{{ $tag->id }}" {{ in_array($tag->id,$element->tags->pluck('id')->toArray()) ? 'selected' : null  }} >{{ $tag->name }}</option>
                                    @endforeach
                                </select>
                            </div>
                        </div>
                        @if(!$brands->isEmpty())
                            <div class="col-lg-4">
                                <div class="form-group">
                                    <label class="control-label">Brands</label>
                                    <select multiple="multiple" class="multi-select" id="my_multi_select3"
                                            name="brands[]">
                                        @foreach($brands as $brand)
                                            <option value="{{ $brand->id }}" {{ in_array($brand->id,$element->brands->pluck('id')->toArray()) ? 'selected' : null  }} >{{ $brand->name }}</option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>
                        @endif
                    </div>

                    <div class="row">
                        <hr>
                        <div class="col-md-3">
                            <div class="form-group">
                                <label class="control-label sbold">active</label></br>
                                <label class="radio-inline">
                                    <input type="radio" name="active" id="optionsRadios3"
                                           {{ $element->active ? 'checked' : null }}
                                           value="1"> active</label>
                                <label class="radio-inline">
                                    <input type="radio" name="active" id="optionsRadios4"
                                           {{ !$element->active ? 'checked' : null }}
                                           value="0">not active</label>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group">
                                <label class="control-label sbold">on_sale</label></br>
                                <label class="radio-inline">
                                    <input type="radio" name="on_sale" id="optionsRadios3"
                                           {{ $element->on_sale ? 'checked' : null }}
                                           value="1"> on_sale</label>
                                <label class="radio-inline">
                                    <input type="radio" name="on_sale" id="optionsRadios4"
                                           {{ !$element->on_sale ? 'checked' : null }}
                                           value="0">not on_sale</label>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group">
                                <label class="control-label sbold">on_sale_on_homepage</label></br>
                                <label class="radio-inline">
                                    <input type="radio" name="on_sale_on_homepage" id="optionsRadios3"
                                           {{ $element->on_sale_on_homepage ? 'checked' : null }}
                                           value="1"> on_sale_on_homepage</label>
                                <label class="radio-inline">
                                    <input type="radio" name="on_sale_on_homepage" id="optionsRadios4"
                                           {{ !$element->on_sale_on_homepage ? 'checked' : null }}
                                           value="0">not on_sale_on_homepage</label>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group">
                                <label class="control-label sbold">on_homepage</label></br>
                                <label class="radio-inline">
                                    <input type="radio" name="on_homepage" id="optionsRadios3"
                                           {{ $element->on_homepage ? 'checked' : null }}
                                           value="1"> on_homepage</label>
                                <label class="radio-inline">
                                    <input type="radio" name="on_homepage" id="optionsRadios4"
                                           {{ !$element->on_homepage ? 'checked' : null }}
                                           value="0">not on_homepage</label>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group">
                                <label class="control-label sbold">check_stock</label></br>
                                <label class="radio-inline">
                                    <input type="radio" name="check_stock" id="optionsRadios5"
                                           {{ $element->check_stock ? 'checked' : null }}
                                           value="1"> check_stock</label>
                                <label class="radio-inline">
                                    <input type="radio" name="check_stock" id="optionsRadios6"
                                           {{ !$element->check_stock ? 'checked' : null }}
                                           value="0">not in check_stock</label>
                                <div class="alert alert-danger text-danger">
                                    <ul>
                                        <li>
                                            If Not whenever a successful order is made. qty will not be decreased
                                            accordingly.
                                        </li>
                                        <li>
                                            if Not Product will be added to cart without checking the current quantity.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    @include('backend.partials.forms._btn-group')
                </div>
            </form>
            <div class="row">
                <div class="col-lg-12">
                    <div class="col-sm-3">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                Main Image
                            </div>
                            <div class="panel-body">
                                <img class="img-responsive img-thumbnail img-sm"
                                     src="{{ asset('storage/uploads/images/thumbnail/'.$element->image) }}" alt="">
                            </div>
                        </div>
                    </div>
                    @if($element->size_chart_image)
                        <div class="col-sm-3">
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    Chart Image
                                </div>
                                <div class="panel-body">
                                    <img class="img-responsive img-thumbnail img-sm"
                                         src="{{ asset('storage/uploads/images/thumbnail/'.$element->size_chart_image) }}"
                                         alt="">
                                </div>
                            </div>
                        </div>
                    @endif
                </div>
            </div>
        </div>
    </div>
@endsection