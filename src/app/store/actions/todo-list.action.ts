import { Todo } from './../../todos/models/todo';

// tslint:disable-next-line: no-namespace
export namespace TodoListModule {

    export enum ActionTypes {
        INIT_TODOS = '[todoList] Init Todos',
        ADD_TODO = '[todoList] Add Todo',
    }

    export class InitTodos {
        readonly type = ActionTypes.INIT_TODOS;
    }

    export class AddTodo {
        readonly type = ActionTypes.ADD_TODO;
        constructor(public payload: Todo) { }
    }

    export type Actions = InitTodos | AddTodo;
}
