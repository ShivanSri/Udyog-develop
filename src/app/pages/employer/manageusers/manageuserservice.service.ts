import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SiteModel } from 'src/app/models/sitemodel';
import { HttpUtilitiesService } from 'src/app/services/http-utilities.service';
import { WebApiUrlService } from 'src/app/services/web-api-url.service';

@Injectable({
    providedIn: 'root'
})

export class Manageuserservice {

    constructor(private httpUtilitiesService: HttpUtilitiesService, public webApiUrlService: WebApiUrlService) { }
  
    getAllUsers = (): Observable<SiteModel.User[]> => {
      var url = this.webApiUrlService.getAllUsers();
      return this.httpUtilitiesService.httpGet<SiteModel.User[]>(url);
    }
    CreateEmployer(jobseeker: SiteModel.CreateUser): Observable<SiteModel.CreateUser> {
        var url = this.webApiUrlService.createEmployer();
        return this.httpUtilitiesService.httpPost<SiteModel.CreateUser>(url, jobseeker);
    }

    updateCurrentUser = (id: number,user: SiteModel.updateUserByEmployer): Observable<SiteModel.updateUserByEmployer> => {
      var url = this.webApiUrlService.updateUserByEmployer(id);
      return this.httpUtilitiesService.httpPut<SiteModel.updateUserByEmployer>(url, user);
    }
  
  }

