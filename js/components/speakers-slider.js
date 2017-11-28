(function() {
    $(".js-speakers-slider").slick({
        infinite: true,
        slidesToShow: 4,
        rows: 2,
        slidesToScroll: 4,
        appendArrows: ".speakers-block-header-arrows",
        prevArrow: '<button type="button" class="slick-arrow slick-arrow-white slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-arrow slick-arrow-white slick-next"></button>',
        responsive: [
            {
                breakpoint: 1080,
                settings: {
                    rows: 1,
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 700,
                settings: {
                    rows: 1,
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 520,
                settings: {
                    rows: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
})();