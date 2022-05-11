import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { SelectionType } from '@swimlane/ngx-datatable';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Base } from 'src/app/common/base';
import { SiteModel } from 'src/app/models/sitemodel';
import { MasterDataService } from 'src/app/services/masterdata.service';
import { ManageapplicationsService } from './manageapplications.service';

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
  filteredApplicationList: SiteModel.ApplicationDetails[];
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
    this.getAllApplications();
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

  getAllApplications = (): void => {
    this.manageapplicationservice.getAllApplications().subscribe(result => {
      if (result) {
        this.applicationlist = result;
        this.filteredApplicationList = result;
      }
    });
  }

  entriesChange($event) {
    this.entries = $event.target.value;
  }
  filterTable($event) {
    let val = $event.target.value;
    this.filteredApplicationList = this.applicationlist;
    this.filteredApplicationList = this.filteredApplicationList.filter(function (d) {
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

  // addapplication = (template: TemplateRef<any>): void => {
  //   this.application = new SiteModel.ApplicationDetails();
  //   this.isApplicationAdding = true;
  //   this.applicationBtnText = "Add";
  //   this.openModal(template)
  // }

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

  // createApplications = (): void => { 
  //   if (this.isApplicationAdding) {
  //     this.manageapplicationservice.createApplication(this.application).subscribe(result => {
  //       if (result) {
  //         this.base.showNotification(SiteModel.MessageSeverity.Success, "Create Job", "Job created Successfully");
  //         this.modalRef.hide();
  //       }
  //     },
  //       error => {
  //         this.base.showNotification(SiteModel.MessageSeverity.Danger, "Create Application", "Problem in application creation");
  //       });
  //   }
  //   else {
  //     this.manageapplicationservice.updateApplication(this.application).subscribe(result => {
  //       if (result) {
  //         this.base.showNotification(SiteModel.MessageSeverity.Success, "Update Application", "Application updated Successfully");
  //         this.modalRef.hide();
  //       }
  //     },
  //       error => {
  //         this.base.showNotification(SiteModel.MessageSeverity.Danger, "Update application", "Problem in application update");
  //       });
  //   }
  // }


}
