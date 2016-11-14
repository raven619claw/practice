// debugger;
Application.addModule('browserstack', function(context) {
    'use strict';

    function rorateElem(){
        console.log("eneter esfsaf");
        var  $rotateElem = $(".js-rotate");
        $rotateElem.addClass("rotate");

        $rotateElem.each(function(i) {
            var $li = $(this);
            setTimeout(function() {
                $li.addClass('rotate');
            }, i*1000); // delay 100 ms
        });
    }

    // function rorateElemEnd(){
    //     var  $rotateElem = $(".js-rotate");
    //     $rotateElem.removeClass("rotate");
    // }

    function onmouseover(event, element, elementType){
        switch (elementType) {
            case 'hoveredSection':
                rorateElem();
                break;
        }
    }

    // function mouseout(event, element, elementType){
    //     switch (elementType) {
    //         case 'hoveredSection':
    //             rorateElemEnd();
    //             break;
    //     }
    // }


    function init() {
        // logger.info('initialization browsertack module');
        console.log('browserstack init');
        var moduleEl;
        moduleEl = context.getElement();
        
        // context.broadcast('browserstack', {
        //     moduleEl;
        // });

    }

    return {
        init,
        onmouseover
    };

});
