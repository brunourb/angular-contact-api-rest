import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsDetailComponent } from './comments-detail/comments-detail.component';
import { CommentsEditComponent } from './comments-edit/comments-edit.component';
import { CommentsListComponent } from './comments-list/comments-list.component';

@NgModule({
  declarations: [CommentsDetailComponent, CommentsEditComponent, CommentsListComponent],
  imports: [
    CommonModule
  ]
})
export class CommentsModule { }
