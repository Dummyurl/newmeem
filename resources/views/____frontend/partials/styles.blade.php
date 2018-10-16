<link rel="stylesheet" href="{{ mix('css/frontend.css') }}">
@if (app()->isLocale('ar'))
@section('arabic-css')
    <link rel="stylesheet" href="{{ mix('css/rtl.css') }}">
@show
@endif