import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@Env';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  endpointList = 'todosData';

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${environment.apiUrl}/${this.endpointList}`);
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(`${environment.apiUrl}/${this.endpointList}`, todo);
  }

  updateTodo(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${environment.apiUrl}/${this.endpointList}/${todo.id}`, todo);
  }

  deleteTodo(todoId: number): Observable<number> {
    return this.http.delete<number>(`${environment.apiUrl}/${this.endpointList}/${todoId}`);
  }

}
