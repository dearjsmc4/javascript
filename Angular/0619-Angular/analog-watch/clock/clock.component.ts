import { Component } from '@angular/core';

@Component({
  selector: 'app-clock',
  template: `
  <div class="clock">
    <div class="analog-clock">
      <div class="hour hand" [style.transform]="hourHand"></div>
      <div class="minute hand" [style.transform]="minHand"></div>
      <div class="second hand" [style.transform]="secHand"></div>
      <div class="center-circle"></div>
    </div>
    <div class="digital-clock">{{ dHour }}:{{ dMin }}:{{ dSec }}</div>
  </div>
  `,
  styles: [`
  @import url('https://fonts.googleapis.com/css?family=Source+Code+Pro');

  .analog-clock {
    position: relative;
    margin: 100px auto 0;
    width: 200px;
    height: 200px;
    background-color: aliceblue;
    border-radius: 50%;
  }

  .hand {
    position: absolute;
    left: 50%;
    width: 1px;
    height: 100px;
    /* 자바스크립트에 의해 덮어써진다. */
    /* transform: translate3d(-50%, 0, 0); */
    transform-origin: 100% 100%;
  }

  .hour {
    background-color: #f44336;
  }

  .minute {
    background-color: #3f51b5;
  }

  .second {
    background-color: #9e9e9e;
  }

  .center-circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    width: 12px;
    height: 12px;
    background-color: black;
    border-radius: 50%;
  }

  .digital-clock {
    position: absolute;
    top: 350px;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
    font-size: 2em;
    font-family: 'Source Code Pro', monospace;
  }`]
})
export class ClockComponent {

constructor() {
  setInterval(this.getTime.bind(this),1000);
}

hour = 0;
min = 0;
sec = 0;

hourHand: string;
minHand: string;
secHand: string;

getTime() {
  this.hour = new Date().getHours();
  this.min = new Date().getMinutes();
  this.sec = new Date().getSeconds();
  
  this.secHand = `rotate(${this.sec * 6}deg)`;
  this.minHand = `rotate(${(this.min * 6) + (this.sec * 0.1)}deg)`;
  this.hourHand = `rotate(${((this.hour % 12) * 30) + (this.min * 0.5) + (this.sec * (30 / 3600))}deg)`;
}
get dHour() {
  return this.hour % 12 < 10 ? `0${this.hour}` : `${this.hour}`;  
}
get dMin() {
  return this.min < 10 ? `0${this.min}` : `${this.min}`;
}
get dSec() {
  return this.sec < 10 ? `0${this.sec}` : `${this.sec}`;
}
}
