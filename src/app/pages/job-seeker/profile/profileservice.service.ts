import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SiteModel } from 'src/app/models/sitemodel';
import { HttpUtilitiesService } from 'src/app/services/http-utilities.service';
import { WebApiUrlService } from 'src/app/services/web-api-url.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileserviceService {

  constructor(private httpUtilitiesService: HttpUtilitiesService, public webApiUrlService: WebApiUrlService) { }

  getMyProfile = (): Observable<SiteModel.Profile> => {
    var url = this.webApiUrlService.getMyProfile();
    return this.httpUtilitiesService.httpGet<SiteModel.Profile>(url);
  }

  getProfileById = (id: number): Observable<SiteModel.Profile> => {
    var url = this.webApiUrlService.getProfileById(id);
    return this.httpUtilitiesService.httpGet<SiteModel.Profile>(url);
  }

  createProfile = (profile: SiteModel.Profile): Observable<SiteModel.Profile> => {
    var url = this.webApiUrlService.createProfile();
    return this.httpUtilitiesService.httpPost<SiteModel.Profile>(url, profile);
  }

  addExperience = (experience: SiteModel.Experience): Observable<SiteModel.Experience> => {
    var url = this.webApiUrlService.addExperience();
    return this.httpUtilitiesService.httpPost<SiteModel.Experience>(url, experience);
  }
  updateExperience = (experience: SiteModel.Experience): Observable<SiteModel.Experience> => {
    var url = this.webApiUrlService.updateExperience(experience.id);
    return this.httpUtilitiesService.httpPut<SiteModel.Experience>(url, experience);
  }
  addEducation = (education: SiteModel.Education): Observable<SiteModel.Education> => {
    var url = this.webApiUrlService.addEducation();
    return this.httpUtilitiesService.httpPost<SiteModel.Education>(url, education);
  }
  updateEducation = (education: SiteModel.Education): Observable<SiteModel.Education> => {
    var url = this.webApiUrlService.updateEducation(education.id);
    return this.httpUtilitiesService.httpPut<SiteModel.Education>(url, education);
  }
  addCertification = (certification: SiteModel.CertificatioandRewards): Observable<SiteModel.CertificatioandRewards> => {
    var url = this.webApiUrlService.addCertification();
    return this.httpUtilitiesService.httpPost<SiteModel.CertificatioandRewards>(url, certification);
  }
  updateCertification = (certification: SiteModel.CertificatioandRewards): Observable<SiteModel.CertificatioandRewards> => {
    var url = this.webApiUrlService.updateCertification(certification.id);
    return this.httpUtilitiesService.httpPut<SiteModel.CertificatioandRewards>(url, certification);
  }
  addLanguage = (certification: SiteModel.Languages): Observable<SiteModel.Languages> => {
    var url = this.webApiUrlService.addLanguage();
    return this.httpUtilitiesService.httpPost<SiteModel.Languages>(url, certification);
  }
  updateLanguage = (language: SiteModel.Languages): Observable<SiteModel.Languages> => {
    var url = this.webApiUrlService.updateLanguage(language.id);
    return this.httpUtilitiesService.httpPut<SiteModel.Languages>(url, language);
  }
  uploadDocument = (data: any): Observable<any> => {
    var url = this.webApiUrlService.uploadDocument();
    return this.httpUtilitiesService.httpPost<SiteModel.ProfileDocs>(url,data);
  }
  updateUser = (employer: SiteModel.UpdateUser): Observable<SiteModel.UpdateUser> => {
    var url = this.webApiUrlService.updateUser(employer.id);
    return this.httpUtilitiesService.httpPut<SiteModel.UpdateUser>(url, employer);
  }
}
