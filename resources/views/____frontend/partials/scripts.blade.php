<script src="{{ mix('js/app.js') }}"></script>
<script src="{{ mix('js/frontend.js') }}"></script>
@desktop
@if(app()->isLocale('ar'))
    <script src="{{ mix('js/frontend-custom-ar.js') }}"></script>
@endif
@enddesktop