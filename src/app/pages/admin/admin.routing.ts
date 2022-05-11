import { Routes } from "@angular/router";
import { AuthGuard } from "src/app/guards/auth.guard";

import { ManageusersComponent } from './manageusers/manageusers.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { ManagejobsComponent } from "./managejobs/managejobs.component";
import { ManagecompaniesComponent } from "./managecompanies/managecompanies.component";
import { ManageemployerComponent } from "./manageemployer/manageemployer.component";
import { ManagejobseekerComponent } from "./managejobseeker/managejobseeker.component";
import { ManageapplicationsComponent } from "./manageapplications/manageapplications.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

export const AdminRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,
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
        path: "myprofile",
        component: MyprofileComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "managejobs",
        component: ManagejobsComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "managecompanies",
        component: ManagecompaniesComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "manageemployers",
        component: ManageemployerComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "managejobseeker",
        component: ManagejobseekerComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "manageapplications",
        component: ManageapplicationsComponent,
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
}
];
