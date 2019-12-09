import { Todo } from '../../features/todos/models/todo';

export namespace TodoListModule {

    export enum ActionTypes {
        INIT_TODOS = '[todoList] Init Todos',
        ADD_TODO = '[todoList] Add Todo',
        DELETE_TODO = '[todoList] Delete Todo',
        COMPLETE_TODO = '[todoList] Complete Todo',
        SELECTED_TODO = '[todoList] Selected Todo'
    }

    export class InitTodos {
        readonly type = ActionTypes.INIT_TODOS;
        constructor(public payload: Todo[]) { }
    }

    export class AddTodo {
        readonly type = ActionTypes.ADD_TODO;
        constructor(public payload: Todo) { }
    }

    export class DeleteTodo {
        readonly type = ActionTypes.DELETE_TODO;
        constructor(public payload: number) { }
    }

    export class CompleteTodo {
        readonly type = ActionTypes.COMPLETE_TODO;
        constructor(public payload: Todo) { }
    }

    export class SelectedTodo {
        readonly type = ActionTypes.SELECTED_TODO;
        constructor(public payload: Todo) { }
    }

    export type Actions = InitTodos | AddTodo | DeleteTodo | CompleteTodo | SelectedTodo;
}
