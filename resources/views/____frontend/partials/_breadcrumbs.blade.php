<div class="container">
    <div class="row">
        <div class="shop-head">
            <ul class="shop-head-menu">
                <li><i class="fa fa-home"></i>
                    <a href="{{ url('/') }}">
                       {{ trans('general.home') }}
                    </a>
                </li>
                <li>
                    <i class="fa fa-xs fa-fw fa-angle-{{ app()->isLocale('ar') ? 'left' : 'right' }}"></i>
                    {{ $name }}
                </li>
            </ul>
        </div>
        <!-- shop head end -->
    </div>
</div>