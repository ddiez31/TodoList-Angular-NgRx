import { createSelector } from '@ngrx/store';
import { AppState } from '@Store';

/**
 * Get state of todos
 */
export const selectedTodoListState$ = (state: AppState) => state.todos;

/**
 * Get data state of todos
 */
export const selectedTodos$ = createSelector(selectedTodoListState$, (todos) =>
    todos.data.filter((todo) => todo.completed).concat(todos.data.filter((todo) => !todo.completed))
);

/**
 * Get is loading status
 */
export const selectTodosLoading$ = createSelector(selectedTodoListState$, (todos) => todos.loading);

/**
 * Get is loaded status
 */
export const selectTodosLoaded$ = createSelector(selectedTodoListState$, (todos) => todos.loaded);
