import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { TodoListModule } from '@Actions/todo-list.action';
import { TodosService } from './../../features/todos/shared/todos.service';

@Injectable()
export class TodoListEffects {
	// Listen actions passed in store
	@Effect() LoadTodos$: Observable<TodoListModule.Actions> = this.actions$
		.pipe(
			// If action is of type 'LOAD_INIT_TODOS', apply next
			ofType(TodoListModule.ActionTypes.LOAD_INIT_TODOS),
			// Execute the service that will return data
			switchMap(action => this.todosService.getTodos()),
			// Return a SuccessInitTodos action with the todos in parameters
			map(todos => new TodoListModule.SuccessInitTodos(todos)),
			// If error, action ErrorLoadAction
			catchError(() => of(new TodoListModule.ErrorLoadAction()))
		);

	@Effect() LoadAddTodo$: Observable<TodoListModule.Actions> = this.actions$
		.pipe(
			ofType<TodoListModule.LoadAddTodo>(TodoListModule.ActionTypes.LOAD_ADD_TODO),
			switchMap(action => this.todosService.addTodo(action.payload)),
			map(todo => new TodoListModule.SuccessAddTodo(todo)),
			catchError(() => of(new TodoListModule.ErrorLoadAction()))
		);

	@Effect() LoadDeleteTodo$: Observable<TodoListModule.Actions> = this.actions$
		.pipe(
			ofType<TodoListModule.LoadDeleteTodo>(TodoListModule.ActionTypes.LOAD_DELETE_TODO),
			switchMap(action => this.todosService.deleteTodo(action.payload)),
			map(todo => new TodoListModule.SuccessDeleteTodo(todo)),
			catchError(() => of(new TodoListModule.ErrorLoadAction()))
		);

	@Effect() LoadCompleteTodo$: Observable<TodoListModule.Actions> = this.actions$
		.pipe(
			ofType<TodoListModule.LoadCompleteTodo>(TodoListModule.ActionTypes.LOAD_COMPLETE_TODO),
			switchMap(action => this.todosService.updateTodo(action.payload)),
			map(todo => new TodoListModule.SuccessCompleteTodo(todo)),
			catchError(() => of(new TodoListModule.ErrorLoadAction()))
		);

	constructor(
		private todosService: TodosService,
		private actions$: Actions
	) {}

}
