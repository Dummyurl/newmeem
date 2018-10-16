<div class="price-box" style="border-top: 1px solid grey; padding-top: 20px; margin : 10px">
    @if($product->on_sale)
        <span class="old-price">
        {{ $product->price }}  {{ trans('general.kwd') }}
        </span>
        <span class="new-price">
        {{ $product->sale_price }}  {{ trans('general.kwd') }}
        </span>
        @if($currency->symbol !== 'KWD')
            <div>
                <p style="margin: 0px;padding-top: 15px;font-size: 10px;">{{trans('general.approximately')}}</p>
                <span class="old-price" style="font-size: 13px;">
        {{ $product->convertedPrice }}  {{ $currency->symbol }}
        </span>
                <span class="new-price" style="font-size: 13px;">
        {{ $product->convertedSalePrice }}  {{ $currency->symbol }}
        </span>
            </div>
        @endif
    @else
        <span class="new-price">{{ $product->convertedPrice }}  {{ $currency->symbol }}</span>
        @if($currency->symbol != 'KWD')
            <div>
                <p style="margin: 0px;padding-top: 15px;font-size: 10px;">{{ trans('general.approx') }}.</p>
                <span class="new-price"
                      style="font-size: 13px;">{{ $product->convertedSalePrice }} - {{ trans('general.kwd') }}
        </span>
            </div>
        @endif
    @endif

</div>