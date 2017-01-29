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
    }
    return {
        init
    };

});


