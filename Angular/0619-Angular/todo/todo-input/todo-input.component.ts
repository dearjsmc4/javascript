import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  template: `
  <input type="text" placeholder="Write a todo!" (keyup.enter)="addTodo()"
  [(ngModel)]="content">
  `
})
export class TodoInputComponent {
  content = '';
  @Output() add = new EventEmitter();
  addTodo() {
      this.add.emit(this.content);
      this.content = '';
    }
}
