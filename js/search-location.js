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

//if(city_name.length <= 4)
        city_names.push(c_name);
        city_countries.push(c_country);
        city_temps.push(c_temp);
        city_weathers.push(c_weather);

        console.log(city_names);
        console.log(city_countries);
        console.log(city_temps);
        console.log(city_weathers);

        showCity();

        // push into respective arrays
        // check if city already exists
        // some x that takes off that div-city[i] then replacing it or something
      }

    })
    .catch(err => {

    })
}

function showCity() {
  for(var i = 0; i < city_names.length; i++){
    document.getElementById('city-div' + i).style.backgroundColor = "#96CCFF";
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
