import { createSelector } from '@ngrx/store';
import { AppState } from '@Store';

// La première fonction amène vers le state todos
export const selectedTodoListState$ = (state: AppState) =>  state.todos;

// Et à partir de celle-ci, on créer une autre fonction qui renverra data
export const selectedTodos$ = createSelector(selectedTodoListState$, (todos) =>
    todos.data.filter((todo) => todo.completed).concat(todos.data.filter((todo) => !todo.completed))
);

export const selectTodosLoading$ = createSelector(selectedTodoListState$, (todos) => todos.loading);

export const selectTodosLoaded$ = createSelector(selectedTodoListState$, (todos) => todos.loaded);
