
//get current location and display current weather
//doens't work for "Ballerup Municipality"

$.getJSON("https://api.ipdata.co/?api-key=70d2666caac0a3efd237327444448c0c31493cd57ed499ff76c355f7", function(data){

// $.getJSON("http://ip-api.com/json/24.48.0.1", function(data){
  console.log(data);
  // var city = data.time_zone.name.split('/')[1];
  var city = data.city.split(" ")[0];
  console.log(city);

  document.getElementById("currCity").innerHTML = "You're in " + city + ", and your current weather is: ";


  $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=d657bc5415c2c79bd49a746b4e200023",
  function(data){
    console.log(data);

    var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

    var temp = Math.floor(data.main.temp);

    var weather = data.weather[0].main;

    // console.log(icon);
    $('#currIcon').attr('src', icon);
    document.getElementById("currWeather").innerHTML = weather;
    document.getElementById("currTemp").innerHTML = temp + " Celsius";
  });

});




var api = "http://api.openweathermap.org/data/2.5/weather?q=";
// var city = "Copenhagen";
var units = "&units=metric";
var apiKey = "&APPID=d657bc5415c2c79bd49a746b4e200023";

function hi(){
  console.log("hi");
}

function getWeather(){
  var city = document.getElementById("city").value;
  var url = api + city + units + apiKey;

  $.getJSON(url, function(data){
    var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

    var temp = Math.floor(data.main.temp);

    var weather = data.weather[0].main;

    // console.log(icon);
    $('.icon').attr('src', icon);
    // $('.weather').append(weather);
    // $('.temp').append(temp + ' Celsius');
    document.getElementById("weather").innerHTML = weather;
    document.getElementById("temp").innerHTML = temp + " Celsius";
  })
}













// trying to make current location's weather work
//(sometimes the currenty location has a different name than what is in the weather database)
/*

// var city = null;

$.getJSON("https://api.ipdata.co/?api-key=70d2666caac0a3efd237327444448c0c31493cd57ed499ff76c355f7", function(data){
  console.log(data);
  // var city = data.time_zone.name.split('/')[1];
  city = data.city;
  // console.log(city);

  // $('.city').append("You're in " + city + " your current weather is: ");

  weather_data("Ballerup Municipality")
});



function weather_data(city){
  $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=d657bc5415c2c79bd49a746b4e200023",
  function(data){ })
  .success(function(data){
      console.log(data);

      var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

      var temp = Math.floor(data.main.temp);

      var weather = data.weather[0].main;

      // console.log(icon);
      $('.city').append("You're in " + city + " your current weather is: ");
      $('.icon').attr('src', icon);
      $('.weather').append(weather);
      $('.temp').append(temp + ' Celsius');
    })
  .fail(function(data){
      city = city.split(" ").slice(0, city.length-2).join(" ");
      weather_data(city);
    })

  // });
}

*/
