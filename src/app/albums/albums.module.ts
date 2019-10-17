import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule }    from '@angular/common/http';

import { GenericModule } from './../generic/generic.module';
import { AlbumsDetailComponent } from './albums-detail/albums-detail.component';
import { AlbumsListComponent } from './albums-list/albums-list.component';
import { AlbumsEditComponent } from './albums-edit/albums-edit.component';

@NgModule({
  declarations: [AlbumsDetailComponent, AlbumsListComponent, AlbumsEditComponent],
  imports: [
    CommonModule,
    GenericModule,
    HttpClientModule
  ],
  exports: [AlbumsDetailComponent, AlbumsListComponent, AlbumsEditComponent]
})
export class AlbumsModule { }
