// import { TodoListModule } from '@Actions/todo-list.action';
// import { TestBed } from '@angular/core/testing';
// import { Store, StoreModule } from '@ngrx/store';
// import { AppState, reducers } from '@Store';

// import { TodoListState } from './../../features/todos/models/todo-list-state';
// import { Todo } from './../../features/todos/models/todo';
// import { severalTodos, initialState, singleTodo, stateWithData } from './../mock';
// import * as selectors from './todo-list.selector';

// describe('Todo selectors', () => {
//     let store: Store<AppState>;

//     beforeEach(() => {
//         TestBed.configureTestingModule({
//             imports: [
//                 StoreModule.forRoot(reducers)
//             ]
//         });
//         store = TestBed.get(Store);
//         spyOn(store, 'dispatch').and.callThrough();
//     });

//     describe('selectedTodoListState$', () => {
//         it('it should return todos state', () => {
//             let result: TodoListState;

//             store
//                 .select(selectors.selectedTodoListState$)
//                 .subscribe(value => {
//                     result = value;
//                 });

//             expect(result).toEqual(initialState);

//             store.dispatch(new TodoListModule.SuccessInitTodos(severalTodos));

//             expect(result).toEqual(stateWithData);
//         });
//     });

//     describe('selectedTodos$', () => {
//         it('it should return selectedTodo', () => {
//             let result: Todo[];

//             store
//                 .select(selectors.selectedTodos$)
//                 .subscribe(value => {
//                     result = value;
//                 });

//             expect(result).toEqual(undefined);

//             store.dispatch(new TodoListModule.SelectedTodo(singleTodo));

//             expect(result).toEqual(singleTodo);
//         });
//     });

//     describe('selectTodosLoaded$', () => {
//         it('it should return loaded props of todos', () => {
//             let result: boolean;

//             store
//                 .select(selectors.selectTodosLoaded$)
//                 .subscribe(value => {
//                     result = value;
//                 });

//             expect(result).toEqual(false);

//             store.dispatch(new TodoListModule.SuccessInitTodos(severalTodos));

//             expect(result).toEqual(true);
//         });
//     });
// });
