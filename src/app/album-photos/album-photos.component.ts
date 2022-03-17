import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AlbumsService } from '../albums.service';
import { Photos } from '../photos';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {

  photos!: Photos[];

  constructor(private service: AlbumsService, private route: ActivatedRoute, private location: Location) {
   }

  ngOnInit(): void {
    this.getPhotos();
  }

  getPhotos(){
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('albumId'));
      this.service.getAlbumPhotos(id).subscribe((photos: Photos[]) => {
        this.photos = photos;
        console.log(photos);
        console.log('end');
      })
    })
  }

  toBack(){
    this.location.back();
  }

}
