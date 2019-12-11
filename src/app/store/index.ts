import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
} from '@ngrx/store';
import { environment } from '@Env';
import { InjectionToken } from '@angular/core';

import { todosReducer } from '@Reducers/todo-list.reducer';
import { TodoListEffects } from '@Effects/todo-list.effect';
import { TodoListState } from '../features/todos/models/todo-list-state';

// Le root reducer
export const reducers: ActionReducerMap<AppState> = {
    todos: todosReducer
};

export interface AppState {
    todos: TodoListState;
}

export const appEffects = [TodoListEffects];

// Nécéssaire pour l'AOT
export const getReducers = () => {
    return reducers;
};

// Nécéssaire pour l'AOT
export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<AppState>>('Registered Reducers');

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
