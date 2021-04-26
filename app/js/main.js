$(function(){

$('.header__slider').slick({
    arrows:false,
    dots:true
});

$('.employees__slider-top').slick({
    arrows:false,
    
    asNavFor: '.employees__slider-sub',
});

$('.employees__slider-sub').slick({
    slidesToShow:3,
    slidesToScroll:1,
    asNavFor: '.employees__slider-top',
    centerMode: true, 
    nextArrow:'<button class="employees__arrow employees__arrow-next"><img class="employees__arrow-img" src="images/employees-arrow-right.png" alt=""></button>',
    prevArrow:'<button class="employees__arrow employees__arrow-prev"><img class="employees__arrow-img" src="images/employees-arrow-left.png" alt=""></button>',

   
});
  
});