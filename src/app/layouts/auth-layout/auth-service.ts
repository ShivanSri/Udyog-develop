import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpUtilitiesService } from '../../services/http-utilities.service';
import { WebApiUrlService } from '../../services/web-api-url.service';
import { MasterDataService } from '../../services/masterdata.service';
import { SiteModel } from '../../models/sitemodel'
import { AdminComponent } from '../../pages/admin/admin.component';


@Injectable()
export class AuthService {

  constructor(private httpUtilitiesService: HttpUtilitiesService, public webApiUrlService: WebApiUrlService) {
  }

  Authendication(userLogin: SiteModel.UserLogin): Observable<SiteModel.UserDetails> {
    var url = this.webApiUrlService.authendication();
    return this.httpUtilitiesService.postlogin<SiteModel.UserDetails>(url, userLogin);
  }

  CreateJobseeker(jobseeker: SiteModel.CreateJobseeker): Observable<SiteModel.CreateJobseeker> {

    var url = this.webApiUrlService.createJobSeeker();
    return this.httpUtilitiesService.httpPost<SiteModel.CreateJobseeker>(url, jobseeker);
  }

  CreateEmployer(employer: SiteModel.CreateUser): Observable<SiteModel.CreateUser> {

    var url = this.webApiUrlService.createEmployer();
    return this.httpUtilitiesService.httpPost<SiteModel.CreateUser>(url, employer);
  }

  CreateAdmin(admin: SiteModel.CreateUser): Observable<SiteModel.CreateUser> {

    var url = this.webApiUrlService.createEmployer();
    return this.httpUtilitiesService.httpPost<SiteModel.CreateUser>(url, admin);
  }

  ResetPassword(resetpassword: SiteModel.ResetPassword): Observable<SiteModel.ResetPassword> {

    var url = this.webApiUrlService.resetPassword();
    return this.httpUtilitiesService.httpPost<SiteModel.ResetPassword>(url, resetpassword);
  }

  ResetPasswordConfirm(resetconfirm: SiteModel.ResetPasswordConfirm): Observable<SiteModel.ResetPasswordConfirm> {

    var url = this.webApiUrlService.resetPasswordConfirm();
    return this.httpUtilitiesService.httpPost<SiteModel.ResetPasswordConfirm>(url, resetconfirm);
  }

  GoogleLogin(): Observable<any> {
    var url = this.webApiUrlService.googleLogin();
    return this.httpUtilitiesService.httpGet<any>(url);
  }
  checkUserAvailability(username: SiteModel.UserAvailability): Observable<any> {
    var url = this.webApiUrlService.checkUserAvailability();
    return this.httpUtilitiesService.httpPost<any>(url, username);
  }
}
