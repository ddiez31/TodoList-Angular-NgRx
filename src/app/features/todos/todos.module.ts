import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  MatListModule,
  MatIconModule,
  MatInputModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatButtonModule,
  MatTooltipModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryService } from './shared/in-memory.service';

import { ReversePipeModule } from './../../pipes/reverse.module';
import { TodosRoutingModule } from './todos-routing.module';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { TodoDetailsComponent } from './pages/todo-details/todo-details.component';
import { TodosService } from './shared/todos.service';
import { IsTodosLoadedGuard } from './shared/is-todos-loaded.guard';

@NgModule({
  declarations: [TodoListComponent, TodoDetailsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryService),
    ReactiveFormsModule,
    FormsModule,
    TodosRoutingModule,
    ReversePipeModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTooltipModule,
    MatProgressSpinnerModule
  ],
  providers: [TodosService, IsTodosLoadedGuard]
})
export class TodosModule { }
