jQuery(document).ready(function() {

    jQuery('.slider_about').bxSlider({
        auto: true,
        controls: false

    });
    jQuery('.slider_main').bxSlider({
        //auto: true,
        controls: false

    });



    jQuery('.slider_works').bxSlider({
        minSlides: 3,
        maxSlides: 3,
        slideWidth: 300,
        nextText: "",
        prevText: "",
        slideMargin: 10
    });


});