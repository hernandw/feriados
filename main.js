$(document).ready(function () {
  $("button").on("click", function () {
    $.ajax({
      type: "GET",
      url: "https://www.feriadosapp.com/api/holidays.json",
      dataType: "json",
      success: function (datosApi) {
        console.log(datosApi.data);
        datosApi.data.forEach((element) => {
          $("#datosTable").append(`<tr>
                    <th scope="row">${element.date}</th>
                    <td>${element.title}</td>
                    <td>${element.extra}</td>
                    <td>${element.law}</td>
                </tr>`);
        });
      },
      error: function (error) {
        //si algo sale mal, se agrega la funcionalidad aquí.
      },
    });
  });
});
