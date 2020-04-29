var city_array = [];
var city_temps = [];

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
        console.log("it works");
      }

    })
    .catch(err => {

    })


}
