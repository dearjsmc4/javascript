import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <div class="container">
  <app-increase (decrease)="decrease()"></app-increase>
  <div class="counter"> {{number}} </div>
  <app-decrease (increase)="increase()"></app-decrease>
  </div>
  `,
  styles: [`
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 130px;
    margin: 20px auto;
    font-size: 24px;
    color: #3f51b5;
  }
  .counter {
    width: 50px;
    text-align: center;
  }
  `]
})
export class CounterComponent {
  number: number = 0;

  increase() {
    this.number += 1;
  }
  
  decrease() {
    if (this.number > 0) {
      this.number -= 1;
    }
  }
}



// $event = 이벤트 객체