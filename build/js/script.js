$(document).ready(function(){$(".header-slider__list").slick({dots:!0,arrows:!1,infinite:!0,fade:!0,speed:1500,autoplay:!1,autoplaySpeed:4e3,slidesToShow:1,adaptiveHeight:!0})});var pageContent=document.querySelector(".page-content"),hamburger=document.querySelector(".top-menu"),mainMenu=document.querySelector(".main-menu"),headSlider=document.querySelector(".page-header__wrapper"),uploadBtn=document.querySelector(".btn--cruise"),uploadGallery=document.querySelectorAll(".catalog-item--hide"),filterInput=document.querySelector(".page-content__filter-title"),filterList=document.querySelector(".page-content__filter-list");hamburger.addEventListener("click",function(e){hamburger.classList.toggle("top-menu--open"),mainMenu.classList.toggle("main-menu--open")}),headSlider.addEventListener("click",function(e){hamburger.classList.contains("top-menu--open")&&mainMenu.classList.contains("main-menu--open")&&(hamburger.classList.remove("top-menu--open"),mainMenu.classList.remove("main-menu--open"))}),uploadBtn.addEventListener("click",function(){for(var e=0;e<uploadGallery.length;e++)uploadGallery[e].classList.remove("catalog-item--hide");uploadBtn.classList.add("btn--invisible")}),pageContent.addEventListener("click",function(e){e.target===filterInput||e.target===filterInput.firstElementChild?(filterList.classList.toggle("page-content__filter-list--show"),filterInput.classList.toggle("page-content__filter-title--opened")):filterList.classList.contains("page-content__filter-list--show")&&filterInput.classList.contains("page-content__filter-title--opened")&&(filterList.classList.remove("page-content__filter-list--show"),filterInput.classList.remove("page-content__filter-title--opened"))});for(var gallery=document.getElementById("gallery"),listElms=gallery.querySelectorAll(".catalog-item"),arrElms=[],i=0;i<listElms.length;i++)arrElms.push(listElms[i]);filterList.addEventListener("click",function(e){if(e.preventDefault(),"price-up"==e.target.id){for(;gallery.firstChild;)gallery.removeChild(gallery.firstChild);arrElms.sort(function(e,t){var r=parseInt(e.dataset.itemPrice),l=parseInt(t.dataset.itemPrice);return r<l?-1:l<r?1:0});for(var t=0;t<arrElms.length;t++)gallery.appendChild(arrElms[t])}if("price-down"==e.target.id){for(;gallery.firstChild;)gallery.removeChild(gallery.firstChild);arrElms.sort(function(e,t){var r=parseInt(e.dataset.itemPrice),l=parseInt(t.dataset.itemPrice);return r<l?1:l<r?-1:0});for(t=0;t<arrElms.length;t++)gallery.appendChild(arrElms[t])}if("time-up"==e.target.id){for(;gallery.firstChild;)gallery.removeChild(gallery.firstChild);arrElms.sort(function(e,t){var r=parseInt(e.dataset.timeTrip),l=parseInt(t.dataset.timeTrip);return r<l?-1:l<r?1:0});for(t=0;t<arrElms.length;t++)gallery.appendChild(arrElms[t])}if("time-down"==e.target.id){for(;gallery.firstChild;)gallery.removeChild(gallery.firstChild);arrElms.sort(function(e,t){var r=parseInt(e.dataset.timeTrip),l=parseInt(t.dataset.timeTrip);return r<l?1:l<r?-1:0});for(t=0;t<arrElms.length;t++)gallery.appendChild(arrElms[t])}});