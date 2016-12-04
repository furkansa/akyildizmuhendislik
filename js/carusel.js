var width;
var animationSpeed = 1000;
var pauseTime = 3000;
var currentSlide;
var slideHolder;
var interval;
$(window).resize(function() {
    if (interval)
        clearInterval(interval);
    var leftVal = width * currentSlide;
    $('#carouselContainer').css({
        'margin-left': '-' + leftVal + 'px'
    });
    carousel();
});
$(document).ready(function() {
    currentSlide = 1;
    carousel();
});

function carousel() {
    width = $('.container').width() + 30;

    slideHolder = $('#carouselContainer');

    $('.carusel-image').css({
        'width': width
    }
    );


    function startSlider() {
        interval = setInterval(function() {
            $(slideHolder).animate({
                'margin-left': '-=' + width
            }, animationSpeed, function() {
                if (++currentSlide === $(slideHolder).children().length) {
                    currentSlide = 1;
                    clearInterval(interval);
                    setTimeout(function() {
                        $(slideHolder).css({
                            'margin-left': 0
                        });
                        startSlider();
                        return;
                    }, pauseTime);

                }
            });
        }, pauseTime);
    }

    function clearSlider() {
        clearInterval(interval);
    }

    $(slideHolder).on('mouseenter touchstart', clearSlider);
    $(slideHolder).on('mouseleave touchend', startSlider);

    startSlider();
}