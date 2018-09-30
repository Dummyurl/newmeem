<!-- BEGIN SIDEBAR -->
<div class="page-sidebar-wrapper">
    <!-- END SIDEBAR -->
    <!-- DOC: Set data-auto-scroll="false" to disable the sidebar from auto scrolling/focusing -->
    <!-- DOC: Change data-auto-speed="200" to adjust the sub menu slide up/down speed -->
    <div class="page-sidebar navbar-collapse collapse">
        <!-- BEGIN SIDEBAR MENU -->
        <!-- DOC: Apply "page-sidebar-menu-light" class right after "page-sidebar-menu" to enable light sidebar menu style(without borders) -->
        <!-- DOC: Apply "page-sidebar-menu-hover-submenu" class right after "page-sidebar-menu" to enable hoverable(hover vs accordion) sub menu mode -->
        <!-- DOC: Apply "page-sidebar-menu-closed" class right after "page-sidebar-menu" to collapse("page-sidebar-closed" class must be applied to the body element) the sidebar sub menu mode -->
        <!-- DOC: Set data-auto-scroll="false" to disable the sidebar from auto scrolling/focusing -->
        <!-- DOC: Set data-keep-expand="true" to keep the submenues expanded -->
        <!-- DOC: Set data-auto-speed="200" to adjust the sub menu slide up/down speed -->
        <ul class="page-sidebar-menu  page-header-fixed page-sidebar-menu-hover-submenu page-sidebar-menu-closed"
            data-keep-expanded="false" data-auto-scroll="true" data-slide-speed="200">
            <li class="nav-item {{ activeItem('product') }}">
                <a href="{{ route('backend.product.index')}}" class="nav-link nav-toggle">
                    <i class="fa fa-fw fa-product-hunt"></i>
                    <span class="title">Products</span>
                    <span class="selected"></span>
                    <span class="arrow open"></span>
                </a>
                <ul class="sub-menu">
                    <li class="nav-item ">
                        <a href="{{ route('backend.product.index') }}" class="nav-link ">
                            <i class="fa fa-fw fa-product-hunt"></i>
                            <span class="title">All Products</span>
                            <span class="arrow"></span>
                        </a>
                    </li>
                    <li class="nav-item ">
                        <a href="{{ route('backend.product.index',['type' => 'active']) }}" class="nav-link ">
                            <i class="fa fa-fw fa-product-hunt"></i>
                            <span class="title">Active Products</span>
                            <span class="arrow"></span>
                        </a>
                    </li>
                    <li class="nav-item ">
                        <a href="{{ route('backend.product.index',['type' => 'on_sale']) }}" class="nav-link ">
                            <i class="fa fa-fw fa-percent"></i>
                            <span class="title">On Sale Products</span>
                            <span class="arrow"></span>
                        </a>
                    </li>
                    <li class="nav-item ">
                        <a href="{{ route('backend.product.create') }}" class="nav-link ">
                            <i class="fa fa-fw fa-plus-square"></i>
                            <span class="title">Create New Product</span>
                            <span class="arrow"></span>
                        </a>
                    </li>
                    <li class="nav-item ">
                        <a href="{{ route('backend.product.trashed') }}" class="nav-link ">
                            <i class="fa fa-fw fa-recycle"></i>
                            <span class="title">Trashed</span>
                            <span class="arrow"></span>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="nav-item {{ activeItem('user') }}">
                <a href="{{ route('backend.user.index')}}" class="nav-link nav-toggle">
                    <i class="fa fa-fw fa-user"></i>
                    <span class="title">Users</span>
                    <span class="selected"></span>
                    <span class="arrow open"></span>
                </a>
            </li>


            <li class="nav-item {{ activeItem('category') }}">
                <a href="{{ route('backend.category.index') }}" class="nav-link nav-toggle">
                    <i class="fa fa-fw fa-list-ol"></i>
                    <span class="title">Categories</span>
                    <span class="arrow"></span>
                </a>
                <ul class="sub-menu">
                    <li class="nav-item ">
                        <a href="{{ route('backend.category.index') }}" class="nav-link ">
                            <i class="fa fa-fw fa-list-ul"></i>
                            <span class="title">Categories</span>
                            <span class="arrow"></span>
                        </a>
                    </li>
                    <li class="nav-item ">
                        <a href="{{ route('backend.category.create') }}" class="nav-link ">
                            <i class="fa fa-fw fa-plus-square"></i>
                            <span class="title">Create Category</span>
                            <span class="arrow"></span>
                        </a>
                    </li>
                </ul>
            </li>

            <li class="nav-item {{ activeItem('country') }}">
                <a href="{{ route('backend.country.index') }}" class="nav-link nav-toggle">
                    <i class="fa fa-fw fa-globe"></i>
                    <span class="title">Countries</span>
                    <span class="arrow"></span>
                </a>
                <ul class="sub-menu">
                    <li class="nav-item ">
                        <a href="{{ route('backend.country.index') }}" class="nav-link nav-toggle">
                            <i class="fa fa-fw fa-globe"></i>
                            <span class="title">Countries Control</span>
                            <span class="arrow"></span>
                        </a>
                        {{--<ul class="sub-menu always-open"> --}}
                        {{--@foreach($countries as $country)--}}
                        {{--<li class="nav-item">--}}
                        {{--<a href="{{ route('backend.country.show',$country->id) }}" class="nav-link ">--}}
                        {{--{{ $country->name }}</a>--}}
                        {{--</li>--}}
                        {{--@endforeach--}}
                        {{--</ul>--}}
                    </li>
                    <li class="nav-item ">
                        <a href="{{ route('backend.country.create') }}" class="nav-link ">
                            <i class="fa fa-fw fa-plus-circle"></i>
                            <span class="title">Add New Country</span>
                        </a>
                    </li>
                </ul>
            </li>

            <li class="nav-item {{ activeItem('currency') }}">
                <a href="{{ route('backend.currency.index') }}" class="nav-link nav-toggle">
                    <i class="fa fa-fw fa-dollar"></i>
                    <span class="title">Currencies</span>
                    <span class="arrow"></span>
                </a>
                <ul class="sub-menu">
                    <li class="nav-item ">
                        <a href="{{ route('backend.currency.index') }}" class="nav-link nav-toggle">
                            <i class="fa fa-fw fa-euro"></i>
                            <span class="title">All Currencies</span>
                            <span class="arrow"></span>
                        </a>
                    </li>
                    <li class="nav-item ">
                        <a href="{{ route('backend.currency.create') }}" class="nav-link nav-toggle">
                            <i class="fa fa-fw fa-plus-circle"></i>
                            <span class="title">Create New Currency</span>
                            <span class="arrow"></span>
                        </a>
                    </li>
                </ul>
            </li>

            <li class="nav-item {{ activeItem('coupon') }}">
                <a href="{{ route('backend.coupon.index') }}" class="nav-link nav-toggle">
                    <i class="fa fa-fw fa-credit-card"></i>
                    <span class="title">Coupons</span>
                    <span class="arrow"></span>
                </a>
                <ul class="sub-menu">
                    <li class="nav-item ">
                        <a href="{{ route('backend.coupon.index') }}" class="nav-link nav-toggle">
                            <i class="fa fa-fw fa-cc-discover"></i>
                            <span class="title">All Coupons</span>
                            <span class="arrow"></span>
                        </a>
                    </li>
                    <li class="nav-item ">
                        <a href="{{ route('backend.coupon.create') }}" class="nav-link nav-toggle">
                            <i class="fa fa-fw fa-plus-circle"></i>
                            <span class="title">Create New Coupon</span>
                            <span class="arrow"></span>
                        </a>
                    </li>
                </ul>
            </li>
            {{--Settings--}}
            <li class="nav-item {{ activeItem('setting', ['policy','term','faq','page','contactus', 'aboutus','gallery','image']) }}">
                <a href="{{ route('backend.setting.index') }}" class="nav-link nav-toggle">
                    <i class="fa fa-fw fa-cogs"></i>
                    <span class="title">App Settings</span>
                    <span class="arrow"></span>
                </a>
                <ul class="sub-menu">
                    <li class="nav-item ">
                        <a href="{{ route('backend.setting.index') }}" class="nav-link ">
                            <i class="fa fa-fw fa-edit"></i>
                            <span class="title">Edit App Settings</span>
                            <span class="arrow"></span>
                        </a>
                    </li>
                    <li class="nav-item ">
                        <a href="{{ route('backend.branch.index') }}" class="nav-link ">
                            <i class="fa fa-fw fa-file-image-o"></i>
                            <span class="title">Branches</span>
                            <span class="arrow"></span>
                        </a>
                    </li>
                    <li class="nav-item ">
                        <a href="{{ route('backend.slider.index') }}" class="nav-link ">
                            <i class="fa fa-fw fa-file-image-o"></i>
                            <span class="title">Sliders</span>
                            <span class="arrow"></span>
                        </a>
                    </li>
                    <li class="nav-item ">
                        <a href="{{ route('backend.package.index') }}" class="nav-link ">
                            <i class="fa fa-fw fa-file-image-o"></i>
                            <span class="title">Shipment Packages</span>
                            <span class="arrow"></span>
                        </a>
                    </li>
                    <li class="nav-item ">
                        <a href="{{ route('backend.aboutus.index') }}" class="nav-link ">
                            <i class="fa fa-fw fa-plus-square-o"></i>
                            <span class="title">Aboutus</span>
                            <span class="arrow"></span>
                        </a>
                        <ul class="sub-menu">
                            <li class="nav-item">
                                <a href="{{ route('backend.aboutus.index') }}" class="nav-link">
                                    <i class="fa fa-fw fa-list-alt"></i> Aboutus
                                    <span class="arrow nav-toggle"></span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="{{ route('backend.aboutus.create') }}" class="nav-link">
                                    <i class="icon-user"></i> Create New Page
                                    <span class="arrow nav-toggle"></span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item ">
                        <a href="{{ route('backend.page.index') }}" class="nav-link ">
                            <i class="fa fa-fw fa-book"></i>
                            <span class="title">pages</span>
                            <span class="arrow"></span>
                        </a>
                        <ul class="sub-menu">
                            <li class="nav-item">
                                <a href="{{ route('backend.page.index') }}" class="nav-link">
                                    <i class="fa fa-fw fa-list-alt"></i> All Pages
                                    <span class="arrow nav-toggle"></span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="{{ route('backend.page.create') }}" class="nav-link">
                                    <i class="icon-plus"></i> Create New Page
                                    <span class="arrow nav-toggle"></span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item ">
                        <a href="{{ route('backend.gallery.index') }}" class="nav-link ">
                            <i class="fa fa-fw fa-file-image-o"></i>
                            <span class="title">Galleries</span>
                            <span class="arrow"></span>
                        </a>
                        <ul class="sub-menu">
                            <li class="nav-item">
                                <a href="{{ route('backend.gallery.index') }}" class="nav-link">
                                    <i class="fa fa-fw fa-file-image-o"></i> All Galleries
                                    <span class="arrow nav-toggle"></span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="{{ route('backend.image.index') }}" class="nav-link">
                                    <i class="fa fa-fw fa-image"></i> All Images
                                    <span class="arrow nav-toggle"></span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item ">
                        <a href="{{ route('backend.term.index') }}" class="nav-link ">
                            <i class="fa fa-fw fa-hand-paper-o"></i>
                            <span class="title">terms</span>
                            <span class="arrow"></span>
                        </a>
                        <ul class="sub-menu">
                            <li class="nav-item">
                                <a href="{{ route('backend.term.index') }}" class="nav-link">
                                    <i class="fa fa-fw fa-list-alt"></i> All Terms
                                    <span class="arrow nav-toggle"></span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="{{ route('backend.term.create') }}" class="nav-link">
                                    <i class="fa fa-fw fa-plus"></i> Create New term
                                    <span class="arrow nav-toggle"></span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item ">
                        <a href="{{ route('backend.faq.index') }}" class="nav-link ">
                            <i class="fa fa-fw fa-question-circle"></i>
                            <span class="title">faqs</span>
                            <span class="arrow"></span>
                        </a>
                        <ul class="sub-menu">
                            <li class="nav-item">
                                <a href="{{ route('backend.faq.index') }}" class="nav-link">
                                    <i class="fa fa-fw fa-list-alt"></i> All Faqs
                                    <span class="arrow nav-toggle"></span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="{{ route('backend.faq.create') }}" class="nav-link">
                                    <i class="icon-plus"></i> Create New Faq
                                    <span class="arrow nav-toggle"></span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item ">
                        <a href="{{ route('backend.policy.index') }}" class="nav-link ">
                            <i class="fa fa-fw fa-plus-square-o"></i>
                            <span class="title">polices</span>
                            <span class="arrow"></span>
                        </a>
                        <ul class="sub-menu">
                            <li class="nav-item">
                                <a href="{{ route('backend.policy.index') }}" class="nav-link">
                                    <i class="fa fa-fw fa-list-alt"></i> All Policies
                                    <span class="arrow nav-toggle"></span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="{{ route('backend.policy.create') }}" class="nav-link">
                                    <i class="icon-user"></i> Create New Policy
                                    <span class="arrow nav-toggle"></span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            {{--tags--}}
            <li class="nav-item {{ activeItem('tag') }}">
                <a href="{{ route('backend.tag.index') }}" class="nav-link nav-toggle">
                    <i class="fa fa-fw fa-tag"></i>
                    <span class="title">Tags</span>
                    <span class="arrow"></span>
                </a>
                <ul class="sub-menu">
                    <li class="nav-item ">
                        <a href="{{ route('backend.tag.index') }}" class="nav-link nav-toggle">
                            <i class="fa fa-fw fa-tags"></i>
                            <span class="title">All Tags</span>
                            <span class="arrow"></span>
                        </a>
                    </li>
                    <li class="nav-item ">
                        <a href="{{ route('backend.tag.create') }}" class="nav-link nav-toggle">
                            <i class="fa fa-fw fa-plus-square-o"></i>
                            <span class="title">Create New Tag</span>
                            <span class="arrow"></span>
                        </a>
                    </li>
                </ul>
            </li>
            {{--brands--}}
            <li class="nav-item {{ activeItem('brand') }}">
                <a href="{{ route('backend.brand.index') }}" class="nav-link nav-toggle">
                    <i class="fa fa-fw fa-brand"></i>
                    <span class="title">Brands</span>
                    <span class="arrow"></span>
                </a>
                <ul class="sub-menu">
                    <li class="nav-item ">
                        <a href="{{ route('backend.brand.index') }}" class="nav-link nav-toggle">
                            <i class="fa fa-fw fa-times-circle"></i>
                            <span class="title">All Brands</span>
                            <span class="arrow"></span>
                        </a>
                    </li>
                    <li class="nav-item ">
                        <a href="{{ route('backend.brand.create') }}" class="nav-link nav-toggle">
                            <i class="fa fa-fw fa-plus-square-o"></i>
                            <span class="title">Create New Brand</span>
                            <span class="arrow"></span>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="nav-item {{ activeItem('color') }}">
                <a href="{{ route('backend.color.index') }}" class="nav-link nav-toggle">
                    <i class="fa fa-fw fa-paint-brush"></i>
                    <span class="title">Colors</span>
                    <span class="arrow"></span>
                </a>
                <ul class="sub-menu">
                    <li class="nav-item ">
                        <a href="{{ route('backend.color.index') }}" class="nav-link nav-toggle">
                            <i class="fa fa-fw fa-list-alt"></i>
                            <span class="title">Colors List</span>
                            <span class="arrow"></span>
                        </a>
                    </li>
                    <li class="nav-item ">
                        <a href="{{ route('backend.color.create') }}" class="nav-link nav-toggle">
                            <i class="fa fa-fw fa-paint-brush"></i>
                            <span class="title">Create New Color</span>
                            <span class="arrow"></span>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="nav-item {{ activeItem('order') }}">
                <a href="{{ route('backend.order.index') }}" class="nav-link nav-toggle">
                    <i class="fa fa-fw fa-money"></i>
                    <span class="title">Orders</span>
                    <span class="arrow"></span>
                </a>
                <ul class="sub-menu">
                    <li class="nav-item ">
                        <a href="{{ route('backend.order.index') }}" class="nav-link nav-toggle">
                            <i class="fa fa-fw fa-pie-chart"></i>
                            <span class="title">All Orders</span>
                            <span class="arrow"></span>
                        </a>
                    </li>
                    <li class="nav-item ">
                        <a href="{{ route('backend.order.index',['status' => 'success']) }}"
                           class="nav-link nav-toggle">
                            <i class="fa fa-fw fa-pie-chart"></i>
                            <span class="title">Successful Orders</span>
                            <span class="arrow"></span>
                        </a>
                    </li>
                    <li class="nav-item ">
                        <a href="{{ route('backend.order.index',['status' => 'failed']) }}" class="nav-link nav-toggle">
                            <i class="fa fa-fw fa-pie-chart"></i>
                            <span class="title">Failed Orders</span>
                            <span class="arrow"></span>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="nav-item {{ activeItem('size') }}">
                <a href="{{ route('backend.size.index') }}" class="nav-link nav-toggle">
                    <i class="fa fa-fw fa-tags"></i>
                    <span class="title">Sizes</span>
                    <span class="arrow"></span>
                </a>
                <ul class="sub-menu">
                    <li class="nav-item ">
                        <a href="{{ route('backend.size.index') }}" class="nav-link nav-toggle">
                            <i class="fa fa-fw fa-list-ul"></i>
                            <span class="title">Size List</span>
                            <span class="arrow"></span>
                        </a>
                    </li>
                    <li class="nav-item ">
                        <a href="{{ route('backend.size.create') }}" class="nav-link nav-toggle">
                            <i class="fa fa-fw fa-pie-chart"></i>
                            <span class="title">Create New Size</span>
                            <span class="arrow"></span>
                        </a>
                    </li>
                </ul>
            </li>


            {{--<li class="nav-item">--}}
                {{--<a href="javascript:;" class="nav-link nav-toggle">--}}
                    {{--<i class="icon-folder"></i>--}}
                    {{--<span class="title">Multi Level Menu</span>--}}
                    {{--<span class="arrow "></span>--}}
                {{--</a>--}}
                {{--<ul class="sub-menu">--}}
                    {{--<li class="nav-item">--}}
                        {{--<a href="javascript:;" class="nav-link nav-toggle">--}}
                            {{--<i class="icon-settings"></i> Item 1--}}
                            {{--<span class="arrow"></span>--}}
                        {{--</a>--}}
                        {{--<ul class="sub-menu">--}}
                            {{--<li class="nav-item">--}}
                                {{--<a href="?p=dashboard-2" class="nav-link">--}}
                                    {{--<i class="icon-user"></i> Arrow Toggle--}}
                                    {{--<span class="arrow nav-toggle"></span>--}}
                                {{--</a>--}}
                                {{--<ul class="sub-menu">--}}
                                    {{--<li class="nav-item">--}}
                                        {{--<a href="#" class="nav-link">--}}
                                            {{--<i class="icon-power"></i> Sample Link 1</a>--}}
                                    {{--</li>--}}
                                    {{--<li class="nav-item">--}}
                                        {{--<a href="#" class="nav-link">--}}
                                            {{--<i class="icon-paper-plane"></i> Sample Link 1</a>--}}
                                    {{--</li>--}}
                                    {{--<li class="nav-item">--}}
                                        {{--<a href="#" class="nav-link">--}}
                                            {{--<i class="icon-star"></i> Sample Link 1</a>--}}
                                    {{--</li>--}}
                                {{--</ul>--}}
                            {{--</li>--}}
                            {{--<li class="nav-item">--}}
                                {{--<a href="#" class="nav-link">--}}
                                    {{--<i class="icon-camera"></i> Sample Link 1</a>--}}
                            {{--</li>--}}
                            {{--<li class="nav-item">--}}
                                {{--<a href="#" class="nav-link">--}}
                                    {{--<i class="icon-link"></i> Sample Link 2</a>--}}
                            {{--</li>--}}
                            {{--<li class="nav-item">--}}
                                {{--<a href="#" class="nav-link">--}}
                                    {{--<i class="icon-pointer"></i> Sample Link 3</a>--}}
                            {{--</li>--}}
                        {{--</ul>--}}
                    {{--</li>--}}
                    {{--<li class="nav-item">--}}
                        {{--<a href="?p=dashboard-2" class="nav-link">--}}
                            {{--<i class="icon-globe"></i> Arrow Toggle--}}
                            {{--<span class="arrow nav-toggle"></span>--}}
                        {{--</a>--}}
                        {{--<ul class="sub-menu">--}}
                            {{--<li class="nav-item">--}}
                                {{--<a href="#" class="nav-link">--}}
                                    {{--<i class="icon-tag"></i> Sample Link 1</a>--}}
                            {{--</li>--}}
                            {{--<li class="nav-item">--}}
                                {{--<a href="#" class="nav-link">--}}
                                    {{--<i class="icon-pencil"></i> Sample Link 1</a>--}}
                            {{--</li>--}}
                            {{--<li class="nav-item">--}}
                                {{--<a href="#" class="nav-link">--}}
                                    {{--<i class="icon-graph"></i> Sample Link 1</a>--}}
                            {{--</li>--}}
                        {{--</ul>--}}
                    {{--</li>--}}
                    {{--<li class="nav-item">--}}
                        {{--<a href="#" class="nav-link">--}}
                            {{--<i class="icon-bar-chart"></i> Item 3 </a>--}}
                    {{--</li>--}}
                {{--</ul>--}}
            {{--</li>--}}
        </ul>
        <!-- END SIDEBAR MENU -->
    </div>
    <!-- END SIDEBAR -->
</div>