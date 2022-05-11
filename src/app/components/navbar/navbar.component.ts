import { Component, OnInit, ElementRef, TemplateRef } from "@angular/core";
import { ROUTES } from "../sidebar/sidebar.component";
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';


import {
  Location,
  LocationStrategy,
  PathLocationStrategy
} from "@angular/common";
import { Base } from "src/app/common/base";
import { SiteModel } from "src/app/models/sitemodel";
import swal from "sweetalert2";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { ComponentService } from "../component.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public location: Location;
  sidenavOpen: boolean = true;
  loggedInUserName: string;
  loggerInUserType: string;
  lastlogin: string;
  public profileImage: string = "";
  modalRef: BsModalRef;
  cpmodalRef: BsModalRef;
  constructor(
    location: Location,
    private element: ElementRef,
    private router: Router,
    public base: Base,
    private modalService: BsModalService,
    private componentService: ComponentService
  ) {
    this.location = location;    
    this.router.events.subscribe((event: Event) => {
       if (event instanceof NavigationStart) {
           // Show loading indicator

       }
       if (event instanceof NavigationEnd) {
           // Hide loading indicator

           if (window.innerWidth < 1200) {
             document.body.classList.remove("g-sidenav-pinned");
             document.body.classList.add("g-sidenav-hidden");
             this.sidenavOpen = false;
           }
       }

       if (event instanceof NavigationError) {
           // Hide loading indicator

           // Present error to user
           console.log(event.error);
       }
   });

  }

  ngOnInit() {
    var userDetails: SiteModel.UserDetails = this.base.GetLoggedInUser();
    this.loggedInUserName = userDetails.username;
    this.loggerInUserType = userDetails.user_type;
    this.lastlogin = userDetails.last_login;
    var date = new Date(this.lastlogin).toLocaleString();
    this.lastlogin = date.toString();
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    //this.profileImage = this.base.GetProfileImage();
    this.base.profileImage.subscribe(pi => this.profileImage = pi);
  }

  AddImage = (template: TemplateRef<any>) => {
    this.openModal(template);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ChangePassword = (template: TemplateRef<any>) => {
    this.openCPModal(template);
  }

  openCPModal(template: TemplateRef<any>) {
    this.cpmodalRef = this.modalService.show(template);
  }

  uploadProfilImage = (files: any) => {
    if(files.target.files[0].length === 0 || !this.isValidFile(files.target.files[0])){
      return;
    }
    var file = files.target.files[0];
    const formData = new FormData();
    formData.append('file', file, file.name);
    this.componentService.UploadProfileImage(formData).subscribe(result => {
      if (result) {
        this.base.profileImage
        this.base.SetProfileImage(result["profile_image"]);
        this.modalRef.hide();
      }
    },
      error => {
        this.base.showNotification(SiteModel.MessageSeverity.Danger, "Profile Image", "Problem in image upload");
      });
  }

  isValidFile = (file: any): boolean => {
    if (file.name.endsWith(".jpg")) {
      return true;
    }
    else {
      //this.commonService.ShowMessage("Error", "File Format accepts only xlsx,xlsm", SiteModel.MessageSeverity.Error);
      return false;
    }
  }

  getTitle() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === "#") {
      titlee = titlee.slice(1);
    }

    for (var item = 0; item < this.listTitles.length; item++) {
      if (this.listTitles[item].path === titlee) {
        return this.listTitles[item].title;
      }
    }
    return "Dashboard";
  }

  openSearch() {
    document.body.classList.add("g-navbar-search-showing");
    setTimeout(function() {
      document.body.classList.remove("g-navbar-search-showing");
      document.body.classList.add("g-navbar-search-show");
    }, 150);
    setTimeout(function() {
      document.body.classList.add("g-navbar-search-shown");
    }, 300);
  }
  closeSearch() {
    document.body.classList.remove("g-navbar-search-shown");
    setTimeout(function() {
      document.body.classList.remove("g-navbar-search-show");
      document.body.classList.add("g-navbar-search-hiding");
    }, 150);
    setTimeout(function() {
      document.body.classList.remove("g-navbar-search-hiding");
      document.body.classList.add("g-navbar-search-hidden");
    }, 300);
    setTimeout(function() {
      document.body.classList.remove("g-navbar-search-hidden");
    }, 500);
  }
  openSidebar() {
    if (document.body.classList.contains("g-sidenav-pinned")) {
      document.body.classList.remove("g-sidenav-pinned");
      document.body.classList.add("g-sidenav-hidden");
      this.sidenavOpen = false;
    } else {
      document.body.classList.add("g-sidenav-pinned");
      document.body.classList.remove("g-sidenav-hidden");
      this.sidenavOpen = true;
    }
  }
  toggleSidenav() {
    if (document.body.classList.contains("g-sidenav-pinned")) {
      document.body.classList.remove("g-sidenav-pinned");
      document.body.classList.add("g-sidenav-hidden");
      this.sidenavOpen = false;
    } else {
      document.body.classList.add("g-sidenav-pinned");
      document.body.classList.remove("g-sidenav-hidden");
      this.sidenavOpen = true;
    }
  }
  questionSwal() {
    swal.fire({
      title: "Are you sure?",
      icon: "question",
      buttonsStyling: false,
      customClass: {
        confirmButton: "btn btn-default"
      }
    });
    swal.fire({
      title: 'Do you want to logout?',
      icon: "question",
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: 'No',
      customClass: {
        actions: 'my-actions',
        cancelButton: 'order-1 right-gap',
        confirmButton: 'order-2',
        denyButton: 'order-3',
      }
    }).then((result) => {
      if (result.isConfirmed) {
        this.base.ClearToken();
        this.router.navigate(['/auth/login']);
        swal.fire('Logged Out!', '', 'success')
      } 
    })
  }

  }
