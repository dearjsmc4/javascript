import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './todo-interface';

// 파이프의 메타데이터
@Pipe({
  name: 'todofilter',
})
export class TodofilterPipe implements PipeTransform {
// 파이프의 대상을 transform(변형) 한다 -> 파이프는 이것을 반드시 구현해야 한다
// value = 변형시킬 대상 / args? = 옵션. 
  transform(todos: Todo[], navId: string): Todo[] {
    return todos.filter(todo => {
      if (navId === 'Active') return !todo.completed;
      else if(navId === 'Completed') return todo.completed;
      return true;
    });
  }

}
