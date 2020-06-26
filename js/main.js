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

  $('select').click(function (){

    for (var i = 0; i <= (arrayCds.length - 1); i++) {

      var singleCd = arrayCds[i];
      var genereCd = singleCd.genre;
      var genere = $('select option:selected').text();

      var source = $("#cds-template").html();
      var template = Handlebars.compile(source);

      var html = template(singleCd);

      if (genereCd === genere) {
        $('.cds-container').append(html);
      }

    }

  });

}
