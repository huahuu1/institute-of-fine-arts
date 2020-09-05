"use strict";

$(function () {
  $("a.circle").click(function () {
    // remove classes from all
    $("a.circle").removeClass("active"); // add class to the one we clicked

    $(this).addClass("active");
  });
});