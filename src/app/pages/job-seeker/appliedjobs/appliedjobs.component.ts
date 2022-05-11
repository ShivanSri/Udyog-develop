import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SiteModel } from 'src/app/models/sitemodel';
import { AppliedjobsService } from './appliedjobs.service';

@Component({
  selector: 'app-appliedjobs',
  templateUrl: './appliedjobs.component.html',
  styleUrls: ['./appliedjobs.component.scss']
})
export class AppliedjobsComponent implements OnInit {

  jobApplicationList: SiteModel.JobApplication[] = [];
  filteredjobApplicationList: SiteModel.JobApplication[] = [];
  jobApplicationStatusList: SiteModel.JobApplicationStatus[] = [];
  searchKey: string = '';
  focus: boolean;
  defaultModal: BsModalRef;
  default = {
    keyboard: true,
    class: "modal-dialog-centered"
  };
  jobDescription: string = "";
  constructor(private appliedjobsService: AppliedjobsService,private modalService: BsModalService) { }

  ngOnInit(): void {
    this.getJobapplicationStatus();
    this.getJobapplication();
  }

  getJobapplication = () => {
    this.appliedjobsService.getJobapplication().subscribe(result => {
      if (result) {
        this.jobApplicationList = result;
        this.filteredjobApplicationList = result;
        this.filteredjobApplicationList.forEach(o => {
          if(o.job_details.job_desc.length > 50){
            o.job_details.readMore = true;
          }
        })
      }
    });
  }
  getJobapplicationStatus = (): void => {
    this.appliedjobsService.getJobapplicationStatus().subscribe(result => {
      if (result) {
        this.jobApplicationStatusList = result;
      }
    });
  }
  filterJobs = (searchValue: string): void => {
    this.filteredjobApplicationList = this.jobApplicationList;
    this.filteredjobApplicationList = this.filteredjobApplicationList.filter((d) => {     
        return d.application_status_details.status_name.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0;      
        // for (var key in d) {
        //   if (d[key] != null && d[key].toString().toLowerCase().indexOf(searchValue) !== -1) {
        //     return true;
        //   }
        // }
        // return false;
    });
  }
  openDefaultModal(modalDefault: TemplateRef<any>, jobDescription: string) {
    this.jobDescription = jobDescription;
    this.defaultModal = this.modalService.show(modalDefault, this.default);
  }
}
