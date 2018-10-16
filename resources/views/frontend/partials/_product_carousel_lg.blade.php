<section class="page-section dark">
    <div class="container">
        <h2 class="section-title"><span>{{ $title }}</span></h2>
        <div class="featured-products-carousel">
            <div class="productCarousel owl-carousel">
                @foreach($elements as $element)
                    <div class="thumbnail bordered no-padding">
                        <div class="media">
                            <a class="media-link" data-gal="prettyPhoto"
                               href="{{ asset(env('LARGE').$element->image) }}">
                                <img src="{{ asset(env('THUMBNAIL').$element->image) }}" alt="{{ $element->name }}"/>
                                <span class="icon-view">
                                    <strong><i class="fa fa-eye"></i></strong>
                                </span>
                            </a>
                        </div>
                        <div class="caption text-center">
                            <h4 class="caption-title"><a
                                        href="{{ route('frontend.product.show', $element->id) }}">{{ $element->name }}</a>
                            </h4>
                            <div class="rating">
                            {{--<span class="star"></span>--}}
                            {{----><span class="star active"></span><!----}}
                            {{----><span class="star active"></span><!----}}
                            {{----><span class="star active"></span><!----}}
                            {{----><span class="star active"></span>--}}
                                {{--<strong><i class="fa fa-heart"></i></strong>--}}
                            </div>

                            <div class="price">
                                @if($element->isOnSale)
                                    <ins>{{ $element->convertedSalePrice}} <span>{{ $currency->symbol }}</span></ins>
                                    <del>{{ $element->convertedPrice }} <span>{{ $currency->symbol }}</span></del>
                                @else
                                    <ins>{{ $element->convertedPrice }} <span>{{ $currency->symbol }}</span></ins>
                                @endif
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
    </div>
</section>