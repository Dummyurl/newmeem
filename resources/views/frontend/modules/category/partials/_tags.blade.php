@if(isset($tags) && !$tags->isEmpty())
    <div class="layout-title bottom-tag">
        <h4>{{ trans('general.tags') }}</h4>
        <div class="shop-layout">
            <div class="popular-tag">
                <div class="tag-list">
                    <ul>
                        @foreach($tags as $tag)
                            {{--<li><a href="{{ route('product.tags',[$tag->name]) }}"--}}
                            {{--style="font-size: {!!rand(6,20)!!}px !important;">{{ $tag->name }}</a></li>--}}
                            <li>
                                <a style="color: green;"
                                   href="{!! request()->fullUrlWithQuery(['tag_id' => $tag->id]) !!}">
                                    {{ $tag->slug }}
                                </a>
                            </li>
                        @endforeach
                    </ul>
                </div>
            </div>
        </div><!-- End Shop Layout -->
    </div>
@endif
