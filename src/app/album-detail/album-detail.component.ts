import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Album } from '../album';
import { Location } from '@angular/common';
import { AlbumsService } from '../albums.service';


@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {

  album!: Album;

  albums: Album[] = [];

  constructor(private router: Router, private route: ActivatedRoute, private service: AlbumsService, private location: Location) {
   }

  ngOnInit(): void {
    this.getAlbum();
  }

  getAlbum(){
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.service.getAlbum(id).subscribe((album) => {
        this.album = album;
      })
    })
  }

  toBack(){
    this.location.back();
  }

  viewPhoto(id: number){
    this.router.navigateByUrl(`'/albums/' ${id} '/photos'`)
  }

  updateAlbum(){
    this.service.updateAlbum(this.album).subscribe((album) => {
      console.log(album);
    })
  }


}
