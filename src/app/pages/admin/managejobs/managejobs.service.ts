import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SiteModel } from 'src/app/models/sitemodel';
import { HttpUtilitiesService } from 'src/app/services/http-utilities.service';
import { WebApiUrlService } from 'src/app/services/web-api-url.service';

@Injectable({
  providedIn: 'root'
})
export class ManagejobsService {

  constructor(private httpUtilitiesService: HttpUtilitiesService, public webApiUrlService: WebApiUrlService) { }


  getAllJobs = (): Observable<SiteModel.Jobs[]> => {
    var url = this.webApiUrlService.getAllJobs();
    return this.httpUtilitiesService.httpGet<SiteModel.Jobs[]>(url);
  }

  createJob = (job: SiteModel.Jobs): Observable<SiteModel.Jobs> => {
    var url = this.webApiUrlService.createJobsAdmin();
    return this.httpUtilitiesService.httpPost<SiteModel.Jobs>(url, job);
  }

  updateJob = (job: SiteModel.Jobs): Observable<SiteModel.Jobs> => {
    var url = this.webApiUrlService.updateJobs(job.id);
    return this.httpUtilitiesService.httpPost<SiteModel.Jobs>(url, job);
  }

}
