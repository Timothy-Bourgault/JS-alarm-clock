function AlarmClock() {
  this.currentTime = null;
  this.alarmTime = null;
}

AlarmClock.prototype.setTime = function () {
  this.currentTime = moment().format('LTS');
};

AlarmClock.prototype.setAlarm = function(time) {
  this.alarmTime = moment(time, 'LTS').format('LTS');
};

AlarmClock.prototype.checkAlarm = function() {
  if (this.currentTime === this.alarmTime) {
    return true;
  } else {
    return false;
  }
};

AlarmClock.prototype.snooze = function() {
  this.alarmTime = moment().add(5,'m').format("HH:mm:ss");
};

exports.alarmClockModule = AlarmClock;
