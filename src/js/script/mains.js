$(document).ready(function(){
  $('.header-slider__list').slick({
    dots: true,
    arrows:false,
    infinite: true,
    fade: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    adaptiveHeight: true
  });
});