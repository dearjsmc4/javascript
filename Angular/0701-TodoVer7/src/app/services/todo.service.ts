import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../types/todo-interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  url = environment.url;
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Todo[]>(this.url);
  }
  create(payload: Todo) {
    return this.http.post<Todo[]>(this.url, payload);
  }
  delete(id: number) {
    return this.http.delete<Todo[]>(`${this.url}${id}`)
  }
  toggle(id: number, completed: boolean) {
    return this.http.patch<Todo[]>(`${this.url}${id}`, { completed });
  }
  toggleAll(completed: boolean) {
    return this.http.patch<Todo[]>(this.url, { completed });
  }
  removeCompleted() {
    return this.http.delete<Todo[]>(`${this.url}/completed`);
  }
}
