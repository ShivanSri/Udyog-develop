import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { ComponentsModule } from "../../components/components.module";
import { AccordionModule } from "ngx-bootstrap/accordion";
import { BsModalService, ModalModule } from "ngx-bootstrap/modal";
import { NgxBootstrapMultiselectModule } from 'ngx-bootstrap-multiselect';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { JobSeekerRoutes } from "./jobseeker.routing";
import { ProfileComponent } from './profile/profile.component';
import { JobsearchComponent } from './jobsearch/jobsearch.component';
import { AppliedjobsComponent } from './appliedjobs/appliedjobs.component';
import { TagInputModule } from "ngx-chips";
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AccountsettingsComponent } from './accountsettings/accountsettings.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [ProfileComponent, JobsearchComponent, AppliedjobsComponent, AccountsettingsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(JobSeekerRoutes),
    ProgressbarModule.forRoot(),
    ComponentsModule,
    AccordionModule.forRoot(),
    FormsModule,
    ModalModule.forRoot(),
    NgxBootstrapMultiselectModule,
    TagInputModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    })
  ],
  providers: [BsModalService]
})
export class JobSeekerModule {}
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
