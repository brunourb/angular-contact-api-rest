import { Component, OnInit } from '@angular/core';

import { AlbumsService } from './../albums.service';
import { Albums } from '../albums';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.css']
})
export class AlbumsListComponent implements OnInit {

  //albums: []; //criar um vetor de albums;
  albums : Albums[];

  constructor(private service : AlbumsService) { }

  ngOnInit() {
    this.getAll();
    console.log("Debug no projeto angular");
  }

  public getAll(){
    this.service.getAll().subscribe(album => {
      this.albums = album;
    });


    //this.albums.forEach(s=>console.log(s));
  }

}
