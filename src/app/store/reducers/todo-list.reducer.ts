import { TodoListModule } from '@Actions/todo-list.action';
import { TodoListState } from '../../features/todos/models/todo-list-state';

// les valeurs par défaut du state
const initialState: TodoListState = {
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
        case TodoListModule.ActionTypes.INIT_TODOS:
            return {
                ...state,
                data: [
                    ...action.payload
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
        // action SelectedTodo
        case TodoListModule.ActionTypes.SELECTED_TODO:
            return {
                ...state,
                selectedTodo: action.payload
            };

        default:
            return state;
    }
}