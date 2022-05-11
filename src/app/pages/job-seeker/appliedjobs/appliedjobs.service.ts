import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SiteModel } from 'src/app/models/sitemodel';
import { HttpUtilitiesService } from 'src/app/services/http-utilities.service';
import { WebApiUrlService } from 'src/app/services/web-api-url.service';

@Injectable({
  providedIn: 'root'
})
export class AppliedjobsService {

  constructor(private httpUtilitiesService: HttpUtilitiesService, public webApiUrlService: WebApiUrlService) { }

  getJobapplication = (): Observable<SiteModel.JobApplication[]> => {
    var url = this.webApiUrlService.getJobapplication();
    return this.httpUtilitiesService.httpGet<SiteModel.JobApplication[]>(url);
  }
  getJobapplicationStatus = (): Observable<SiteModel.JobApplicationStatus[]> => {
    var url = this.webApiUrlService.getAllJobStatus();
    return this.httpUtilitiesService.httpGet<SiteModel.JobApplicationStatus[]>(url);
  }
  searchJobs = (searchKey: string): Observable<SiteModel.SearchJob> => {
    var url = this.webApiUrlService.searchJobs(searchKey);
    return this.httpUtilitiesService.httpGet<SiteModel.SearchJob>(url);
  }
  searchAllJobs = (): Observable<SiteModel.SearchJob> => {
    var url = this.webApiUrlService.searchAllJobs();
    return this.httpUtilitiesService.httpGet<SiteModel.SearchJob>(url);
  }
}
