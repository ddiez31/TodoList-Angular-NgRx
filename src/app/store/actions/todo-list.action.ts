import { Todo } from '../../features/todos/models/todo';

// tslint:disable-next-line: no-namespace
export namespace TodoListModule {

    export enum ActionTypes {
        LOAD_INIT_TODOS = '[todoList] Load Init Todos',
        SUCCESS_INIT_TODOS = '[todoList] Success Init Todos',
        LOAD_ADD_TODO = '[todoList] Load Add Todo',
        SUCCESS_ADD_TODO = '[todoList] Success Add Todo',
        LOAD_DELETE_TODO = '[todoList] Load Delete Todo',
        SUCCESS_DELETE_TODO = '[todoList] Success Delete Todo',
        LOAD_COMPLETE_TODO = '[todoList] Load Complete Todo',
        SUCCESS_COMPLETE_TODO = '[todoList] Success Complete Todo',
        ERROR_LOAD_ACTION = '[todoList] Error Load Action',
        SELECTED_TODO = '[todoList] Selected Todo'
    }

    export  class  LoadInitTodos {
        readonly type = ActionTypes.LOAD_INIT_TODOS;
    }

    export  class  SuccessInitTodos {
        readonly type = ActionTypes.SUCCESS_INIT_TODOS;
        constructor(public payload: Todo[]) { }
    }

    export class LoadAddTodo {
        readonly type = ActionTypes.LOAD_ADD_TODO;
        constructor(public payload: Todo) { }
    }

    export class SuccessAddTodo {
        readonly type = ActionTypes.SUCCESS_ADD_TODO;
        constructor(public payload: Todo) { }
    }

    export class LoadDeleteTodo {
        readonly type = ActionTypes.LOAD_DELETE_TODO;
        constructor(public payload: number) { }
    }

    export class SuccessDeleteTodo {
        readonly type = ActionTypes.SUCCESS_DELETE_TODO;
        constructor(public payload: number) { }
    }

    export class LoadCompleteTodo {
        readonly type = ActionTypes.LOAD_COMPLETE_TODO;
        constructor(public payload: Todo) { }
    }

    export class SuccessCompleteTodo {
        readonly type = ActionTypes.SUCCESS_COMPLETE_TODO;
        constructor(public payload: Todo) { }
    }

    export class ErrorLoadAction {
        readonly type = ActionTypes.ERROR_LOAD_ACTION;
    }

    export class SelectedTodo {
        readonly type = ActionTypes.SELECTED_TODO;
        constructor(public payload: Todo) { }
    }

    export type Actions =
        LoadInitTodos | SuccessInitTodos |
        LoadAddTodo | SuccessAddTodo |
        LoadDeleteTodo | SuccessDeleteTodo |
        LoadCompleteTodo | SuccessCompleteTodo |
        ErrorLoadAction |
        SelectedTodo;
}
