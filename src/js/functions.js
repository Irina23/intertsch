jQuery(document).ready(function() {

    $(".srvIcon").length && $(window).on("mousemove", function(e) {
        var t = e.pageX,
            i = 90 / $(window).width(),
            n = -(45 - i * t);
        $(".srvIconWrap").css({
            transform: "rotate3d(0, 1, 0, " + -n + "deg )"
        })
    });


    
    jQuery(window).load(function() {
        $('#preloader').fadeOut('slow',function(){$(this).remove();});
        jQuery('.slider_about, .service-item-slider').bxSlider({
            auto: true,
            //controls: false
            nextText: "",
            prevText: ""
        });

        jQuery('.slider_works, .slider_who_we_are_mobile, .slider_product').bxSlider({

            nextText: "",
            prevText: ""


        });
        jQuery('.slider_comment').bxSlider({

            nextText: "",
            prevText: "",
            adaptiveHeight: true

        });

        var slider_main = jQuery('.slider_main').bxSlider({
            auto: true,
            controls: false,
            speed: 1500,
            pause: 9000,
            onSliderLoad: function () {
                $('.slider_main>li:not(.bx-clone)').eq(0).addClass('active-slide').css('opacity',1).siblings().removeClass('active-slide');
                /*if ($.browser.iphone || $.browser.ipad ) {
                    setTimeout(function () {
                        $(".active-slide .number").addClass('animated flipInY').css('opacity',1).siblings().removeClass('animated flipInX');
                        $(".active-slide .text-holder h4").addClass('animated flipInX').css('display','block').siblings().removeClass('animated flipInX').css('display','none');
                    }, 200);
                    setTimeout(function () {
                        $(".active-slide .text-holder .text").addClass('animated flipInX').css('opacity',1).siblings().removeClass('animated flipInX');
                    }, 400);
                    setTimeout(function () {
                        $(".active-slide .text-holder .link_readmore a").addClass('animated flipInX').css('opacity',1).siblings().removeClass('animated flipInX');
                    }, 600);

                }*/
            },
            onSlideAfter: function ($slideElement) {
                $($slideElement).addClass('active-slide').siblings().removeClass('active-slide');
                /*if ($.browser.iphone || $.browser.ipad ) {
                    setTimeout(function () {
                        $(".active-slide .number").addClass('animated flipInY').css('opacity',1).siblings().removeClass('animated flipInX');
                        $(".active-slide .text-holder h4").addClass('animated flipInX').css('display','block').siblings().removeClass('animated flipInX').css('display','none');
                    }, 200);
                    setTimeout(function () {
                        $(".active-slide .text-holder .text").addClass('animated flipInX').css('opacity',1).siblings().removeClass('animated flipInX');
                    }, 400);
                    setTimeout(function () {
                        $(".active-slide .text-holder .link_readmore a").addClass('animated flipInX').css('opacity',1).siblings().removeClass('animated flipInX');
                    }, 600);

                }*/
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

            var clickFunction = function(hash) {
                var hrefVal, target;
                if (typeof hash === 'string') {
                    hrefVal = hash;
                } else {
                    hrefVal = $(this).attr('href');
                }
                target = $(hrefVal);
                if (target.length) {
                    if (($( window ).width() > 800) && (hrefVal == '#services')){
                        $('html, body').animate({
                            scrollTop: target.offset().top - 205
                        }, 1000);
                    } else {
                        $('html, body').animate({
                            scrollTop: target.offset().top
                        }, 1000);
                    }
                    return false;
                }
            };
            $('a[href*="#"]:not([href="#"])').click(clickFunction);
            if (window.location.hash) {
                clickFunction(window.location.hash);
            }

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
    var close = $('#modal_close, #overlay, .modal_close');
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



    //menu, feedback open
    $("#menu-icon, .feedback .link").on("click", function(){
        $(this).next().slideToggle();

    });
    
    if($(window).width()<959){
        $(".mobile-menu a").on("click", function(){
            $(this).closest('.mobile-menu').slideUp();
        });
    }







////rating
    /*$('.rating').barrating({
        theme: ''
    });
    $('.rating_show').barrating({
        theme: '',
        readonly: true
    });*/
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

    if ($.browser.iphone || $.browser.ipad || $.browser.ipad) $('body').addClass('client-ios');
    if ($.browser.safari && !$.browser.mobile ) $('body').addClass('client-safari');
});




$(window).on('scroll', function() {
    if($('#info_servise').length) {
        var targOffsetTop = $('.counters-holder').offset().top,
            targScrollTop = $(window).scrollTop(),
            winHeight =$(window).height();
        if (!targOffsetTop) {
            targOffsetTop = 100000;
        }
        if (targOffsetTop - winHeight < targScrollTop) {
            if (!$('.counters-holder').hasClass('numbers')) {
                $('#animateNumber1')
                    .prop('number', 0)
                    .animateNumber(
                        {
                            number: 1765
                        },
                        2000
                    );

                $('#animateNumber2')
                    .prop('number', 0)
                    .animateNumber(
                        {
                            number: 365
                        },
                        2000
                    );
                $('#animateNumber3')
                    .prop('number', 0)
                    .animateNumber(
                        {
                            number: 1034
                        },
                        2000
                    );
                $('#animateNumber4')
                    .prop('number', 0)
                    .animateNumber(
                        {
                            number: 765
                        },
                        2000
                    );
            }
            $('.counters-holder').addClass('numbers')
        }

    }


    
    
});




/*!
 * jQuery Browser Plugin 0.1.0
 * https://github.com/gabceb/jquery-browser-plugin
 *
 * Original jquery-browser code Copyright 2005, 2015 jQuery Foundation, Inc. and other contributors
 * http://jquery.org/license
 *
 * Modifications Copyright 2015 Gabriel Cebrian
 * https://github.com/gabceb
 *
 * Released under the MIT license
 *
 * Date: 05-07-2015
 */
/*global window: false */

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], function ($) {
            return factory($);
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        // Node-like environment
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals
        factory(window.jQuery);
    }
}(function(jQuery) {
    "use strict";

    function uaMatch( ua ) {
        // If an UA is not provided, default to the current browser UA.
        if ( ua === undefined ) {
            ua = window.navigator.userAgent;
        }
        ua = ua.toLowerCase();

        var match = /(edge)\/([\w.]+)/.exec( ua ) ||
            /(opr)[\/]([\w.]+)/.exec( ua ) ||
            /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
            /(iemobile)[\/]([\w.]+)/.exec( ua ) ||
            /(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec( ua ) ||
            /(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec( ua ) ||
            /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
            /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
            /(msie) ([\w.]+)/.exec( ua ) ||
            ua.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec( ua ) ||
            ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
            [];

        var platform_match = /(ipad)/.exec( ua ) ||
            /(ipod)/.exec( ua ) ||
            /(windows phone)/.exec( ua ) ||
            /(iphone)/.exec( ua ) ||
            /(kindle)/.exec( ua ) ||
            /(silk)/.exec( ua ) ||
            /(android)/.exec( ua ) ||
            /(win)/.exec( ua ) ||
            /(mac)/.exec( ua ) ||
            /(linux)/.exec( ua ) ||
            /(cros)/.exec( ua ) ||
            /(playbook)/.exec( ua ) ||
            /(bb)/.exec( ua ) ||
            /(blackberry)/.exec( ua ) ||
            [];

        var browser = {},
            matched = {
                browser: match[ 5 ] || match[ 3 ] || match[ 1 ] || "",
                version: match[ 2 ] || match[ 4 ] || "0",
                versionNumber: match[ 4 ] || match[ 2 ] || "0",
                platform: platform_match[ 0 ] || ""
            };

        if ( matched.browser ) {
            browser[ matched.browser ] = true;
            browser.version = matched.version;
            browser.versionNumber = parseInt(matched.versionNumber, 10);
        }

        if ( matched.platform ) {
            browser[ matched.platform ] = true;
        }

        // These are all considered mobile platforms, meaning they run a mobile browser
        if ( browser.android || browser.bb || browser.blackberry || browser.ipad || browser.iphone ||
            browser.ipod || browser.kindle || browser.playbook || browser.silk || browser[ "windows phone" ]) {
            browser.mobile = true;
        }

        // These are all considered desktop platforms, meaning they run a desktop browser
        if ( browser.cros || browser.mac || browser.linux || browser.win ) {
            browser.desktop = true;
        }

        // Chrome, Opera 15+ and Safari are webkit based browsers
        if ( browser.chrome || browser.opr || browser.safari ) {
            browser.webkit = true;
        }

        // IE11 has a new token so we will assign it msie to avoid breaking changes
        if ( browser.rv || browser.iemobile) {
            var ie = "msie";

            matched.browser = ie;
            browser[ie] = true;
        }

        // Edge is officially known as Microsoft Edge, so rewrite the key to match
        if ( browser.edge ) {
            delete browser.edge;
            var msedge = "msedge";

            matched.browser = msedge;
            browser[msedge] = true;
        }

        // Blackberry browsers are marked as Safari on BlackBerry
        if ( browser.safari && browser.blackberry ) {
            var blackberry = "blackberry";

            matched.browser = blackberry;
            browser[blackberry] = true;
        }

        // Playbook browsers are marked as Safari on Playbook
        if ( browser.safari && browser.playbook ) {
            var playbook = "playbook";

            matched.browser = playbook;
            browser[playbook] = true;
        }

        // BB10 is a newer OS version of BlackBerry
        if ( browser.bb ) {
            var bb = "blackberry";

            matched.browser = bb;
            browser[bb] = true;
        }

        // Opera 15+ are identified as opr
        if ( browser.opr ) {
            var opera = "opera";

            matched.browser = opera;
            browser[opera] = true;
        }

        // Stock Android browsers are marked as Safari on Android.
        if ( browser.safari && browser.android ) {
            var android = "android";

            matched.browser = android;
            browser[android] = true;
        }

        // Kindle browsers are marked as Safari on Kindle
        if ( browser.safari && browser.kindle ) {
            var kindle = "kindle";

            matched.browser = kindle;
            browser[kindle] = true;
        }

        // Kindle Silk browsers are marked as Safari on Kindle
        if ( browser.safari && browser.silk ) {
            var silk = "silk";

            matched.browser = silk;
            browser[silk] = true;
        }

        // Assign the name and platform variable
        browser.name = matched.browser;
        browser.platform = matched.platform;
        return browser;
    }

    // Run the matching process, also assign the function to the returned object
    // for manual, jQuery-free use if desired
    window.jQBrowser = uaMatch( window.navigator.userAgent );
    window.jQBrowser.uaMatch = uaMatch;

    // Only assign to jQuery.browser if jQuery is loaded
    if ( jQuery ) {
        jQuery.browser = window.jQBrowser;
    }

    return window.jQBrowser;
}));

