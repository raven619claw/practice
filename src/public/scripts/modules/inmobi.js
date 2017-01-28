// debugger;
Application.addModule('inmobi', function(context) {
    'use strict';
    var $pageElement;
    var timeoutId = 0;
    function init() {
        console.log('inmobi init');
        var moduleEl;
        moduleEl = context.getElement();
        $pageElement = $('#inmobiPageWrapper');

        $(".main").UIPageScrolling({
            sectionsControl: ".control-indicators",
            captureTouch: true
        });

        $(".main").bind("mousemove", function() {
            headerEvents();
        });

        $(".main").bind("mousemove", function() {
            headerEvents();
        });
        $(".main").bind("keydown", function() {
            headerEvents();
        });
        $(".main").bind("keyup", function() {
            headerEvents();
        });
        $(".main").bind("touchmove", function() {
            headerEvents();
        });
        $(".main").bind('mousewheel', function() {
            headerEvents();
        });
        $('.main').bind("touchstart", function() {
            clearTimeout(timeoutId);
            $(".page-control").css({ "opacity": "0.7" });
            headerEvents();
        });
        $('.main').bind("touchend", function() {
            timeoutId = setTimeout(function() { $(".page-control").css({ "opacity": "0.1" }); }, 2000);
            headerEvents();
        });
        $('.main').bind("mousedown", function() {
            timeoutId = setTimeout(function() { $(".page-control").css({ "opacity": "0.1" }); }, 2000);
            headerEvents();
        });
        $('.main').bind("mouseup", function() {
            clearTimeout(timeoutId);
            $(".page-control").css({ "opacity": "0.7" });
            headerEvents();
        });
    }

    function headerEvents() {
        var $headerSelector = $('#header-v4');
        var $scrollingSectionContainer = $('.ui-page-scrolling-main');
        var $activeSectionSelector = $scrollingSectionContainer.find('.ui-page-scrolling-section.ui-page-scrolling-section_active');
        if($activeSectionSelector.data('index')==0) {
            $headerSelector.removeClass('floating');
        }else{
            $headerSelector.addClass('floating');
        }
    }

    return {
        init
    };

});


