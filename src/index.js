const Timer = require('./src/timer');
const $ = require('jquery');

let workTimer = new Timer(1);
workTimer.on('end', function() {
  console.log('end: ' + workTimer.print());
});
workTimer.on('proceed', function() {
  console.log('proceed: ' + workTimer.print());
  $('#test').text(workTimer.print());
});

$(document).ready(() => {
  $('#start').click(() => {
    workTimer.start();
  });

  $('#stop').click(() => {
    workTimer.stop();
  });

  $('#pause').click(() => {
    workTimer.pause();
  });
});
