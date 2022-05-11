import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
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
  filteredjoblist: SiteModel.Jobs[] = [];
  job: SiteModel.Jobs = new SiteModel.Jobs();
  city: SiteModel.City;
  jobBtnText: string = "Save";
  modalRef: BsModalRef;
  isJobAdding: boolean = true;
  cities: SiteModel.City[] = [];
  currencies: SiteModel.Currency[] = [];
  currency: SiteModel.Currency;
  users: SiteModel.User[] = [];
  show: boolean = false;
  hide: boolean = true;
  defaultModal: BsModalRef;
  default = {
    keyboard: true,
    class: "modal-dialog-centered"
  };
  jobDescription: string = "";
  lists: SiteModel.ListSchema[] = [];
  constructor(private modalService: BsModalService,
    private masterdata: MasterDataService,
    private base: Base,
    private router: Router,
    private managejobservice: ManagejobsService) { }

  ngOnInit(): void {
    this.getAllCities();
    this.getAllJobs();
    this.GetUserByType();
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

  getCurrenciesById = (id): void => {
    this.masterdata.getCurrenciesById(id).subscribe(result => {
      if (result) {
        this.currency = result;
      }
    })
  }

  getCitiesById = (id): void => {
    this.masterdata.getCitiesById(id).subscribe(result => {
      if (result) {
        this.city = result;
      }
    })
  }



  getAllJobs = (): void => {
    this.managejobservice.getAllJobs().subscribe(result => {
      if (result) {
        this.joblist = result;
        this.filteredjoblist = result;
        this.filteredjoblist.sort((a, b) => { return a.created_at < b.created_at ? 1 : -1 });
        this.filteredjoblist.forEach(o => {
          if (o.job_desc.length > 50) {
            o.readMore = true;
          }
        })
        this.makeJobBoard();
      }
    });
  }

  makeJobBoard = (): void => {
    var listItem = new SiteModel.ListSchema();
    const d = new Date()
    listItem.name = "Today";
    var today = this.filteredjoblist.filter(o => new Date(o.created_at).getDate() == d.getDate())
    listItem.cards = today;
    this.lists.push(listItem);
    listItem = new SiteModel.ListSchema();
    listItem.name = "Last 7 Days";
    var fdate = new Date(d.setDate(d.getDate() - 7)).getDate();
    var edate = new Date(d.setDate(d.getDate() - 1)).getDate();
    var last7Days = this.filteredjoblist.filter(o => new Date(o.created_at).getDate() >= fdate && new Date(o.created_at).getDate() < edate)
    listItem.cards = last7Days;
    this.lists.push(listItem);
    listItem = new SiteModel.ListSchema();
    listItem.name = "Last 15 Days";
    fdate = new Date(d.setDate(d.getDate() - 15)).getDate();
    edate = new Date(d.setDate(d.getDate() - 7)).getDate();
    var last14Days = this.filteredjoblist.filter(o => new Date(o.created_at).getDate() >= fdate && new Date(o.created_at).getDate() < edate)
    listItem.cards = last14Days;
    this.lists.push(listItem);
    listItem = new SiteModel.ListSchema();
    listItem.name = "Last 30 Days";
    fdate = new Date(d.setDate(d.getDate() - 30)).getDate();
    edate = new Date(d.setDate(d.getDate() - 15)).getDate();
    var last30Days = this.filteredjoblist.filter(o => new Date(o.created_at).getDate() >= fdate && new Date(o.created_at).getDate() < edate)
    listItem.cards = last30Days;
    this.lists.push(listItem); 
    listItem = new SiteModel.ListSchema();
    listItem.name = "More than 30 Days";
    fdate = new Date(d.setDate(d.getDate() - 300)).getDate();
    edate = new Date(d.setDate(d.getDate() - 30)).getDate();
    var last100Days = this.filteredjoblist.filter(o => new Date(o.created_at).getDate() >= fdate && new Date(o.created_at).getDate() < edate)
    listItem.cards = last100Days;
    this.lists.push(listItem);    
  }

  GetUserByType = (): void => {
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
    this.filteredjoblist = this.joblist;
    this.filteredjoblist.forEach(o => {
      if (o.job_desc.length > 50) {
        o.readMore = true;
      }
    })
    this.filteredjoblist = this.filteredjoblist.filter(function (d) {
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
    //this.openModal(template)
    this.show = true;
    this.hide = false;
  }

  updateJob = (template: TemplateRef<any>, job: SiteModel.Jobs): void => {
    this.getCitiesById(job.location);
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

  ShowHide = () : void => {
    this.show = false;
    this.hide = true;
  }

  ClearValues = () : void => {
    this.job = new SiteModel.Jobs;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  openDefaultModal(modalDefault: TemplateRef<any>, jobDescription: string) {
    this.jobDescription = jobDescription;
    this.defaultModal = this.modalService.show(modalDefault, this.default);
  }

  createJobs = (): void => {
    if (this.isJobAdding) {
      this.job.currency = 1;
      this.managejobservice.createJob(this.job).subscribe(result => {
        if (result) {
          this.getAllJobs();
          this.base.showNotification(SiteModel.MessageSeverity.Success, "Create Job", "Job created Successfully");
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
      this.managejobservice.updateJob(this.job).subscribe(result => {
        if (result) {
          this.getAllJobs();
          this.base.showNotification(SiteModel.MessageSeverity.Success, "Update job", "Job updated Successfully");
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
  viewApplications = (template: TemplateRef<any>, job: SiteModel.Jobs): void => {
    this.router.navigate(['/admin/manageapplications'], {
      state: {
        job: job
      }
    });
  }
}
