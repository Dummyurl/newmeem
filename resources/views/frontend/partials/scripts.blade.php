@if(app()->isLocale('ar'))
    <script src="{{ mix('js/frontend-rtl.js') }}"></script>
@else
    <script src="{{ mix('js/frontend.js') }}"></script>
@endif
<script src="{{ mix('js/app.js') }}"></script>
<script src="{{ mix('js/jquery.prettyPhoto.min.js') }}"></script>