import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SiteModel } from 'src/app/models/sitemodel';
import { HttpUtilitiesService } from 'src/app/services/http-utilities.service';
import { WebApiUrlService } from 'src/app/services/web-api-url.service';

@Injectable({
    providedIn: 'root'
})

export class MyProfileService {

    constructor(private httpUtilitiesService: HttpUtilitiesService, public webApiUrlService: WebApiUrlService) { }
  
    getAllProfiles = (): Observable<SiteModel.CreateProfile> => {
      var url = this.webApiUrlService.getAllProfile();
      return this.httpUtilitiesService.httpGet<SiteModel.CreateProfile>(url);
    }

    createProfile(profile: SiteModel.CreateProfile): Observable<SiteModel.CreateProfile> {
        
        var url = this.webApiUrlService.createEmployer();
        return this.httpUtilitiesService.httpPost<SiteModel.CreateProfile>(url, profile);
      }
  }

