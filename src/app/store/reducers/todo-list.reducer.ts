import { TodoListModule } from '@Actions/todo-list.action';
import { TodoListState } from './../../todos/models/todo-list-state';
import { todosMock } from './../../todos/mocks/todo-list';

// les valeurs par défaut du state
const initialState: TodoListState = {
    data: [],
    loading: false,
    loaded: false
};

// la fonction reducer de la todo
export const todosReducer = (
    state: TodoListState = initialState,
    action: TodoListModule.Actions
): TodoListState => {

    switch (action.type) {
        // L'action de InitTodos
        case TodoListModule.ActionTypes.INIT_TODOS:
            return {
                ...state,
                data: [
                    ...todosMock // Injecte le mock
                ]
            };
        // action AddTodo
        case TodoListModule.ActionTypes.ADD_TODO:
            return {
                ...state,
                data: [
                    ...state.data,
                    action.payload
                ]
            };
        // action DeleteTodo
        case TodoListModule.ActionTypes.DELETE_TODO:
            return {
                ...state,
                data: state.data.filter(todo => todo.id !== action.payload)
            };
        // action CompleteTodo
        case TodoListModule.ActionTypes.COMPLETE_TODO:
            return {
                ...state,
                data: state.data
                    .map(todo => todo.id === action.payload.id ? action.payload : todo)
            };

        default:
            return state;
    }
}