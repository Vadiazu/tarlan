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
    var timer  = $(".timer");

    if(timer.length){
        timer.countdown('2014/01/29', function(event) {
             var $this = $(this).html(event.strftime(''
                 + ' <div class="number-unit"> '
                 +   ' <div class="numbers-bg"><span class="numbers">%w</span></div> '
                 +   ' <div class="text">тижнів</div>'
                 +' </div>'
                 + '<span class="separator"></span>'
                 + '<div class="number-unit">'
                 +    '<div class="numbers-bg"><span class="numbers">%d</span></div>'
                 +    '<div class="text">днів</div>'
                 + '</div>'
                 + '<span class="separator"></span>'
                 + '<div class="number-unit">'
                 +    '<div class="numbers-bg"><span class="numbers">%H</span></div>'
                 +    '<div class="text">годин</div>'
                 + '</div>'
            ));
        });
    }

    //works calendar slider
    if($(".competitions-slider-start").length){
        $(".competitions-slider-start").bxSlider({
            auto: false,
            pause: 10000,
            slideWidth: 235,
            slideMargin: 20,
            minSlides: 5,
            maxSlides: 5,
            moveSlides: 1,
            pager: false,
            controls: true
        });
    }


    if($(".winners-slide-block").length){
        var customSlider = function(name){
            var $frame = $(name);
            var $wrap  = $frame.parent();

            // Call Sly on frame
            $frame.sly({
                horizontal: 1,
                itemNav: 'basic',
                smart: 1,
                activateMiddle: 1,
                activateOn: 'click',
                mouseDragging: 0,
                touchDragging: 0,
                releaseSwing: 1,
                startAt: 0,
                scrollBar: $wrap.find('.scrollbar'),
                scrollBy: 1,
                speed: 500,
                elasticBounds: 1,
                dragHandle: 1,
                dynamicHandle: 1,
                clickBar: 1,

                // Buttons
                prevPage: $wrap.find('.btn-prev'),
                nextPage: $wrap.find('.btn-next')
            });
        };

        customSlider("#winnerTab1 .custom-slider");
        customSlider("#winnerTab2 .custom-slider");
    }

    /*Tabs*/
    var tabsFunc = function(containerName, tabsBtn){
        var tabContainers = $(containerName);
        tabContainers.hide().filter(':first').show();

        $(tabsBtn).click(function () {
            tabContainers.hide();
            tabContainers.filter(this.hash).show();
            $(tabsBtn).removeClass('active');
            $(this).addClass('active');
            return false;
        }).filter(':first').click();
    };

    tabsFunc('.tabs-container > div','.tabs li a');
    tabsFunc('.inner-tabs-container > div','.inner-tabs li a');

    //all concurs btn
    $(".all-concurs").on("click", function(){
        $(this).parents("body").find(".works-nav-block").hide();
            $(this).parents("body").find(".final-title-block").hide();
                $(this).parents("body").find(".block-all-competitions").addClass("show");
    });

    $(".collapse-btn").on("click", function(){
        $(this).parents("body").find(".works-nav-block").show();
                $(this).parents("body").find(".final-title-block").show();
                    $(this).parents(".block-all-competitions").removeClass("show");
    });

    //стилизация селектов
    if($(".custom-select").length){

        function format(state) {
            var originalOption = state.element;
            return state.text + "<span class='additional-text'>" + $(originalOption).data('text') + "</span>";
        }

        $(".custom-select").select2({
            width: 308,
            minimumResultsForSearch: -1,
            formatSelection: format,
            escapeMarkup: function(m) { return m; }
        });
    }

    if($(".simple-select").length){
        $(".simple-select").select2({
            width: 308,
            minimumResultsForSearch: -1
        });
    }

    /*-----------------adding avatar-----------------*/
    function readURL(input) {

        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $("#loaded-image").attr("src", e.target.result).fadeIn(300);

                $("#file-input-container > .file-load").hide(0);
                $(".file-input-hidden").show(200);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }

    function changeURL(input) {

        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $("#loaded-image").attr("src", e.target.result).fadeIn(300);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#avatar-load").change(function(){
        readURL(this);
    });

    $("#avatar-change").change(function(){
        changeURL(this);
    });

    $(".delete-existing").on("click", function(){
        $("#file-input-container > .file-load").show(0);
        $(".file-input-hidden").hide(0);
        $("#loaded-image").attr("src", "").hide(0);
    });
});
