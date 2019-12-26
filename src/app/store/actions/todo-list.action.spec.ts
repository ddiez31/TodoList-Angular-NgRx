import { Todo } from 'src/app/features/todos/models/todo';
import { TodoListModule } from '@Actions/todo-list.action';

describe('Todos actions', () => {

    describe('Init Todos Actions', () => {
        describe('LoadInitTodos', () => {
            it('should create an action', () => {
                const action = new TodoListModule.LoadInitTodos();
                // Avoid error message { ...action }
                expect({ ...action }).toEqual({
                    type: TodoListModule.ActionTypes.LOAD_INIT_TODOS
                });
            });
        });

        describe('SuccessInitTodos', () => {
            it('should create an action', () => {
                const payload: Todo[] = [
                    { id: 1, title: 'for testing 1', completed: true }
                ];
                const action = new TodoListModule.SuccessInitTodos(payload);
                // Avoid error message { ...action }
                expect({ ...action }).toEqual({
                    type: TodoListModule.ActionTypes.SUCCESS_INIT_TODOS,
                    payload
                });
            });
        });
    });

    describe('Add Todo Actions', () => {
        describe('LoadAddTodo', () => {
            it('should create an action', () => {

                const payload: Todo = { id: 1, title: 'for testing 1', completed: true, details: 'details for testing 1' };
                const action = new TodoListModule.LoadAddTodo(payload);

                expect({ ...action }).toEqual({
                    type: TodoListModule.ActionTypes.LOAD_ADD_TODO,
                    payload
                });
            });
        });

        describe('SuccessAddTodo', () => {
            it('should create an action', () => {

                const payload: Todo = { id: 1, title: 'for testing 1', completed: true, details: 'details for testing 1' };
                const action = new TodoListModule.SuccessAddTodo(payload);

                expect({ ...action }).toEqual({
                    type: TodoListModule.ActionTypes.SUCCESS_ADD_TODO,
                    payload
                });
            });
        });
    });

    describe('Select Todo Action', () => {
        describe('SelectedTodo', () => {
            it('should create an action', () => {

                const payload: Todo = { id: 1, title: 'for testing 1', completed: true, details: 'details for testing 1' };
                const action = new TodoListModule.SelectedTodo(payload);

                expect({ ...action }).toEqual({
                    type: TodoListModule.ActionTypes.SELECTED_TODO,
                    payload
                });
            });
        });
    });

    describe('Update Todo Actions', () => {
        describe('LoadCompleteTodo', () => {
            it('should create an action', () => {

                const payload: Todo = { id: 1, title: 'for testing 1', completed: true, details: 'details for testing 1' };
                const action = new TodoListModule.LoadCompleteTodo(payload);

                expect({ ...action }).toEqual({
                    type: TodoListModule.ActionTypes.LOAD_COMPLETE_TODO,
                    payload
                });
            });
        });

        describe('SuccessCompleteTodo', () => {
            it('should create an action', () => {

                const payload: Todo = { id: 1, title: 'for testing 1', completed: true, details: 'details for testing 1' };
                const action = new TodoListModule.SuccessCompleteTodo(payload);

                expect({ ...action }).toEqual({
                    type: TodoListModule.ActionTypes.SUCCESS_COMPLETE_TODO,
                    payload
                });
            });
        });
    });

    describe('Delete Todo Actions', () => {
        describe('LoadDeleteTodo', () => {
            it('should create an action', () => {

                const payload = 1;
                const action = new TodoListModule.LoadDeleteTodo(payload);

                expect({ ...action }).toEqual({
                    type: TodoListModule.ActionTypes.LOAD_DELETE_TODO,
                    payload
                });
            });
        });

        describe('SuccessDeleteTodo', () => {
            it('should create an action', () => {

                const payload = 1;
                const action = new TodoListModule.SuccessDeleteTodo(payload);

                expect({ ...action }).toEqual({
                    type: TodoListModule.ActionTypes.SUCCESS_DELETE_TODO,
                    payload
                });
            });
        });
    });
});
