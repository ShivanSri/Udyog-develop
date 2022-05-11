import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";
import { PresentationComponent } from "./pages/presentation/presentation.component";
import { JobSeekerComponent } from "./pages/job-seeker/jobseeker.component";
import { EmployerComponent } from "./pages/employer/employer.component";
import { AdminComponent } from './pages/admin/admin.component';
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  {
    path: "",
    redirectTo: "auth",
    pathMatch: "full"
  },
  
  {
    path: "",
    component: AuthLayoutComponent,
    children: [
      {
        path: "auth",
        loadChildren:
          "./layouts/auth-layout/auth-layout.module#AuthLayoutModule"
      }      
    ]
  },
  {
    path: "",
    component: JobSeekerComponent,
    children: [
      {
        path: "job-seeker",
        loadChildren:
          "./pages/job-seeker/jobseeker.module#JobSeekerModule"
      }
    ]
  },
  {
    path: "",
    component: AdminComponent,
    children: [
      {
        path: "admin",
        loadChildren:
          "./pages/admin/admin.module#AdminModule"
      }
    ]
  },
  {
    path: "",
    component: EmployerComponent,
    children: [
      {
        path: "employer",
        loadChildren: "./pages/employer/employer.module#EmployerModule"
      }
    ]
  },
  {
    path: "",
    component: AdminComponent,
    children: [
      {
        path: "admin",
        loadChildren: "./pages/admin/admin.module#AdminModule"
      }
    ]
  },
  {
    path: "presentation",
    component: PresentationComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "dashboards",
        loadChildren: "./pages/dashboards/dashboards.module#DashboardsModule"
      },
      {
        path: "components",
        loadChildren: "./pages/components/components.module#ComponentsModule"
      },
      {
        path: "forms",
        loadChildren: "./pages/forms/forms.module#FormsModules"
      },
      {
        path: "tables",
        loadChildren: "./pages/tables/tables.module#TablesModule"
      },
      {
        path: "maps",
        loadChildren: "./pages/maps/maps.module#MapsModule"
      },
      {
        path: "widgets",
        loadChildren: "./pages/widgets/widgets.module#WidgetsModule"
      },
      {
        path: "charts",
        loadChildren: "./pages/charts/charts.module#ChartsModule"
      },
      {
        path: "calendar",
        loadChildren: "./pages/calendar/calendar.module#CalendarModule"
      },
      {
        path: "examples",
        loadChildren: "./pages/examples/examples.module#ExamplesModule"
      },
      {
        path: "job-seeker",
        loadChildren: "./pages/job-seeker/jobseeker.module#JobSeekerModule"
      },
      {
        path: "employer",
        loadChildren: "./pages/employer/employer.module#EmployerModule"
      },
      {
        path: "admin",
        loadChildren: "./pages/admin/admin.module#AdminModule"
      }
    ]
  },
  {
    path: "**",
    redirectTo: "dashboard"
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
