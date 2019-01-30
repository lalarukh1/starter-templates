//toggle class when reaching a div while scrolling
$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    $('.area-img').toggleClass('animated',
        scroll >= $('.section-description').offset().top
    );
    $('.info-img').toggleClass('animated',
        scroll >= $('.section-content').offset().top
    );
});
$(window).scroll();

//toggle class when scrolling starts
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $("nav").removeClass("navbar-transparent");
    }
    else {
        $("nav").addClass("navbar-transparent");
    }
});