import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersEditComponent } from './users-edit/users-edit.component';

@NgModule({
  declarations: [UsersDetailComponent, UsersListComponent, UsersEditComponent],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
