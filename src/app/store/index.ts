// Modules
import {
    ActionReducerMap,
    MetaReducer
} from '@ngrx/store';
import { InjectionToken } from '@angular/core';

// Services
import { environment } from '@Env';
import { todosReducer } from '@Reducers/todo-list.reducer';
import { TodoListEffects } from '@Effects/todo-list.effect';
import { TodoListState } from '../features/todos/models/todo-list-state';

// Root reducer
export const reducers: ActionReducerMap<AppState> = {
    todos: todosReducer
};

export interface AppState {
    todos: TodoListState;
}

export const appEffects = [TodoListEffects];

// Required for AOT
export const getReducers = () => {
    return reducers;
};

// Required for AOT
export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<AppState>>('Registered Reducers');

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
