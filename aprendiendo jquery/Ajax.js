"use strict";
$(document).ready(function () {
  //Load perticion de ajax por get
  $("#datos").load("https://reqres.in/");
  //Get y Post

  $.get("https://reqres.in/api/users?page=2", { page: 3 }, function (response) {
    response.data.forEach((element, index) => {
      $("#get").append(
        "<p>" + element.first_name + "" + element.last_name + "</p>"
      );
    });
  });
  $("#formulario").submit(function (e) {
    e.preventDefault();

    let usuario = {
      name: $('input[name="name"]').val(),
      web: $('input[name="web"]').val(),
    };
    // console.log(usuario);
    // $.post($(this).attr("action"), usuario, function (response) {
    //   console.log(response);
    // }).done(function () {
    //   alert("Usuario Añadido correctamente");
    // });

    $.ajax({
      type: "POST",
      dataType: "json",
      url: $(this).attr("action"),
      data: usuario,
      beforeSend: function () {
        console.log("Enviando Usuario....");
      },
      success: function (response) {
        console.log(response);
      },
      error: function () {
        console.log("A ocurrido un error");
      },
      timeout: 5000,
    });
    return false;
  });
});
