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
  MatTooltipModule
} from '@angular/material';

import { ReversePipeModule } from './../../pipes/reverse.module';
import { TodosRoutingModule } from './todos-routing.module';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { TodoDetailsComponent } from './pages/todo-details/todo-details.component';
import { TodosService } from './shared/todos.service';

@NgModule({
  declarations: [TodoListComponent, TodoDetailsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
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
    MatTooltipModule
  ],
  providers: [TodosService]
})
export class TodosModule { }
