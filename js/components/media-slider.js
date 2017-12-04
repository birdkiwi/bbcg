(function() {
    $(".js-media-slider").slick({
        infinite: true,
        slidesToShow: 4,
        rows: 2,
        slidesToScroll: 4,
        appendArrows: ".media-block-header-arrows",
        responsive: [
            {
                breakpoint: 1080,
                settings: {
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
                breakpoint: 600,
                settings: {
                    rows: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
})();