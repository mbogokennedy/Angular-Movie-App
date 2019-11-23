import { Injectable } from '@angular/core';
import { Subject, Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";

import { MoviesModel, MovieModel } from "./movies-model";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private moPop = "https://api.themoviedb.org/3/movie/popular?api_key=b8a24088ba7b75cd982fd7d09399d4c1"
  constructor(private _http:HttpClient) { }

  getMovies():Observable<MoviesModel[]> {
    return this._http.get<MoviesModel[]>(this.moPop).pipe(catchError(this.handleError<MoviesModel[]>("getMovies", [])))

  }
  
  getMovie(id:number):Observable<MovieModel>{
    return this._http.get<MovieModel>(`https://api.themoviedb.org/3/movie/${id}?api_key=b8a24088ba7b75cd982fd7d09399d4c1`)
      .pipe(catchError(this.handleError<MovieModel>("getMovie")))
  }

  private handleError<T>(operation = "operation", result? : T){
    return (error:any): Observable<T> =>{
      console.log(error)
      return of (result as T)
    }
  }
}
