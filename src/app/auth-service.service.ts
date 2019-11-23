import { Injectable } from '@angular/core';
import { UserModel } from "./user-model";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  currentUser:UserModel
  constructor() { }

  loginUser(email:string, password:string){
    this.currentUser = {
      id:1,
      firstName: "Kennedy",
      lastName: "Mbogo",
      email:"mbogokennedy@gmail.com",
      password:"mosesm2012",
      confirmPassword:"mosesm2012"
    }
  }
  isAuthenticated(){
    return !!this.currentUser;
  }
}
