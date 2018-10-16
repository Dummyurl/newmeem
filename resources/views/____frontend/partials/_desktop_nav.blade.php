<div class="header-bottom hidden-xs">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12">
                <!-- main-menu start -->
                <div class="main-menu">
                    <nav>
                        <ul>
                            <li><a class="no-child" href="{{URL('/')}}">{{ trans('general.home') }}</a></li>
                            @if(!$categories->isEmpty())
                                @foreach($categories->where('is_home',true)->sortBy('order') as $category)
                                    <li>
                                        <a href="{{ route('frontend.product.search',['category_id' => $category->id]) }}">{{ $category->name }}</a>
                                        <!-- mega menu start -->
                                        @if(count($category->children->where('is_home', true)) > 0)
                                            <div class="mega-menu mega-menu3">
                                                @foreach($category->children->where('is_home', true)->sortBy('order') as $child)
                                                    <span>
                                                                <a class="mega-headline"
                                                                   href="{{ route('frontend.product.search',['category_id' => $child->id]) }}">{{ $child->name }}</a>
                                                        @if(count($child->children->where('is_home', true)) > 0)
                                                            @foreach($child->children->where('is_home',true)->sortBy('order') as $subChild)
                                                                <a href="{{ route('frontend.product.search',['category_id' => $subChild->id]) }}">{{ $subChild->name }}</a>
                                                            @endforeach
                                                        @endif
                                                            </span>

                                                @endforeach
                                            </div>
                                        @endif
                                    </li>
                                @endforeach
                            @endif
                            @if(!$pages->where('on_menu_desktop', true)->isEmpty())
                                @foreach($pages->where('on_menu_desktop', true) as $page)
                                    <li>
                                        <a class="no-child"
                                           href="{{ $page->url }}">{{ $page->slug }}</a>
                                    </li>
                                @endforeach
                            @endif
                        </ul>
                    </nav>
                </div>
                <!-- main-menu end -->
            </div>
        </div>
    </div>
</div>