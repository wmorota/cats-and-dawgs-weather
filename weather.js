var curr_temp;
var curr_feelslike;
var curr_weather; // Clouds, Clear, Thunderstorm, Drizzle, Rain, Snow, Fog, Mist, Smoke, Haze, Dust, Sand, Ash, Squall, Tornado
var curr_timestamp; // Updated as of:
var curr_windspeed;
var curr_sunrise;
var curr_sunset;

function getUserCurrentWeather(){
  const oneCall_url = "https://api.openweathermap.org/data/2.5/onecall?lat="+latitude+"&lon="+longitude+"&units=metric&appid=bd007df1fd5fd56285b9b4e42f0b658b";

// How to fetch an online JSON file from a given URL
fetch(oneCall_url).then(response => {
    return response.json()
  })
  .then(data => {
    curr_feelslike = Math.round(data.current.feels_like) + "°C";
    curr_temp = Math.round(data.current.temp) + "°C";
    curr_weather = data.current.weather[0].main;

    console.log(curr_feelslike);
    console.log(curr_temp);
    console.log(curr_weather);

    curr_windspeed = data.current.wind_speed + " mph";
    curr_sunrise = data.current.sunrise;
    curr_sunset = data.current.sunset;

    console.log(curr_windspeed);
    console.log(curr_sunrise);
    console.log(curr_sunset);

    curr_timestamp = data.current.dt

    console.log(curr_timestamp); // use this time stamp some "Updated as of:"

    console.log(data);

  })
  .catch(err => {
    // Do something for an error here
  })
}
