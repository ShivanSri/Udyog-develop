import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SiteModel } from 'src/app/models/sitemodel';
import { HttpUtilitiesService } from 'src/app/services/http-utilities.service';
import { WebApiUrlService } from 'src/app/services/web-api-url.service';

@Injectable({
  providedIn: 'root'
})
export class ManageapplicationsService {

  constructor(private httpUtilitiesService: HttpUtilitiesService, public webApiUrlService: WebApiUrlService) { }

  getAllApplications = (): Observable<SiteModel.ApplicationDetails[]> => {
    var url = this.webApiUrlService.getAllApplication();
    return this.httpUtilitiesService.httpGet<SiteModel.ApplicationDetails[]>(url);
  }

  getApplicationsByJobId = (id: number): Observable<SiteModel.ApplicationDetails[]> => {
      var url = this.webApiUrlService.getApplicationByJobId(id);
      return this.httpUtilitiesService.httpGetById<SiteModel.ApplicationDetails[]>(url, id);
  }

  createApplication = (application: SiteModel.ApplicationDetails): Observable<SiteModel.ApplicationDetails> => {
    var url = this.webApiUrlService.createApplication();
    return this.httpUtilitiesService.httpPost<SiteModel.ApplicationDetails>(url, application);
  }

  updateApplication = (application: SiteModel.ApplicationDetails): Observable<SiteModel.ApplicationDetails> => {
    var url = this.webApiUrlService.updateApplicationStatus();
    return this.httpUtilitiesService.httpPost<SiteModel.ApplicationDetails>(url, application);
  }
}
