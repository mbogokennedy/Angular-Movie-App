import { Component, OnInit } from '@angular/core';
import { MoviesService } from "../movies.service";
import { ToastrService } from "../toastr.service";
import { ActivatedRoute } from "@angular/router";
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import { MoviesModel } from "../movies-model";


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: MoviesModel[]
  filerBy: string
  faAngleLeft=faAngleLeft
  faAngleRight=faAngleRight
  
  constructor(private _movieService: MoviesService, private _toastrService:ToastrService, private _route:ActivatedRoute) { 
   
  }
  slideConfig = {
    "slidesToShow": 5, 
    "slidesToScroll": 5,
    "dots":false,
    "infinite": false,
    "responsive": [
      {
        "breakpoint": 1024,
        "settings": {
          "slidesToShow": 3,
          "slidesToScroll": 3,
          "infinite": false,
          "dots": false
        }
      },
      {
        "breakpoint": 600,
        "settings": {
          "slidesToShow": 2,
          "slidesToScroll": 2
        }
      },
      {
        "breakpoint": 480,
        "settings": {
          "slidesToShow": 1,
          "slidesToScroll": 1
        }
      }
    ]
  };
  slideConfig1 = {
    "dots": false,
    "arrows": false,
    "draggable": false,
    "slidesToShow": 1,
    "infinite": true,
    "autoplay": true,
    "autoplaySpeed": 2000,
    "slidesToScroll": 1, 
  };
  
  
  
  ngOnInit() {
    this.movies = this._route.snapshot.data['movies']
  }

  handleMovieClicked(data){
    this._toastrService.success(data)
  }
  slickInit(e) {
    console.log('slick initialized');
  }
  
  breakpoint(e) {
    console.log('breakpoint');
  }
  
  afterChange(e) {
    console.log('afterChange');
  }
  
  beforeChange(e) {
    console.log('beforeChange');
  }

}
