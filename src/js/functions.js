jQuery(document).ready(function() {

    jQuery(window).load(function() {
        jQuery('.slider_about').bxSlider({
            auto: true,
            controls: false

        });


        var slider_main = jQuery('.slider_main').bxSlider({
            //auto: true,
            controls: false,
            onSliderLoad: function () {
                $('.slider_main>li:not(.bx-clone)').eq(0).addClass('active-slide').siblings().removeClass('active-slide');
            },
            onSlideAfter: function ($slideElement, oldIndex, newIndex) {
                //$('.slide').removeClass('active-slide');
                $($slideElement).addClass('active-slide').siblings().removeClass('active-slide');
            }

        });
        //var current = slider.getCurrentSlide();
        var slideQty = 100/slider_main.getSlideCount()+'%';


        jQuery("#main_slider .bx-pager-item").each(function(){
            jQuery(this).css('width', slideQty);
        });






        var minslide = 3;
        jQuery('.slider_works').bxSlider({
            minSlides: 3,
            maxSlides: 3,
            slideWidth: 300,
            nextText: "",
            prevText: "",
            slideMargin: 20,
            onSliderLoad: function(elem, old, newi){
                $('.slider_works>li:not(.bx-clone)').eq(0).addClass('active-slide');
                $('.slider_works>li:not(.bx-clone)').eq(1).addClass('active-slide');
                $('.slider_works>li:not(.bx-clone)').eq(2).addClass('active-slide');
            },
            onSlideAfter: function(elem, old, newi){
                $('.slider_works li').removeClass('active-slide')
                // calculate offset

                si = minslide*newi;
                ei = minslide*(newi+1);
                active_slides = $('.slider_works li').not('.bx-clone').slice(si, ei).addClass('active-slide');  // key point
                //console.log(active_slides);
            }
        });
        var slideQty_w = 100/jQuery('#slider-work .bx-default-pager .bx-pager-item').length+'%';
        //console.log(slideQty_w);

        jQuery("#slider-work .bx-default-pager .bx-pager-item").each(function(){
            jQuery(this).css('width', slideQty_w);
        });




        jQuery('.slider_who_we_are').bxSlider({
            minSlides: 3,
            maxSlides: 3,
            slideWidth: 300,
            nextText: "",
            prevText: "",
            slideMargin: 20
        });

        var slideQty_who_we_are = 100/jQuery('#who_we_are .bx-controls .bx-pager .bx-pager-item').length+'%';
        //console.log(slideQty_who_we_are);

        jQuery("#who_we_are .bx-controls .bx-pager .bx-pager-item").each(function(){
            jQuery(this).css('width', slideQty_who_we_are);

        });





        jQuery('.slider_comment').bxSlider({
            //auto: true,
            nextText: "",
            prevText: ""

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




        jQuery('.slider_main').change(function(){
            alert('Ёлемент foo был изменен.');
        });


        jQuery( "#main_slider .bx-pager-item a" ).click(function() {

        });
    });






        ///modal
    $('a[href="#modal_form"]').click( function(event){
        event.preventDefault();
        $('#overlay').fadeIn(400,
            function(){
                $('#modal_form')
                    .css('display', 'block')
                .animate({opacity: 1, top: '50%'}, 200);
            });
    });

    $('#modal_close, #overlay').click( function(){
        $('#modal_form')
            .animate({opacity: 0, top: '45%'}, 200,
            function(){ // пoсле aнимaции
                $(this).css('display', 'none');
                $('#overlay').fadeOut(400);
            }
        );
    });












    jQuery(window).resize(function() {
        jQuery("#main_slider .bx-pager-item").each(function(){
            jQuery(this).css('width', slideQty);
        });

        jQuery("#slider-work .bx-default-pager .bx-pager-item").each(function(){
            jQuery(this).css('width', slideQty_w);
        });

        jQuery("#who_we_are .bx-controls .bx-pager .bx-pager-item").each(function(){
            jQuery(this).css('width', slideQty_who_we_are);

        });
    });

});