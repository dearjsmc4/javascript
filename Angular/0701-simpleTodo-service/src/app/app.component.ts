import { Todo } from './todo';
import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  template: `
    <input type="text" placeholder="Write a Todo..."
    (keyup.enter)="addTodo()" [(ngModel)]="content">
    <ul>
      <li *ngFor="let todo of todos">
      <input type="checkbox" [checked]="todo.completed"
      (change)="checkTodo(todo.id, todo.completed)">
      <span *ngIf="clickId !== todo.id; else edit" (click)="setId(todo.id)">{{ todo.content }} </span>
      <ng-template #edit>
        <input type="text" value="{{ todo.content }}"
        (keyup.enter)="editTodo(todo.id, input.value)" #input>
      </ng-template>
      <button (click)="removeTodo(todo.id, todo.completed)">X</button>
      </li>
    </ul>
    <pre>{{ todos | json }}</pre>
  `,
  styles: []
})

@Injectable()
export class AppComponent implements OnInit{
  todos: Todo[] = [];
  content = '';
  clickId: number;

  constructor(private http: HttpClient, private todoService: TodoService) {
  }
  ngOnInit() {
    this.todoService.getAll()
      .subscribe(todos => this.todos = todos);
  }
  addTodo() {
    this.content = '';
    if (!this.content.trim()) return;
    const content = this.content && this.content.trim();
    const payload = { id: this.generateId(), content, completed: false };
    this.todoService.create(payload)
      .subscribe(todo => this.todos = [...this.todos, todo]);
  }
  generateId() {
    return this.todos.length ? Math.max(...this.todos.map(todo => todo.id)) + 1 : 1
  }
  removeTodo(id: number) {
    this.todoService.remove(id)
      .subscribe(() => this.todos = this.todos.filter(todo => todo.id !== id));
  }
  checkTodo(id: number) {
     this.todoService.toggle(id, this.todos)
       .subscribe(patchedTodo => this.todos = this.todos.map(todo =>
          todo.id === id ? patchedTodo : todo));
  }
  setId(id: number) {
    this.clickId = id;
  }
  // editTodo(id: number, content: string) {
  //   this.http.patch<Todo>(`${this.url}${id}`, { content })
  //     .subscribe(() => this.todos = this.todos.map(todo =>
  //       todo.id === id ? { ...todo, content } : todo
  //     ));
  //   this.clickId = null;
  // }
}
