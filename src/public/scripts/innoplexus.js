$(document).ready(function() {

    $(".minus").on('click', function(){
        console.log("weorking");
        var closeparent = this.closest(".collapsable-content");
        var collapseHeight = $(closeparent).height();
        console.log(closeparent);
        console.log(collapseHeight);
        $(closeparent).toggleClass('collapsed');
        $(closeparent).children('.after-collpase').css('width', collapseHeight);
        $(closeparent).children('.after-collpase').children().css('width', collapseHeight);
        $(closeparent).children('.after-collpase').toggleClass('show');
    })
});