class Timer {

  constructor(minute) {
    this.max = minute * 60;
    this.left = this.max;
    this.started = false;
    this.events = {};
  }

  start() {
    if (!this.started) {
      this.interval = setInterval(() => {
        this.left = this.left - 1;
        this.fire('proceed');
        if (this.left == 0) {
          this.fire('end');
          this.stop();
        }
      }, 1000);
      this.started = true;
    }
  }

  stop() {
    this.pause();
    this.left = this.max;
  }

  pause() {
    if (this.started) {
      clearInterval(this.interval);
      this.started = false;
    }
  }

  getMin() {
    return Math.floor(this.left / 60);
  }

  getSec() {
    return this.left % 60;
  }

  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }

  fire(event) {
    const events = this.events[event];
    for (const callback of events) {
      callback(this);
    }
  }
}

module.exports = Timer;
