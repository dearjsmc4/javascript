import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  template: `
  <input type="text" placeholder="Write a todo!" (keyup.enter)="addTodo(input)" #input>
  `
})
export class TodoInputComponent {
  @Output() add = new EventEmitter();
  addTodo(inputElem: HTMLInputElement) {
    if(inputElem.value.trim()){
      this.add.emit(inputElem.value);
      inputElem.value = '';
    }
  }
}
