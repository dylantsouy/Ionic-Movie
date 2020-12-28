import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

// [頻道資料維護作業]
export class GetService {


  constructor(private http: HttpClient) { }

  getGenres(): Observable<HttpResponse<any>> {
    return this.http.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=0f79586eb9d92afa2b7266f7928b055c`, { observe: 'response' });
  }

  getByGeneres(id: number, page: number): Observable<HttpResponse<any>> {
    return this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=0f79586eb9d92afa2b7266f7928b055c&sort_by=popularity.desc&page=${page}&with_genres=${id}`, { observe: 'response' });
  }
}
