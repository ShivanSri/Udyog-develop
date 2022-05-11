import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpUtilitiesService } from '../services/http-utilities.service';
import { WebApiUrlService } from '../services/web-api-url.service';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  constructor(private httpUtilitiesService: HttpUtilitiesService, public webApiUrlService: WebApiUrlService) { }

  UploadProfileImage = (data: any): Observable<any> => {
    var url = this.webApiUrlService.UploadProfileImage();
    return this.httpUtilitiesService.httpPost<any>(url,data);
  }

}
