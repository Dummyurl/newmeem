<li class="dropdown flags">
    <a href="#" class="dropdown-toggle" data-toggle="dropdown"><img class="img-xxs" src="{{ app()->isLocale('ar') ? asset('img/flags/kw.png') : asset('images/flags/us.png') }}" alt="{{ app()->getLocale() }}"/> {{ strtoupper(app()->getLocale()) }}<i class="fa fa-angle-down"></i></a>
    <ul role="menu" class="dropdown-menu">
        <li>
            <a href="{{ route('frontend.language.change',['locale' => 'ar']) }}">
                <img class="img-xxs" src="{{ asset('img/flags/kw.png') }}" alt="{{ config('app.name') }}"/>
                {{ trans('general.arabic') }}
            </a>
        </li>
        <li>
            <a href="{{ route('frontend.language.change',['locale' => 'en']) }}">
                <img class="img-xxs" src="{{ asset('images/flags/us.png') }}" alt="{{ config('app.name') }}"/>
                {{ trans('general.english') }}
            </a>
        </li>
    </ul>
</li>