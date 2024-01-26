$(document).ready(function () {
    // Назначим обработчик событий для клика на иконку поиска
    $(".mobile-search-icon").click(function () {
        // Плавно покажем/скроем форму поиска
        $(".searh-form").fadeToggle();
        // Покажем/скроем иконку поиска в навбаре
        $(".mobile-search-icon").toggle();
        // Покажем/скроем иконку "x" для закрытия в навбаре
        $(".mobile-search-icon__x-black-icon").toggle();
        // Покажем/скроем элемент phone-mb
        $(".phone-mb").toggle();
    });

    // Назначим обработчик событий для клика на иконку "x" для закрытия
    $(".mobile-search-icon__x-black-icon").click(function () {
        // Плавно покажем/скроем форму поиска
        $(".searh-form").fadeToggle();
        // Покажем/скроем иконку "x" в навбаре
        $(".mobile-search-icon__x-black-icon").toggle();
        // Плавно покажем/скроем иконку поиска в навбаре
        $(".mobile-search-icon").toggle();
        // Плавно вернем отображение элемента phone-mb
        $(".phone-mb").toggle();
    });
});

