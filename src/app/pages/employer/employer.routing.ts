import { Routes } from "@angular/router";
import { AuthGuard } from "src/app/guards/auth.guard";

import { EmployerComponent } from "./employer.component";
import { ManagejobsComponent } from "./managejobs/managejobs.component";
import { ManageusersComponent } from "./manageusers/manageusers.component";
import { MyprofileComponent } from "./myprofile/myprofile.component";
import { ManageapplicationsComponent } from "./manageapplications/manageapplications.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ClonejobsComponent } from "./clonejobs/clonejobs.component";

export const EmployerRoutes: Routes = [
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
        path: "clonejobs",
        component: ClonejobsComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];
