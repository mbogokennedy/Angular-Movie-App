import { Routes } from "@angular/router";

import { MovieListComponent } from "./movie-list/movie-list.component";
import { MovieDetailsComponent } from "./movie-details/movie-details.component";
import { RouteGuardComponent } from "./route-guard/route-guard.component";
import { MoviesListResolverService } from "./movies-list-resolver.service";
import { MovieDetailResolverService } from "./movie-detail-resolver.service";
export const appRoutes:Routes = [
    {path:"movies", component:MovieListComponent, resolve:{movies:MoviesListResolverService}},
    {path:"movie/:id", component:MovieDetailsComponent, resolve:{movie:MovieDetailResolverService}},
    {path:"", redirectTo:"/movies", pathMatch:"full"},
    {path:"404", component:RouteGuardComponent},
    {path:"user", loadChildren:"./user/user.module#UserModule"}
]