
//////////////////////////////////////////////////////////////////////////////////////////////////
$(window).scroll(function() { 
    var scrollheight = $(window).scrollTop();
    if (scrollheight >= 100) {
          $("header").css("background", "rgba(255,255,255,1)");
          $("header").css("box-shadow", "0px 0px 2px 1px rgba(204,204,204,.6)");
          $("header").css("height", "80px");
          $("header").css("padding-top", "0px");
          $(".logo-div").css("padding-top", "5px");
          $(".logo-div").fadeIn(300).html('<img src="img/logo.png" alt="abundy-logo"/>'); 
          $("header li").css("color", "rgba(0,0,0)");
          $("#menu-div i").css("color", "rgba(0,153,62)");
        }else{
          $("header").css("background", "none");
          $("header").css("box-shadow", "none");
          $("header").css("padding-top", "10px");
          $("logo-div").fadeIn(300).html('<img src="img/logo.png" alt="abundy-logo"/>');
          $("header li").css("color", "#FCFCFC");
          $("header li:hover").css("color", "rgba(54,54,54,.9)");
          $("#menu-div i").css("color", "rgba(225,225,225)");
        }
      });
//////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////ACTIVE
$(document).ready(function(){
    $('header li').click(function(){
      $(this).addClass('active').siblings().removeClass('active');
    });
  });

  ///////////////////////////////////Main page onclick roll
  function scrolltodiv(divid, margintop){
    $('html, body').animate({scrollTop: $("#"+divid).offset().top - margintop}, 500);
 }
 ///////////////////////////////////MENU 
  function _open_menu(divid, margintop){
    $('html, body').animate({scrollTop: $("#"+divid).offset().top - margintop}, 500);
    $('.ovarlay-div').animate({'margin-left':'0%'},200);
    $('.sidemenu-div').animate({'margin-left':'0px'},400);
}
function _close_menu(){
    $('.ovarlay-div').animate({'margin-left':'-100%'},200);
    $('.sidemenu-div').animate({'margin-left':'-250px'},400);
  }


  
//////////////////////////////////////////////////////////////////////////////////////////////////SCROLL-TO-DIV

function _back_to_top(){
  event.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
}
$(window).scroll(function() { 
  var scrollheight = $(window).scrollTop();
  if (scrollheight >= 100) {
        $("#back2Top").fadeIn(300).css("display", "block");
      }else {
        $('#back2Top').fadeOut();
      }
    });
    //////////////////////////////////////////////////////////////////////////////////////////////////