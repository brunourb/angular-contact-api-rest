import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosListComponent } from './photos-list/photos-list.component';
import { PhotosEditComponent } from './photos-edit/photos-edit.component';
import { PhotosDetailComponent } from './photos-detail/photos-detail.component';

@NgModule({
  declarations: [PhotosListComponent, PhotosEditComponent, PhotosDetailComponent],
  imports: [
    CommonModule
  ]
})
export class PhotosModule { }
