var width;
var animationSpeed = 1000;
var pauseTime = 3000;
var currentSlide;
var slideHolder;
var interval;
var showers;
$(window).resize(function () {
    clearInterval(interval);
    width = $('.container').width() + 30;
    var leftVal = width * currentSlide;
    $('#carouselContainer').css({
        'margin-left': '-' + leftVal + 'px'
    });
    carousel();
});
$(document).ready(function () {
    clearInterval(interval);
    showers = [].slice.call($('.carousel-Boxes').children());
    currentSlide = 0;
    carousel();
});


function carousel() {
    clearInterval(interval);
    width = $('.container').width() + 30;
    carouselCurrentSlideShower = $('.carousel-Boxes');
    slideHolder = $('#carouselContainer');

    $('.carusel-image').css({
        'width': width
    }
    );


    function startSlider() {
        interval = setInterval(next, pauseTime);
    }
    function next() {
        $(slideHolder).animate({
            'margin-left': '-=' + width
        }, animationSpeed, function () {
            showers.forEach(function (i) {
                $(i).children().removeClass('active');
            });
            $(showers[currentSlide + 1]).children().addClass('active');
            if (++currentSlide === $(slideHolder).children().length - 1) {
                currentSlide = 0;
                clearInterval(interval);
                setTimeout(function () {
                    $(slideHolder).css({
                        'margin-left': 0
                    });
                    showers.forEach(function (i) {
                        $(i).children().removeClass('active');
                    });
                    $(showers[currentSlide]).children().addClass('active');
                    startSlider();
                    return;
                }, pauseTime);

            }

        });
    }

    function prev() {
        if (parseInt($(slideHolder).css('margin-left'), 10) === 0) {
            $(slideHolder).animate({
                'margin-left': '-=' + width * (showers.length - 1)
            }, animationSpeed, function () {
                showers.forEach(function (i) {
                    $(i).children().removeClass('active');
                });
                currentSlide = showers.length - 1;
                $(showers[currentSlide]).children().addClass('active');
            });
        } else {
            $(slideHolder).animate({
                'margin-left': '+=' + width
            }, animationSpeed, function () {
                showers.forEach(function (i) {
                    $(i).children().removeClass('active');
                });
                $(showers[currentSlide - 1]).children().addClass('active');
                if (--currentSlide === -1) {
                    currentSlide = showers.length - 1;
                    clearInterval(interval);
                    setTimeout(function () {
                        $(slideHolder).css({
                            'margin-left': currentSlide * width
                        });
                        showers.forEach(function (i) {
                            $(i).children().removeClass('active');
                        });
                        $(showers[currentSlide]).children().addClass('active');
                        startSlider();
                        return;
                    }, pauseTime);

                }

            });
        }

    }

    function clearSlider() {
        clearInterval(interval);
    }

    $(slideHolder).on('mouseenter touchstart', clearSlider);
    $(slideHolder).on('mouseleave touchend', startSlider);

    startSlider();

    $('#nextButton').on('click', function () {
        clearSlider();
        next();
        startSlider();
    });

    $('#prevButton').on('click', function () {
        clearSlider();
        prev();
        startSlider();
    });
}