<li class="dropdown currency">
    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
        {{ session('currency')->name }}
        <i class="fa fa-angle-down"></i></a>
    <ul role="menu" class="dropdown-menu">
        @foreach($currencies as $currency)
            <li>
                <a href="{{ route('frontend.currency.change',['currency' => strtolower($currency->currency_symbol_en)]) }}">
                    <img style="width : 25px; height: 15px;" src="{{ asset(env('MEDIUM').$currency->country->flag) }}"/>
                    {{ $currency->name }}
                </a>
            </li>
        @endforeach
    </ul>
</li>
<li class="dropdown flags">
    <a href="#" class="dropdown-toggle" data-toggle="dropdown"><img src="{{ app()->isLocale('ar') ? asset('img/flags/kw.png') : asset('images/flags/us.png') }}" alt="{{ app()->getLocale() }}"/> {{ strtoupper(app()->getLocale()) }}<i class="fa fa-angle-down"></i></a>
    <ul role="menu" class="dropdown-menu">
        <li>
            <a href="{{ route('frontend.language.change',['locale' => 'ar']) }}">
                <img src="{{ asset('img/flags/kw.png') }}" alt=""/>
                {{ trans('general.arabic') }}
            </a>
        </li>
        <li>
            <a href="{{ route('frontend.language.change',['locale' => 'en']) }}">
                <img src="{{ asset('images/flags/us.png') }}" alt=""/>
                {{ trans('general.english') }}
            </a>
        </li>
    </ul>
</li>