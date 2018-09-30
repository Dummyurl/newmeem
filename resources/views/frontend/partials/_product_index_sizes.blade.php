@if(isset($sizes) && !$sizes->isEmpty())
    <div class="single-layout">
        <div class="layout-title">
            <h4>{{ trans('general.sizes') }}</h4>
        </div>
        <div class="layout-list">
            <ul>
                @foreach($sizes as $size)
                    <li><a href="{!! request()->fullUrlWithQuery(['size_id' => $size->id]) !!}">{{ $size->name }}</a>
                    </li>
                @endforeach
            </ul>
        </div>
    </div>
@endif