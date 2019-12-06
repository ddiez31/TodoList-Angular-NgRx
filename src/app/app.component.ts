import { OnInit, Component, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
const uuidv4 = require('uuid/v4');

import { TodoListModule } from './store/actions/todo-list.action';
import { AppState } from './store';
import { Todo } from './todos/models/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'TodoList-Angular-NgRx';
  todos$: Observable<Todo[]>;
  public todoForm: FormGroup;

  constructor(private store: Store<AppState>, public fb: FormBuilder) {
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

  showTodo(): void {

  }

  deleteTodo(): void {

  }

  completeTodo(): void {

  }

}
