jQuery(document).ready(function() {

    jQuery(window).load(function() {
        $('#preloader').fadeOut('slow',function(){$(this).remove();});
        jQuery('.slider_about').bxSlider({
            //auto: true,
            //controls: false
        });

        jQuery('.slider_works, .slider_comment, .slider_who_we_are_mobile, .slider_product').bxSlider({

            nextText: "",
            prevText: ""

        });
        var slider_main = jQuery('.slider_main').bxSlider({
            auto: true,
            controls: false,
            speed: 1500,
            pause: 4000,
            onSliderLoad: function () {
                $('.slider_main>li:not(.bx-clone)').eq(0).addClass('active-slide').siblings().removeClass('active-slide');
            },
            onSlideAfter: function ($slideElement) {
                $($slideElement).addClass('active-slide').siblings().removeClass('active-slide');
            }

        });


        $('.bx-next, .bx-prev, .bx-pager a').click(function(){
            // time to wait (in ms)
            var wait = 1000;
            setTimeout(function(){
                slider_main.startAuto();
            }, wait);
        });




        jQuery('.slider_who_we_are').bxSlider({
            minSlides: 3,
            maxSlides: 3,
            slideWidth: 300,
            nextText: "",
            prevText: "",
            slideMargin: 20
        });



        $(function() {
            $('a[href*="#"]:not([href="#"])').click(function() {
                if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                    if (target.length) {
                        $('html, body').animate({
                            scrollTop: target.offset().top
                        }, 1000);
                        return false;
                    }
                }
            });

        });


    });


    /*$(document).ready(function(){
        $("#menu").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1500);
            //console.log(id);
        });
    });*/

        var slideQty_who_we_are = 100/jQuery('#slider_who_we_are .bx-pager-item').length+'%';
        //console.log(slideQty_who_we_are);

        jQuery("#who_we_are .bx-controls .bx-pager .bx-pager-item").each(function(){
            jQuery(this).css('width', slideQty_who_we_are);

        });


        jQuery(window).resize(function() {

            jQuery("#who_we_are .bx-wrapper .bx-default-pager .bx-pager-item").each(function(){
                jQuery(this).css('width', slideQty_who_we_are);
            });
        });




        jQuery("form").validate({

            rules:{

                name:{
                    required: true,
                    minlength: 2

                },

                email:{
                    required: true,
                    email: true
                },
                message:{
                    required: true
                }

            }



        });











    //modal form
    var overlay = $('#overlay');
    var open_modal = $('.open_modal');
    var close = $('#modal_close, #overlay');
    var modal = $('.modal_div');

    open_modal.click( function(event){
        event.preventDefault();

        var div = $(this).attr('href');
        overlay.fadeIn(400,
            function(){
                $(div)
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
            });
    });

    close.click( function(){
        modal
            .animate({opacity: 0, top: '45%'}, 200,
            function(){
                $(this).css('display', 'none');
                overlay.fadeOut(400);
                $(".message_modal").removeClass("show");
            }
        );
    });



    //menu
    jQuery("#menu-icon").on("click", function(){
        jQuery(this).next().slideToggle();
        //jQuery(this).toggleClass("active");
        //jQuery(".menu").toggleClass("active")
    });

    jQuery(".feedback .link").on("click", function(){
        jQuery(this).next().slideToggle();
        //jQuery(this).toggleClass("active");
        //jQuery(".menu").toggleClass("active")
    });





////rating
    $('.rating').barrating({
        theme: ''
    });
    $('.rating_show').barrating({
        theme: '',
        readonly: true
    });
});

jQuery(document).ready(function($){

    var
        speed = 500,
        $scrollTop = $('<a href="#" class="scrollTop">').appendTo('body');
    $scrollTop.click(function(e){
        e.preventDefault();

        $( 'html:not(:animated),body:not(:animated)' ).animate({ scrollTop: 0}, speed );
    });

    function show_scrollTop(){
        ( $(window).scrollTop() > 300 ) ? $scrollTop.fadeIn(600) : $scrollTop.fadeOut(600);
    }
    $(window).scroll( function(){ show_scrollTop(); } );
    show_scrollTop();



    //scroll
    (function () {

        var $mainNavigation = $(".header");
        $mainNavigation.status = 0;


        $(document).on('scroll', function () {

            var top = $(this).scrollTop();
            if (top > 20 && $mainNavigation.status !== 2) {
                $mainNavigation.addClass("background");
                $mainNavigation.status = 2;
            } else if (top < 20 && $mainNavigation.status !== 1) {
                $mainNavigation.removeClass("background");
                $mainNavigation.status = 1;
            }


        });

    })();
});


