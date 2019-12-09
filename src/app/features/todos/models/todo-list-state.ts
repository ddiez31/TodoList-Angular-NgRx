import { Todo } from './todo';

export interface TodoListState {
	data: Todo[];
	selectedTodo: Todo;
	loading: boolean;
	loaded: boolean;
}
