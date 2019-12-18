// Modules
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
const uuidv4 = require('uuid/v4');
import { TodoListModule } from '@Actions/todo-list.action';

// Services
import { AppState } from '@Store';
import { Todo } from '../../models/todo';
import { TodosService } from '../../shared/todos.service';
import { selectTodosLoading$, selectedTodos$ } from '@Selectors/todo-list.selector';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @ViewChild('formDirective', {static: true}) private formDirective: NgForm;

  todos$: Observable<Todo[]>;
  public todosLoading: Observable<boolean>;
  public activeSpinner: boolean;
  public todoForm: FormGroup;

  constructor(private store: Store<AppState>, public fb: FormBuilder, private router: Router) {
    // Get data with selector
    this.todos$ = this.store.pipe(select(selectedTodos$));
    this.todosLoading = this.store.pipe(select(selectTodosLoading$));
    this.todoForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      details: ['', Validators.minLength(6)],
      completed: [false]
    });
  }

  ngOnInit(): void {
    this.todosLoading.subscribe((status) => this.activeSpinner = status);
  }

  /**
   * Getter for access to form fields
   *
   * @returns {any}
   * @memberof TodoListComponent
   */
  get f(): any {
    return this.todoForm.controls;
  }

  /**
   * Add todo
   *
   * @param {Todo} todo
   * @memberof TodoListComponent
   */
  addTodo(todo: Todo): void {
    if (this.todoForm.invalid) {
      return;
    }
    const payload = {
      ...todo,
      id: uuidv4()
    };
    this.store.dispatch(new TodoListModule.LoadAddTodo(payload));
    this.formDirective.resetForm();
  }

  /**
   * Show todo details
   *
   * @param {Todo} todo
   * @memberof TodoListComponent
   */
  showTodo(todo: Todo): void {
    const payload = todo;
    this.store.dispatch(new TodoListModule.SelectedTodo(payload));
    this.router.navigate([`/todo-details/${todo.id}`]);
  }

  /**
   * Delete todo
   *
   * @param {number} todoId
   * @memberof TodoListComponent
   */
  deleteTodo(todoId: number): void {
    const payload = todoId;
    this.store.dispatch(new TodoListModule.LoadDeleteTodo(payload));
  }

  /**
   * Complete todo
   *
   * @param {Todo} todo
   * @param {boolean} status
   * @memberof TodoListComponent
   */
  completeTodo(todo: Todo, status: boolean): void {
    const payload = {
      ...todo,
      completed: status,
      id: todo.id
    };
    this.store.dispatch(new TodoListModule.LoadCompleteTodo(payload));
  }

}
