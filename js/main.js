$(document).ready(function() {
    $(".ect").click(function(e) {
        e.stopPropagation(); // Предотвращаем всплытие события, чтобы не срабатывало на document click
        $(".ect-list").css("display", function(i, value) {
            return value === "flex" ? "none" : "flex";
        });
    });

    $(document).click(function(e) {
        if (!$(e.target).closest('.ect').length && !$(e.target).closest('.ect-list').length) {
            $(".ect-list").hide();
        }
    });
});

$(window).on('load', function() {
    // Полная загрузка страницы, инициализация Slick Slider
    $('.slider-wrap').slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.prev-banner'),
        nextArrow: $('.next-banner')
    });

    // После инициализации слайдера, делаем его видимым
    $('.slider-wrap').css('visibility', 'visible');
});