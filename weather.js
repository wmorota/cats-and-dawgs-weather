var curr_temp;
var curr_feelslike;
var curr_weather; // Clouds, Clear, Thunderstorm, Drizzle, Rain, Snow, Fog, Mist, Smoke, Haze, Dust, Sand, Ash, Squall, Tornado
var curr_timestamp; // Updated as of:
var curr_windspeed;
var curr_humidity;
var curr_sunrise;
var curr_sunset;

var next_hours_temp = [];
var next_hours_weather = [];
var next_hours_time = [];

var next_day_1;
var next_day_2;
var next_day_3;
var next_day_4;
var next_day_5;
var next_day_6;
var next_day_7;

// getUserCurrentWeather() grabs data needed for user's current / main weather section (left)
function getUserCurrentWeather(){
  const oneCall_url = "https://api.openweathermap.org/data/2.5/onecall?lat="+latitude+"&lon="+longitude+"&units=metric&appid=bd007df1fd5fd56285b9b4e42f0b658b";

// How to fetch online JSON files from a given URL
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

    console.log("Current Temperature: " + curr_temp);
    console.log("Feels Like: " + curr_feelslike);
    console.log("Main Weather: " + curr_weather);
    console.log("Wind Speed: " + curr_windspeed);
    console.log("Humidity: " + curr_humidity);
    console.log("Sunrise: " + curr_sunrise);
    console.log("Sunset: " + curr_sunset);
    console.log("Timestamp: " + curr_timestamp);

    console.log(data);

    getNextHoursForecast(data);
    getNextSevenDays(data);

  })
  .catch(err => {
    // Do something for an error here
  })
}

function getNextHoursForecast(data) {
  // doing this resolves issue of stacking array elements every time user hits refresh
  next_hours_temp = [];
  next_hours_weather = [];
  next_hours_time = [];

  // for loop that iterates 14 times grabbing each data and putting them in each specific array
  // start at [1] because [0] is the current hour user is in
  // still iterates 14 times
  for(var i = 1; i < 15; i++) {
    var hour_temp = Math.round(data.hourly[i].temp) + "°C";
    next_hours_temp.push(hour_temp);

    var hour_weather = data.hourly[i].weather[0].main;
    next_hours_weather.push(hour_weather);

    var hour_time = data.hourly[i].dt;
    hour_time = getDateTime(hour_time);
    var sub_hour = hour_time.substring(
    hour_time.lastIndexOf("@") + 2,
    hour_time.lastIndexOf("M") + 1);
    hour_time = sub_hour;
    next_hours_time.push(hour_time);
}
    console.log(next_hours_temp);
    console.log(next_hours_weather);
    console.log(next_hours_time);
}

function getNextSevenDays(data) {
  // for loop that iterates 7 times grabbing each data and putting them in each specific array
}
