//slick.setting.js
$(function(){
    $('#home_catch_inner ul').slick({
        slide: "li",
        fade: true,
        cssEase: 'linear',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        arrows: false,
        dots: true,
        pauseOnHover: false
    });

    $('#home_catch_sp ul').slick({
        slide: "li",
        fade: true,
        cssEase: 'linear',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        arrows: false,
        dots: true,
        pauseOnHover: false
    });
});
