<li class="dropdown currency">
    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
        <img class="img-flag" src="{{ asset(env('THUMBNAIL').session('currency')->country->flag) }}" alt=""/>
        {{ session('currency')->name }}
        <i class="fa fa-angle-down"></i></a>
    <ul role="menu" class="dropdown-menu">
        @foreach($currencies as $currency)
            <li>
                <a href="{{ route('frontend.currency.change',['currency' => strtolower($currency->currency_symbol_en)]) }}">
                    <img class="img-flag" src="{{ asset(env('THUMBNAIL').$currency->country->flag) }}"/>
                    {{ $currency->name }}
                </a>
            </li>
        @endforeach
    </ul>
</li>
