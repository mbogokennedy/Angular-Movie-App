import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from "../auth-service.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email
  password
  mouseoverLogin
  constructor(private _authservice:AuthServiceService, private _router:Router) { }

  ngOnInit() {
  }
  login(formValue){
    this._authservice.loginUser(formValue.email, formValue.password)
    this._router.navigate(["movies"])
  }

}
