@section('arabic-css')
    @parent
    <style>
        .owl-wrapper {
            width: 1189px !important;
            left: 900px;
        }

        .owl-prev {
            display: none !important;
        }
    </style>
@endsection
<div class="simpleLens-gallery-container" id="p-view">
    <div class="simpleLens-container tab-content">
        <div class="tab-pane active" id="p-view-{{ $product->id }}">
            <div class="simpleLens-big-image-container">
                <a class="simpleLens-lens-image" data-lens-image="{{ asset(env('LARGE').$product->image) }}">
                    <img src="{{ asset(env('LARGE').$product->image) }}" class="simpleLens-big-image img-mobile"
                         alt="{{ $product->name }}">
                </a>
            </div>
        </div>
        @foreach($product->gallery->images as $image)
            <div class="tab-pane" id="p-view-{{ $product->id.'-'.$image->id }}">
                <div class="simpleLens-big-image-container">
                    <a class="simpleLens-lens-image" data-lens-image="{{ asset(env('LARGE').$image->path) }}">
                        <img src="{{ asset(env('LARGE').$image->path) }}" class="simpleLens-big-image"
                             alt="{{ $image->caption }}">
                    </a>
                </div>
            </div>
        @endforeach
    </div>
    <!-- Simple Lence Thumbnail -->
    <div class="simpleLens-thumbnails-container text-center">
        <div id="single-product" class="owl-carousel custom-carousel">
            <ul class="nav nav-tabs" role="tablist">
                <li class="active"><a href="#p-view-{{ $product->id }}" role="tab" data-toggle="tab">
                        <img src="{{ asset(env('THUMBNAIL').$product->image) }}" alt="{{ $product->name }}"
                             style="height : 100px">
                    </a>
                </li>
            </ul>
            @foreach($product->gallery->images as $image)
                <ul class="nav nav-tabs" role="tablist">
                    <li class="{{ $loop->last ? 'last-li' : 'hidden-sm hidden-xs' }} ">
                        <a href="#p-view-{{ $product->id.'-'.$image->id }}" role="tab" data-toggle="tab">
                            <img src="{{ asset(env('THUMBNAIL').$image->path) }}" alt="{{ $image->caption }}"
                                 style="height : 100px">
                        </a>
                    </li>
                </ul>
            @endforeach
        </div>
    </div><!-- End Simple Lence Thumbnail -->
</div><!-- End Simple Lence Gallery Container -->