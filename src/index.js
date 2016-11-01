const Timer = require('./src/timer');
const $ = require('jquery');
const workTimer = new Timer(25);
const breakTimer = new Timer(5);
let count = 0;
let currentTimer = workTimer;

workTimer.on('end', () => {
  count++;
  $('#counter').text(count);

  currentTimer = breakTimer;
  $('#time').text(format(currentTimer.getMin(), currentTimer.getSec()));
  $('#time').removeClass('work');
  $('#time').addClass('break');
  $('#start').show();
  $('#pause').hide();
});

workTimer.on('proceed', () => {
  $('#time').text(format(currentTimer.getMin(), currentTimer.getSec()));
});

breakTimer.on('end', () => {
  currentTimer = workTimer;
  $('#time').text(format(currentTimer.getMin(), currentTimer.getSec()));
  $('#time').removeClass('break');
  $('#time').addClass('work');
  $('#start').show();
  $('#pause').hide();
});

breakTimer.on('proceed', () => {
  $('#time').text(format(currentTimer.getMin(), currentTimer.getSec()));
});

$(document).ready(() => {
  init();

  $('#start').click(() => {
    currentTimer.start();
    $('#start').hide();
    $('#pause').show();
  });

  $('#stop').click(() => {
    currentTimer.stop();
    $('#time').text(format(currentTimer.getMin(), currentTimer.getSec()));
    $('#pause').hide();
    $('#start').show();
  });

  $('#pause').click(() => {
    currentTimer.pause();
    $('#pause').hide();
    $('#start').show();
  });

  $('#clear').click(() => {
    count = 0;
    $('#counter').text(count);
  });
});

function init() {
  $('#time').text(format(currentTimer.getMin(), currentTimer.getSec()));
  $('#time').addClass('work');
  $('#counter').text(count);
  $('#pause').hide();
}

function format(min, sec) {
  let time = min < 10 ? '0' : '';
  time += min + ':';
  time += sec < 10 ? '0' + sec : sec;
  return time;
}
