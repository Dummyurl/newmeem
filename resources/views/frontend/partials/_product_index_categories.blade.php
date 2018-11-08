<div class="widget shop-categories">
    <h4 class="widget-title">{{ trans('general.categories') }}</h4>
    <div class="widget-content">
        <ul>
            @if($categoriesList->isNotEmpty())
                @if(request()->has('category_id') && $categoriesList->where('id',request('category_id'))->isNotEmpty())
                    @foreach($categoriesList->where('id',request('category_id')) as $parent)
                        <li>
                            <span class="arrow"><i class="fa fa-angle-down"></i></span>
                            <a href="{!! request()->fullUrlWithQuery(['category_id' => $parent->id]) !!}">
                                {{ $parent->name }}
                                <span class="count">{{ $parent->children->pluck('products')->flatten()->unique()->count() }}</span>
                            </a>
                            @if(!$parent->children->isEmpty())
                                <ul class="children active">
                                    @foreach($parent->children as $child)
                                        <li>
                                            <a href="{!! request()->fullUrlWithQuery(['category_id' => $child->id]) !!}">{{ $child->name }}
                                                <span class="count">{{ $child->products->unique('id')->count() }}</span>
                                            </a>
                                        </li>
                                    @endforeach
                                </ul>
                            @endif
                        </li>
                    @endforeach
                @else
                    @foreach($categoriesList as $cat)
                        <li>
                            <span class="arrow"><i class="fa fa-angle-down"></i></span>
                            <a href="{!! request()->fullUrlWithQuery(['category_id' => $cat->id]) !!}">
                                {{ $cat->name }}
                                <span class="count">{{ $cat->products->unique('id')->count() }}</span>
                            </a>
                            @if(!$cat->children->isEmpty())
                                <ul class="children active">
                                    @foreach($cat->children as $sub)
                                        <li>
                                            <a href="{!! request()->fullUrlWithQuery(['category_id' => $sub->id]) !!}">{{ $sub->name }}
                                                <span class="count">{{ $sub->products->unique('id')->count() }}</span>
                                            </a>
                                            @if($sub->children->isNotEmpty())
                                                <ul class="children active">
                                                    @foreach($sub->children as $child)
                                                        <li>
                                                            <a href="{!! request()->fullUrlWithQuery(['category_id' => $child->id]) !!}">{{ $child->name }}
                                                                <span class="count">{{ $child->products->unique('id')->count() }}</span>
                                                            </a>
                                                        </li>
                                                    @endforeach
                                                </ul>
                                            @endif
                                        </li>
                                    @endforeach
                                </ul>
                            @endif
                        </li>
                    @endforeach
                @endif
            @endif
        </ul>
    </div>
</div>