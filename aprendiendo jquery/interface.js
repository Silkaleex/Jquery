"use strict";
$(document).ready(function () {
  //Mover un elemento por la pagina
  $(".elemento").draggable();
  //Redimensionar
  $(".elemento").resizable();

  //Se usa uno o otro (selectable o sortable)

  //Seleccionar Elementos
  // $(".lista-selecionable").selectable();
  //Ordenar elementos
  $(".lista-selecionable").sortable({
    update: function (event, ui) {
      console.log("Ha cambiado la lista");
    },
  });
  //Drop
  $("#elemento-movido").draggable();
  $("#area").droppable({
    drop: function () {
      console.log("Has solatado algo dentro del area");
    },
  });
  //Efectos
  //Todos los efectos estan en la pagina de jquery
  $("#mostrar").click(function () {
    $(".caja-efectos").toggle("explode", 2000);
  });
  //Tooltip
  $(document).tooltip();
  //Dialog
  $("#lanzar-popup").click(function () {
    $("#popup").dialog();
  });
  //Datepicker
  $("#calendario").datepicker();
  //Tabs
  $("#pestanas").tabs();
});
