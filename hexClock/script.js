function main() {
  var hexHours = document.getElementById('hexHours');
  var hexMinutes = document.getElementById('hexMinutes');
  var hexSeconds = document.getElementById('hexSeconds');
  var mainClockBlock = document.getElementById('mainClockBlock');
  //var body = document.getElementsByTagName('body');

  var date = new Date();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  
  hexHours.innerText = (hour < 10) ? '0' + hour : hour;
  hexMinutes.innerText = (minute < 10) ? '0' + minute : minute;
  hexSeconds.innerText = (second < 10) ? '0' + second : second;
  mainClockBlock.style.color = '#' + ((hour < 10) ? '0' + hour : hour) + ((minute < 10) ? '0' + minute : minute) + ((second < 10) ? '0' + second : second);
  document.body.style.backgroundColor = '#' + ((second < 10) ? '0' + second : second)  + ((hour < 10) ? '0' + hour : hour) + ((minute < 10) ? '0' + minute : minute);
  

} setInterval(main, 100);