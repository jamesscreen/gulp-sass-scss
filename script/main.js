$(function () {
  
  $('.nav__item').click(function(){
    
    $('.nav__item').removeClass('active');
    $('.nav__item').css('background-color', '#191c24');
    $('.nav__item a').css('color', '#fff');
    $('.nav__item:last-child a').css('color', '#808592');
    
    $(this).addClass('active').css('background-color', '#2a2d37');
    $(this).children('a').css('color', '#808592');
    $(this).prev().css('background-color', '#1f2229');
    $(this).next().css('background-color', '#1f2229');
    
  });

});