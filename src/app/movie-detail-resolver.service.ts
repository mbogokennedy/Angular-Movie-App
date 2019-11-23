import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import {map} from "rxjs/operators";

import { MoviesService } from "./movies.service";

@Injectable({
  providedIn: 'root'
})
export class MovieDetailResolverService implements  Resolve<any>{

  constructor(private _movieService:MoviesService) { }
  resolve(route:ActivatedRouteSnapshot){
    return this._movieService.getMovie(route.params["id"])
  }
}
