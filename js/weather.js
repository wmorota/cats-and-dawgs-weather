var curr_temp;
var curr_feelslike;
var curr_weather; // Clouds, Clear, Thunderstorm, Drizzle, Rain, Snow, Fog, Mist, Smoke, Haze, Dust, Sand, Ash, Squall, Tornado
var curr_timestamp;
var curr_daystamp;
var curr_datestamp;
var curr_windspeed;
var curr_humidity;
var curr_sunrise;
var curr_sunset;

var next_hours_temp = [];
var next_hours_weather = [];
var next_hours_time = [];

var next_days_day = [];
var next_days_temp = [];
var next_days_weather = [];
var next_days_humidity = [];
var next_days_windspeed = [];

// getUserCurrentWeather() grabs data needed for user's current / main weather section (left)
function getUserCurrentWeather(){
  const oneCall_url = "https://api.openweathermap.org/data/2.5/onecall?lat="+latitude+"&lon="+longitude+"&units=metric&appid={YOUR_API_KEY}";

// Fetch online JSON files from a given URL
fetch(oneCall_url).then(response => {
    return response.json()
  })
  .then(data => {
    curr_feelslike = Math.round(data.current.feels_like) + "°C";
    curr_temp = Math.round(data.current.temp) + "°C";
    curr_weather = data.current.weather[0].main;
    curr_windspeed = (data.current.wind_speed * 1.60934).toFixed(2) + " km/h";
    curr_humidity = data.current.humidity + "%";

    curr_sunrise = data.current.sunrise;
    curr_sunset = data.current.sunset;
    curr_timestamp = data.current.dt;
    curr_daystamp = data.current.dt;
    curr_datestamp = data.current.dt;

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

    curr_timestamp = getDateTime(curr_timestamp);
    var sub_timestamp = curr_timestamp.substring(
    curr_timestamp.lastIndexOf("@") + 2,
    curr_timestamp.lastIndexOf("M") + 1);
    curr_timestamp = "Updated as of: " + sub_timestamp;

    curr_daystamp = getDateTime(curr_daystamp);
    var sub_daystamp = curr_daystamp.split(',')[0];
    curr_daystamp = sub_daystamp;

    curr_datestamp = getDateTime(curr_datestamp);
    var sub_datestamp = curr_datestamp.split(',')[1] + ", " + curr_datestamp.split(',')[2];
    curr_datestamp = sub_datestamp.split('@')[0];

    // if weather gets 'Clouds' then it just turns it to 'Cloudy' LOL
    if(curr_weather == "Clouds"){
      curr_weather = "Cloudy";
    }

    if(curr_weather == "Cloudy" || curr_weather == "Snow" || curr_weather == "Fog"){
      document.getElementById("main_section").style.backgroundImage = "url('images/background/snowy_cloudy.svg')";

        if(curr_weather == "Cloudy" || curr_weather == "Fog" ){
        document.getElementById("kitty_doggo_pic").src = "images/kitty-and-doggo/cloudy_kitty.svg";
        document.getElementById("kitty_doggo_pic").style.display = "inline-block";
        document.getElementById("main-temp-pic").src = "images/weather/main/cloudy.svg";
        document.getElementById("main-temp-pic").style.display = "block";
        }
        if(curr_weather == "Snow"){
        document.getElementById("kitty_doggo_pic").src = "images/kitty-and-doggo/snowy_kitty.svg";
        document.getElementById("kitty_doggo_pic").style.display = "inline-block";
        document.getElementById("main-temp-pic").src = "images/weather/main/snow.svg";
        document.getElementById("main-temp-pic").style.display = "block";
        }
    }
    if(curr_weather == "Clear"){
      document.getElementById("main_section").style.backgroundImage = "url('images/background/clear_sunny.svg')";
      document.getElementById("kitty_doggo_pic").src = "images/kitty-and-doggo/sunny_dog.svg";
      document.getElementById("kitty_doggo_pic").style.display = "inline-block";
      document.getElementById("main-temp-pic").src = "images/weather/main/sunny.svg";
      document.getElementById("main-temp-pic").style.display = "block";
    }
    if(curr_weather == "Rain" || curr_weather == "Drizzle"){
      document.getElementById("main_section").style.backgroundImage = "url('images/background/rainy.svg')";
      document.getElementById("kitty_doggo_pic").src = "images/kitty-and-doggo/rainy_dog.svg";
      document.getElementById("kitty_doggo_pic").style.display = "inline-block";
      document.getElementById("main-temp-pic").src = "images/weather/main/rainy.svg";
      document.getElementById("main-temp-pic").style.display = "block";

    }
    if(curr_weather == "Thunderstorm" || curr_weather == "Foggy"){
      document.getElementById("main_section").style.backgroundImage = "url('images/background/thunder_foggy.svg')";
      document.getElementById("kitty_doggo_pic").src = "images/kitty-and-doggo/thunder_kitty.svg";
      document.getElementById("kitty_doggo_pic").style.display = "inline-block";
      document.getElementById("main-temp-pic").src = "images/weather/main/thunder.svg";
      document.getElementById("main-temp-pic").style.display = "block";
    }

    document.getElementById("timestamp").innerHTML = curr_timestamp;
    document.getElementById("city").innerHTML = city;
    document.getElementById("country").innerHTML = country;
    document.getElementById("day").innerHTML = curr_daystamp;
    document.getElementById("date").innerHTML = curr_datestamp;
    document.getElementById("temp").innerHTML = curr_temp;
    document.getElementById("weather").innerHTML = curr_weather;
    document.getElementById("feels-like").innerHTML = "Feels Like: " + curr_feelslike;
    document.getElementById("wind").innerHTML = "Wind Speed: " + curr_windspeed;
    document.getElementById("humidity").innerHTML = "Humidity: " + curr_humidity;
    document.getElementById("sunrise").innerHTML = "Sunrise: " + curr_sunrise;
    document.getElementById("sunset").innerHTML = "Sunset: " + curr_sunset;

    document.getElementById("main-humid").style.display = "inline-block";
    document.getElementById("main-wind").style.display = "inline-block";
    document.getElementById("refresh").style.display = "inline-block";

    getNextSevenDays(data);
    getNextHoursForecast(data);

  })
  .catch(err => {
      // Do something for an error here
  })
}

// getNextHoursForecast() grabs data needed for Hourly section
function getNextHoursForecast(data) {
  // Resolves issue of stacking array elements every time user hits refresh
  next_hours_temp = [];
  next_hours_weather = [];
  next_hours_time = [];

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
    getHourlyData();
    clickHourly();
}

// getNextSevenDays() grabs data needed for Daily section
function getNextSevenDays(data) {
  // Resolves issue of stacking array elements every time user hits refresh
  next_days_day = [];
  next_days_temp = [];
  next_days_weather = [];
  next_days_humidity = [];
  next_days_windspeed = [];

  for(var i = 1; i < 8; i++) {
    var day_day = data.daily[i].dt;
    day_day = getDateTime(day_day);
    var sub_day = day_day.split(',')[0];
    day_day = sub_day;
    next_days_day.push(day_day);

    var day_temp = Math.round(data.daily[i].temp.eve) + "°C" ;
    next_days_temp.push(day_temp);

    var day_weather = data.daily[i].weather[0].main;
    next_days_weather.push(day_weather);

    var day_humidity = data.daily[i].humidity + "%";
    next_days_humidity.push(day_humidity);

    var day_wind = (data.daily[i].wind_speed * 1.60934).toFixed(2) + " km/h";
    next_days_windspeed.push(day_wind);
  }
}
