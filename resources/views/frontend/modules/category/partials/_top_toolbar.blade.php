<div class="tab-bar">
    {{--<div class="tab-bar-inner">--}}
        {{--<ul class="nav nav-tabs" role="tablist">--}}
            {{--<li class="active"><a href="#shop-grid" data-toggle="tab"><i class="fa fa-th-large"></i></a></li>--}}
            {{--<li><a href="#shop-list" data-toggle="tab"><i class="fa fa-th-list"></i></a></li>--}}
        {{--</ul>--}}
    {{--</div>--}}
    <div class="toolbar">
        <div class="sorter">
            <div class="sort-by">
                <label>Sort By</label>
                <select id="sort" style="height: auto;">
                    <option value="position">{{ trans('general.position') }}</option>
                    <option value="name">{{ trans('general.alphabetic') }}</option>
                    <option value="asc" sort="asc">{{ trans('general.lowest_to_highest') }}</option>
                    <option value="desc" sort="desc">{{ trans('general.highest_to_lowest') }}</option>
                </select>
                <a
                        href="{{ request()->fullUrlWithQuery(['sort' => 'asc']) }}"
                        data-toggle="tooltip"
                        title="{{ trans('general.filter_by_price_from_highest_to_lowest') }}"
                ><i class="fa fa-long-arrow-up"></i></a>
                <a
                        href="{{ request()->fullUrlWithQuery(['sort' => 'desc'])}}"
                        data-toggle="tooltip"
                        title="{{ trans('general.filter_by_price_from_lowest_to_highest') }}"
                ><i class="fa fa-long-arrow-down"></i></a>
            </div>
        </div>
    </div>
</div>
</div>
@section('scripts')
    @parent
    <script type="text/javascript">
        $('#sort').on('change', function(e) {
            var sort = e.target.value;
            window.location.replace('{!! request()->fullUrlWithQuery(['category_id' => request('category_id'), 'brand_id' => request('brand_id'), 'size_id' => request('size_id'), 'sort' => ''])!!}&sort=' + sort);
        });
    </script>
@endsection