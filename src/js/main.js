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

// var sortByPriceUp = function(arr) {
//   arr.sort((a, b) => a.dataset.itemPrice > b.dataset.itemPrice ? 1 : -1);
// }




var gallery = document.getElementById("gallery");
var listElms = gallery.querySelectorAll(".catalog-item");
var arrElms = [];

for (var i = 0; i < listElms.length; i++) {
  arrElms.push(listElms[i]);
}



//
// console.log(arrElms[0].dataset.itemPrice);
// console.log(listElms[0].dataset.itemPrice);
// var sortByPriceUp = function(arr) {
//   arr.sort((a, b) => a.dataset.itemPrice > b.dataset.itemPrice ? 1 : -1);
// }
//
//
// var sortedArr = sortByPriceUp(listElms);

filterList.addEventListener('click', function (e) {
  e.preventDefault();

  // price up
  if (e.target.id == 'price-up') {
    while (gallery.firstChild) {
      gallery.removeChild(gallery.firstChild);
    }

    arrElms.sort(function(a, b){
      var priceA = parseInt(a.dataset.itemPrice);
      var priceB = parseInt(b.dataset.itemPrice);

      if (priceA < priceB) {
        return -1;
      }
      if (priceA > priceB) {
        return 1;
      }
      return 0;
    });

    for (var i = 0; i < arrElms.length; i++) {
      gallery.appendChild(arrElms[i]);
    }
  }


  // price down
  if (e.target.id == 'price-down') {
    while (gallery.firstChild) {
      gallery.removeChild(gallery.firstChild);
    }

    arrElms.sort(function(a, b){
      var priceA = parseInt(a.dataset.itemPrice);
      var priceB = parseInt(b.dataset.itemPrice);

      if (priceA < priceB) {
        return 1;
      }
      if (priceA > priceB) {
        return -1;
      }
      return 0;
    });

    for (var i = 0; i < arrElms.length; i++) {
      gallery.appendChild(arrElms[i]);
    }
  }


  // trip time-up
  if (e.target.id == 'time-up') {
    while (gallery.firstChild) {
      gallery.removeChild(gallery.firstChild);
    }

    arrElms.sort(function(a, b){
      var priceA = parseInt(a.dataset.timeTrip);
      var priceB = parseInt(b.dataset.timeTrip);

      if (priceA < priceB) {
        return -1;
      }
      if (priceA > priceB) {
        return 1;
      }
      return 0;
    });

    for (var i = 0; i < arrElms.length; i++) {
      gallery.appendChild(arrElms[i]);
    }
  }


  // trip time-down
  if (e.target.id == 'time-down') {
    while (gallery.firstChild) {
      gallery.removeChild(gallery.firstChild);
    }

    arrElms.sort(function(a, b){
      var priceA = parseInt(a.dataset.timeTrip);
      var priceB = parseInt(b.dataset.timeTrip);

      if (priceA < priceB) {
        return 1;
      }
      if (priceA > priceB) {
        return -1;
      }
      return 0;
    });

    for (var i = 0; i < arrElms.length; i++) {
      gallery.appendChild(arrElms[i]);
    }
  }

});

// if (e.target.id == 'price-up') {
  //   var sortedElms = Array.prototype.slice.call(listElms).sort(function(a, b) {
    //     return a.dataset.itemPrice > b.dataset.itemPrice
    //   });
    //
    //   for (var i = 0; i < sortedElms.length; i++) {
      //     gallery.appendChild(sortedElms[i]);
      //   }
      // }
