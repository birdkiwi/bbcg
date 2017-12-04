(function() {
    var $slider = $(".js-events-slider");

    $slider.on('init', function (e, slick) {
        console.log(e);
        console.log(slick);
    });

    $slider.slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        appendArrows: ".events-block-slider-arrows",
        responsive: [
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 760,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
})();