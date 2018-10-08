@if(isset($sizes) && !$sizes->isEmpty())
    <div class="single-layout">
        <div class="layout-title">
            <h4>{{ trans('general.sizes') }}</h4>
        </div>
        <div class="list-default">
            <ul>
                @foreach($sizes as $size)
                    <hr>
                    <li style="display : flex; justify-content: flex-start; align-items: center; font-size: medium; text-decoration : none">
                        <a href="{!! request()->fullUrlWithQuery(['size_id' => $size->id]) !!}" style="color : grey">
                            <i class="fa fa-fw fa-1x {{ request('size_id') == $size->id ? 'fa-check-square' : 'fa-square-o' }}"></i>
                            {{ $size->name }}</a>
                    </li>
                @endforeach
            </ul>
        </div>
    </div>
@endif