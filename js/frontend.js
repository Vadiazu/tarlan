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
    if($(".photo-list").length){
        $(".photo-list .photo-list-unit a").fancybox();
    }


    //menu control
    $(".menu-wrapper .with-sub").hover(
        function(){
            if(!$(this).hasClass("active")){
                $(".with-sub").removeClass("active");
                $(".menu-wrapper .drop-down").slideUp(200);
                $(".drop-down-bg").slideDown(200);
                $(this).children(".drop-down").slideDown(200);
            }
        },
        function(){
            if($(".drop-down-bg").hasClass("active")){
                if(!$(this).hasClass("active")){
                    $(".menu-wrapper .drop-down").slideUp(200);
                    $(".menu-wrapper .drop-down a").each(function(){
                        if($(this).hasClass("active")){
                            $(this).parents(".with-sub").addClass("active");
                            $(this).parents(".drop-down").slideDown(200);
                        }
                    });
                }
            }
            else{
                $(".menu-wrapper .drop-down").slideUp(200);
                $(".drop-down-bg").slideUp(200);
            }
        }
    );

    //step form
    $(".next-step").on("click", function(){
        $(this).hide();
        $(this).parent().next().slideDown(500);
    });

    $(".save-changes").on("click", function(){
        $(this).parents("form").find(".step1, .step2").hide();
        $(this).parents(".step2").next().show();
    });

    //counter
    if($(".timer").length){
        var clock = $('.timer').FlipClock(3600,{
            language: 'ua',
            countdown: true,
            clockFace: "DailyCounter"
        });
    }
});
