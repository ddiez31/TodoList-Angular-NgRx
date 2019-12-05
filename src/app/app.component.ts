import { OnInit, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
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

  constructor(private store: Store<AppState>) {
    this.todos$ = this.store.pipe(select((state) => state.todos.data));
  }

  ngOnInit(): void {
    this.store.dispatch(new TodoListModule.InitTodos());
  }

  addTodo(): void {

  }

  showTodo(): void {

  }

  deleteTodo(): void {

  }

  completeTodo(): void {

  }

}
