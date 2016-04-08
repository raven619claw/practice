// JavaScript Document

function chngeBG(id) {
    var bgimgs = ['bg1.jpg', 'bg1.jpg', 'bg3.jpg']; // add images here..
    function next() {
        if (id >= bgimgs.length) {
            id = 0;
        }
        var img1 = bgimgs[id];
        id++;
        if (id >= bgimgs.length){
            id = 0;
        }
        var img2 = bgimgs[id];

        $('#bg_left').css("background-image", "url('/images/bg1.jpg')"+img1+")");
        $('#bg_right').css("background-image", "url('/images/bg1.jpg')"+img2+")");
        setTimeout(next, 1000);
    }
    next();
}

$(document).ready(function() {
        chngeBG(0);     
});