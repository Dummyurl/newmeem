const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.js('resources/assets/js/app.js', 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css');
// backend
mix.styles([
    './node_modules/font-awesome/css/font-awesome.min.css',
    '../metronic_v4.5.6/theme/assets/global/plugins/simple-line-icons/simple-line-icons.min.css',
    '../metronic_v4.5.6/theme/assets/global/plugins/bootstrap/css/bootstrap.min.css',
    '../metronic_v4.5.6/theme/assets/global/plugins/bootstrap-switch/css/bootstrap-switch.min.css',

    '../metronic_v4.5.6/theme/assets/global/plugins/bootstrap-daterangepicker/daterangepicker.min.css',
    '../metronic_v4.5.6/theme/assets/global/plugins/morris/morris.css"',
    '../metronic_v4.5.6/theme/assets/global/plugins/fullcalendar/fullcalendar.min.css"',
    '../metronic_v4.5.6/theme/assets/global/plugins/jqvmap/jqvmap/jqvmap.css"',


    '../metronic_v4.5.6/theme/assets/global/plugins/bootstrap-select/css/bootstrap-select.min.css',
    '../metronic_v4.5.6/theme/assets/global/plugins/jquery-multi-select/css/multi-select.css',
    '../metronic_v4.5.6/theme/assets/global/plugins/select2/css/select2.min.css',
    '../metronic_v4.5.6/theme/assets/global/plugins/select2/css/select2-bootstrap.min.css',
    '../metronic_v4.5.6/theme//assets/global/plugins/bootstrap-colorpicker/css/colorpicker.css',
    '../metronic_v4.5.6/theme//assets/global/plugins/jquery-minicolors/jquery.minicolors.css',


    '../metronic_v4.5.6/theme/assets/global/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.min.css',
    '../metronic_v4.5.6/theme/assets/global/plugins/datatables/datatables.min.css',
    '../metronic_v4.5.6/theme/assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.css',

    '../metronic_v4.5.6/theme/assets/global/css/components.min.css',
    '../metronic_v4.5.6/theme/assets/global/css/plugins.min.css',

    '../metronic_v4.5.6/theme/assets/layouts/layout2/css/layout.min.css',
    // '../metronic_v4.5.6/theme/assets/layouts/layout/css/themes/darkblue.min.css',
    // '../metronic_v4.5.6/theme/assets/layouts/layout2/css/themes/blue.min.css',
    // '../metronic_v4.5.6/theme/assets/layouts/layout2/css/themes/light.min.css',
    '../metronic_v4.5.6/theme/assets/layouts/layout2/css/themes/grey.min.css',
    '../metronic_v4.5.6/theme/assets/layouts/layout2/css/custom.min.css',
    './node_modules/jquery.minicolors/jquery.minicolors.css',
    './resources/assets/css/backend-custom.css'
], 'public/css/backend.css');
mix.scripts([
        '../metronic_v4.5.6/theme/assets/global/plugins/respond.min.js',
        '../metronic_v4.5.6/theme/assets/global/plugins/excanvas.min.js',
        '../metronic_v4.5.6/theme/assets/global/plugins/jquery.min.js',
        '../metronic_v4.5.6/theme/assets/global/plugins/bootstrap/js/bootstrap.min.js',

        '../metronic_v4.5.6/theme/assets/global/plugins/datatables/datatables.min.js',
        '../metronic_v4.5.6/theme/assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.js',
        '../metronic_v4.5.6/theme/assets/global/plugins/bootstrap-select/js/bootstrap-select.min.js',
        '../metronic_v4.5.6/theme/assets/global/plugins/jquery-multi-select/js/jquery.multi-select.js',
        '../metronic_v4.5.6/theme/assets/global/plugins/select2/js/select2.full.min.js',

        '../metronic_v4.5.6/theme/assets/global/plugins/js.cookie.min.js',
        '../metronic_v4.5.6/theme/assets/global/plugins/bootstrap-hover-dropdown/bootstrap-hover-dropdown.min.js',
        '../metronic_v4.5.6/theme/assets/global/plugins/jquery-slimscroll/jquery.slimscroll.min.js',
        '../metronic_v4.5.6/theme/assets/global/plugins/jquery.blockui.min.js',
        '../metronic_v4.5.6/theme/assets/global/plugins/bootstrap-switch/js/bootstrap-switch.min.js',
        '../metronic_v4.5.6/theme/assets/global/plugins/bootstrap-colorpicker/js/bootstrap-colorpicker.js',
        '../metronic_v4.5.6/theme/assets/global/plugins/jquery-minicolors/jquery.minicolors.min.js',
        '../metronic_v4.5.6/theme/assets/global/scripts/app.min.js',

        '../metronic_v4.5.6/theme/assets/pages/scripts/components-multi-select.min.js',
        '../metronic_v4.5.6/theme/assets/pages/scripts/components-color-pickers.min.js',
        '../metronic_v4.5.6/theme/assets/layouts/layout2/scripts/layout.min.js',
        '../metronic_v4.5.6/theme/assets/layouts/layout2/scripts/demo.min.js',
        '../metronic_v4.5.6/theme/assets/layouts/global/scripts/quick-sidebar.min.js',
    ],
    'public/js/backend.js');
mix.scripts('./node_modules/tinymce/tinymce.min.js', 'public/js/tinymce.min.js');
mix.scripts('resources/assets/js/backend-custom.js', 'public/js/backend-custom.js');
mix.styles([
        '../bella/bella-files/bella/assets/plugins/bootstrap/css/bootstrap.min.css',
        '../bella/bella-files/bella/assets/plugins/bootstrap-select/css/bootstrap-select.min.css',
        '../bella/bella-files/bella/assets/plugins/fontawesome/css/font-awesome.min.css',
        '../bella/bella-files/bella/assets/plugins/prettyphoto/css/prettyPhoto.css',
        '../bella/bella-files/bella/assets/plugins/owl-carousel2/assets/owl.carousel.min.css',
        '../bella/bella-files/bella/assets/plugins/owl-carousel2/assets/owl.theme.default.min.css',
        '../bella/bella-files/bella/assets/plugins/animate/animate.min.css',
        '../bella/bella-files/bella/assets/css/theme.css',
        '../bella/bella-files/bella/assets/css/theme-green-meemonoon.css',
        'resources/assets/css/frontend-custom.css',
    ]
    , 'public/css/frontend.css');
mix.styles([
    '../bella/bella-files/bella-rtl/assets/plugins/bootstrap/css/bootstrap.min.css',
    '../bella/bella-files/bella-rtl/assets/plugins/bootstrap/css/bootstrap-rtl.min.css',
    '../bella/bella-files/bella-rtl/assets/plugins/bootstrap-select/css/bootstrap-select.min.css',
    '../bella/bella-files/bella-rtl/assets/plugins/fontawesome/css/font-awesome.min.css',
    '../bella/bella-files/bella-rtl/assets/plugins/prettyphoto/css/prettyPhoto.css',
    '../bella/bella-files/bella-rtl/assets/plugins/owl-carousel2/assets/owl.carousel.min.css',
    '../bella/bella-files/bella-rtl/assets/plugins/owl-carousel2/assets/owl.theme.default.min.css',
    '../bella/bella-files/bella-rtl/assets/plugins/animate/animate.min.css',
    '../bella/bella-files/bella-rtl/assets/css/theme.css',
    '../bella/bella-files/bella-rtl/assets/css/theme-green-meemonoon.css',
    'resources/assets/css/frontend-custom.css',
    'resources/assets/css/frontend-custom-ar.css',
    'resources/assets/js/cartIndex.js'
], 'public/css/frontend-rtl.css');
// mix.styles('resources/assets/css/order-review.css','public/css/order-review.css');
mix.babel([
        '../bella/bella-files/bella/assets/plugins/modernizr.custom.js',
        '../bella/bella-files/bella/assets/plugins/iesupport/html5shiv.js',
        '../bella/bella-files/bella/assets/plugins/iesupport/respond.min.js',
        '../bella/bella-files/bella/assets/plugins/jquery/jquery-1.11.1.min.js',
        '../bella/bella-files/bella/assets/plugins/bootstrap/js/bootstrap.min.js',
        '../bella/bella-files/bella/assets/plugins/bootstrap-select/js/bootstrap-select.min.js',
        // '../bella/bella-files/bella/assets/plugins/prettyphoto/js/jquery.prettyPhoto.js',
        '../bella/bella-files/bella/assets/plugins/superfish/js/superfish.min.js',
        '../bella/bella-files/bella/assets/plugins/owl-carousel2/owl.carousel.min.js',
        '../bella/bella-files/bella/assets/plugins/jquery.sticky.min.js',
        '../bella/bella-files/bella/assets/plugins/jquery.easing.min.js',
        '../bella/bella-files/bella/assets/plugins/jquery.smoothscroll.min.js',
        '../bella/bella-files/bella/assets/plugins/smooth-scrollbar.min.js',
        '../bella/bella-files/bella/assets/js/theme.js',
        '../bella/bella-files/bella/assets/plugins/jquery.cookie.js',
        'resources/assets/js/frontend-custom.js',
        'resources/assets/js/frontend-custom-en.js',
        'resources/assets/js/cartIndex.js'
    ]
    , 'public/js/frontend.js');

mix.babel([
        '../bella/bella-files/bella-rtl/assets/plugins/modernizr.custom.js',
        '../bella/bella-files/bella-rtl/assets/plugins/iesupport/html5shiv.js',
        '../bella/bella-files/bella-rtl/assets/plugins/iesupport/respond.min.js',
        '../bella/bella-files/bella-rtl/assets/plugins/jquery/jquery-1.11.1.min.js',
        '../bella/bella-files/bella-rtl/assets/plugins/bootstrap/js/bootstrap.min.js',
        '../bella/bella-files/bella-rtl/assets/plugins/bootstrap-select/js/bootstrap-select.min.js',
        '../bella/bella-files/bella-rtl/assets/plugins/superfish/js/superfish.min.js',
        // '../bella/bella-files/bella-rtl/assets/plugins/prettyphoto/js/jquery.prettyPhoto.js',
        '../bella/bella-files/bella-rtl/assets/plugins/owl-carousel2/owl.carousel.min.js',
        '../bella/bella-files/bella-rtl/assets/plugins/jquery.sticky.min.js',
        '../bella/bella-files/bella-rtl/assets/plugins/jquery.easing.min.js',
        '../bella/bella-files/bella-rtl/assets/plugins/jquery.smoothscroll.min.js',
        '../bella/bella-files/bella-rtl/assets/plugins/smooth-scrollbar.min.js',
        '../bella/bella-files/bella-rtl/assets/js/theme.js',
        '../bella/bella-files/bella-rtl/assets/plugins/jquery.cookie.js',
        'resources/assets/js/frontend-custom.js',
        'resources/assets/js/frontend-custom-ar.js',
        'resources/assets/js/cartIndex.js'
    ]
    , 'public/js/frontend-rtl.js');
mix.copy('resources/assets/js/jquery.prettyPhoto.min.js', 'public/js/jquery.prettyPhoto.min.js');
mix.copyDirectory('../metronic_v4.5.6/theme/assets/global/plugins/simple-line-icons/fonts', 'public/css/fonts');
mix.copyDirectory('..//metronic_v4.5.6/theme/assets/global/plugins/datatables/images', 'public/plugins/datatables/images');
mix.copyDirectory('../metronic_v4.5.6/theme/assets/global/img', 'public/img');
mix.copyDirectory('../metronic_v4.5.6/theme/assets/layouts/layout/img', 'public/img');
mix.copyDirectory('./node_modules/font-awesome/fonts', 'public/fonts');
mix.copyDirectory('./node_modules/tinymce/plugins', 'public/js/plugins');
mix.copyDirectory('./node_modules/tinymce/skins', 'public/js/skins');
mix.copyDirectory('./node_modules/tinymce/themes', 'public/js/themes');
mix.copyDirectory('../bella/bella-files/bella/assets/img', 'public/img');
mix.copyDirectory('../bella/bella-files/bella/assets/ico', 'public/ico');
mix.copyDirectory('../bella/bella-files/bella/assets/plugins/prettyphoto/images', 'public/images');
if (mix.inProduction()) {
    mix.version();
}