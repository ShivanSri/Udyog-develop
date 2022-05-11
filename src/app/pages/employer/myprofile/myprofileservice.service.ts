import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SiteModel } from 'src/app/models/sitemodel';
import { HttpUtilitiesService } from 'src/app/services/http-utilities.service';
import { WebApiUrlService } from 'src/app/services/web-api-url.service';

@Injectable({
    providedIn: 'root'
})

export class MyProfileserviceService {

    constructor(private httpUtilitiesService: HttpUtilitiesService, public webApiUrlService: WebApiUrlService) { }
  
    getMyProfile = (): Observable<SiteModel.EmployerProfile> => {
      var url = this.webApiUrlService.getMyProfileEmployer();
      return this.httpUtilitiesService.httpGet<SiteModel.EmployerProfile>(url);
    }
  
  
    createProfile = (profile: SiteModel.EmployerProfile): Observable<SiteModel.EmployerProfile> => {
      var url = this.webApiUrlService.createProfileEmployer();
      return this.httpUtilitiesService.httpPost<SiteModel.EmployerProfile>(url, profile);
    }
  

    updateUser = (user: SiteModel.CreateUser): Observable<SiteModel.CreateUser> => {
      var url = this.webApiUrlService.updateUser(user);
      return this.httpUtilitiesService.httpPost<SiteModel.CreateUser>(url, user);
    }

    updateCurrentUser = (id: number): Observable<SiteModel.CreateUser> => {
      var url = this.webApiUrlService.updateCurrentUser(id);
      return this.httpUtilitiesService.httpPost<SiteModel.CreateUser>(url, id);
    }
  
    updateCompany = (company: SiteModel.Companies): Observable<SiteModel.Companies> => {
      var url = this.webApiUrlService.updateCompany(company.id);
      return this.httpUtilitiesService.httpPut<SiteModel.Companies>(url,company);
    }
  
  }

