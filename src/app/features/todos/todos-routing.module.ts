import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { TodoDetailsComponent } from './pages/todo-details/todo-details.component';
import { IsTodosLoadedGuard } from './shared/is-todos-loaded.guard';

const routes: Routes = [
  {
    path: 'todo-list',
    component: TodoListComponent,
    canActivate: [IsTodosLoadedGuard]
  },
  {
    path: 'todo-details/:todoId',
    component: TodoDetailsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class TodosRoutingModule { }
