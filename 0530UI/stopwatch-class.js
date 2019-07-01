class Timer {
  constructor() {
    this.min = 0;
    this.sec = 0;
    this.mil = 0;
    this.dMin = 0;
    this.dSec = 0;
    this.dMil = 0;
    this.timer = 0;
    this.display = document.querySelector('.display');
  }

  start() {
    this.timer = setInterval(this.render.bind(this), 10);
  }

  stop() {
    clearInterval(this.timer);
  }

  render() {
    this.mil += 1;
    if (this.mil > 99) {
      this.mil = 0;
      this.sec += 1;
    }
    if (this.sec > 59) {
      this.sec = 0;
      this.min += 1;
    }
    this.dMin = this.min < 10 ? `0${this.min}` : this.min;
    this.dSec = this.sec < 10 ? `0${this.sec}` : this.sec;
    this.dMil = this.mil < 10 ? `0${this.mil}` : this.mil;
    this.display.textContent = `${this.dMin}:${this.dSec}:${this.dMil}`;
  }
}

const timer = new Timer();

class Counter {
  constructor() {
    this.num = 0;
    this.counter = document.querySelector('.counter');
  }

  increase() {
    this.num += 1;
  }

  decrease() {
    if (this.num !== 0) {
      this.num -= 1;
    }
  }

  render() {
    this.counter.innerHTML = this.num;
  }
}

const counter = new Counter();