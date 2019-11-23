import { Injectable } from '@angular/core';
import { Resolve } from "@angular/router";
import {map} from "rxjs/operators";

import { MoviesService } from "./movies.service";

@Injectable({
  providedIn: 'root'
})
export class MoviesListResolverService implements  Resolve<any>{

  constructor(private _movieService:MoviesService) { }
  resolve(){
    return this._movieService.getMovies()
  }
}
