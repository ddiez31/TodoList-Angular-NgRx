import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
const uuidv4 = require('uuid/v4');

import { TodoListModule } from '@Actions/todo-list.action';
import { AppState } from '@Store';
import { Todo } from '../../models/todo';
import { TodosService } from '../../shared/todos.service';
import { selectedTodoListState$, selectTodosLoading$, selectedTodos$ } from '@Selectors/todo-list.selector';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos$: Observable<Todo[]>;
  public todosLoading: Observable<boolean>;
  public activeSpinner: boolean;
  public todoForm: FormGroup;

  constructor(private store: Store<AppState>, public fb: FormBuilder, private router: Router, private todosService: TodosService) {
    this.todos$ = this.store.pipe(select(selectedTodos$));
    this.todosLoading = this.store.pipe(select(selectTodosLoading$));
    this.todoForm = this.fb.group({
      title: ['', Validators.required],
      details: [''],
      completed: [false]
    });
  }

  ngOnInit(): void {
    this.todosLoading.subscribe((status) => this.activeSpinner = status);
    // this.getTodos();
  }

  getTodos(): void {
    // this.todosService.getTodos()
    // .subscribe((todos) => {
      // this.store.dispatch(new TodoListModule.LoadInitTodos());
    // });
  }

  addTodo(todo: Todo): void {
    const payload = {
      ...todo,
      id: uuidv4()
    };
    // this.todosService.addTodo(payload)
    // .subscribe(() => {
    this.store.dispatch(new TodoListModule.LoadAddTodo(payload));
    // });
    this.todoForm.reset();
  }

  showTodo(todo: Todo): void {
    const payload = todo;
    this.store.dispatch(new TodoListModule.SelectedTodo(payload));
    this.router.navigate([`/todo-details/${todo.id}`]);
  }

  deleteTodo(todoId: number): void {
    const payload = todoId;
    // this.todosService.deleteTodo(payload)
    // .subscribe(() => {
    this.store.dispatch(new TodoListModule.LoadDeleteTodo(payload));
    // });
  }

  completeTodo(todo: Todo, status: boolean): void {
    const payload = {
      ...todo,
      completed: status,
      id: todo.id
    };
    // this.todosService.updateTodo(payload)
    // .subscribe(() => {
    this.store.dispatch(new TodoListModule.LoadCompleteTodo(payload));
    // });
  }

}
