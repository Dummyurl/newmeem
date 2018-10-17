<!-- PAGE -->
@if(!$brands->isEmpty())
    <section class="page-section">
        <div class="container">
            <h2 class="section-title"><span>{{ trans('general.brands') }}</span></h2>
            <div class="partners-carousel">
                <div class="owl-carousel" id="partners">
                    @foreach($brands as $brand)
                        <div><a href="{{ route('frontend.product.search',['brand_id' => $brand->id]) }}"><img
                                        src="{{ asset(env('THUMBNAIL').$brand->image) }}" alt="{{ $brand->slug }}"/></a>
                        </div>
                    @endforeach
                </div>
            </div>
        </div>
    </section>
@endif
<!-- /PAGE -->