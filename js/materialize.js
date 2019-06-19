$(document).ready(function(){
    $('.slider').slider({
        indicators: false,
        height: $(window).height()
    });
});
$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
});

setInterval(function(){
    $('.carousel.carousel-slider').carousel('next');
}, 3000);

$(document).ready(function(){
    $('.materialboxed').materialbox();
});
$(document).ready(function(){
    $('.sidenav').sidenav();
});

$(document).ready(function(){
    $('.collapsible').collapsible();
});