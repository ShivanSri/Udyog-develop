import { Routes } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { PricingComponent } from "../../pages/examples/pricing/pricing.component";
import { LockComponent } from "../../pages/examples/lock/lock.component";
import { RegisterComponent } from "./register/register.component";
import { ForgotpasswordComponent } from "./forgotpassword/forgotpassword.component";
import { PresentationComponent } from "../../pages/presentation/presentation.component";
import { ManageusersComponent } from './manageusers/manageusers.component';
import { AuthGuard } from "src/app/guards/auth.guard";
import { ChangepasswordComponent } from "../../components/changepassword/changepassword.component";

export const AuthLayoutRoutes: Routes = [
  
  {
    path: "",
    children: [
      {
        path: "login",
        component: LoginComponent,
        //canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "lock",
        component: LockComponent,
        //canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "register",
        component: RegisterComponent,
        //canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "forgotpassword",
        component: ForgotpasswordComponent,
        //canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "changepassword",
        component: ChangepasswordComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "manageusers",
        component: ManageusersComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "pricing",
        component: PricingComponent,
        canActivate: [AuthGuard]
      }
    ]    
  }
];
