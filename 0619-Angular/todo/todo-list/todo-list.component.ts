import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo-interface'

@Component({
  selector: 'app-todo-list',
  template: `
  <ul>
    <li *ngFor="let todo of todos">
    <input type="checkbox" [checked]="todo.completed" (change)="check(todo.id)">
    <span [class.completed]="todo.completed"> {{ todo.content }} </span>
    <button (click)="remove(todo.id)">X</button>
    </li>
  </ul>
  `,
  styles: [`
  .completed {
    text-decoration: line-through;
  }
  `]
})
export class TodoListComponent {
  @Input() todos: Todo[];
  @Output() removeTodo = new EventEmitter();
  @Output() checkTodo = new EventEmitter();

  remove(id: number) {
    this.removeTodo.emit(id);
  }
  check(id: number) {
    this.checkTodo.emit(id);
  }
}
