@if(isset($categories) && !$categories->isEmpty())
    <div class="single-layout">
        <div class="layout-title">
            <h4>{{ trans('general.categories') }}</h4>
        </div>
        <div class="layout-list">
            <ul>
                @foreach($categories as $category)
                    <li><a href="{!! route('frontend.product.search',['category_id' => $category->id]) !!}">{{ $category->name }}</a>
                    </li>
                @endforeach
            </ul>
        </div>
    </div>
@endif