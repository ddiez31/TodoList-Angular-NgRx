import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Actions } from '@ngrx/effects';
import { cold, hot } from 'jasmine-marbles';
import { Observable, empty, of } from 'rxjs';

import { TodosService } from './../../features/todos/shared/todos.service';
import * as fromActions from '../actions/todo-list.action';
import * as fromEffects from '../effects/todo-list.effect';
import { severalTodos, singleTodo } from './../mock';

export class TestActions extends Actions {
    constructor() {
        // tslint:disable-next-line: deprecation
        super(empty());
    }
    set stream(source: Observable<any>) {
        // tslint:disable-next-line: deprecation
        this.source = source;
    }
}

export function getActions() {
    return new TestActions();
}


describe('Testing Effects', () => {
    let actions$: TestActions;
    let service: TodosService;
    let effects: fromEffects.TodoListEffects;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                TodosService,
                fromEffects.TodoListEffects,
                { provide: Actions, useFactory: getActions }
            ]
        });
        actions$ = TestBed.get(Actions);
        service = TestBed.get(TodosService);
        effects = TestBed.get(fromEffects.TodoListEffects);

        spyOn(service, 'getTodos').and.returnValue(of(severalTodos));
        spyOn(service, 'addTodo').and.returnValue(of(singleTodo));
        spyOn(service, 'deleteTodo').and.returnValue(of(singleTodo.id));
        spyOn(service, 'updateTodo').and.returnValue(of(singleTodo));
    });

    describe('LoadTodos$', () => {
        it('should return a collection of todos', () => {
            const action = new fromActions.TodoListModule.LoadInitTodos();
            const completion = new fromActions.TodoListModule.SuccessInitTodos(severalTodos);

            actions$.stream = hot('-a', { a: action });
            const expected = cold('-b', { b: completion });

            expect(effects.LoadTodos$).toBeObservable(expected);

        });
    });

    describe('LoadAddTodo$', () => {
        it('should return a todo item created', () => {
            const action = new fromActions.TodoListModule.LoadAddTodo(singleTodo);
            const completion = new fromActions.TodoListModule.SuccessAddTodo(singleTodo);

            actions$.stream = hot('-a', { a: action });
            const expected = cold('-b', { b: completion });

            expect(effects.LoadAddTodo$).toBeObservable(expected);

        });
    });

    describe('LoadDeleteTodo$', () => {
        it('should return a id of a todo suppressed', () => {
            const action = new fromActions.TodoListModule.LoadDeleteTodo(singleTodo.id);
            const completion = new fromActions.TodoListModule.SuccessDeleteTodo(singleTodo.id);

            actions$.stream = hot('-a', { a: action });
            const expected = cold('-b', { b: completion });

            expect(effects.LoadDeleteTodo$).toBeObservable(expected);

        });
    });

    describe('LoadCompleteTodo$', () => {
        it('should return a todo completed', () => {
            const action = new fromActions.TodoListModule.LoadCompleteTodo(singleTodo);
            const completion = new fromActions.TodoListModule.SuccessCompleteTodo(singleTodo);

            actions$.stream = hot('-a', { a: action });
            const expected = cold('-b', { b: completion });

            expect(effects.LoadCompleteTodo$).toBeObservable(expected);

        });
    });
});
