(function($){
    
    "use strict";
    
    //===== Prealoder
    
    $(window).on('load', function(event) {     
        $('.preloader').delay(500).fadeOut(500);
    });
    
    
    
    
    //===== Sticky
    
    $(window).on('scroll', function(event) {     //when we scrool down from top some amount of top layes decreses 
        var scroll = $(window).scrollTop();
        if (scroll < 10) {
            $(".navigation").removeClass("sticky");
        } else{
            $(".navigation").addClass("sticky");
        }
    });
    
    
    
}(jQuery));