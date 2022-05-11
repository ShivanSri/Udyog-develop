import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
import { SidebarComponent } from "./sidebar/sidebar.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { VectorMapComponent1 } from "./vector-map/vector-map.component";

import { RouterModule } from "@angular/router";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { DxVectorMapModule, DxPieChartModule } from 'devextreme-angular';
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { BsModalService } from "ngx-bootstrap/modal";
import { ChangepasswordComponent } from "./changepassword/changepassword.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CollapseModule.forRoot(),
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    DxVectorMapModule,
    DxPieChartModule,
    FormsModule
  ],
  declarations: [
    FooterComponent,
    VectorMapComponent1,
    NavbarComponent,
    SidebarComponent,
    ChangepasswordComponent
  ],
  exports: [
    FooterComponent,
    VectorMapComponent1,
    NavbarComponent,
    SidebarComponent
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    BsModalService
  ]
})
export class ComponentsModule {}
