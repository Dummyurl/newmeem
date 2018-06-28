<div class="col-lg-12">
    <div class="add-to-cart cart-sin-product">
        <div class="quick-add-to-cart">
            <form method="post" class="cart" action="{{ route('frontend.cart.add') }}">
                @csrf
                <input type="hidden" name="product_id" value="{{ $product->id }}" id="product_id">
                <div class="col-lg-6 cart-btn">
                    <select name="color_id" id="color"
                            class="dropdown-size">
                        <option value="">{{ trans('general.select_color') }}</option>
                        @foreach($product->product_attributes->unique('color')->pluck('color') as $color)
                            <option value="{{ $color->id }}">{{ $color->name }}</option>
                        @endforeach
                    </select>
                </div>
                <div class="col-lg-6">
                    @foreach($product->product_attributes->unique('color')->pluck('color') as $color)
                        <div class="col-lg-1"
                             data-toggle="tooltip"
                             title="{{ $product->product_attributes->where('color_id', $color->id)->first()->notes }}"
                             style="background-color: {{ $color->code }}; width : 42px; height : 42px; margin-left: 3px; margin-right: 3px;">
                        </div>
                    @endforeach
                </div>
                <div class="col-lg-12 cart-btn">
                    <select name="size_id" id="size" class="dropdown-size">
                        <option value="">{{ trans('general.select_size') }}</option>
                    </select>
                </div>
                <div class="col-lg-6 cart-btn">
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
                <div class="col-lg-3 cart-btn">
                    <div class="add-to-cart">
                        <button type="submit">{{ trans('general.add_to_cart') }}</button>
                    </div>
                </div>
                <div class="col-lg-3 cart-btn">
                    <a href="#" data-toggle="modal" data-target="#imagemodal"
                       title="Check Item Sizes!"
                       style="text-decoration: none;border: navajowhite;color: #b2dab7;font-size: 12px;">
                        {{ trans('general.size_charts') }}</a>
                </div>
            </form>
        </div>
    </div>
</div>
