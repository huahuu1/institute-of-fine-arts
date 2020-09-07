"use strict";

$(document).ready(function () {
  $('.student-slider').owlCarousel({
    margin: 10,
    loop: true,
    responsiveClass: true,
    dots: true,
    autoplay: false,
    lazyLoad: true,
    responsive: {
      0: {
        items: 2
      }
    }
  });
});