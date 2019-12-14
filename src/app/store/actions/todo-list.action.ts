import { Todo } from '../../features/todos/models/todo';

// tslint:disable-next-line: no-namespace
export namespace TodoListModule {

    export enum ActionTypes {
        LOAD_INIT_TODOS = '[todoList] Load Init Todos',
        SUCCESS_INIT_TODOS = '[todoList] Success Init Todos',
        ERROR_INIT_TODOS = '[todoList] Error Init Todos',
        LOAD_ADD_TODO = '[todoList] Load Add Todo',
        SUCCESS_ADD_TODO = '[todoList] Success Add Todo',
        ERROR_ADD_TODO = '[todoList] Error Add Todo',
        LOAD_DELETE_TODO = '[todoList] Load Delete Todo',
        SUCCESS_DELETE_TODO = '[todoList] Success Delete Todo',
        ERROR_DELETE_TODO = '[todoList] Error Delete Todo',
        COMPLETE_TODO = '[todoList] Complete Todo',
        SELECTED_TODO = '[todoList] Selected Todo'
    }

    export  class  LoadInitTodos {
        readonly type = ActionTypes.LOAD_INIT_TODOS;
    }

    export  class  SuccessInitTodos {
        readonly type = ActionTypes.SUCCESS_INIT_TODOS;
        constructor(public payload: Todo[]){}
    }

    export  class  ErrorInitTodos {
        readonly type = ActionTypes.ERROR_INIT_TODOS;
    }

    export class LoadAddTodo {
        readonly type = ActionTypes.LOAD_ADD_TODO;
        constructor(public payload: Todo) { }
    }

    export class SuccessAddTodo {
        readonly type = ActionTypes.SUCCESS_ADD_TODO;
        constructor(public payload: Todo) { }
    }

    export class ErrorAddTodo {
        readonly type = ActionTypes.ERROR_ADD_TODO;
    }

    export class LoadDeleteTodo {
        readonly type = ActionTypes.LOAD_DELETE_TODO;
        constructor(public payload: number) { }
    }

    export class SuccessDeleteTodo {
        readonly type = ActionTypes.SUCCESS_DELETE_TODO;
        constructor(public payload: number) { }
    }

    export class ErrorDeleteTodo {
        readonly type = ActionTypes.ERROR_DELETE_TODO;
    }

    export class CompleteTodo {
        readonly type = ActionTypes.COMPLETE_TODO;
        constructor(public payload: Todo) { }
    }

    export class SelectedTodo {
        readonly type = ActionTypes.SELECTED_TODO;
        constructor(public payload: Todo) { }
    }

    export type Actions =
    LoadInitTodos | SuccessInitTodos | ErrorInitTodos |
    LoadAddTodo | SuccessAddTodo | ErrorAddTodo |
    LoadDeleteTodo | ErrorDeleteTodo | SuccessDeleteTodo |
    CompleteTodo |
    SelectedTodo;
}
