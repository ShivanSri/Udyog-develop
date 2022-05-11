import { Routes } from "@angular/router";
import { AuthGuard } from "src/app/guards/auth.guard";
import { ProfileComponent } from "./profile/profile.component";
import { JobsearchComponent } from './jobsearch/jobsearch.component';
import { AppliedjobsComponent } from './appliedjobs/appliedjobs.component';
import { AccountsettingsComponent } from "./accountsettings/accountsettings.component";

export const JobSeekerRoutes: Routes = [  
  {
    path: "",
    children: [
      {
        path: "profile",
        component: ProfileComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "jobsearch",
        component: JobsearchComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "appliedjobs",
        component: AppliedjobsComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "accountsettings",
        component: AccountsettingsComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];
