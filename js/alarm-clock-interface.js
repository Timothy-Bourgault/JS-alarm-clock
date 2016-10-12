var AlarmClock = require('./../js/alarm-clock.js').alarmClockModule;

$(document).ready(function() {
  var newClock = new AlarmClock();
  setInterval(function() {
    newClock.setTime();
    $('#time').text(newClock.currentTime);
  }, 1000);

  setInterval(function() {
    if (newClock.checkAlarm()){
      $('#alarm').show();
    }
  }, 1000);

  $('set#Alarm').click(function() {
    var alarmTime = $('#alarmTime').val();
    newClock.setAlarm(alarmTime);
    console.log(newClock.alarmTime);
  });

  $('#snooze').click(function() {
    newClick.snooze();
    $('#alarm').toggle();
  });

  $('#off').click(function() {
    newClock.alarmTime = null;
    $('#alarm').toggle();
  });
});
