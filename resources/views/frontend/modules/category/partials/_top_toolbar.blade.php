<div class="shop-sorting">
    <div class="row">
        <div class="col-sm-8">
            <form class="form-inline" action="">
                <div class="form-group selectpicker-wrapper">
                    <select
                            class="selectpicker input-price" data-live-search="true"
                            id="sort"
                            data-width="100%"
                            data-toggle="tooltip" title="{{ trans("general.sort_by") }}">
                        <option value="position">{{ trans('general.sort') }}</option>
                        <option value="name">{{ trans('general.alphabetic') }}</option>
                        <option value="asc" sort="asc">{{ trans('general.lowest_to_highest') }}</option>
                        <option value="desc" sort="desc">{{ trans('general.highest_to_lowest') }}</option>
                    </select>
                </div>
            </form>
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