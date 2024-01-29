$(document).ready(function() {
    $(".ect").click(function(e) {
        e.stopPropagation(); 
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
    $('.slider-wrap').slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.prev-banner'),
        nextArrow: $('.next-banner')
    });

    $('.slider-wrap').css('visibility', 'visible');
});

$(document).ready(function() {
    $('.menu-btn').click(function(e) {
        e.stopPropagation(); 
        $('.tablet-menu__container').toggleClass('tablet-menu__opened-container');
    });

    $('.tablet-menu__circle').click(function(e) {
        e.stopPropagation();
        $('.tablet-menu__container').removeClass('tablet-menu__opened-container');
    });

    $(document).click(function() {
        $('.tablet-menu__container').removeClass('tablet-menu__opened-container');
    });
});


