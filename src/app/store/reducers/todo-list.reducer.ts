import { TodoListModule } from '@Actions/todo-list.action';
import { TodoListState } from '../../features/todos/models/todo-list-state';

const initialState: TodoListState = {
    data: [],
    selectedTodo: null,
    loading: false,
    loaded: false
};

export const todosReducer = (
    state: TodoListState = initialState,
    action: TodoListModule.Actions
): TodoListState => {

    switch (action.type) {
        // Action InitTodos
        case TodoListModule.ActionTypes.LOAD_INIT_TODOS:
            return {
                ...state,
                loading: true
            };

        case TodoListModule.ActionTypes.SUCCESS_INIT_TODOS:
            return {
                ...state,
                loading: false,
                loaded: true,
                data: action.payload
            };

        // Action AddTodo
        case TodoListModule.ActionTypes.LOAD_ADD_TODO:
            return {
                ...state,
                loading: true
            };

        case TodoListModule.ActionTypes.SUCCESS_ADD_TODO:
            return {
                ...state,
                loading: false,
                loaded: true,
                data: [
                    ...state.data,
                    action.payload
                ]
            };

        // Action DeleteTodo
        case TodoListModule.ActionTypes.LOAD_DELETE_TODO:
            return {
                ...state,
                loading: true
            };

        case TodoListModule.ActionTypes.SUCCESS_DELETE_TODO:
            return {
                ...state,
                loading: false,
                loaded: true,
                data: state.data.filter(todo => todo.id !== action.payload)
            };

        // Action CompleteTodo
        case TodoListModule.ActionTypes.LOAD_COMPLETE_TODO:
            return {
                ...state,
                loading: true
            };

        case TodoListModule.ActionTypes.SUCCESS_COMPLETE_TODO:
            return {
                ...state,
                loading: false,
                loaded: true,
                data: state.data
                    .map(todo => todo.id === action.payload.id ? action.payload : todo)
            };

        // Action if error
        case TodoListModule.ActionTypes.ERROR_LOAD_ACTION:
            return {
                ...state,
                loading: false
            };

        // Action SelectedTodo
        case TodoListModule.ActionTypes.SELECTED_TODO:
            return {
                ...state,
                selectedTodo: action.payload
            };

        default:
            return state;
    }
};
