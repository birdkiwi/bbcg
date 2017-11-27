$(document).ready(function() {
    /* Slick Sliders */

    $(".js-slick-slider").slick();

    $(".js-solutions-slider").slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: false,
        variableWidth: true,
        dots: true,
        touchThreshold: 8,
        responsive: [
            {
                breakpoint: 1170,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 610,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});
