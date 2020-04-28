var curr_temp;
var curr_feelslike;
var curr_weather; // Clouds, Clear, Thunderstorm, Drizzle, Rain, Snow, Fog, Mist, Smoke, Haze, Dust, Sand, Ash, Squall, Tornado
var curr_timestamp; // Updated as of:
var curr_windspeed;
var curr_humidity;
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
    curr_windspeed = data.current.wind_speed + " mph";
    curr_humidity = data.current.humidity + "%";

    curr_sunrise = data.current.sunrise;
    curr_sunset = data.current.sunset;
    curr_timestamp = data.current.dt

    curr_sunrise = getDateTime(curr_sunrise);
    var sub_sunrise = curr_sunrise.substring(
    curr_sunrise.lastIndexOf("@") + 2,
    curr_sunrise.lastIndexOf("M") + 1);
    curr_sunrise = sub_sunrise;

    curr_sunset = getDateTime(curr_sunset);
    var sub_sunset = curr_sunset.substring(
    curr_sunset.lastIndexOf("@") + 2,
    curr_sunset.lastIndexOf("M") + 1);
    curr_sunset = sub_sunset;

    curr_timestamp = "Updated as of: " + getDateTime(curr_timestamp);





    console.log("Feels Like: " + curr_feelslike);
    console.log("Current Temperature: " + curr_temp);
    console.log("Main Weather: " + curr_weather);
    console.log("Wind Speed: " + curr_windspeed);
    console.log("Humidity: " + curr_humidity);
    console.log("Sunrise: " + curr_sunrise);
    console.log("Sunset: " + curr_sunset);
    console.log("Timestamp: " + curr_timestamp);

    console.log(data);

  })
  .catch(err => {
    // Do something for an error here
  })
}
