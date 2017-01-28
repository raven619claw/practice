// debugger;
Application.addModule('inmobi', function(context) {
    'use strict';
    var $pageElement;
    var timeoutId = 0;
    function init() {
        // logger.info('initialization browsertack module');
        console.log('inmobi init');
        var moduleEl;
        moduleEl = context.getElement();
        $pageElement = $('#inmobiPageWrapper');
        // window.addEventListener('scroll', function(){
        //     onScrollheader();
        // }, false);
        (function() {
            $(".main").UIPageScrolling({
                sectionsControl: ".control-indicators",
                captureTouch: true
            });
            $('.main').bind("touchstart", function() {
                clearTimeout(timeoutId);
                $(".page-control").css({ "opacity": "0.7" });
            });
            $('.main').bind("touchend", function() {
                timeoutId = setTimeout(function() { $(".page-control").css({ "opacity": "0.1" }); }, 2000);
            });
            $('.main').bind("mousedown", function() {
                timeoutId = setTimeout(function() { $(".page-control").css({ "opacity": "0.1" }); }, 2000);
            });
            $('.main').bind("mouseup", function() {
                clearTimeout(timeoutId);
                $(".page-control").css({ "opacity": "0.7" });
            });

            $(window).scroll(function(){
                var $headerSelector = $pageElement.find('#header-v4');
                var $scrollingSectionContainer = $pageElement.find('.ui-page-scrolling-main');
                var $activeSectionSelector = $scrollingSectionContainer.find('.ui-page-scrolling-section.ui-page-scrolling-section_active');
                if(!$activeSectionSelector.data('index')==0){
                    $headerSelector.addClass('floating');
                }else{
                    $headerSelector.removeClass('floating');
                }  
            });
        }());
    }


    // function onScrollheader(){
      
    // }
    return {
        init
    };

});
