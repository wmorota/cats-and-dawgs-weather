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
