import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthServiceService } from "../auth-service.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isDirty:boolean = true
  registerForm:FormGroup
  private firstName:FormControl
  private lastName:FormControl
  private email:FormControl
  private password:FormControl
  private confirmPassword:FormControl

  constructor(private _routing:Router, private _authService:AuthServiceService) { }

  ngOnInit() {
    this.firstName = new FormControl("", Validators.required);
    this.lastName = new FormControl("", Validators.required);
    this.email = new FormControl("", [Validators.required,   Validators.pattern(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,63})$/)]);
    this.password = new FormControl("", [Validators.required, Validators.minLength(6)]);
    this.confirmPassword = new FormControl("", [Validators.required, Validators.minLength(6)])
    this.registerForm = new FormGroup({
      firstName:this.firstName,
      lastName:this.lastName,
      email:this.email,
      password:this.password,
      confirmPassword:this.confirmPassword
    })
  }
  cancel(){
    this._routing.navigate(["/movies"])
  }
  login(){
    this._routing.navigate(["/user/login"])
  }

  saveProfile(formValue){
    if(this.registerForm.valid){
      console.log(formValue)
      this.isDirty= false
      this._routing.navigate(["/movies"])
    }
  }
  validateFirstName(){
    return this.firstName.valid && this.firstName.dirty
  }
  validateLastName(){
    return this.lastName.valid && this.lastName.dirty
  }
  validateEmail(){
    return this.email.valid && this.email.dirty
  }
  validatePassword(){
    return this.password.valid && this.password.dirty
  }
  validateConfirmPassword(){
    return this.confirmPassword.valid && this.confirmPassword.dirty
  }
}
