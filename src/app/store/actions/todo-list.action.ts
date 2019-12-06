import { Todo } from './../../todos/models/todo';

// tslint:disable-next-line: no-namespace
export namespace TodoListModule {

    export enum ActionTypes {
        INIT_TODOS = '[todoList] Init Todos',
        ADD_TODO = '[todoList] Add Todo',
        DELETE_TODO = '[todoList] Delete Todo'
    }

    export class InitTodos {
        readonly type = ActionTypes.INIT_TODOS;
    }

    export class AddTodo {
        readonly type = ActionTypes.ADD_TODO;
        constructor(public payload: Todo) { }
    }

    export class DeleteTodo {
        readonly type = ActionTypes.DELETE_TODO;
        constructor(public payload: number) { }
    }

    export type Actions = InitTodos | AddTodo | DeleteTodo;
}
