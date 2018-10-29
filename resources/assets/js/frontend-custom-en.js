$(document).ready(function() {
    $('*[class^="productCarousel"]').owlCarousel({
        autoplay: false,
        loop: true,
        margin: 30,
        dots: false,
        nav: true,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        responsive: {
            0: {items: 1},
            479: {items: 1},
            768: {items: 2},
            991: {items: 3},
            1024: {items: 4}
        }
    });

    $('#main-slider-en').owlCarousel({
        //items: 1,
        rtl: false,
        autoplay: true,
        autoplayHoverPause: true,
        loop: true,
        margin: 0,
        dots: true,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsiveRefreshRate: 100,
        responsive: {
            0: {items: 1},
            479: {items: 1},
            768: {items: 1},
            991: {items: 1},
            1024: {items: 1}
        }
    });
});