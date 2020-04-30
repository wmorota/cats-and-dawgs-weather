var city_temps = [];
var city_names = [];
var city_countries = [];
var city_weathers = [];

var c_name;
var c_country;
var c_temp;
var c_weather;

// searchCity() is executed when user clicks Enter or the search button to find a specific city's weather forecast
function searchCity(){
  var input = document.getElementById("search-city").value;
  var searchCity_URL = "https://api.openweathermap.org/data/2.5/weather?q=" + input + "&units=metric&appid={YOUR_API_KEY}";

  // Fetch online JSON files from a given URL
  fetch(searchCity_URL).then(response => {
      return response.json()
    })
    .then(data => {
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

        showCity();
        document.getElementById('searchForm').reset();
      }})
    .catch(err => {
        // Do something for an error here
    })
}

// showCity() outputs city weather data onto the user's page
function showCity() {
  for(var i = 0; i < city_names.length; i++){
    if(city_weathers[i] == "Cloudy" || city_weathers[i] == "Snow" || city_weathers[i] == "Haze" || city_weathers[i] == "Fog" || city_weathers[i] == "Mist"){
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

// refreshCity() outputs updated city weather data onto the user's page
function refreshCity() {
  var refreshCity0_URL = "https://api.openweathermap.org/data/2.5/weather?q=" + city_names[0] + "&units=metric&appid={YOUR_API_KEY}";

  // FOR ZERO
  fetch(refreshCity0_URL).then(response => {
      return response.json()
    })
    .then(data => {
        c_temp = Math.round(data.main.temp) + "°C";
        c_weather = data.weather[0].main;

        // if weather gets 'Clouds' then it just turns it to 'Cloudy' LOL
        if(c_weather == "Clouds"){
          c_weather = "Cloudy";
        }

          city_temps[0] = c_temp;
          city_weathers[0] = c_weather;

        showCity();
    })
    .catch(err => {
    })

  for(var i = 1; i < city_names.length ; i++){
    var refreshCity_URL = "https://api.openweathermap.org/data/2.5/weather?q=" + city_names[i] + "&units=metric&appid={YOUR_API_KEY}";

    // Fetch online JSON files from a given URL
    fetch(refreshCity_URL).then(response => {
        return response.json()
      })
      .then(data => {
          c_temp = Math.round(data.main.temp) + "°C";
          c_weather = data.weather[0].main;

          // if weather gets 'Clouds' then it just turns it to 'Cloudy' LOL
          if(c_weather == "Clouds"){
            c_weather = "Cloudy";
          }

            city_temps[i-1] = c_temp;
            city_weathers[i-1] = c_weather;

          showCity();
      })
      .catch(err => {
      })
  }
}
