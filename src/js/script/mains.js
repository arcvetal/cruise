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


var hamburger = document.querySelector('.top-menu');
var mainMenu = document.querySelector('.main-menu');

hamburger.addEventListener('click', function (evt) {
  hamburger.classList.toggle('top-menu--open');
  mainMenu.classList.toggle('main-menu--open');

})