import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from "@angular/router";

import { MoviesService } from "../movies.service";
import { MovieModel } from "../movies-model";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie:MovieModel
  constructor(private _movieService:MoviesService, private _route:ActivatedRoute) { }

  ngOnInit() {
    this._route.data.forEach((data) => {
        this.movie = data['movie']
    })
     
    // if id is a number use + before this._route
  }
}
