// debugger;
Application.addModule('inmobiTwo', function(context) {
    'use strict';
    var $pageElement;
    var timeoutId = 0;
    function init() {
        console.log('inmobi init');
        var moduleEl;
        moduleEl = context.getElement();
        $pageElement = $('#inmobiTwoPageWrapper');
        scrollEvents();
        
        $('#nav-icon4').click(function(){
            $(this).toggleClass('open');
            $('body').toggleClass('open');
        });

        $('.blackBG').click(function(){
            $('body').removeClass('open');
            $('#nav-icon4').removeClass('open');
        });
        $('.hl').click(function(){
            $(this).toggleClass('open');
        })
    }
    function scrollEvents(){
        $(window).on('scroll', function(){
            var scrollTop = $(window).scrollTop();
            if(scrollTop> 100){
                $("header").addClass('shrink');
                $(".bottom-banner").addClass('fixed');
            }else{
                $("header").removeClass('shrink');
                $(".bottom-banner").removeClass('fixed');
            }
        });
    }
    return {
        init
    };

});


