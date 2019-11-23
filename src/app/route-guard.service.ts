// import { Injectable } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router";

// import { MoviesService } from "./movies.service";

// @Injectable({
//   providedIn: 'root'
// })
// export class RouteGuardService implements CanActivate{

//   constructor(private _movieServices : MoviesService, private _router:Router) { }
  
//   canActivate (route:ActivatedRouteSnapshot){
//     const exists = !!this._movieServices.getMovie(+route.params["id"])
//     if(!exists){return this._router.navigate(["/404"])}
//     return exists
//   }
// }
