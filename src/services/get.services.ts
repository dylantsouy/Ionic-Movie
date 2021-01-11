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

  getHot(page: number): Observable<HttpResponse<any>> {
    return this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=0f79586eb9d92afa2b7266f7928b055c&page=${page}`, { observe: 'response' });
  }

  getHotTv(page: number): Observable<HttpResponse<any>> {
    return this.http.get(`https://api.themoviedb.org/3/tv/popular?api_key=0f79586eb9d92afa2b7266f7928b055c&page=${page}`, { observe: 'response' });
  }

  getUpcoming(page: number): Observable<HttpResponse<any>> {
    return this.http.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=0f79586eb9d92afa2b7266f7928b055c&page=${page}`, { observe: 'response' });
  }

  getNewReleaseTv(page: number): Observable<HttpResponse<any>> {
    return this.http.get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=0f79586eb9d92afa2b7266f7928b055c&page=${page}`, { observe: 'response' });
  }

  getNowPlaying(page: number): Observable<HttpResponse<any>> {
    return this.http.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=0f79586eb9d92afa2b7266f7928b055c&page=${page}`, { observe: 'response' });
  }

  getNowPlayingTv(page: number): Observable<HttpResponse<any>> {
    return this.http.get(`https://api.themoviedb.org/3/tv/airing_today?api_key=0f79586eb9d92afa2b7266f7928b055c&page=${page}`, { observe: 'response' });
  }

  getTopRate(page: number): Observable<HttpResponse<any>> {
    return this.http.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=0f79586eb9d92afa2b7266f7928b055c&page=${page}`, { observe: 'response' });
  }

  getTopRateTv(page: number): Observable<HttpResponse<any>> {
    return this.http.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=0f79586eb9d92afa2b7266f7928b055c&page=${page}`, { observe: 'response' });
  }

  getBadRate(page: number): Observable<HttpResponse<any>> {
    return this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=0f79586eb9d92afa2b7266f7928b055c&sort_by=vote_average.asc&page=${page}`, { observe: 'response' })
  }

  getBadRateTv(page: number): Observable<HttpResponse<any>> {
    return this.http.get(`https://api.themoviedb.org/3/discover/tv?api_key=0f79586eb9d92afa2b7266f7928b055c&sort_by=vote_average.asc&page=${page}`, { observe: 'response' })
  }

  getTopRevenue(page: number): Observable<HttpResponse<any>> {
    return this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=0f79586eb9d92afa2b7266f7928b055c&sort_by=revenue.desc&page=${page}`, { observe: 'response' })
  }

  getTopRevenueTv(page: number): Observable<HttpResponse<any>> {
    return this.http.get(`https://api.themoviedb.org/3/discover/tv?api_key=0f79586eb9d92afa2b7266f7928b055c&sort_by=revenue.desc&page=${page}`, { observe: 'response' })
  }

  getVoteCount(page: number): Observable<HttpResponse<any>> {
    return this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=0f79586eb9d92afa2b7266f7928b055c&sort_by=vote_count.desc&page=${page}`, { observe: 'response' })
  }

  getVoteCountTv(page: number): Observable<HttpResponse<any>> {
    return this.http.get(`https://api.themoviedb.org/3/discover/tv?api_key=0f79586eb9d92afa2b7266f7928b055c&sort_by=vote_count.desc&page=${page}`, { observe: 'response' })
  }

  getCast(id: string): Observable<HttpResponse<any>> {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=0f79586eb9d92afa2b7266f7928b055c`, { observe: 'response' });
  }

  getReviewTv(id: string): Observable<HttpResponse<any>> {
    return this.http.get(`https://api.themoviedb.org/3/tv/${id}/reviews?api_key=0f79586eb9d92afa2b7266f7928b055c`, { observe: 'response' });
  }

  getCastTv(id: string): Observable<HttpResponse<any>> {
    return this.http.get(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=0f79586eb9d92afa2b7266f7928b055c`, { observe: 'response' });
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

  search(sort: string, page: number, year: number, genres: string, keywords: string): Observable<HttpResponse<any>> {
    if (!genres) {
      return this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=0f79586eb9d92afa2b7266f7928b055c&sort_by=${sort}&page=${page}&primary_release_year=${year}&with_keywords=${keywords}`
        , { observe: 'response' });
    }
    return this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=0f79586eb9d92afa2b7266f7928b055c&sort_by=${sort}&page=${page}&primary_release_year=${year}&with_genres=${genres}&with_keywords=${keywords}`
      , { observe: 'response' });
  }

  searchTv(sort: string, page: number, year: number, genres: string, keywords: string): Observable<HttpResponse<any>> {
    if (!genres) {
      return this.http.get(`https://api.themoviedb.org/3/discover/tv?api_key=0f79586eb9d92afa2b7266f7928b055c&sort_by=${sort}&page=${page}&primary_release_year=${year}&with_keywords=${keywords}`
        , { observe: 'response' });
    }
    return this.http.get(`https://api.themoviedb.org/3/discover/tv?api_key=0f79586eb9d92afa2b7266f7928b055c&sort_by=${sort}&page=${page}&primary_release_year=${year}&with_genres=${genres}&with_keywords=${keywords}`
      , { observe: 'response' });
  }
}
