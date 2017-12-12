(function() {
    $(".js-partners-slider").slick({
        infinite: true,
        slidesToShow: 4,
        rows: 2,
        slidesToScroll: 4,
        appendArrows: ".partners-block-header-arrows",
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
                    arrows: false,
                    dots: true,
                    rows: 1,
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 520,
                settings: {
                    arrows: false,
                    dots: true,
                    rows: 1,
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });
})();