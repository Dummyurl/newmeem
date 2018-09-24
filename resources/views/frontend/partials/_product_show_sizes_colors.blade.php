<div class="col-lg-12">
    <div class="add-to-cart cart-sin-product">
        <div class="quick-add-to-cart">
            <form method="post" class="cart" action="{{ route('frontend.cart.add') }}">
                @csrf
                <div class="col-lg-12">
                    <input type="hidden" name="product_id" value="{{ $product->id }}" id="product_id">
                    <div class="col-lg-6 col-xs-6 cart-btn">
                        <select name="color_id" id="color"
                                class="dropdown-size">
                            <option value="">{{ trans('general.select_color') }}</option>
                            @foreach($product->product_attributes->unique('color')->pluck('color') as $color)
                                <option value="{{ $color->id }}">{{ $color->name }}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="col-lg-6 col-xs-6">
                        @foreach($product->product_attributes->unique('color')->pluck('color') as $color)
                            <div class="col-lg-1 col-xs-5"
                                 data-toggle="tooltip"
                                 title="{{ $product->product_attributes->where('color_id', $color->id)->first()->notes }}"
                                 style="background-color: {{ $color->code }}; width : 42px; height : 42px; margin-left: 3px; margin-right: 3px;">
                            </div>
                        @endforeach
                    </div>
                    <div class="col-lg-6 col-xs-8 cart-btn">
                        <select name="size_id" id="size" class="dropdown-size">
                            <option value="">{{ trans('general.select_size') }}</option>
                        </select>
                    </div>
                    <div class="col-lg-3 col-xs-4 cart-btn">
                        <div class="qty-button">
                            <input type="text" class="input-text qty" title="Qty" value="0" maxlength="1" id="qty"
                                   name="qty">

                            <div class="box-icon button-plus">
                                <input type="button" class="qty-increase "
                                       value="+">
                            </div>
                            <div class="box-icon button-minus">
                                <input type="button" class="qty-decrease"
                                       value="-">
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-xs-12 cart-btn">
                        <div class="add-to-cart">
                            <button type="submit">{{ trans('general.add_to_cart') }}</button>
                        </div>
                    </div>
                    <div class="col-lg-4 col-xs-12 cart-btn">
                        <a href="#" data-toggle="modal" data-target="#imagemodal"
                           title="Check Item Sizes!" class="btn-size-chart">
                            {{ trans('general.size_charts') }}</a>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
@if(!is_null($product->size_chart_image) || $settings->size_chart)
    <div class="modal fade" id="imagemodal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
         aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal"
                            style="padding-left: 15px; padding-right: 15px;"><span
                                aria-hidden="true">&times;</span><span
                                class="sr-only"> {{ trans('general.close') }}</span></button>
                    <h4 class="modal-title" id="myModalLabel">{{ trans('general.size_charts') }}</h4>
                </div>
                <div class="modal-body" style="text-align: center;">
                    <img src="{{ !is_null($product->size_chart_image) ? asset(env('LARGE').$product->size_chart_image) : asset(env('LARGE').$settings->size_chart) }}"
                         id="imagepreview"
                         style="width: 400px; height: 264px;">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default"
                            data-dismiss="modal">{{ trans('general.close') }}</button>
                </div>
            </div>
        </div>
    </div>
@endif
<!-- END quickview product -->
