jQuery(document).ready(function() {

    jQuery('.slider_about').bxSlider({
        auto: true,
        controls: false

    });


    var slider_main = jQuery('.slider_main').bxSlider({
        //auto: true,
        controls: false

    });
    //var current = slider.getCurrentSlide();
    var slideQty = 100/slider_main.getSlideCount()+'%';
    //console.log(slideQty);

    jQuery("#main_slider .bx-pager-item").each(function(){
        jQuery(this).css('width', slideQty);
    });






    jQuery('.slider_works').bxSlider({
        minSlides: 3,
        maxSlides: 3,
        slideWidth: 300,
        nextText: "",
        prevText: "",
        slideMargin: 20
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
    jQuery(".contacts-form").validate({

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
});