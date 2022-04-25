"use strict";
console.log($("a").length);

$(document).ready(function () {
  reloadLinks();

  $("#add_button")
    .removeAttr("disabled")
    .click(function () {
      $("#menu").append("<li><a href='" + $("#add_link").val() + "'></a></li>");
      $("#add_link").val("");
      reloadLinks();
    });
});
//append abajo, prepend arriba
//before antes, after despues
//attr atributo añade un elemento a nuestro html
function reloadLinks() {
  $("a").each(function (index) {
    let that = $(this);
    let enlace = that.attr("href");
    that.attr("target", "_blank");
    that.text(enlace);
  });
}
