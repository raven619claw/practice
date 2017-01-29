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
    }
    function scrollEvents(){
        $(window).on('scroll', function(){
            var scrollTop = $(window).scrollTop();
            if(scrollTop> 100){
                $("header").addClass('shrink');
            }else{
                $("header").removeClass('shrink');
            }
        });
    }
    return {
        init
    };

});


