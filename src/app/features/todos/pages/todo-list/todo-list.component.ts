import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
const uuidv4 = require('uuid/v4');

import { TodoListModule } from '@Actions/todo-list.action';
import { AppState } from '@Store';
import { Todo } from './../../../../todos/models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos$: Observable<Todo[]>;
  public todoForm: FormGroup;

  constructor(private store: Store<AppState>, public fb: FormBuilder, private router: Router) {
    this.todos$ = this.store.pipe(select((state) => state.todos.data));
    this.todoForm = this.fb.group({
      title: ['', Validators.required],
      details: [''],
      completed: [false]
    });
  }

  ngOnInit(): void {
    this.store.dispatch(new TodoListModule.InitTodos());
  }

  addTodo(todo: Todo): void {
    const payload = {
      ...todo,
      userId: 1,
      id: uuidv4()
    };
    this.store.dispatch(new TodoListModule.AddTodo(payload));
    this.todoForm.reset();
  }

  showTodo(todoId: number): void {
    this.router.navigate([`/todo-details/${todoId}`]);
  }

  deleteTodo(todoId: number): void {
    const payload = todoId;
    this.store.dispatch(new TodoListModule.DeleteTodo(payload));
  }

  completeTodo(todo: Todo, status: boolean): void {
    const payload = {
      ...todo,
      completed: status,
      userId: 1,
      id: todo.id
    };
    this.store.dispatch(new TodoListModule.CompleteTodo(payload));
  }

}
