AOS.init();

$(".newsWrap").children(".box").click(function(){
    $(".imgView").fadeIn();

    let img = $(this).find(".image").html();

    $(".imgShow").html(img);

    let p = $(this).text();

    $(".imgView").find("p").text(p);

});

$(".imgView i, .closeWrap").click(function(){

    $(".imgView").fadeOut();

});


$('.sojuBox').on('mouseenter',function(){
    $(this).find('.txt').stop().fadeIn();

}).on('mouseleave',function(){
    $(this).find('.txt').stop().fadeOut();
})