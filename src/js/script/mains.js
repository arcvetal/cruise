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

var pageContent = document.querySelector('.page-content');

var hamburger = document.querySelector('.top-menu');
var mainMenu = document.querySelector('.main-menu');
var headSlider = document.querySelector('.page-header__wrapper');

var uploadBtn = document.querySelector('.btn--cruise');
var uploadGallery = document.querySelector('.gallery--hide');

var filterInput = document.querySelector('.page-content__filter-title');
var filterList = document.querySelector('.page-content__filter-list');


//
//
// Меню бургeр
//
//

  hamburger.addEventListener('click', function (evt) {
    hamburger.classList.toggle('top-menu--open');
    mainMenu.classList.toggle('main-menu--open');
  });


  headSlider.addEventListener('click', function (evt) {
    if (hamburger.classList.contains('top-menu--open') && mainMenu.classList.contains('main-menu--open')) {
      hamburger.classList.remove('top-menu--open');
      mainMenu.classList.remove('main-menu--open');
    }
  });

//
//
// Загрузка Галереи
//
//

uploadBtn.addEventListener('click', function () {
  uploadGallery.classList.remove('gallery--hide');
  uploadBtn.classList.add('btn--invisible');
});


  //
  //
  // Открытие/закрытие списка сотрировки
  //
  //

pageContent.addEventListener('click', function (evt) {

  if (evt.target === filterInput) {

    filterList.classList.toggle('page-content__filter-list--show');
    filterInput.classList.toggle('page-content__filter-title--opened');

  } else {

    if (filterList.classList.contains('page-content__filter-list--show') &&
    filterInput.classList.contains('page-content__filter-title--opened')) {

      filterList.classList.remove('page-content__filter-list--show');
      filterInput.classList.remove('page-content__filter-title--opened');

    }
  }

});


//
//
// Сортировка списка
//
//

var gallery = document.getElementById("gallery");
var listElms = gallery.querySelectorAll(".catalog-item");

filterList.addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.id == 'price-up') {
    var sortedElms = Array.prototype.slice.call(listElms).sort(function(a, b) {
      return a.dataset.itemPrice > b.dataset.itemPrice
    });

    for (var i = 0; i < sortedElms.length; i++) {
      gallery.appendChild(sortedElms[i]);
    }
  }
});