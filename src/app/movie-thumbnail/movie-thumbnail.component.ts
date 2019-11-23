import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { MoviesModel } from "../movies-model";

@Component({
  selector: 'app-movie-thumbnail',
  templateUrl: './movie-thumbnail.component.html',
  styleUrls: ['./movie-thumbnail.component.css']
})
export class MovieThumbnailComponent implements OnInit {
  @Input() movie:MoviesModel
  @Output() movieClicked = new EventEmitter()
  constructor() { }
  
  ngOnInit() {
  }

  handleClick(){
    this.movieClicked.emit(this.movie.title)
  }

}
