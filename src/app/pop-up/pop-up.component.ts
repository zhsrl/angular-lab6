import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { AlbumsService } from '../albums.service';



@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {
  newAlbum: string;
  albums: Album[] =[];
  

  constructor(private service: AlbumsService) {
    this.newAlbum = '';
   }

  ngOnInit(): void {
  }

  addAlbum(){
    const album = {
      title: this.newAlbum
    }
    this.service.addAlbum(album as Album).subscribe((album) => {
      this.albums.push(album);
      this.newAlbum = '';
      console.log(album);
    })
  }



}
