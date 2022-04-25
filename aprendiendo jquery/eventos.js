"use strict";
$(document).ready(function () {
  //MouseOver Y mouseOut
  let caja = $("#caja");

  caja.mouseover(function () {
    $(this).css("background", "green");
  });
  caja.mouseout(function () {
    $(this).css("background", "red");
  });
  //Hover
  let cuadrado = $("#cuadro");
  function cambiaMorado() {
    $(this).css("background", "#8F00FF");
  }
  function cambiaAzul() {
    $(this).css("background", "blue");
  }
  cuadrado.hover(cambiaMorado, cambiaAzul);

  //click,Doble click
  caja.click(function () {
    $(this).css("background", "blue").css("color", "pink");
  });
  caja.dblclick(function () {
    $(this).css("background", "green").css("color", "yellow");
  });
  //Focus y blur
  let nombre = $("#nombre");
  let datos = $("#datos");

  nombre.focus(function () {
    $(this).css("border", "5px solid green");
  });
  nombre.blur(function () {
    $(this).css("border", "1px solid transparent");
    datos.text($(this).val()).show();
  });
  //MouseDown MouseUp
  datos.mousedown(function () {
    $(this).css("border-color", "grey");
    $(this).css("color", "gray");
  });
  datos.mouseup(function () {
    $(this).css("border-color", "blue");
    $(this).css("color", "darkblue");
  });
  //Mousemove
  $(document).mousemove(function (event) {
    console.log("En X:" + event.clientX);
    console.log("En Y:" + event.clientY);

    $("body").css("cursor", "none");

    let sigueme = $("#sigueme");
    sigueme.css("left", event.clientX).css("top", event.clientY);
  });
});
