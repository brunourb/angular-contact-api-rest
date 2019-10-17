import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsDetailComponent } from './posts-detail/posts-detail.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostsEditComponent } from './posts-edit/posts-edit.component';

@NgModule({
  declarations: [PostsDetailComponent, PostsListComponent, PostsEditComponent],
  imports: [
    CommonModule
  ]
})
export class PostsModule { }
