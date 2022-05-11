
import { throwError as observableThrowError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BoundDirectivePropertyAst } from '@angular/compiler';
import { Base } from '../common/base';

@Injectable()
export class HttpUtilitiesService {

  constructor(private http: HttpClient, private base: Base) { }

  public httpGetFile(apiUrl: string): any {
    return this.http.get(apiUrl, { responseType: 'blob' }).pipe(
      catchError(this.handleError))
  }

  public httpGet<T>(apiUrl: string): Observable<T> {    
    return this.http.get<T>(apiUrl,{ headers: this.getRequestOptions() }).pipe(
      catchError(this.handleError))
  }

    public httpGetById<T>(apiUrl: string, id: number): Observable<T> {    
    return this.http.get<T>(apiUrl, { headers: this.getRequestOptions() }).pipe(
      catchError(this.handleError))
  }

  public postlogin<T>(apiUrl: string, payLoadToPost?: any): Observable<T> {
    return this.http.post<T>(apiUrl, payLoadToPost).pipe(
      catchError(this.handleError))
  }
  
  public httpPost<T>(apiUrl: string, payLoadToPost?: any): Observable<T> {
    return this.http.post<T>(apiUrl, payLoadToPost, { headers: this.getRequestOptions() }).pipe(
      catchError(this.handleError))
  }

  public httpPut<T>(apiUrl: string, payLoadToPut?: any): Observable<T> {
    return this.http.put<T>(apiUrl, payLoadToPut, { headers: this.getRequestOptions() }).pipe(
      catchError(this.handleError))
  }

  public httpDelete<T>(apiUrl: string): Observable<T> {
    return this.http.delete<T>(apiUrl, { headers: this.getRequestOptions() }).pipe(
      catchError(this.handleError))
  }

  private getRequestOptions(): HttpHeaders {
    const headers = new HttpHeaders();
    headers.append('content-Type', 'application/json; charset=utf-8');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Headers', 'X-Custom-Header, myheader, Accept, Content-Length, Content-Type, X-Forwaded-For');
    headers.append('Authorization', 'Bearer ' + this.base.GetToken());
    return headers
  }

  private handleError(error: Response | any) {
    console.log(error.message || error);
    return observableThrowError(error);
  }

  public UploadPost<T>(url: string, data: any) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'X-Custom-Header, myheader, Accept, Content-Length, Content-Type, X-Forwaded-For',
      })
    };
    var body = data;
    return this.http.post<T>(url.toLowerCase(), body, httpOptions).pipe(catchError(this.handleError));
  }

}
