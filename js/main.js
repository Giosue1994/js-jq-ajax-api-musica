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


$('#genre-options').change(function() {
  var genreSelected = $(this).val();

  if (genreSelected === 'all') {
    $('.cd').show();
  } else {
    $('.cd').hide();
    $('.cd.'+ genreSelected).show();
  }

});

function addCd(arrayCds) {
  var source = $("#cds-template").html();
  var template = Handlebars.compile(source);

    for (var i = 0; i <= (arrayCds.length - 1); i++) {

      var singleCd = arrayCds[i];
      singleCd.genre = singleCd.genre.toLowerCase();

      var html = template(singleCd);

      $('.cds-container').append(html);

    }

}
