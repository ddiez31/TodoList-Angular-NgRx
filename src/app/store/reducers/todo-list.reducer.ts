import { TodoListModule } from '@Actions/todo-list.action';
import { TodoListState } from '../../features/todos/models/todo-list-state';

// les valeurs par défaut du state
export const initialState: TodoListState = {
    data: [],
    selectedTodo: null,
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
        case TodoListModule.ActionTypes.LOAD_INIT_TODOS:
            return {
                ...state,
                loading: true
            };

        case TodoListModule.ActionTypes.SUCCESS_INIT_TODOS:
            // Bind state.data avec les todos du server
            // Passe le loaded a true et le loading a false
            return {
                ...state,
                loading: false,
                loaded: true,
                data: action.payload
            };

        // action AddTodo
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

        // action DeleteTodo
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

        // action CompleteTodo
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

        case TodoListModule.ActionTypes.ERROR_LOAD_ACTION:
            return {
                ...state,
                loading: false
            };

        // action SelectedTodo
        case TodoListModule.ActionTypes.SELECTED_TODO:
            return {
                ...state,
                selectedTodo: action.payload
            };

        default:
            return state;
    }
};
