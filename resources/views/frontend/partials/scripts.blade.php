@if(app()->isLocale('ar'))
    <script src="{{ mix('js/frontend-rtl.js') }}"></script>
@else
    <script src="{{ mix('js/frontend.js') }}"></script>
@endif
<script src="{{ mix('js/app.js') }}"></script>
<script src="{{ mix('js/jquery.prettyPhoto.min.js') }}"></script>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-113550846-1"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-113550846-1');
</script>