var latitude;
var longitude;
var city;
var country; 

var x = document.getElementById("demo");

// Finds user's geolocation grabbing longitude and latitude
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getLongLat, showError);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser 😿";
  }
}

// gets longitude and latitude from JSON file
function getLongLat(position) {
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;

  x.innerHTML = "Latitude: " + latitude +
  "<br>Longitude: " + longitude + "<br><br>";

  getUserCurrentWeather();
}

function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "User denied the request for Geolocation 😿"
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Location information is unavailable 😿"
      break;
    case error.TIMEOUT:
      x.innerHTML = "The request to get user location timed out 😿"
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "An unknown error occurred 😿"
      break;
  }
}
