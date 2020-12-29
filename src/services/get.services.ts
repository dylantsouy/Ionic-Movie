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
  getGenresTv(): Observable<HttpResponse<any>> {
    return this.http.get(`https://api.themoviedb.org/3/genre/tv/list?api_key=0f79586eb9d92afa2b7266f7928b055c`, { observe: 'response' });
  }

  getByGeneres(id: number, page: number): Observable<HttpResponse<any>> {
    return this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=0f79586eb9d92afa2b7266f7928b055c&sort_by=popularity.desc&page=${page}&with_genres=${id}`, { observe: 'response' });
  }
  getByGeneresTv(id: number, page: number): Observable<HttpResponse<any>> {
    return this.http.get(`https://api.themoviedb.org/3/discover/tv?api_key=0f79586eb9d92afa2b7266f7928b055c&sort_by=popularity.desc&page=${page}&with_genres=${id}`, { observe: 'response' });
  }

  getCast(id: string): Observable<HttpResponse<any>> {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=0f79586eb9d92afa2b7266f7928b055c`, { observe: 'response' });
  }
  getReview(id: string): Observable<HttpResponse<any>> {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=0f79586eb9d92afa2b7266f7928b055c`, { observe: 'response' });
  }

  getCastDetail(id: string): Observable<HttpResponse<any>> {
    return this.http.get(`https://api.themoviedb.org/3/person/${id}?api_key=0f79586eb9d92afa2b7266f7928b055c&language=en-US`, { observe: 'response' });
  }
  getCastMovie(id: string): Observable<HttpResponse<any>> {
    return this.http.get(`https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=0f79586eb9d92afa2b7266f7928b055c`, { observe: 'response' });
  }
}
