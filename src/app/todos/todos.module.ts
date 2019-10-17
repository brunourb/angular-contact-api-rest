import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosEditComponent } from './todos-edit/todos-edit.component';
import { TodosListComponent } from './todos-list/todos-list.component';
import { TodosDetailComponent } from './todos-detail/todos-detail.component';

@NgModule({
  declarations: [TodosEditComponent, TodosListComponent, TodosDetailComponent],
  imports: [
    CommonModule
  ]
})
export class TodosModule { }
