import { Component, ViewEncapsulation } from '@angular/core';
import { Todo } from './todo-interface';
import { navItem } from './nav-item-type';

@Component({
  selector: 'app-todo-container',
  template: `
    <div class="container">
    <h1 class="title">Todos</h1>
    <div class="ver">5.0</div>
    <app-todo-form (add)="addTodo($event)"></app-todo-form>
    <app-todo-nav [navId]="navId" [navItems]="navItems" (navState)="navId=$event"></app-todo-nav>
    <app-todo-list [todos]="todos" [navId]="navId" *ngIf="todos; else loading"
    (remove)="removeTodo($event)" (check)="checkTodo($event)"></app-todo-list>
    <ng-template class="loading" #loading>Now Loading...</ng-template>
    <app-todo-footer (checkAll)="completeAll($event)" (clearChecked)="clearCompleted()"
    [Completed]="Completed" [Active]="Active"></app-todo-footer>
  `,
  styles: [`
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
export class TodoContainerComponent {
  todos: Todo[];
  navId: navItem = 'All';
  navItems: navItem[] = ['All', 'Active', 'Completed'];

  constructor() {
    this.getTodos();
  }

  getTodos() {
    setTimeout(() => {
      this.todos = [
        { id: 1, content: 'HTML', completed: true },
        { id: 2, content: 'CSS', completed: true },
        { id: 3, content: 'Javascript', completed: false }
      ];
    }, 1500);
  }

  addTodo(content: string) {
    if (!content.trim()) return;
    this.todos = [...this.todos, { id: this.generateId(), content, completed: false }];
  }
  generateId() {
    return this.todos.length ? Math.max(...this.todos.map(todo => todo.id)) + 1 : 1;
  }
  removeTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
  checkTodo(id: number) {
    this.todos = this.todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo);
  }
  completeAll(checked: boolean) {
    this.todos = this.todos.map(todo => checked ? { ...todo,  completed: true } : { ...todo, completed: false });
  }
  clearCompleted() {
    this.todos = this.todos.filter(todo => !todo.completed);
  }
  get Completed() {
    return this.todos.filter(todo => todo.completed).length;
  }
  get Active() {
    return this.todos.filter(todo => !todo.completed).length;
  }
}
