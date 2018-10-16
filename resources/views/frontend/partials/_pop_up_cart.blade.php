<!-- Popup: Shopping cart items -->
<div class="modal fade popup-cart" id="popup-cart" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
        <div class="container">
            <div class="cart-items">
                @if(!$cart->isEmpty())
                    <div class="cart-items-inner">
                        @foreach($cart as $product)
                            <div class="media">
                                <a class="pull-left" href="{{ route('frontend.product.show', $product->id) }}"><img class="media-object item-image"
                                                                   src="{{ asset(env('THUMBNAIL').$product->options->product->image) }}"
                                                                   alt="{{ $product->name }}"></a>
                                <p class="pull-right item-price">{{ $product->convertedPrice }}</p>
                                <div class="media-body">
                                    <h4 class="media-heading item-title"><a href="{{ route('frontend.product.show', $product->id) }}">{{ $product->options->sizeName }} - {{ $product->name }}</a></h4>
                                    <p class="item-desc">{{ $product->options->colorName }} - {{ $product->price }} {{ $currency->symbol }}</p>
                                </div>
                            </div>
                        @endforeach
                        <div class="media">
                            <p class="pull-right item-price">{{ $cart->pluck('price')->sum() }} {{ $currency->symbol }}</p>
                            <div class="media-body">
                                <h4 class="media-heading item-title summary">{{ trans('general.sub_total') }}</h4>
                            </div>
                        </div>
                        <div class="media">
                            <div class="media-body">
                                <div>
                                    <a href="#" class="btn btn-theme btn-theme-dark" data-dismiss="modal">{{ trans('general.close') }}</a>
                                    <a href="{{ route('frontend.cart.index') }}" class="btn btn-theme btn-theme-transparent btn-call-checkout">{{ trans('general.checkout') }}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                @else
                    <div class="cart-items-inner">
                        <div class="media">
                            <div class="label label-default">
                                {{ trans('general.empty') }}
                            </div>
                        </div>
                    </div>
                @endif
            </div>
        </div>
    </div>
</div>
<!-- /Popup: Shopping cart items -->