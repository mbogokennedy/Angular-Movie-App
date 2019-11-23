import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from "@angular/common/http";  

import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieThumbnailComponent } from './movie-thumbnail/movie-thumbnail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { appRoutes } from "./routes";
import { MoviesService } from "./movies.service";
import { ToastrService } from "./toastr.service";
import { RouteGuardComponent } from './route-guard/route-guard.component';
// import { RouteGuardService } from "./route-guard.service";
import { MoviesListResolverService } from "./movies-list-resolver.service";
import { AuthServiceService } from "./auth-service.service";
import { MovieDetailResolverService } from "./movie-detail-resolver.service";
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieThumbnailComponent,
    NavbarComponent,
    MovieDetailsComponent,
    RouteGuardComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
    HttpClientModule,
    SlickCarouselModule,
    FontAwesomeModule
  ],
  providers: [
    MoviesService,
    ToastrService,
    MovieDetailResolverService,
    MoviesListResolverService,
    AuthServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
