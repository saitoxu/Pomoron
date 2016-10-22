const Timer = require('./src/timer');
const $ = require('jquery');
const workTimer = new Timer(1);
const breakTimer = new Timer(1);
let count = 0;
let currentTimer = workTimer;

workTimer.on('end', () => {
  count++;
  $('#counter').text(count);

  currentTimer = breakTimer;
  $('#time').text(format(currentTimer.getMin(), currentTimer.getSec()));
  $('#time').removeClass('work');
  $('#time').addClass('break');
});

workTimer.on('proceed', () => {
  // $('#time').text(format(workTimer.getMin(), workTimer.getSec()));
  $('#time').text(format(currentTimer.getMin(), currentTimer.getSec()));
});

breakTimer.on('end', () => {
  currentTimer = workTimer;
  $('#time').text(format(currentTimer.getMin(), currentTimer.getSec()));
  $('#time').removeClass('break');
  $('#time').addClass('work');
});

breakTimer.on('proceed', () => {
  $('#time').text(format(currentTimer.getMin(), currentTimer.getSec()));
});

$(document).ready(() => {
  $('#time').text(format(currentTimer.getMin(), currentTimer.getSec()));
  $('#time').addClass('work');
  $('#counter').text(count);
  $('#start').click(() => {
    currentTimer.start();
  });

  $('#stop').click(() => {
    currentTimer.stop();
    $('#time').text(format(currentTimer.getMin(), currentTimer.getSec()));
  });

  $('#pause').click(() => {
    currentTimer.pause();
  });
});

function format(min, sec) {
  let time;
  if (min < 10) {
    time = '0' + min + ':';
  } else {
    time = min + ':';
  }
  if (sec < 10) {
    time = time + '0' + sec;
  } else {
    time = time + sec;
  }
  return time;
}
