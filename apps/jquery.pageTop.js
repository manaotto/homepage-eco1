$(function() {
    $(window).scroll(function () {
        var s = $(this).scrollTop();
        var m = 300;
        if(s > m) {
            $("#page_top").fadeIn('slow');
        } else if(s < m) {
            $("#page_top").fadeOut('slow');
        }
    });
});
