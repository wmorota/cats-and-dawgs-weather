var latitude;
var longitude;
var city;
var country;

getLocation();

// getLocation() requests for user's geolocation asking for their permission to enable location tracking
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getLongLat, showError);
  } else {
    weather.innerHTML = "Geolocation is not supported by this browser";
    document.getElementById("error").style.display = "inline-block";
    document.getElementById("error-bottom-right").innerHTML = "Geolocation is not supported by this browser";
    document.getElementById("error-bottom-right-img").style.display = "inline-block";
    document.getElementById("daily").disabled = true;
    document.getElementById("hourly").disabled = true;
  }
}

// getLongLat() gets longitude and latitude from navigator.geolocation JSON file
function getLongLat(position) {
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;
  getUserCityAndCountry();
  getUserCurrentWeather();
}

// showError() provides error handling for user geolocation request
function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      weather.innerHTML = "User denied the request for Geolocation";
      document.getElementById("error").style.display = "inline-block";
      document.getElementById("error-bottom-right").innerHTML = "User denied the request for Geolocation";
      document.getElementById("error-bottom-right-img").style.display = "inline-block";
      document.getElementById("daily").disabled = true;
      document.getElementById("hourly").disabled = true;
      break;
    case error.POSITION_UNAVAILABLE:
      weather.innerHTML = "Location information is unavailable";
      document.getElementById("error").style.display = "inline-block";
      document.getElementById("error-bottom-right").innerHTML = "Location information is unavailable";
      document.getElementById("error-bottom-right-img").style.display = "inline-block";
      document.getElementById("daily").disabled = true;
      document.getElementById("hourly").disabled = true;
      break;
    case error.TIMEOUT:
      weather.innerHTML = "The request to get user location timed out";
      document.getElementById("error").style.display = "inline-block";
      document.getElementById("error-bottom-right").innerHTML = "The request to get user location timed out";
      document.getElementById("error-bottom-right-img").style.display = "inline-block";
      document.getElementById("daily").disabled = true;
      document.getElementById("hourly").disabled = true;
      break;
    case error.UNKNOWN_ERROR:
      weather.innerHTML = "An unknown error occurred";
      document.getElementById("error").style.display = "inline-block";
      document.getElementById("error-bottom-right").innerHTML = "An unknown error occurred";
      document.getElementById("error-bottom-right-img").style.display = "inline-block";
      document.getElementById("daily").disabled = true;
      document.getElementById("hourly").disabled = true;
      break;
  }
}

// getUserCityAndCountry() grabs user's city and country based off their geolocation
function getUserCityAndCountry(){
  const userLocation_url = "https://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&units=metric&appid={YOUR_API_KEY}";

  // Fetch an online JSON file from a given URL
  fetch(userLocation_url).then(response => {
      return response.json()
    })
    .then(data => {
      city = data.name;
      country = data.sys.country;
    })
    .catch(err => {
        // Do something for an error here
    })
}
