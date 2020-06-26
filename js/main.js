$(document).ready(function() {

// Attraverso una chiamata ajax all’Api di boolean avremo a
// disposizione una decina di dischi musicali.
// Servendoci di handlebars stampiamo tutto a schermo.

// Bonus: Creare una select con i seguenti generi: pop, rock,
// metal e jazz. In base a cosa scegliamo nella select vedremo i
// corrispondenti cd.

  $.ajax(
    {
      url: "https://flynn.boolean.careers/exercises/api/array/music",
      method: "GET",

      success: function(data) {
        var cds = data.response;
        addCd(cds);

      },

      error: function() {
        alert("Errore");
      }

    }
  );

});

function addCd(arrayCds) {

  var source = $("#cds-template").html();
  var template = Handlebars.compile(source);

  for (var i = 0; i <= arrayCds.length; i++) {

    var singleCd = arrayCds[i]
    var html = template(singleCd);

    $('.cds-container').append(html);

  }

}
