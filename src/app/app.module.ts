import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { TabsModule } from "ngx-bootstrap/tabs";
import { ToastrModule } from "ngx-toastr";
import { TagInputModule } from "ngx-chips";
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";
import { PresentationModule } from "./pages/presentation/presentation.module";

import { BrowserModule } from '@angular/platform-browser';
import { ComponentsModule } from "./components/components.module";

import { AppRoutingModule } from './app-routing.module';

import { WebApiUrlService } from './services/web-api-url.service';
import { HttpUtilitiesService } from './services/http-utilities.service';
import { MasterDataService } from './services/masterdata.service';
import { JobSeekerComponent } from "./pages/job-seeker/jobseeker.component";
import { EmployerComponent } from './pages/employer/employer.component';
import { AdminComponent } from './pages/admin/admin.component';
import { TokenInterceptor } from './helpers/token.interceptor';
//import { BoardComponent } from './pages/common/board/board.component';
import { ListComponent } from './pages/common/list/list.component';
import { CardComponent } from './pages/common/card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    JobSeekerComponent,
    EmployerComponent,
    AdminComponent,
    //BoardComponent,
    //ListComponent,
    //CardComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    ComponentsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    AppRoutingModule,
    ToastrModule.forRoot(),
    CollapseModule.forRoot(),
    TagInputModule,
    PresentationModule,
    BrowserModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    HttpUtilitiesService,
    WebApiUrlService,
    MasterDataService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}