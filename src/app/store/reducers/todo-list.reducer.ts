import { TodoListModule } from '../actions/todo-list.action';
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

        default:
            return state;
    }
}