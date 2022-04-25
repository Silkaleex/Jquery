"use strict";
$(document).ready(function () {
  console.log("Estamos listos!!");

  //Selector ID
  let rojo = $("#rojo").css("background", "red").css("color", "white");
  console.log(rojo);

  let amarillo = $("#amarillo")
    .css("background", "yellow")
    .css("color", "green");

  $("#verde").css("background", "green").css("color", "white");
  //Selector de Class
  let mi_clase = $(".zebra").css("padding", "5px");
  mi_clase.css("border", "5px dashed black");
  console.log(mi_clase[0]);
  console.log(mi_clase.eq(1));

  let sin_borde = $(".sin_borde").click(function () {
    console.log("Selecionado!");
    $(this).addClass("zebra");
  });
  //Selectores de etiqueta
  let parrafos = $("p").css("cursor", "pointer");
  parrafos.click(function () {
    let esto = $(this);
    if (!esto.hasClass("grande")) {
      esto.addClass("grande");
    } else {
      esto.removeClass("grande");
    }
  });
  //Selectores de atributo
  $("[title = Google]").css("background", "#ccc").css("color", "black");
  $("[title = facebook]").css("background", "blue").css("color", "aqua");
  //Otros
  $("p, a").addClass("margen-superior");

  let busqueda = $("#caja").find(".resaltado");
  busqueda = $("#elemento2").parent().find(".resaltado");

  let encontrando = $("#caja .resaltado")
    .eq(0)
    .parent()
    .parent()
    .find("[title = Google]");

  console.log(busqueda);
  console.log(encontrando);
});
