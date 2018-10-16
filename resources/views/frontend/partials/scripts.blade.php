@if(app()->isLocale('ar'))
    <script src="{{ mix('js/frontend-rtl.js') }}"></script>
@else
    <script src="{{ mix('js/frontend.js') }}"></script>
@endif
<script src="{{ mix('js/app.js') }}"></script>
{{--<script src="https://cdnjs.cloudflare.com/ajax/libs/prettyPhoto/3.1.6/js/jquery.prettyPhoto.min.js"></script>--}}
<script src="{{ asset('js/jquery.prettyPhoto.min.js') }}"></script>