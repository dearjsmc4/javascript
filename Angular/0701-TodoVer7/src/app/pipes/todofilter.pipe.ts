import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../types/todo-interface';
import { navItem } from '../types/nav-item-type';

@Pipe({
  name: 'todofilter'
})
export class TodofilterPipe implements PipeTransform {

  transform(todos: Todo[], navId: navItem): Todo[] {
    return todos.filter(todo => {
      if (navId === 'Active') return !todo.completed;
      else if(navId === 'Completed') return todo.completed;
      return true;
    });
  }
  
}
