$.global = new Object();

$.global.item = 1;
$.global.total = 0;

$(document).ready(function() {

    var WindowWidth = $(window).width();
    var SlideCount = $('#slides li').length;
    var SlidesWidth = SlideCount * WindowWidth;

    $.global.item = 0;
    $.global.total = SlideCount;

    $('.slide').css('width', WindowWidth + 'px');
    $('#slides').css('width', SlidesWidth + 'px');

    $("#slides li:nth-child(1)").addClass('alive');

    $('#left').click(function() {
        Slide('back');
        console.log("back");
    });
    $('#right').click(function() {
        Slide('forward');
        console.log("forward");
    });


    $('.footer-menu li').click(function() {
        $('.footer-menu li.active').not(this).removeClass('active');
        $(this).toggleClass("active");
    });

});


function Slide(direction) {

    if (direction == 'back') {
        var $target = $.global.item - 1; }
    if (direction == 'forward') {
        var $target = $.global.item + 1; }

    if ($target == -1) { DoIt($.global.total - 1); } else if ($target == $.global.total) { DoIt(0); } else { DoIt($target); }


}

function DoIt(target) {

    var $windowwidth = $(window).width();
    var $margin = $windowwidth * target;
    var $actualtarget = target + 1;

    $("#slides li:nth-child(" + $actualtarget + ")").addClass('alive');

    $('#slides').css('transform', 'translate3d(-' + $margin + 'px,0px,0px)');

    $.global.item = target;

    $('#count').html($.global.item + 1);

}

//*******************************Data Scroll*****************************//

$(function scrollSpeed() {
    var boxes = $('[data-scroll-speed]'),
        $window = $(window);
    $window.on('scroll', function() {
        var scrollTop = $window.scrollTop();
        boxes.each(function() {
            var $this = $(this),
                scrollspeed = parseInt($this.data('scroll-speed')),
                val = -scrollTop * 70 / scrollspeed,
                bannerVal = -scrollTop * 20 / scrollspeed;
            $this.css('transform', 'translateY(' + val + 'px)');
            if (scrollTop > 0) {
                $(this).css({
                    // 'position' :'absolute',
                    'transform': 'translate3d( 0px, ' + bannerVal + 'px, 0px)',
                    '-webkit-transform': 'translate3d( 0px, ' + bannerVal + 'px, 0px)',
                    '-moz-transform': 'translate3d( 0px, ' + bannerVal + 'px, 0px)',
                    '-o-transform': 'translate3d( 0px, ' + bannerVal + 'px, 0px)',
                    'transition': 'none'
                });
            } else {
                $(this).css({
                    'transition': 'all 0.66s ease'
                });
            }
        });
    });
});


// **********************color density Inspector seperate js************************** //
$(document).ready(function() {
    var ctx;
    var img;
    var canvas;
    function Colors() {
        var c = document.createElement('canvas');
        c.id = 'colorScheme';
        document.body.appendChild(c);

        canvas = document.getElementById('colorScheme');
        ctx = canvas.getContext('2d');
        var src = $('.slide').css('background-image');
        //img = document.getElementsByClassName('slide').style.backgroundImage;  
        img = new Image();
        // img.crossOrigin="anonymous";

        img.onload = function() {
                canvas.height = img.height;
                canvas.width = img.width;
                console.log("height = ", canvas.height);
                console.log("width = ", canvas.width);
            }
            //img.crossOrigin = 'anonymous'; 
        console.log(src);
        img.src = src.substring(4, src.length - 1);
        console.log(img.src);
        Colors.prototype.init();
    }

    Colors.prototype.init = function() {
        img.onload = function() {
            Colors.prototype.getAverageColor();
        }
    }

    Colors.prototype.getAverageColor = function() {
        var count = 0,
            red = 0,
            green = 0,
            blue = 0,
            alpha = 0;
        var imgData, data, i, n, colorOutput;

        ctx.drawImage(img, 0, 0);

        imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        console.log('imageData', imgData.data);


        for (i = 0, n = imgData.data.length; i < n; i += 4) {
            console.log("loop running: calculating color data");
            count++;
            red += imgData.data[i];
            green += imgData.data[i + 1];
            blue += imgData.data[i + 2];
            alpha += imgData.data[i + 3];
        }

        console.log(red);
        console.log(green);
        console.log(blue);
        // console.log(alpha);


        red = (red / count);
        green = (green / count);
        blue = (blue / count);
        alpha = (alpha / count);

        var finalRed = Math.round(red);
        var finalGreen = Math.round(green);
        var finalBlue = Math.round(blue);
        var finalAlpha = Math.round(alpha);

        console.log(finalRed);
        console.log(finalGreen);
        console.log(finalBlue);
        //console.log(finalAlpha);

        colorOutput = 'rgb(' + finalRed + ', ' + finalGreen + ', ' + finalBlue + ')';


        $('#fixedHeader').css('background-color', colorOutput);
        $('#overlayColor').css('background-color', colorOutput);

        var colorBG = $('#overlayColor');
        var range = 450;
        $(window).on('scroll', function() {

            var scrollTop = $(this).scrollTop();

            colorBG.each(function() {
                console.log("blah lbah");
                $(this).css({ 'opacity': (scrollTop / range) });
            });

            // if (scrollTop > 400) {
            //   //header.fadeIn();
            //   
            //   //$('.project-name').css('background-color', colorOutput);

            //    //document.getElementsByClassName('project-name')[0].style.backgroundColor = colorOutput;
            // } else{
            //   //$('.project-name').css('background-color', "transparent");

            // };


            if (scrollTop >= 400) {
                console.log("going in the loop");
                //$('.project-name').css( 'background-color', colorOutput );
                $('#fixedHeader').fadeIn();
                $('.project-name').addClass('ontop');
            } else {
                //$('.project-name').css( 'background-color', "transparent" );
                $('#fixedHeader').fadeOut();
                $('.project-name').removeClass('ontop');
            }

        });

        // clears canvas
        canvas.height = 0;
    };

    var color = new Colors();


});
