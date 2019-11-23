import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RegisterComponent } from "../register/register.component";
import { LoginComponent } from '../login/login.component';
import { ProfileComponent } from '../profile/profile.component';
import { userRoutes } from "./userRoutes"

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(userRoutes)
  ],
  providers:[
    {
      provide:"canDeactivateRegister",
      useValue: checkDirtyState
    }
  ]
})
export class UserModule { }

export function checkDirtyState(component:RegisterComponent){
  let msg = "You have not submited your registration details, Do you really want to leave"
  if (component.isDirty)
    return window.confirm(msg)
  return true
}