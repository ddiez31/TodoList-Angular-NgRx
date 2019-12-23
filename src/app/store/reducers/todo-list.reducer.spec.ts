// import { TodoListModule } from '@Actions/todo-list.action';

// import { severalTodos, initialState, singleTodo, stateWithData } from './../mock';
// import * as FromReducer from './todo-list.reducer';

// describe('Todos reducer', () => {

//     // Default
//     describe('undefined action', () => {
//         it('should return the default state', () => {
//             const action: any = {} ;
//             const state = FromReducer.todosReducer(undefined, action);

//             expect(state).toBe(initialState);
//         });
//     });

//     // Init Todos
//     describe('LoadInitTodos action', () => {
//         it('should set loading to true', () => {

//             const action: TodoListModule.Actions = new TodoListModule.LoadInitTodos();
//             const state = FromReducer.todosReducer(initialState, {...action});

//             expect(state.loading).toEqual(true);
//             expect(state.data).toEqual([]);
//         });
//     });

//     describe('SuccessInitTodos action', () => {
//         it('should map an array to entities', () => {
//             const entities = {
//                 1 : severalTodos[0],
//                 2 : severalTodos[1],
//                 3 : severalTodos[2],
//                 4 : severalTodos[3],
//             };

//             const action: TodoListModule.Actions =
//                 new TodoListModule.SuccessInitTodos(severalTodos);
//             const state = FromReducer.todosReducer(initialState, {...action});

//             expect(state.loading).toEqual(false);
//             expect(state.loaded).toEqual(true);
//             expect(state.data).toEqual(entities);
//         });
//     });

//     // Create Todo
//     describe('LoadAddTodo action', () => {
//         it('should set loading to true', () => {

//             const action: TodoListModule.Actions = new TodoListModule.LoadAddTodo(singleTodo);
//             const state = FromReducer.todosReducer(initialState, {...action});

//             expect(state.loading).toEqual(true);
//             expect(state.data).toEqual([]);
//         });
//     });

//     describe('SuccessAddTodo action', () => {
//         it('should add an entitie', () => {

//             const action: TodoListModule.Actions = new TodoListModule.SuccessAddTodo(singleTodo);
//             const state = FromReducer.todosReducer(initialState, {...action});

//             const entities = {
//                 2 : severalTodos[1]
//             };

//             expect(state.loading).toEqual(false);
//             expect(state.data).toEqual(entities);
//         });
//     });

//     // Select Todo
//     describe('SelectedTodo action', () => {
//         it('should set selectedTodo with action payload', () => {

//             const action: TodoListModule.Actions = new TodoListModule.SelectedTodo(singleTodo);
//             const state = FromReducer.todosReducer(initialState, {...action});

//             expect(state.selectedTodo).toEqual(singleTodo);
//         });
//     });

//     // Update Todo
//     describe('LoadCompleteTodo action', () => {
//         it('should set loading to true', () => {

//             const action: TodoListModule.Actions = new TodoListModule.LoadCompleteTodo(singleTodo);
//             const state = FromReducer.todosReducer(initialState, {...action});

//             expect(state.loading).toEqual(true);
//         });
//     });

//     describe('SuccessCompleteTodo action', () => {
//         it('should patch an entities object with the action payload', () => {

//             const updateValue = { id: 4, title: 'new value for testing 4', completed: true };

//             const action: TodoListModule.Actions =
//                 new TodoListModule.SuccessCompleteTodo(updateValue);

//             const entities = {
//                 1 : severalTodos[0],
//                 2 : severalTodos[1],
//                 3 : severalTodos[2],
//                 4 : updateValue,
//             };

//             const state = FromReducer.todosReducer(stateWithData, {...action});
//             expect(state.loading).toEqual(false);
//             expect(state.data).toEqual(entities);
//         });
//     });

//     // Delete Todo
//     describe('LoadDeleteTodo action', () => {
//         it('should set loading to true', () => {
//             const id = 2;
//             const action: TodoListModule.Actions = new TodoListModule.LoadDeleteTodo(id);
//             const state = FromReducer.todosReducer(initialState, {...action});

//             expect(state.loading).toEqual(true);
//         });
//     });

//     describe('SuccessDeleteTodo action', () => {
//         it('should remove one todo', () => {
//             const id = 2;
//             const action: TodoListModule.Actions =
//                 new TodoListModule.SuccessDeleteTodo(id);
//             const state = FromReducer.todosReducer(stateWithData, {...action});

//             const entities = {
//                 1 : severalTodos[0],
//                 3 : severalTodos[2],
//                 4 : severalTodos[3]
//             };

//             expect(state.data).toEqual(entities);
//             expect(state.loading).toEqual(false);
//         });
//     });
// });
