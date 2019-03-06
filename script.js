
$.getJSON("https://api.ipdata.co/?api-key=70d2666caac0a3efd237327444448c0c31493cd57ed499ff76c355f7", function(data){
  console.log(data);
  // var city = data.time_zone.name.split('/')[1];
  var city = data.city;
  // console.log(city);

  $('.city').append("You're in " + city + " your current weather is: ");


  $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=d657bc5415c2c79bd49a746b4e200023",
  function(data){
    console.log(data);

    var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

    var temp = Math.floor(data.main.temp);

    var weather = data.weather[0].main;

    // console.log(icon);
    $('.icon').attr('src', icon);
    $('.weather').append(weather);
    $('.temp').append(temp + ' Celsius');
  });

});
