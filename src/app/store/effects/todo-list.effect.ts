import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { TodoListModule } from '@Actions/todo-list.action';
import { TodosService } from './../../features/todos/shared/todos.service';

@Injectable()
export  class  TodoListEffects {
	// Ecoute les actions passées dans le store
	@Effect() LoadTodos$: Observable<TodoListModule.Actions> = this.actions$
	.pipe(
		// Si l'action est de type 'LOAD_INIT_TODOS', applique la suite sinon ne fait rien
		ofType(TodoListModule.ActionTypes.LOAD_INIT_TODOS),
		
		// l'action du switchMap est l'objet d'action qui est récupérer dans le ofType
		// action = { type: '[todoList] Load Init Todos' }
		switchMap(action => this.todosService.getTodos()),
		// Dans le switchMap, on éxécute le service qui retournera la réponse dans le map suivant
		// todos = Todo[]
		// Il n'y a plus qu'à renvoyer une action SuccessInitTodos avec les todos en params
		map(todos => new TodoListModule.SuccessInitTodos(todos)),
		
		// Si le resolve n'a pas abouti, il passe dans la fonction catchError
		// Qui renvoie l'action ErrorInitTodos
		catchError(() => of(new TodoListModule.ErrorInitTodos()))
	);

	@Effect() LoadAddTodo$: Observable<TodoListModule.Actions> = this.actions$
	.pipe(
		ofType<TodoListModule.LoadAddTodo>(TodoListModule.ActionTypes.LOAD_ADD_TODO),
		switchMap(action => this.todosService.addTodo(action.payload)),
		map(todo => new TodoListModule.SuccessAddTodo(todo)),
		catchError(() => of(new TodoListModule.ErrorAddTodo()))
	);	
	
	@Effect() LoadDeleteTodo$: Observable<TodoListModule.Actions> = this.actions$
	.pipe(
		ofType<TodoListModule.LoadDeleteTodo>(TodoListModule.ActionTypes.LOAD_DELETE_TODO),
		switchMap(action => this.todosService.deleteTodo(action.payload)),
		map(todo => new TodoListModule.SuccessDeleteTodo(todo)),
		catchError(() => of(new TodoListModule.ErrorDeleteTodo()))
	);	

	@Effect() LoadCompleteTodo$: Observable<TodoListModule.Actions> = this.actions$
	.pipe(
		ofType<TodoListModule.LoadCompleteTodo>(TodoListModule.ActionTypes.LOAD_COMPLETE_TODO),
		switchMap(action => this.todosService.updateTodo(action.payload)),
		map(todo => new TodoListModule.SuccessCompleteTodo(todo)),
		catchError(() => of(new TodoListModule.ErrorCompleteTodo()))
	);

	constructor(
		private todosService: TodosService,
		private actions$: Actions
	) {}

}