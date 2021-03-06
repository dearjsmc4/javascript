import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Todo } from '../types/todo-interface';
import { navItem } from '../types/nav-item-type';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-container',
  template: `
    <div class="container">
    <h1 class="title">Todos</h1>
    <div class="ver">7.0</div>

    <ng-container *ngIf="todos; else loading">
      <app-todo-form (add)="addTodo($event)"></app-todo-form>
      <app-todo-nav [navId]="navId" 
        [navItems]="navItems" (navState)="navId=$event"></app-todo-nav>
      <app-todo-list [todos]="todos" [navId]="navId"
        (remove)="removeTodo($event)" 
        (check)="checkTodo($event)"></app-todo-list>
      <app-todo-footer (checkAll)="completeAll($event)" 
        (clearChecked)="clearCompleted()"
        [Completed]="Completed" [Active]="Active"></app-todo-footer>
    </ng-container>
    <ng-template #loading><div class="loading">Now Loading :D</div></ng-template>
  `,
  styles: [`
  .loading{
    text-align: center;
    font-size: 1.6rem;
    padding-top: 50px;
  }

  .container {
    max-width: 750px;
    min-width: 450px;
    margin: 0 auto;
    padding: 15px;
  }
  
  .title {
    /* margin: 10px 0; */
    font-size: 4.5em;
    font-weight: 100;
    text-align: center;
    color: #23b7e5;
  }
  
  .ver {
    font-weight: 100;
    text-align: center;
    color: #23b7e5;
    margin-bottom: 30px;
  }
  /*
  .custom-checkbox
  custom-checkbox 바로 뒤에 위치한 label의 before와 after를 사용해
  custom-checkbox의 외부 박스와 내부 박스를 생성한다.

  <input class="custom-checkbox" type="checkbox" id="myId">
  <label for="myId">Content</label>
*/

.custom-checkbox {
  display: none;
}

.custom-checkbox + label {
  position: absolute; /* 부모 위치를 기준으로 */
  top: 50%;
  left: 15px;
  transform: translate3d(0, -50%, 0);
  display: inline-block;
  width: 90%;
  line-height: 2em;
  padding-left: 35px;
  cursor: pointer;
  user-select: none;
}

.custom-checkbox + label:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate3d(0, -50%, 0);
  width: 20px;
  height: 20px;
  background-color: #fff;
  border: 1px solid #cfdadd;
}

.custom-checkbox:checked + label:after {
  content: "";
  position: absolute;
  top: 50%;
  left: 6px;
  transform: translate3d(0, -50%, 0);
  width: 10px;
  height: 10px;
  background-color: #23b7e5;
}
`],
encapsulation: ViewEncapsulation.None
})
export class TodoContainerComponent implements OnInit {
  todos: Todo[];
  navId: navItem = 'All';
  navItems: navItem[] = ['All', 'Active', 'Completed'];
  constructor(private todoService: TodoService) {}

  ngOnInit() {
    setTimeout(() => this.getTodo(), 1500);
  }

  getTodo() {
    this.todoService.getAll()
    .subscribe((todos: Todo[]) => this.todos = todos);
  }
  addTodo(content: string) {
    if (!content.trim()) return;
    const payload = { id: this.generateId(), content, completed: false };
    this.todoService.create(payload)
      .subscribe((todos: Todo[]) => this.todos = todos);
  }
  generateId() {
    return this.todos.length ? Math.max(...this.todos.map(todo => todo.id)) + 1 : 1;
  }
  removeTodo(id: number) {
    this.todoService.delete(id)
      .subscribe((todos: Todo[]) => this.todos = todos);
  }
  checkTodo(id: number) {
    const completed = !this.todos.find(todo => todo.id === id).completed;
    this.todoService.toggle(id, completed)
      .subscribe((todos: Todo[]) => this.todos = todos);
  }
  completeAll(completed: boolean) {
    this.todoService.toggleAll(completed)
      .subscribe((todos: Todo[]) => this.todos = todos);
  }
  clearCompleted() {
    this.todoService.removeCompleted()
      .subscribe((todos: Todo[]) => this.todos = todos);
  }
  get Completed() {
    return this.todos.filter(todo => todo.completed).length;
  }
  get Active() {
    return this.todos.filter(todo => !todo.completed).length;
  }
}
