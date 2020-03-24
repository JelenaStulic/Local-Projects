$('button').on('click', function () {
  var city = $('input').val();
  $.ajax({
    url : "http://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=metric&APPID=c2f347648060b7cc291254dd143258e3",
    dataType : "json"
  })
  .done(function (res) {
  console.log(res);
  var text = '<h1>Grad : '+ res.name + '</h1>';
  text += '<h2>Koordinate: ' + res.coord.lon + res.coord.lat + '</h2>';
  text += '<h2>Temperatura: ' + res.main.temp + '</h2>';
  text += '<h2>Vazdušni pritisak:' + res.main.pressure + '</h2>';
  text += '<h2>Vlažnost vazduha: ' + res.main.humidity + '</h2>';
  text += '<h2>Brzina vetra: ' + res.wind.speed + '</h2>';

  $('#display').html(text);
})
})
