import { Component, Input, Output, EventEmitter } from '@angular/core';
import { navItem } from './nav-item-type';

@Component({
  selector: 'app-todo-nav',
  template: `
    <ul class="nav">
      <li class="all" *ngFor="let navItem of navItems"
      [class.active]="navId === navItem"
      (click)="this.navState.emit(navItem)">{{ navItem }}</li>
    </ul>
  `,
  styles: [`
  /* .nav */
.nav {
  display: flex;
  margin: 15px;
  list-style: none;
}

.nav > li {
  padding: 4px 10px;
  border-radius: 4px;
  cursor: pointer;
}

.nav > li.active {
  color: #fff;
  background-color: #23b7e5;
}

.todos {
  margin-top: 20px;
}
  `]
})
export class TodoNavComponent {
  @Input() navId: navItem;
  @Input() navItems: navItem[];
  @Output() navState = new EventEmitter();
}
