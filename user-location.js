// Reminder: Do Sad Kitty and Doggo when user doesn't / can't connect LOL

var latitude;
var longitude;
var city;
var country;

var x = document.getElementById("demo");
getLocation();

// getLocation() requests for user's geolocation asking for their permission to enable location tracking
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getLongLat, showError);
  } else {
    weather.innerHTML = "Geolocation is not supported by this browser";
    document.getElementById("error").style.display = "inline-block";

  }
}

// getLongLat() gets longitude and latitude from navigator.geolocation JSON file
function getLongLat(position) {
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;

  console.log("Latitude: " + latitude);
  console.log("Longitude: " + longitude);

  getUserCityAndCountry();
  getUserCurrentWeather();
}

// showError() provides error handling for user geolocation request
function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      weather.innerHTML = "User denied the request for Geolocation";
      document.getElementById("error").style.display = "inline-block";
      break;
    case error.POSITION_UNAVAILABLE:
      weather.innerHTML = "Location information is unavailable";
      document.getElementById("error").style.display = "inline-block";
      break;
    case error.TIMEOUT:
      weather.innerHTML = "The request to get user location timed out";
      document.getElementById("error").style.display = "inline-block";
      break;
    case error.UNKNOWN_ERROR:
      weather.innerHTML = "An unknown error occurred";
      document.getElementById("error").style.display = "inline-block";
      break;
  }
}

// getUserCityAndCountry() grabs user's city and country based off their geolocation
function getUserCityAndCountry(){
  const userLocation_url = "https://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&units=metric&appid=bd007df1fd5fd56285b9b4e42f0b658b";

  // How to fetch an online JSON file from a given URL
  fetch(userLocation_url).then(response => {
      return response.json()
    })
    .then(data => {
      city = data.name;
      country = data.sys.country;

      console.log("City: " + city);
      console.log("Country: " + country);

      //console.log(data);
    })
    .catch(err => {
      // Do something for an error here
    })

}
