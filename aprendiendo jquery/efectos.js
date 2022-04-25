"use strict";
let caja = $("#caja");
$(document).ready(function () {
  $("#mostrar").hide();

  $("#mostrar").click(function () {
    $(this).hide();
    $("#ocultar").show();
    caja.fadeIn("slow", function () {
      console.log("Cartel Mostrado");
    });
  });

  $("#ocultar").click(function () {
    $(this).hide();
    $("#mostrar").show();
    caja.fadeOut("slow", function () {
      //function de callback
      console.log("cartel ocultado");
    });
  });

  $("#todoenuno").click(function () {
    caja.slideToggle("fast");
  });
  $("#animame").click(function () {
    caja
      .animate(
        {
          marginLeft: 500,
          fontSize: "40px",
          height: "auto",
          padding: "20px",
        },
        "slow"
      )
      .animate(
        {
          borderRadius: "900px",
          marginTop: "80px",
        },
        "slow"
      )
      .animate(
        {
          borderRadius: "0px",
          height: "50px",
          width: "300px",
          marginTop: "15px",
          margin: "15px",
          padding: "0px",
          fontSize: "19px",
        },
        "slow"
      );
  });
});
//FadeTo nos permite que valla de un estado a otro opacidad = 0 a 1
//SlideUp SlideDown para deplegar o ocultar
