import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SiteModel } from 'src/app/models/sitemodel';
import { HttpUtilitiesService } from 'src/app/services/http-utilities.service';
import { WebApiUrlService } from 'src/app/services/web-api-url.service';

@Injectable({
  providedIn: 'root'
})
export class ManagecompaniesService {

  constructor(private httpUtilitiesService: HttpUtilitiesService, public webApiUrlService: WebApiUrlService) { }

  getAllCompanies = (): Observable<SiteModel.Companies[]> => {
    var url = this.webApiUrlService.getAllCompany();
    return this.httpUtilitiesService.httpGet<SiteModel.Companies[]>(url);
  }

  createCompany = (job: SiteModel.Companies): Observable<SiteModel.Companies> => {
    var url = this.webApiUrlService.createCompany();
    return this.httpUtilitiesService.httpPost<SiteModel.Companies>(url, job);
  }

  updateCompany = (job: SiteModel.Companies): Observable<SiteModel.Companies> => {
    var url = this.webApiUrlService.updateCompany(job.id);
    return this.httpUtilitiesService.httpPut<SiteModel.Companies>(url, job);
  }
}
