<!-- Popup: Shopping cart items -->
<div class="modal fade popup-cart" id="popup-cart" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
        <div class="container">
            <div class="cart-items {{ app()->isLocale('ar') ? 'pull-right' : 'pull-left' }}">
                @if(!$cart->isEmpty())
                    <div class="cart-items-inner">
                        @foreach($cart as $item)
                            <div class="media">
                                <a class="pull-{{ app()->isLocale('ar') ? 'right' : 'left' }}" href="{{ route('frontend.product.show', $item->options->product->id) }}"><img class="media-object item-image"
                                                                                                                                                                             src="{{ asset(env('THUMBNAIL').$item->options->product->image) }}"
                                                                                                                                                                             alt="{{ $item->name }}"></a>
                                <p class="pull-{{ app()->isLocale('ar') ? 'right' : 'left' }} item-price">{{ $item->convertedPrice }}</p>
                                <div class="media-body">
                                    <h4 class="media-heading item-title"><a href="{{ route('frontend.product.show', $item->options->product->id) }}">{{ $item->options->sizeName }} - {{ $item->name }}</a></h4>
                                    <p class="item-desc">{{ $item->options->colorName }} - {{ $item->price }} {{ $currency->symbol }}</p>
                                </div>
                            </div>
                        @endforeach
                        <div class="media">
                            <p class="pull-{{ app()->isLocale('ar') ? 'right' : 'left' }} item-price">{{ $cart->pluck('price')->sum() }} {{ $currency->symbol }}</p>
                            <div class="media-body">
                                <h4 class="media-heading item-title summary">{{ trans('general.sub_total') }}</h4>
                            </div>
                        </div>
                        <div class="media">
                            <div class="media-body">
                                <div>
                                    <a href="#" class="btn btn-theme btn-theme-dark" data-dismiss="modal">{{ trans('general.close') }}</a>
                                    <a href="{{ route('frontend.cart.index') }}" class="btn btn-theme btn-theme-transparent btn-call-checkout">{{ trans('general.checkout') }}</a>
                                    <a href="{{ route('frontend.cart.clear') }}" class="btn btn-theme btn-theme-transparent btn-call-checkout">{{ trans('general.clear') }}</a>
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