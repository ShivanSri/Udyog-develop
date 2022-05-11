import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SiteModel } from 'src/app/models/sitemodel';
import { HttpUtilitiesService } from 'src/app/services/http-utilities.service';
import { WebApiUrlService } from 'src/app/services/web-api-url.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpUtilitiesService: HttpUtilitiesService, public webApiUrlService: WebApiUrlService) { }

  getDashboardDetails = (): Observable<SiteModel.DashboardDetails> => {
    var url = this.webApiUrlService.getDashboardDetails();
    return this.httpUtilitiesService.httpGet<SiteModel.DashboardDetails>(url);
  }
}
