import { Todo } from '../features/todos/models/todo';
import * as fromReducer from '@Reducers/todo-list.reducer';

export const { initialState } = fromReducer;

export const severalTodos: Todo[] = [
    { id: 1, title: 'for testing 1', completed: true, details: 'details for testing 1' },
    { id: 2, title: 'for testing 2', completed: false, details: 'details for testing 2' },
    { id: 3, title: 'for testing 3', completed: false, details: null },
    { id: 4, title: 'for testing 4', completed: true, details: null }
];

export const stateWithData = {
    ...initialState,
    ids: [1, 2, 3, 4],
    loaded: true,
    entities: {
        1: severalTodos[0],
        2: severalTodos[1],
        3: severalTodos[2],
        4: severalTodos[3],
    }
};

export const singleTodo: Todo = { id: 2, title: 'for testing 2', completed: false, details: 'details for testing 2' };
