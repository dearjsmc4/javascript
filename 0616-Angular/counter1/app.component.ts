import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
  <button (click)="decrease()">-</button>
  <div class="counter"> {{number}} </div>
  <button (click)="increase()">+</button>
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
  button {
    padding: 5px 10px;
    font-size: 24px;
    border-radius: 5px;
    color: #3f51b5;
    border-color: #3f51b5;
    outline: none;
    cursor: pointer;
  }`]
})
export class AppComponent {
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
