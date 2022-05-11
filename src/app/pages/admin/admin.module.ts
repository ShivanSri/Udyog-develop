import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { BsModalService } from "ngx-bootstrap/modal";
import { NgxPrintModule } from "ngx-print";
import { ComponentsModule } from "../../components/components.module";
import { ManageusersComponent } from './manageusers/manageusers.component';
import { MyprofileComponent } from './myprofile/myprofile.component';



import { RouterModule } from "@angular/router";
import { AdminRoutes } from "./admin.routing";
import { ManagejobsComponent } from './managejobs/managejobs.component';
import { FormsModule } from "@angular/forms";
import { ManagecompaniesComponent } from './managecompanies/managecompanies.component';
import { ManageemployerComponent } from './manageemployer/manageemployer.component';
import { NgxBootstrapMultiselectModule } from "ngx-bootstrap-multiselect";
import { ManagejobseekerComponent } from './managejobseeker/managejobseeker.component';
import { ManageapplicationsComponent } from './manageapplications/manageapplications.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BoardComponent } from "../common/board/board.component";
import { ListComponent } from "../common/list/list.component";
import { CardComponent } from "../common/card/card.component";

@NgModule({
  declarations: [ManageusersComponent, MyprofileComponent, ManagejobsComponent, ManagecompaniesComponent, ManageemployerComponent, ManagejobseekerComponent, ManageapplicationsComponent, DashboardComponent, BoardComponent, ListComponent, CardComponent],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(AdminRoutes),
    ProgressbarModule.forRoot(),
    ComponentsModule,
    NgxDatatableModule,
    ProgressbarModule.forRoot(),
    PaginationModule.forRoot(),
    TooltipModule.forRoot(),
    NgxPrintModule,
    NgxBootstrapMultiselectModule
  ],
  providers: [BsModalService]
})
export class AdminModule { }
