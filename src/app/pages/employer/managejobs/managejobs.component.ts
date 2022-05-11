import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { SelectionType } from '@swimlane/ngx-datatable';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Base } from 'src/app/common/base';
import { SiteModel } from 'src/app/models/sitemodel';
import { MasterDataService } from 'src/app/services/masterdata.service';
import { ManagejobsService } from './managejobs.service';

@Component({
  selector: 'app-managejobs',
  templateUrl: './managejobs.component.html',
  styleUrls: ['./managejobs.component.scss']
})
export class ManagejobsComponent implements OnInit {
  entries: number = 10;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  SelectionType = SelectionType;
  joblist: SiteModel.Jobs[] = [];
  job: SiteModel.Jobs = new SiteModel.Jobs();
  jobBtnText: string = "Save";
  modalRef: BsModalRef;
  isJobAdding: boolean = true;
  cities: SiteModel.City[] = [];
  currencies: SiteModel.Currency[] = [];
  users: SiteModel.User[] = [];
  city: SiteModel.City;
  currency: SiteModel.Currency;
  user: SiteModel.CreateUser;
  defaultModal: BsModalRef;
  show: boolean = false;
  hide: boolean = true;
  default = {
    keyboard: true,
    class: "modal-dialog-centered"
  };
  jobDescription: string = "";

  constructor(private modalService: BsModalService,
    private masterdata: MasterDataService,
    private base: Base,
    private router: Router,
    private managejobservice: ManagejobsService) { }

  ngOnInit(): void {
    this.getAllCities();
    this.getAllJobs();
    this.getUserByType();
    this.getAllCurrencies();
  }

  getAllCities = (): void => {
    this.masterdata.getAllCities().subscribe(result => {
      if (result) {
        this.cities = result;
      }
    });
  }

  getAllCurrencies = (): void => {
    this.masterdata.getAllCurrencies().subscribe(result => {
      if (result) {
        this.currencies = result;
      }
    });
  }

  getCitiesById = (id): void => {
    this.masterdata.getCitiesById(id).subscribe(result => {
      if (result) {
        this.city = result;
      }
    })
  }

  getCurrenciesById = (id): void => {
    this.masterdata.getCurrenciesById(id).subscribe(result => {
      if (result) {
        this.currency = result;
      }
    })
  }

  getUserById = (id): void => {
    this.masterdata.getUserById(id).subscribe(result => {
      if (result) {
        this.user = result;
      }
    })
  }

  getAllJobs = (): void => {
    this.managejobservice.getAllJobs().subscribe(result => {
      if (result) {
        this.joblist = result;
        this.joblist.forEach(o => {
          if (o.job_desc.length > 50) {
            o.readMore = true;
          }
        })
        this.temp = this.joblist.map((prop, key) => {
          return {
            ...prop,
            id: key
          };
        });
      }
    });
  }

  getUserByType = (): void => {
    this.masterdata.getUserByType('EMPLOYER').subscribe(result => {
      if (result) {
        this.users = result;
      }
    })
  }

  entriesChange($event) {
    this.entries = $event.target.value;
  }
  filterTable($event) {
    let val = $event.target.value;
    this.joblist.forEach(o => {
      if (o.job_desc.length > 50) {
        o.readMore = true;
      }
    })
    this.temp = this.joblist.filter(function (d) {
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

  addjob = (template: TemplateRef<any>): void => {
    this.job = new SiteModel.Jobs();
    this.isJobAdding = true;
    this.jobBtnText = "Add";
    this.show = true;
    this.hide = false;
    // this.openModal(template)
  }

  updateJob = (template: TemplateRef<any>, job: SiteModel.Jobs): void => {
    debugger;
    this.getCitiesById(job.location);
    this.getUserByType();
    this.job = job;
    this.isJobAdding = false;
    this.jobBtnText = "Update";
    this.openModal(template)
  }

  updateJobs = (job: SiteModel.Jobs): void => {
    this.job = job;
    this.show = true;
    this.hide = false;
    this.jobBtnText = "Update";
  }

  viewApplications = (template: TemplateRef<any>, job: SiteModel.Jobs): void => {
    this.router.navigate(['/employer/manageapplications'], {
      state: {
        job: job
      }
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  openDefaultModal(modalDefault: TemplateRef<any>, jobDescription: string) {
    this.jobDescription = jobDescription;
    this.defaultModal = this.modalService.show(modalDefault, this.default);
  }

  ClearValues = () : void => {
    this.job = new SiteModel.Jobs();
  }

  ShowHide = () : void => {
    this.show = false;
    this.hide = true;
  }
  
  createJobs = (): void => {
    if (!this.isJobAdding) {
      this.managejobservice.createJob(this.job).subscribe(result => {
        if (result) {
          this.base.showNotification(SiteModel.MessageSeverity.Success, "Create Job", "Job created Successfully");
          this.getAllJobs();
          this.modalRef.hide();
          this.show = false;
          this.hide= true;
        }
      },
        error => {
          this.base.showNotification(SiteModel.MessageSeverity.Danger, "Create Job", "Problem in job creation");
        });
    }
    else {
      debugger;
      this.managejobservice.updateJob(this.job).subscribe(result => {
        if (result) {
          this.base.showNotification(SiteModel.MessageSeverity.Success, "Update job", "Job updated Successfully");
          this.getAllJobs();
          this.modalRef.hide();
          this.show = false;
          this.hide= true;
        }
      },
        error => {
          this.base.showNotification(SiteModel.MessageSeverity.Danger, "Update job", "Problem in job update");
        });
    }
  }
}
