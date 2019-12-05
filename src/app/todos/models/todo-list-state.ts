import { Todo } from './todo';

export interface TodoListState {
	data: Todo[];
	loading: boolean;
	loaded: boolean;
}
