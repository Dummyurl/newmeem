<div class="main-slider">
    <div class="owl-carousel" id="main-slider">
        @foreach($sliders as $slider)
            <div class="item slide1">
                <img class="slide-img"  src="{{ asset(env('LARGE').$slider->image) }}" alt="{{ $slider->caption }}"/>
                {{--<div class="caption">--}}
                {{--<div class="container">--}}
                {{--<div class="div-table">--}}
                {{--<div class="div-cell">--}}
                {{--<div class="caption-content">--}}
                {{--<h2 class="caption-title"></h2>--}}
                {{--<h3 class="caption-subtitle">Sale</h3>--}}
                {{--<p class="caption-text">--}}
                {{--<a class="btn btn-theme" href="#">Shop Now</a>--}}
                {{--</p>--}}
                {{--</div>--}}
                {{--</div>--}}
                {{--</div>--}}
                {{--</div>--}}
                {{--</div>--}}
            </div>
        @endforeach
    </div>
</div>