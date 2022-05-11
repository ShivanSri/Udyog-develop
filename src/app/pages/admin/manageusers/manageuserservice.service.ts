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

    updateCurrentUser = (id: number,user: SiteModel.UpdateCurrentUser): Observable<SiteModel.UpdateCurrentUser> => {
      var url = this.webApiUrlService.updateCurrentUser(id);
      return this.httpUtilitiesService.httpPut<SiteModel.UpdateCurrentUser>(url, user);
    }
    
  }

