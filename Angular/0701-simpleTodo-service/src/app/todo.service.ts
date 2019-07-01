import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Todo } from './todo';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  url: string = environment.url;
  
  constructor(private http: HttpClient) { }

  getAll() {
    const params = new HttpParams()
    .set('_sort', 'id')
    .set('_order', 'desc');
    // 옵저버블만 리턴하여 컴포넌트에서 작업할 수 있게 함.
    // 옵저버가 하는 일은 다 다를 수 있기 때문임.
    return this.http.get<Todo[]>(this.url, { params });
  }

  create(todo: Todo) {
    return this.http.post<Todo>(this.url, todo)
  }
  remove(id:number){
    return this.http.delete<Todo>(`${this.url}${id}`)
  }
  toggle(id: number, todos: Todo[]) {
    const completed = !todos.find(todo => todo.id === id).completed;
    return this.http.patch<Todo>(`${this.url}${id}`, { completed })
  }
}
