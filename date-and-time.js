
// converts Unix epoch time to Date and Time
function getDateTime(timestamp) {
  var today = new Date(timestamp * 1000);

  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var dayName = days[today.getDay()];

  var day = today.getDate(); // grabs the current day

  var month_array = ["January","February","March","April","May","June","July",
                     "August","September","October","November","December"];
  var month = month_array[today.getMonth()];

  var year = today.getFullYear(); // grabs the current year
  var hour = today.getHours(); // grabs the current hour (military time)
  var min = today.getMinutes(); // grabs the current minute

  // since days less than 10 are single digit numbers (ex: '5')
  if (day < 10) {
    day = '0' + day;
  }

  // since months less than 10 are single digit numbers (ex: '5')
  if (month < 10) {
    month = '0' + month;
  }

  // since minutes less than 10 are single digit numbers (ex: '5')
  if (min < 10) {
    min = '0' + min;
  }

  // date and time format
  var date = dayName + ', ' + month + ' ' + day + ', ' + year ;
  var time = hour + ':' + min;
  time = convert(time);

  var final = date + " @ " + time;
  return final;
}

function convert(input) {
    return moment(input, 'HH:mm').format('h:mm A');
}
