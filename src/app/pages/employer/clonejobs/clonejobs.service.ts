import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SiteModel } from 'src/app/models/sitemodel';
import { HttpUtilitiesService } from 'src/app/services/http-utilities.service';
import { WebApiUrlService } from 'src/app/services/web-api-url.service';

@Injectable({
  providedIn: 'root'
})
export class CloneJobService {

  constructor(private httpUtilitiesService: HttpUtilitiesService, public webApiUrlService: WebApiUrlService) { }

  searchJobs = (searchKey: string): Observable<SiteModel.SearchJob> => {
    var url = this.webApiUrlService.searchJobs(searchKey);
    return this.httpUtilitiesService.httpGet<SiteModel.SearchJob>(url);
  }
  searchAllJobs = (): Observable<SiteModel.SearchJob> => {
    var url = this.webApiUrlService.searchAllJobs();
    return this.httpUtilitiesService.httpGet<SiteModel.SearchJob>(url);
  }

  updateCloneJobs = (id: number, job: SiteModel.Jobs): Observable<SiteModel.Jobs> => {
    var url = this.webApiUrlService.cloneJobs(id);
    return this.httpUtilitiesService.httpPost<SiteModel.Jobs>(url, job);
  }
 
}
