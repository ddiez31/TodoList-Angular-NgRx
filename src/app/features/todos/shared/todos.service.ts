import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@Env';
import { Todo } from '../models/todo';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  endpointList = 'todosData';

  constructor(private http: HttpClient) { }

  /**
   * Get todos list
   *
   * @returns {Observable<Todo[]>}
   * @memberof TodosService
   */
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${environment.apiUrl}/${this.endpointList}`);
  }

  /**
   * Add todo
   *
   * @param {Todo} todo
   * @returns {Observable<Todo>}
   * @memberof TodosService
   */
  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(`${environment.apiUrl}/${this.endpointList}`, todo);
  }

  /**
   * Update todo
   *
   * @param {Todo} todo
   * @returns {Observable<Todo>}
   * @memberof TodosService
   */
  updateTodo(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${environment.apiUrl}/${this.endpointList}/${todo.id}`, todo).pipe(map(response => todo));
  }

  /**
   * Delete todo
   *
   * @param {number} todoId
   * @returns {Observable<number>}
   * @memberof TodosService
   */
  deleteTodo(todoId: number): Observable<number> {
    return this.http.delete<number>(`${environment.apiUrl}/${this.endpointList}/${todoId}`).pipe(map(response => todoId));
  }

}
