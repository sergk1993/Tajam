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
    nextArrow:'<button class="employees__arrow employees__arrow-next"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.78161 17L9 9L0.78161 1"/></svg></button>',
    prevArrow:'<button class="employees__arrow employees__arrow-prev"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.21839 1L1 9L9.21839 17" stroke="white"/></svg></button>',
    responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            
          }
        },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              
            }
          },
    ]
});

$('.header__btn').on('click', function(){
    $('.menu').toggleClass('menu--active')
});

});