$(document).ready(function() {
    var header = $(".header__container");
    var headerOffset = header.offset().top;

    $(window).scroll(function() {
        if ($(window).scrollTop() > headerOffset) {
            header.addClass("fixed-header");
        } else {
            header.removeClass("fixed-header");
        }
    });
});



//ECT-DROPCLICK
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


//SLIDER
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


$(document).ready(function(){
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });

    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        arrows: false
        // prevArrow: $('.nav-slider__right')
        // nextArrow: $('.nav-slider__left')
    });
});



// MENU BTN
$(document).ready(function() {
    $('.menu-btn').click(function(e) {
        e.stopPropagation(); 
        $('.tablet-menu__container').toggleClass('tablet-menu__opened-container');

        // Предотвращение прокрутки body при открытом меню
        if ($('.tablet-menu__container').hasClass('tablet-menu__opened-container')) {
            $('body').css('overflow', 'hidden');
        } else {
            $('body').css('overflow', 'auto');
        }
    });

    $('.tablet-menu__circle').click(function(e) {
        e.stopPropagation();
        $('.tablet-menu__container').removeClass('tablet-menu__opened-container');
        $('body').css('overflow', 'auto'); // Восстановление прокрутки при закрытии меню
    });

    $(document).click(function(e) {
        if (!$(e.target).closest('.tablet-menu__opened-container').length) {
            // Закрыть меню, если клик был вне .tablet-menu__opened-container
            $('.tablet-menu__container').removeClass('tablet-menu__opened-container');
            $('body').css('overflow', 'auto'); // Восстановление прокрутки при закрытии меню
        }
    });
});





// json data

document.addEventListener('DOMContentLoaded', function() {
    // Получение JSON-данных
    fetch('data/product.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Обработка данных и отображение продуктов
            displayProductCards(data);
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });

    function displayProductCards(products) {
        const productsContainer = document.querySelector('.products__container');

        // Очистка контейнера перед добавлением новых продуктов
        productsContainer.innerHTML = '';

        // Создание карточек продуктов на основе данных из JSON
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            // Добавление содержимого карточки (вам нужно адаптировать это под ваши данные)
            productCard.innerHTML = `
                <div class="product-card__head">
                    <div class="product-card__head__sell">
                        <img src="${product.sell_icon}" alt="" class="product-card__sell-icon">
                        <p class="product-card__head__sell-txt">${product.sell_txt}</p>
                    </div>
                    <button class="product-card__add-wishlist">
                        <img src="assets/icons/wishlist-icon.svg" alt="">
                    </button>
                </div>
                <a href="./pages/product-page.html" class="product-link">
                    <img src="${product.image}" alt="" class="product-card__img">
                </a>
                <div class="product-info">
                    <a href="./pages/product-page.html" class="product-link">
                        <h5 class="product-title">${product.name}</h5>
                        <p class="product-category">${product.category}</p>
                        <p class="product-price">${product.price}</p>
                    </a>
                    <div class="product-info__hidden">
                                    <p class="product-sizes">Размеры</p>
                                    <div class="product-sizes__box">
                                        <div class="product-sizes__box__col">
                                            <p class="product-sizes__box__col-txt">Ширина</p>
                                            <p class="product-sizes__box__col-value">${product.sizes.width}</p>
                                        </div>
                                        <div class="product-sizes__box__col-x">x</div>
                                        <div class="product-sizes__box__col">
                                            <p class="product-sizes__box__col-txt">Глубина</p>
                                            <p class="product-sizes__box__col-value">${product.sizes.depth}</p>
                                        </div>
                                        <div class="product-sizes__box__col-x">x</div>
                                        <div class="product-sizes__box__col">
                                            <p class="product-sizes__box__col-txt">Высота</p>
                                            <p class="product-sizes__box__col-value">${product.sizes.height}</p>
                                        </div>
                                    </div>
                                    <button class="add-to-cart">Добавить в корзину</button>
                                </div>
                </div>
            `;
            // Добавление карточки продукта в контейнер
            productsContainer.appendChild(productCard);
        });
    }

});


