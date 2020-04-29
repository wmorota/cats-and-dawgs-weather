function clickDaily()
{
  document.getElementById('daily').style.backgroundColor = "#96CCFF";
  document.getElementById('daily').style.borderColor = "#96CCFF";
  document.getElementById('daily').style.color = "white";

  document.getElementById('hourly').style.backgroundColor = "white";
  document.getElementById('hourly').style.borderColor = "#96CCFF";
  document.getElementById('hourly').style.color = "#96CCFF";
}

function clickHourly()
{
  document.getElementById('hourly').style.backgroundColor = "#96CCFF";
  document.getElementById('hourly').style.borderColor = "#96CCFF";
  document.getElementById('hourly').style.color = "white";

  document.getElementById('daily').style.backgroundColor = "white";
  document.getElementById('daily').style.borderColor = "#96CCFF";
  document.getElementById('daily').style.color = "#96CCFF";

  // for loop that goes through 14 iterations
    // if it's 0 or even then place them on "row[0]-1", "row[0]-2", "row[0]-3"
    // if it's even number then place them on "(row[i] / 2)-1", "(row[i] / 2)-2",
      // else place them on row(floor(i/2))-4, row(floor(i/2))-5, row(floor(i/2))-6,
}

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
