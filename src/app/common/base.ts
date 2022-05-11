import { Component, OnInit, Injectable } from "@angular/core";
import { URLSearchParams } from "@angular/http";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from '@angular/router';
import { ToastrService } from "ngx-toastr";
import { SiteModel } from "../models/sitemodel";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class Base {
  public Token: string;
  public UrlBase: string = "http://13.233.96.78/";
  public UserName: number;
  public LoaderText: string = "Loading from the service";
  public WelcomeText: string;
  private UserDetailsSubject = new BehaviorSubject<SiteModel.UserDetails>(JSON.parse(localStorage.getItem('Udyog-UserDetails')));
  public UserDetails = this.UserDetailsSubject.asObservable();
  public emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //public profileImage: string = "";
  public documenttype: SiteModel.Documents[] = [{ "document_type_value": 'Resume', "document_type": 'Resume',"alias_name": "Resume" },
                                                { "document_type_value": 'Cover_Letter', "document_type": 'Cover Letter',"alias_name": "Cover Letter" },
                                                { "document_type_value": 'High_School_Certificate', "document_type": 'High School Certificate',"alias_name": "High School Certificate" },
                                                { "document_type_value": 'Bachelor_Certificate', "document_type": 'Bachelor Certificate',"alias_name": "Bachelor Certificate" },
                                                { "document_type_value": 'Master_Certificate', "document_type": 'Master Certificate',"alias_name": "Master Certificate" },
                                                { "document_type_value": 'Doctorate_Certificate', "document_type": 'Doctorate Certificate',"alias_name": "Doctorate Certificate" }];
  private profileImageSubject = new BehaviorSubject<string>("");
  public profileImage = this.profileImageSubject.asObservable();
  constructor(private httpClient: HttpClient, private router: Router, public toastr: ToastrService) { }

  public SaveToken = (token: string): void => {
    this.Token = token;
    localStorage.setItem('Udyog-Web-Token', token);
  }

  public GetToken = () => {
    return localStorage.getItem('Udyog-Web-Token');
  }

  public ClearToken = (): void => {
    this.Token = null;
    this.UserName = null;
    localStorage.clear();
    this.SetProfileImage("");
  }

  public TokenExpired = (): void => {
    this.ClearToken();
    //this.router.navigate(['']);
  }

  public SetWelcomeString = (userName: string): void => {
    this.WelcomeText = userName;
    localStorage.setItem("Udyog-UserName", userName);
  }

  public GetWelcomeString = () => {
    localStorage.getItem("Udyog-UserName");
  }

  public SetLoggedInUser = (userDetails: SiteModel.UserDetails) => this.UserDetailsSubject.next(userDetails);

  public GetLoggedInUser = (): SiteModel.UserDetails => this.UserDetailsSubject.value;

  public SetProfileImage = (profileImage: string) => this.profileImageSubject.next(profileImage);

  public GetProfileImage = (): string => this.profileImageSubject.value;


  public showNotification(type, title, message) {
    const color = Math.floor(Math.random() * 5 + 1);
    if (type === SiteModel.MessageSeverity.Default) {
      this.toastr.show(
        '<span class="alert-icon ni ni-bell-55" data-notify="icon"></span> <div class="alert-text"</div> <span class="alert-title" data-notify="title">' + title + '</span> <span data-notify="message">' + message + '</span></div>',
        "",
        {
          timeOut: 8000,
          closeButton: true,
          enableHtml: true,
          tapToDismiss: false,
          titleClass: "alert-title",
          positionClass: "toast-top-center",
          toastClass:
            "ngx-toastr alert alert-dismissible alert-default alert-notify"
        }
      );
    }
    if (type === SiteModel.MessageSeverity.Danger) {
      this.toastr.show(
        '<span class="alert-icon ni ni-bell-55" data-notify="icon"></span> <div class="alert-text"</div> <span class="alert-title" data-notify="title">' + title + '</span> <span data-notify="message">' + message + '</span></div>',
        "",
        {
          timeOut: 8000,
          closeButton: true,
          enableHtml: true,
          tapToDismiss: false,
          titleClass: "alert-title",
          positionClass: "toast-top-center",
          toastClass:
            "ngx-toastr alert alert-dismissible alert-danger alert-notify"
        }
      );
    }
    if (type === SiteModel.MessageSeverity.Success) {
      this.toastr.show(
        '<span class="alert-icon ni ni-bell-55" data-notify="icon"></span> <div class="alert-text"</div> <span class="alert-title" data-notify="title">' + title + '</span> <span data-notify="message">' + message + '</span></div>',
        "",
        {
          timeOut: 8000,
          closeButton: true,
          enableHtml: true,
          tapToDismiss: false,
          titleClass: "alert-title",
          positionClass: "toast-top-center",
          toastClass:
            "ngx-toastr alert alert-dismissible alert-success alert-notify"
        }
      );
    }
    if (type === SiteModel.MessageSeverity.Warn) {
      this.toastr.show(
        '<span class="alert-icon ni ni-bell-55" data-notify="icon"></span> <div class="alert-text"</div> <span class="alert-title" data-notify="title">' + title + '</span> <span data-notify="message">' + message + '</span></div>',
        "",
        {
          timeOut: 8000,
          closeButton: true,
          enableHtml: true,
          tapToDismiss: false,
          titleClass: "alert-title",
          positionClass: "toast-top-center",
          toastClass:
            "ngx-toastr alert alert-dismissible alert-warning alert-notify"
        }
      );
    }
    if (type === SiteModel.MessageSeverity.Info) {
      this.toastr.show(
        '<span class="alert-icon ni ni-bell-55" data-notify="icon"></span> <div class="alert-text"</div> <span class="alert-title" data-notify="title">' + title + '</span> <span data-notify="message">' + message + '</span></div>',
        "",
        {
          timeOut: 8000,
          closeButton: true,
          enableHtml: true,
          tapToDismiss: false,
          titleClass: "alert-title",
          positionClass: "toast-top-center",
          toastClass:
            "ngx-toastr alert alert-dismissible alert-info alert-notify"
        }
      );
    }
  }

  // GetAllCountry = (): void => {
  //   this.masterDataService.getAllCountry(this.Token).subscribe(result => {
  //     if(result) {
  //       console.log(result);
  //     }
  //   })
  // }
}


