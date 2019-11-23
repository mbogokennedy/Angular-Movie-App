import { RegisterComponent } from "../register/register.component";
import { LoginComponent } from "../login/login.component";
import { ProfileComponent } from "../profile/profile.component";

export const userRoutes= [
    {path:"register", component:RegisterComponent, canDeactivate:['canDeactivateRegister']},
    {path:"login", component:LoginComponent},
    {path:"profile", component:ProfileComponent}
]