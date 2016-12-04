var width;
var animationSpeed = 1000;
var pauseTime = 3000;
var currentSlide;
var slideHolder;
var interval;
var showers;
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
    showers = [].slice.call($('.carousel-Boxes').children());
    currentSlide = 0;
    carousel();
});

function carousel() {
    width = $('.container').width() + 30;
    carouselCurrentSlideShower = $('.carousel-Boxes');
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
                showers.forEach(function(i) {
                    $(i).children().removeClass('active');
                });
                $(showers[currentSlide+1]).children().addClass('active');
                if (++currentSlide === $(slideHolder).children().length - 1) {
                    currentSlide = 0;
                    clearInterval(interval);
                    setTimeout(function() {
                        $(slideHolder).css({
                            'margin-left': 0
                        });
                        showers.forEach(function(i) {
                            $(i).children().removeClass('active');
                        });
                        $(showers[currentSlide]).children().addClass('active');
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