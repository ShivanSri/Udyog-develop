import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { ComponentsModule } from "../../components/components.module";
import { AccordionModule } from "ngx-bootstrap/accordion";
import { BsModalService, ModalModule } from "ngx-bootstrap/modal";
import { NgxBootstrapMultiselectModule } from 'ngx-bootstrap-multiselect';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { EmployerRoutes } from "./employer.routing";
import { ManageusersComponent } from './manageusers/manageusers.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { TagInputModule } from "ngx-chips";
import { AuthService } from "../../layouts/auth-layout/auth-service";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgxPrintModule } from "ngx-print";
import { ManagejobsComponent } from "./managejobs/managejobs.component";
import { ManageapplicationsComponent } from "./manageapplications/manageapplications.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClonejobsComponent } from "./clonejobs/clonejobs.component";

@NgModule({
  declarations: [ManageusersComponent, MyprofileComponent, ManagejobsComponent, ManageapplicationsComponent, DashboardComponent, ClonejobsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(EmployerRoutes),
    ProgressbarModule.forRoot(),
    ComponentsModule,
    AccordionModule.forRoot(),
    FormsModule,
    ModalModule.forRoot(),
    NgxBootstrapMultiselectModule,
    TagInputModule,
    NgxDatatableModule,
    ProgressbarModule.forRoot(),
    PaginationModule.forRoot(),
    TooltipModule.forRoot(),
    NgxPrintModule
  ],
  providers: [BsModalService, AuthService]
})
export class EmployerModule {}
