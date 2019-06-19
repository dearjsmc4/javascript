import { Component } from '@angular/core';
import { Todo } from '../todo-interface'

@Component({
  selector: 'app-todos',
  template: `
  <app-todo-input (add)="addTodo($event)"></app-todo-input>
  <app-todo-list [todos]="todos" (removeTodo)="remove($event)" (checkTodo)="check($event)"></app-todo-list>
  `
})
export class TodosComponent  {

  todos: Todo[] = [
    { id: 1, content: 'HTML', completed: true },
    { id: 2, content: 'CSS', completed: false },
    { id: 3, content: 'Javascript', completed: false }
  ]

  addTodo(content: string) {
    this.todos = [ ...this.todos, { id: this.generateId(), content, completed: false } ];
  }
  generateId(): number {
    return this.todos.length ? Math.max( ...this.todos.map(({ id }) => id) ) + 1 : 1;
  }
  remove(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
  check(id: number) {
    this.todos = this.todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo);
  }
}
