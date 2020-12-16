$(function(){
    $("header .header_middle h1").fadeIn(5000);

    const imgHeight = $("header").outerHeight();
    const header = $("nav ul li a");
    const header_02 = $('header nav')

    $(window).on("scroll", function(){
      if($(window).scrollTop() > imgHeight && $('.skill').offset().top > $(window).scrollTop()){
        // worksの部分に入る
        header.addClass("change-color");
        header_02.addClass("change-color_02")
      } else if ($(window).scrollTop() > $('.works').offset().top){
        //headerの部分
        header.removeClass("change-color");
        header_02.removeClass("change-color_02")
      }else{
        //s
        header.removeClass("change-color");
        header_02.removeClass("change-color_02")
      }
    });
});


// SPナビゲーションメニュー
$(function(){
    $("header .ham_btn").on("click",function(){
        $("header .sp_nav").fadeToggle(800),
        $("span",this).toggleClass("span_move")
    });
});


$(function () {
    $("main .skill .skill_set .skill_set_in").mouseover(function () {
      $("img", this).css({
        transform: "scale(1.2)",
        transition: ".5s"
      });
    }).mouseout(function () {
      $("img", this).css({
        transform: "scale(1)",
        transition: ".5s"
      });
    });
});

$(function(){
    $("#slick01").slick({
      autoplay: true,
      autoplaySpeed: 3000,
      dots: false,
      arrows: false,
    });
});





