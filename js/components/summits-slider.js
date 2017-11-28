(function() {
    $(".js-summits-slider").slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendArrows: ".summits-block-header-arrows"
    });

    $(".js-summits-slider").on('beforeChange', function(e, slick, currentSlide, nextSlide) {
        console.log(slick);

        var $nextSlide = $(slick.$slides[nextSlide]).find('[data-summits-year]');

        var year = $nextSlide.data('summits-year');

        if (year) {
            $('.js-summits-slider-current-year').html(year);
        }
    });
})();