@if(isset($brands) && !$brands->isEmpty())
    <div class="single-layout">
        <div class="layout-title">
            <h3>{{ trans('general.brands') }}</h3>
        </div>
        <div class="layout-list">
            <ul>
                @foreach($brands as $brand)
                    <li><a href="{!! request()->fullUrlWithQuery(['brand_id' => $brand->id]) !!}">{{ $brand->slug }}</a>
                    </li>
                @endforeach
            </ul>
        </div>
    </div>
@endif