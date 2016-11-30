var scroll;
$(window).scroll(function(event) {
    scroll = $(window).scrollTop();
    if (scroll > 150 && $('#akyildizImgLogo').css('display') === 'inline' && $(window).width() > 970) {
        $('#akyildizImgLogo').css('display', 'none');
        $('#akyildizLogoHolder').html('<span>AKYILDIZ</span> MÜHENDİSLİK');
        $(document.body).css('padding-top', '140px');
        $('.top').css('min-height', '0');
        $('nav').css('margin-top', '-10px');
        return;
    }
    if (scroll < 150 && $('#akyildizImgLogo').css('display') !== 'inline' && $(window).width() > 970) {
        $('#akyildizLogoHolder').html('<img class="logo" id="akyildizImgLogo" src="img/logo/akyildiz_muhendislik_logo.png" alt="akyıldız mühendislik logo">');
        $(document.body).css('padding-top', '0');
        $('.top').css('min-height', '135px');
        $('nav').css('margin-top', '20px');
        return;
    }
});

$(window).resize(function(){
    if($('body').width() < 970 && $('#mobileMenu').is(':visible')){
        closeMobileMenu();
    }
});

function openMobileMenu() {
    $('#mobileMenu').slideDown("700");
    $('#mobileMenuCloseButton').slideDown("700");
}

function closeMobileMenu() {
    $('#mobileMenu').slideUp("700");
    $('#mobileMenuCloseButton').slideUp("700");
}