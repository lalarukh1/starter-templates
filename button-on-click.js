// Add/Toggle class on click
$(document).ready(function () {
    $('.button a').on('click', function (e) {
        e.preventDefault();
        $(this).addClass('active');
        $(this).toggleClass('another-active');
})
});

//doing something on click
$(document).ready(function() {
    $("#btnSubmit").click(function(){
        alert("button");
    });
});

//Add class to <html> tag
$(document).ready(function () {
    $('button.navbar-toggler').on('click', function (e) {
        console.log('clicked');
        $(this).toggleClass('toggled');
        $('html').toggleClass('nav-open');
    })
});

