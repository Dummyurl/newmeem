<!-- PAGE -->
<section class="page-section">
    <div class="container">
        <div class="row">
            {{--{{ dd($categories) }}--}}
            @foreach($categoriesMain->where('is_home', true)->sortBy('order') as $parent)
                <div class="col-md-6">
                    <div class="thumbnail no-border no-padding thumbnail-banner size-2x3">
                        <div class="media">
                            <a class="media-link"
                               style="background-image: url({{ asset(env('MEDIUM').$parent->image) }});
                                       background-position: center; /* Center the image */
                                       background-repeat: no-repeat; /* Do not repeat the image */
                                       background-size: cover; /* Resize the background image to cover the entire container */
                                       "
                               href="{{ route('frontend.product.search', ['category_id' => $parent->id]) }}">
                                {{--<div class="img-bg"></div>--}}
                                {{--<div class="caption">--}}
                                {{--<div class="caption-wrapper div-table">--}}
                                {{--<div class="caption-inner div-cell">--}}
                                {{--<h2 class="caption-title"><span>{{ $parent->name }}</span>--}}
                                {{--</h2>--}}
                                {{--@if($parent->description)--}}
                                {{--<h3 class="caption-sub-title">--}}
                                {{--<span>{{ $parent->description }}</span>--}}
                                {{--</h3>--}}
                                {{--@endif--}}
                                {{--<span class="btn btn-theme btn-theme-sm">{{ trans('general.shop_now') }}</span>--}}
                                {{--</div>--}}
                                {{--</div>--}}
                                {{--</div>--}}
                            </a>
                        </div>
                    </div>
                    {{--@endif--}}
                </div>
            @endforeach
        </div>
    </div>
</section>
<!-- /PAGE -->