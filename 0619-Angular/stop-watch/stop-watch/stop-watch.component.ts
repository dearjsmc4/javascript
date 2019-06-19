import { Component } from '@angular/core';

@Component({
  selector: 'app-stop-watch',
  template: `
  <div class="stop-watch">
    <div class="display">{{ dMin }}:{{ dSec }}:{{ dMil }}</div>
    <button class="control" (click)="timer()">{{ title }}</button>
  </div>
  `,
  styles: [`
  @import url('https://fonts.googleapis.com/css?family=Source+Code+Pro');

  .stop-watch {
    font-family: 'Source Code Pro', monospace;
    text-align: center;
    font-size: 3em;
    padding: 30px;
  }

  .control {
    width: 300px;
    padding: 5px;
    margin-top: 15px;
    font-size: 36px;
    font-weight: bold;
    border: 2px solid #f44336;
    border-radius: 4px;
    cursor: pointer;
    outline: none;
  }

  .control:hover {
    background: #f44336;
    color: aliceblue;
  }`]
})
export class StopWatchComponent {
  min = 0;
  sec = 0;
  mil = 0;
  title = 'start';
  count: any;

  start() {
    this.mil += 1;
    if (this.mil > 99) {
      this.sec += 1;
      this.mil = 0;
    }
    if (this.sec > 59) {
      this.min += 1;
      this.sec = 0;
    }
  }
  
  timer() {
    if (this.title === 'stop') {
      this.title = 'start';
      clearInterval(this.count);
    } else {
    this.title = 'stop';
    this.count = setInterval(this.start.bind(this), 10);
    }
  }

  get dMin() {
    return this.min < 10 ? `0${this.min}` : `${this.min}`;
  }
  get dSec() {
    return this.sec < 10 ? `0${this.sec}` : `${this.sec}`;
  }
  get dMil() {
    return this.mil < 10 ? `0${this.mil}` : `${this.mil}`;
  }
  
}
