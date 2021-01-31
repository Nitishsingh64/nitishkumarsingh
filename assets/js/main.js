(function($){
    
    "use strict";
    
    $(window).on('load', function(event) {     
        $('.preloader').delay(500).fadeOut(500);
    });
    
    $(window).on('scroll', function(event) {    
        var scroll = $(window).scrollTop();
        if (scroll < 10) {
            $(".navigation").removeClass("sticky");
        } else{
            $(".navigation").addClass("sticky");
        }
    });
    
    
    
}(jQuery));