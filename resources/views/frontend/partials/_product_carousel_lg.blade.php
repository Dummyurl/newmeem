<section class="page-section dark">
    <div class="container">
        <h2 class="section-title"><span>{{ $title }}</span></h2>
        <div class="featured-products-carousel">
            <div class="productCarousel owl-carousel">
                @foreach($elements as $element)
                    <div class="thumbnail bordered no-padding">
                        <div class="media">
                            <a class="media-link"
                               @desktop
                               data-gal="prettyPhoto"
                               href="{{ asset(env('LARGE').$element->image) }}"
                               @enddesktop
                            >
                                <img src="{{ asset(env('THUMBNAIL').$element->image) }}" alt="{{ $element->name }}"/>
                                <span class="icon-view">
                                    <strong><i class="fa fa-eye"></i></strong>
                                </span>
                            </a>
                        </div>
                        <div class="caption text-center">
                            <h4 class="caption-title"><a
                                        href="{{ route('frontend.product.show', $element->id) }}">{{ str_limit($element->name,25,'') }}</a>
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
                                    <ins>
                                        <span style="color : red">{{ $element->convertedSalePrice}} </span><span>{{ $currency->symbol }}</span>
                                    </ins>
                                    <del>{{ $element->convertedPrice }} <span>{{ $currency->symbol }}</span></del>
                                @else
                                    <ins>{{ $element->convertedPrice }} <span>{{ $currency->symbol }}</span></ins>
                                @endif
                            </div>
                            @if($element->brands->isNotEmpty())
                                <div class="price">
                                        <a href="{{ route('frontend.product.search',['brand_id' => $element->brands->first()->id]) }}">
                                            {{ trans('general.brand') }} : {{ $element->brands->first()->slug }}
                                        </a>
                                </div>
                            @else
                                <div class="price">
                                    <a href="#">
                                        {{ trans('general.brand') }}
                                    </a>
                                </div>
                            @endif
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
    </div>
</section>