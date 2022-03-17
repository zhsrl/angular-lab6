import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Album } from '../album';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums!: Album[];
  newAlbum: string;

  constructor(private service: AlbumsService) {
    this.newAlbum = '';
   }

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums(){
    this.service.getAlbums().subscribe((albums: Album[]) => {
      this.albums = albums;
      console.log(albums);
    })
  }

  deleteAlbum(id: number){
    this.albums = this.albums.filter(selectedAlbum => selectedAlbum.id !== id);
    this.service.deleteAlbum(id).subscribe(() => {
      console.log('DELETED', id);
    })
  }

  addAlbum(){
    const album = {
      title: this.newAlbum
    } as Album
    this.service.addAlbum(album).subscribe((album) => {
      console.log(album);
      this.albums.unshift(album);
      this.newAlbum = '';
      
    })
  }

}
