$(function(){
    //繧ｿ繝門�譖ｿ
    $('.tab_catall span').on('click',function(){
        $('.home_news .box_header ul li span').removeClass('active');
        $(this).addClass('active');
        $('.home_news .box_inner ul').removeClass('active');
        $('.home_news .box_inner ul.news_all').addClass('active');
    });
    $('.tab_cat1 span').on('click',function(){
        $('.home_news .box_header ul li span').removeClass('active');
        $(this).addClass('active');
        $('.home_news .box_inner ul').removeClass('active');
        $('.home_news .box_inner ul.news_cat1').addClass('active');
    });
    $('.tab_cat2 span').on('click',function(){
        $('.home_news .box_header ul li span').removeClass('active');
        $(this).addClass('active');
        $('.home_news .box_inner ul').removeClass('active');
        $('.home_news .box_inner ul.news_cat2').addClass('active');
    });
    $('.tab_cat3 span').on('click',function(){
        $('.home_news .box_header ul li span').removeClass('active');
        $(this).addClass('active');
        $('.home_news .box_inner ul').removeClass('active');
        $('.home_news .box_inner ul.news_cat3').addClass('active');
    });
    $('.tab_cat4 span').on('click',function(){
        $('.home_news .box_header ul li span').removeClass('active');
        $(this).addClass('active');
        $('.home_news .box_inner ul').removeClass('active');
        $('.home_news .box_inner ul.news_cat4').addClass('active');
    });
    $('.tab_cat5 span').on('click',function(){
        $('.home_news .box_header ul li span').removeClass('active');
        $(this).addClass('active');
        $('.home_news .box_inner ul').removeClass('active');
        $('.home_news .box_inner ul.news_cat5').addClass('active');
    });
    $('.tab_cat6 span').on('click',function(){
        $('.home_news .box_header ul li span').removeClass('active');
        $(this).addClass('active');
        $('.home_news .box_inner ul').removeClass('active');
        $('.home_news .box_inner ul.news_cat6').addClass('active');
    });

    //逕ｻ蜒乗枚蟄励ｒ繝�く繧ｹ繝医↓螟画鋤
    $(".alt-txt").each(function(i){
        var txt = $("img",this).attr("alt");
        $(this).attr("data-label", txt);
    });
});
