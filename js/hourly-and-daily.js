
// clickDaily() executes code that should occur when user clicks on Daily button
function clickDaily()
{
  document.getElementById('daily').style.backgroundColor = "#96CCFF";
  document.getElementById('daily').style.borderColor = "#96CCFF";
  document.getElementById('daily').style.color = "white";

  document.getElementById('hourly').style.backgroundColor = "white";
  document.getElementById('hourly').style.borderColor = "#96CCFF";
  document.getElementById('hourly').style.color = "#96CCFF";

  getDailyData();

  document.getElementById('humid-icon0').style.display = "inline-block";
  document.getElementById('humid-icon1').style.display = "inline-block";
  document.getElementById('humid-icon2').style.display = "inline-block";
  document.getElementById('humid-icon3').style.display = "inline-block";
  document.getElementById('humid-icon4').style.display = "inline-block";
  document.getElementById('humid-icon5').style.display = "inline-block";
  document.getElementById('humid-icon6').style.display = "inline-block";

  document.getElementById('wind-icon0').style.display = "inline-block";
  document.getElementById('wind-icon1').style.display = "inline-block";
  document.getElementById('wind-icon2').style.display = "inline-block";
  document.getElementById('wind-icon3').style.display = "inline-block";
  document.getElementById('wind-icon4').style.display = "inline-block";
  document.getElementById('wind-icon5').style.display = "inline-block";
  document.getElementById('wind-icon6').style.display = "inline-block";
}

// clickDaily() executes code that should occur when user clicks on Hourly button
function clickHourly()
{
  document.getElementById('hourly').style.backgroundColor = "#96CCFF";
  document.getElementById('hourly').style.borderColor = "#96CCFF";
  document.getElementById('hourly').style.color = "white";

  document.getElementById('daily').style.backgroundColor = "white";
  document.getElementById('daily').style.borderColor = "#96CCFF";
  document.getElementById('daily').style.color = "#96CCFF";

  document.getElementById('humid-icon0').style.display = "none";
  document.getElementById('humid-icon1').style.display = "none";
  document.getElementById('humid-icon2').style.display = "none";
  document.getElementById('humid-icon3').style.display = "none";
  document.getElementById('humid-icon4').style.display = "none";
  document.getElementById('humid-icon5').style.display = "none";
  document.getElementById('humid-icon6').style.display = "none";

  document.getElementById('wind-icon0').style.display = "none";
  document.getElementById('wind-icon1').style.display = "none";
  document.getElementById('wind-icon2').style.display = "none";
  document.getElementById('wind-icon3').style.display = "none";
  document.getElementById('wind-icon4').style.display = "none";
  document.getElementById('wind-icon5').style.display = "none";
  document.getElementById('wind-icon6').style.display = "none";

  getHourlyData();
}

// getHourlyData() outputs hourly weather data onto the user's page
function getHourlyData() {
    for(var i = 0; i < 14; i++) {
      if(i == 0){
        document.getElementById('row' + [i] + "-1").innerHTML = next_hours_time[i];
        document.getElementById('row' + [i] + "-2").innerHTML = next_hours_temp[i];
        document.getElementById('row' + [i] + "-3").src = "images/weather/small/" + next_hours_weather[i] + ".svg";
        document.getElementById('row' + [i] + "-3").style.display = "inline-block";
      }
      if(i % 2 == 0){
        var num = i/2 ;
        document.getElementById('row' + num + "-1").innerHTML = next_hours_time[i];
        document.getElementById('row' + num + "-2").innerHTML = next_hours_temp[i];
        document.getElementById('row' + num + "-3").src = "images/weather/small/" + next_hours_weather[i] + ".svg";
        document.getElementById('row' + num + "-3").style.display = "inline-block";
      }
      else{
        var num = Math.floor(i/2) ;
        document.getElementById('row' + num + "-4").innerHTML = next_hours_time[i];
        document.getElementById('row' + num + "-5").innerHTML = next_hours_temp[i];
        document.getElementById('row' + num + "-6").src = "images/weather/small/" + next_hours_weather[i] + ".svg";
        document.getElementById('row' + num + "-6").style.display = "inline-block";
      }
    }
}

// getDailyData() outputs hourly weather data onto the user's page
function getDailyData(){
  for(var i = 0; i < 7; i++){
    document.getElementById('row' + [i] + "-1").innerHTML = next_days_day[i];
    document.getElementById('row' + [i] + "-2").innerHTML = next_days_temp[i];
    document.getElementById('row' + [i] + "-3").src = "images/weather/small/" + next_days_weather[i] + ".svg";
    document.getElementById('row' + [i] + "-3").style.display = "inline-block";
    document.getElementById('row' + [i] + "-4").innerHTML = next_days_humidity[i];
    document.getElementById('row' + [i] + "-5").innerHTML = next_days_windspeed[i];
    document.getElementById('row' + [i] + "-6").style.display = "none";
  }
}
