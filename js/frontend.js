$(document).ready(function(){
    $(".placeholder-container label").inFieldLabels();

    //init main page photo vs video slider
    $(".photo-video-slider-start").bxSlider({
        auto: true,
        pause: 8000,
        slideWidth: 172,
        slideMargin: 35,
        minSlides: 5,
        maxSlides: 7,
        moveSlides: 1,
        pager: false
    });

    $(".partners-slider").bxSlider({
        auto: true,
        pause: 10000,
        slideWidth: 135,
        slideMargin: 10,
        minSlides: 5,
        maxSlides: 12,
        moveSlides: 1,
        pager: false,
        controls: false
    });

    $(".custom-carousel-list").bxSlider({
        auto: true,
        pause: 10000,
        slideWidth: 110,
        slideMargin: 15,
        minSlides: 5,
        maxSlides: 5,
        moveSlides: 1,
        pager: false,
        controls: true
    });

    //fancybox in photo list

    $(".photo-list .photo-list-unit a").fancybox();

});
