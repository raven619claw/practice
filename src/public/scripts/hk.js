$(document).ready(function() {
    
    var sliderWidth = $(".slider-wrap ul").width();
    var widthOfSlide = $(".slider-wrap ul li").width(); 
    var   noOfSlide = $(".slider-wrap ul li").length;
    var  tobeSlided = sliderWidth/noOfSlide;

    function back() {
        $(".slider-wrap ul li").css('transform', 'translateX(-'+widthOfSlide+'px)');
    };

    function forward() {
        $(".slider-wrap ul li").css('transform', 'translateX('+widthOfSlide+'px)');
    };

    function slider() {
        document.getElementById('back').addEventListener('click', function() {
            console.log("back button clicked");
            back();
        });
        document.getElementById('forward').addEventListener('click', function() {
            console.log("front button clicked");
            forward();
        });


    }
    slider();
});