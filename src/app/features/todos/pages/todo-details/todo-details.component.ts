// Modules
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

// Services
import { AppState } from '@Store';
import { selectedTodoListState$ } from '@Selectors/todo-list.selector';
import { TodoListState } from '../../models/todo-list-state';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.scss']
})
export class TodoDetailsComponent implements OnInit {
  public selectedTodo$: Observable<TodoListState>;
  public selectedTodo: Todo;

  constructor(private store: Store<AppState>) {
    // Get data with selector
    this.selectedTodo$ = this.store.pipe(select(selectedTodoListState$),
      tap(data => {
        this.selectedTodo = data.selectedTodo;
      }));

    this.selectedTodo$.subscribe();
  }

  ngOnInit(): void {
  }

}
