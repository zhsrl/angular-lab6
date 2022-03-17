import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Album } from './album';
import { Photos } from './photos';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  URL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Album[]>{
    return this.http.get<Album[]>(`${this.URL}/albums`);
  }

  getAlbum(id: number): Observable<Album>{
    return this.http.get<Album>(`${this.URL}/albums/${id}`);
  }

  getAlbumPhotos(id: number): Observable<Photos[]>{
    return this.http.get<Photos[]>(`${this.URL}/albums/${id}/photos`);
  }

  updateAlbum(album: Album): Observable<Album>{
    return this.http.put<Album>(`${this.URL}/albums/${album.id}`, album);
  }

  deleteAlbum(id: number): Observable<any>{
    return this.http.delete(`${this.URL}/${id}`);
  }

  addAlbum(album: Album): Observable<Album>{
    return this.http.post<Album>(`${this.URL}/albums`, album);
  }



}
