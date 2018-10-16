<!-- Single Description Tab -->
<div class="single-product-description">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="product-description-tab custom-tab">
                    <!-- tab bar -->
                    <ul class="nav nav-tabs" role="tablist">
                        <li class="active">
                            <a href="#product-des" data-toggle="tab">{{ trans('general.product_description') }}</a>
                        </li>
                        <li>
                            <a href="#product-tag" data-toggle="tab">{{ trans('general.product_tags') }}</a>
                        </li>
                        <li>
                            <a href="#product-notes" data-toggle="tab">{{ trans('general.notes') }}</a>
                        </li>
                    </ul>
                    <!-- Tab Content -->
                    <div class="tab-content">
                        <div class="tab-pane active" id="product-des">
                            <p>{!! $product->description !!}</p>
                        </div>
                        <div class="tab-pane" id="product-notes">
                            <p>{!! $product->notes !!}</p>
                        </div>
                        <div class="tab-pane" id="product-tag">
                            <h2>{{ trans('general.product_tags') }}</h2>
                            <div class="popular-tag">
                                <div class="tag-list">
                                    <ul>
                                        @foreach($product->tags as $tag)
                                            <li><a href="{{ route('frontend.product.search',['tag_id' => $tag->id]) }}"
                                                   style="font-size: {!!rand(12,20)!!}px !important;">{{ $tag->slug }}</a></li>
                                        @endforeach
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- End Single Description Tab -->