(function() {
    $(".js-news-slider").slick({
        infinite: true,
        slidesToShow: 4,
        rows: 2,
        slidesToScroll: 4,
        appendArrows: ".news-block-header-arrows",
        responsive: [
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 900,
                settings: {
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