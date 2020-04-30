var city_temps = [];
var city_names = [];
var city_countries = [];
var city_weathers = [];

var c_name;
var c_country;
var c_temp;
var c_weather;

function searchCity(){

  var input = document.getElementById("search-city").value;
  console.log(input);

  var searchCity_URL = "http://api.openweathermap.org/data/2.5/weather?q=" + input + "&units=metric&appid=bd007df1fd5fd56285b9b4e42f0b658b";

  // How to fetch online JSON files from a given URL
  fetch(searchCity_URL).then(response => {
      return response.json()
    })
    .then(data => {
      console.log(data);

      var message = "";
      message = data.message;

      if (message == "city not found"){
        alert("City not found 😿 Please try again");
      }
      else{

        c_name = data.name;
        c_country = data.sys.country;
        c_temp = Math.round(data.main.temp) + "°C";
        c_weather = data.weather[0].main;

        console.log("ok it works");
        console.log(c_name);
        console.log(c_country);
        console.log(c_temp);
        console.log(c_weather);

        // if weather gets 'Clouds' then it just turns it to 'Cloudy' LOL
        if(c_weather == "Clouds"){
          c_weather = "Cloudy";
        }

          city_names.push(c_name);
          city_countries.push(c_country);
          city_temps.push(c_temp);
          city_weathers.push(c_weather);

          if(city_names.length > 4){
            alert('Saving, deleting, and adding of more than 4 cities will be available in Version 2.0 of Cats and Dawgs 🐱🐶');
          }


        console.log(city_names);
        console.log(city_countries);
        console.log(city_temps);
        console.log(city_weathers);

        showCity();
        document.getElementById('searchForm').reset();
      }

    })
    .catch(err => {

    })
}

function showCity() {
  for(var i = 0; i < city_names.length; i++){
    if(city_weathers[i] == "Cloudy" || city_weathers[i] == "Snow" || city_weathers[i] == "Haze" || city_weathers[i] == "Fog"){
      document.getElementById('city-div' + i).style.backgroundColor = "#CDDCEA";
    }
    if(city_weathers[i] == "Rain" || city_weathers[i] == "Drizzle" ){
      document.getElementById('city-div' + i).style.backgroundColor = "#9CD0FF";
    }
    if(city_weathers[i] == "Clear"){
      document.getElementById('city-div' + i).style.backgroundColor = "#FFE99A";
    }
    if(city_weathers[i] == "Thunderstorm"){
      document.getElementById('city-div' + i).style.backgroundColor = "#7DA6CC";
    }

    document.getElementById('city-div' + i).style.color = "white";
    document.getElementById('div'+ i + "-name").innerHTML = city_names[i];
    document.getElementById('div'+ i + "-country").innerHTML = city_countries[i];
    document.getElementById('div'+ i + "-country").style.color = "white";
    document.getElementById('div'+ i + "-country").style.fontSize = "15px";
    document.getElementById('div'+ i + "-temp").innerHTML = city_temps[i];
    document.getElementById('div'+ i + "-temp").style.color = "white";
    document.getElementById('div'+ i + "-weather").innerHTML = city_weathers[i];
    document.getElementById('div'+ i + "-weather").style.color = "white";
    document.getElementById('div'+ i + "-weather").style.fontSize = "15px";
  }
}

function refreshCity() {
  var refreshCity0_URL = "http://api.openweathermap.org/data/2.5/weather?q=" + city_names[0] + "&units=metric&appid=bd007df1fd5fd56285b9b4e42f0b658b";

  // FOR ZERO
  fetch(refreshCity0_URL).then(response => {
      return response.json()
    })
    .then(data => {
        c_temp = Math.round(data.main.temp) + "°C";
        c_weather = data.weather[0].main;

        console.log("zero");
        console.log("refreshed zero temp: " + c_temp);
        console.log("refreshed zero weather: " + c_weather);

        // if weather gets 'Clouds' then it just turns it to 'Cloudy' LOL
        if(c_weather == "Clouds"){
          c_weather = "Cloudy";
        }

          city_temps[0] = c_temp;
          city_weathers[0] = c_weather;

          console.log(city_temps[0] + " is now: " + c_temp);
          console.log(city_weather[0] + " is now: " + c_weather);

          console.log('iteration: ' + i);

        showCity();
    })
    .catch(err => {
    })


  for(var i = 1; i < city_names.length ; i++){
    var refreshCity_URL = "http://api.openweathermap.org/data/2.5/weather?q=" + city_names[i] + "&units=metric&appid=bd007df1fd5fd56285b9b4e42f0b658b";

    // How to fetch online JSON files from a given URL
    fetch(refreshCity_URL).then(response => {
        return response.json()
      })
      .then(data => {
          c_temp = Math.round(data.main.temp) + "°C";
          c_weather = data.weather[0].main;

          console.log("refreshed");
          console.log("refreshed temp: " + c_temp);
          console.log("refreshed weather: " + c_weather);

          // if weather gets 'Clouds' then it just turns it to 'Cloudy' LOL
          if(c_weather == "Clouds"){
            c_weather = "Cloudy";
          }

            city_temps[i-1] = c_temp;
            city_weathers[i-1] = c_weather;

            console.log(city_temps[i - 1] + " is now: " + c_temp);
            console.log(city_weather[i - 1] + " is now: " + c_weather);

            console.log('iteration: ' + i);

          showCity();
      })
      .catch(err => {
      })
  }
}
