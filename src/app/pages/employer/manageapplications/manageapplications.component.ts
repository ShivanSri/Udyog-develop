import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { SelectionType } from '@swimlane/ngx-datatable';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Base } from 'src/app/common/base';
import { SiteModel } from 'src/app/models/sitemodel';
import { MasterDataService } from 'src/app/services/masterdata.service';
import { ManageapplicationsService } from './manageapplicationsservice.service';

@Component({
  selector: 'app-manageapplications',
  templateUrl: './manageapplications.component.html',
  styleUrls: ['./manageapplications.component.scss']
})
export class ManageapplicationsComponent implements OnInit {
  entries: number = 10;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  SelectionType = SelectionType;
  applicationlist: SiteModel.ApplicationDetails[] = [];
  application: SiteModel.ApplicationDetails = new SiteModel.ApplicationDetails();
  applicationBtnText: string = "Save";
  modalRef: BsModalRef;
  isApplicationAdding: boolean = true;
  cities: SiteModel.City[] = [];
  //users: SiteModel.User [] = [];
  city: SiteModel.City;
  //user: SiteModel.CreateUser;
  job: SiteModel.Jobs;
  routeState: any;
  id: number;
  show: boolean = false;
  hide: boolean = true;
  selectedDocument: SiteModel.Documents = new SiteModel.Documents();
  constructor(private modalService: BsModalService,
    private router: Router,
    private masterdata: MasterDataService,
    private base: Base,
    private manageapplicationservice: ManageapplicationsService) { 
      if (this.router.getCurrentNavigation().extras.state) {
        this.routeState = this.router.getCurrentNavigation().extras.state;
        if (this.routeState) {
          this.job = this.routeState.job;
          this.id = this.job.id;
        }
      }
    }

  ngOnInit(): void {
    this.getAllCities();
    this.getAllApplicationsByJobId(this.id);
  }

  getAllCities = (): void => {
    this.masterdata.getAllCities().subscribe(result => {
      if (result) {
        this.cities = result;
      }
    });
  }

  getCitiesById = (id): void => {
    this.masterdata.getCitiesById(id).subscribe(result => {
      if(result) {
        this.city = result;
      }
    })
  }

  getAllApplicationsByJobId = (id): void => {
    this.manageapplicationservice.getApplicationsByJobId(id).subscribe(result => {
      if (result) {
        this.applicationlist = result;
        console.log(this.applicationlist);
        this.temp = this.applicationlist.map((prop, key) => {
          return {
            ...prop,
            id: key
          };
        });
      }
    });
  }

  entriesChange($event) {
    this.entries = $event.target.value;
  }
  filterTable($event) {
    let val = $event.target.value;
    this.temp = this.applicationlist.filter(function (d) {
      for (var key in d) {
        if (d[key] != null && d[key].toString().toLowerCase().indexOf(val) !== -1) {
          return true;
        }
      }
      return false;
    });
  }
  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    //this.selected.push(...selected);
  }
  onActivate(event) {
    this.activeRow = event.row;
  }

  addapplication = (template: TemplateRef<any>): void => {
    this.application = new SiteModel.ApplicationDetails();
    this.isApplicationAdding = true;
    this.applicationBtnText = "Add";
    this.show = true;
    this.hide = false;
    this.openModal(template)
  }

  // uploadDocument = (files: any) => {

  //   if (files.target.files[0].length === 0) {
  //     return;
  //   }
  //   var file = files.target.files[0];
  //   const formData = new FormData();
  //   formData.append('file', file, file.name);
  //   formData.append('document_type', this.selectedDocument.document_type_value);
  //   formData.append('alias_name', this.selectedDocument.alias_name ? this.selectedDocument.alias_name : "");
  //   this.profileservice.uploadDocument(formData).subscribe(result => {
  //     if (result) {
  //       //this.base.SetProfileImage(result["profile_image"]);
  //       //this.modalRef.hide();
  //       this.base.showNotification(SiteModel.MessageSeverity.Success, "Add Document", "Document added Successfully");
  //       var filename = result.document_location.split("-");
  //       if (filename.length > 0) {
  //         result.fileName = filename[1];
  //       }

  //       this.profile.profile_docs.push(result);
  //       this.profile.profile_docs.sort(this.sortFunc);
  //     }
  //   },
  //     error => {
  //       this.base.showNotification(SiteModel.MessageSeverity.Danger, "Add Document", "Problem in Document upload");
  //     });
  // }

  ClearValues = () : void => {
    this.application = new SiteModel.ApplicationDetails();
  }

  ShowHide = () : void => {
    this.show = false;
    this.hide = true;
  }

  // updateApplication = (template: TemplateRef<any>, application: SiteModel.ApplicationDetails): void => {
  //   //this.getCitiesById(job.location);
  //   //this.getUserByType();
  //   this.application = application;
  //   this.isApplicationAdding = true;
  //   this.applicationBtnText = "Update";
  //   this.openModal(template)
  // }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  createApplications = (): void => { 
    if (this.isApplicationAdding) {
      this.manageapplicationservice.createApplication(this.application).subscribe(result => {
        if (result) {
          this.base.showNotification(SiteModel.MessageSeverity.Success, "Create Job", "Job created Successfully");
          this.modalRef.hide();
          this.show= false;
          this.hide = true;
        }
      },
        error => {
          this.base.showNotification(SiteModel.MessageSeverity.Danger, "Create Application", "Problem in application creation");
        });
    }
    else {
      this.manageapplicationservice.updateApplication(this.application).subscribe(result => {
        if (result) {
          this.base.showNotification(SiteModel.MessageSeverity.Success, "Update Application", "Application updated Successfully");
          this.modalRef.hide();
          this.show= false;
          this.hide = true;
        }
      },
        error => {
          this.base.showNotification(SiteModel.MessageSeverity.Danger, "Update application", "Problem in application update");
        });
    }
  }

}
