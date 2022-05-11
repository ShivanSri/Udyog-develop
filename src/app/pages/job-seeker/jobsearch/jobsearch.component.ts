import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Base } from 'src/app/common/base';
import { SiteModel } from 'src/app/models/sitemodel';
import { AppliedjobsService } from '../appliedjobs/appliedjobs.service';
import { ProfileserviceService } from '../profile/profileservice.service';
import { JobsearchService } from './jobsearch.service';

@Component({
  selector: 'app-jobsearch',
  templateUrl: './jobsearch.component.html',
  styleUrls: ['./jobsearch.component.scss']
})
export class JobsearchComponent implements OnInit {
  focus: boolean;
  focus1: boolean;
  focus2: boolean;
  focus3: boolean;
  focus4: boolean;
  focus5: boolean;
  joblist: SiteModel.JobSearch[] = [];
  searchKey: string = "";
  profile: SiteModel.Profile = new SiteModel.Profile();
  profile_docs: SiteModel.ProfileDocs[] = [];
  application: SiteModel.Application = new SiteModel.Application();
  modalRef: BsModalRef;
  jobApplicationList: SiteModel.JobApplication[] = [];
  job: SiteModel.JobSearch = new SiteModel.JobSearch();
  defaultModal: BsModalRef;
  default = {
    keyboard: true,
    class: "modal-dialog-centered"
  };
  jobDescription: string = "";
  constructor(private jobsearchService: JobsearchService,
    private profileservice: ProfileserviceService,
    private base: Base,
    private modalService: BsModalService,
    private appliedjobsService: AppliedjobsService) { }

  ngOnInit(): void {
    this.getMyProfile();
    this.SearchAllJobs();
  }

  getMyProfile = (): void => {
    this.profileservice.getMyProfile().subscribe(result => {
      if (result) {
        this.profile = result;
        this.profile.profile_docs.forEach(o => {
          var filename = o.document_location.split("-");
          if (filename.length > 0) {
            o.fileName = filename[1];
          }
        })
        this.profile_docs = this.profile.profile_docs.filter(f => f.document_type == "Resume");
        this.profile_docs.sort((a, b) => { return a.created_at < b.created_at ? 1 : -1 });
      }
    });
  }
  SearchJobs = () => {
    if (this.searchKey == '') {
      this.SearchAllJobs();
    }
    else {
      this.jobsearchService.searchJobs(this.searchKey).subscribe(result => {
        if (result) {
          let res = result.results.filter(a => !a.applied);
          this.joblist = res;
          this.joblist.forEach(o => {
            if (o.job_desc.length > 50) {
              o.readMore = true;
            }
          })
          this.getJobapplication();
        }
      });
    }
  }

  SearchAllJobs = () => {
    this.jobsearchService.searchAllJobs().subscribe(result => {
      if (result) {
        let res = result.results.filter(a => !a.applied);
        this.joblist = res;
        this.joblist.forEach(o => {
          if (o.job_desc.length > 50) {
            o.readMore = true;
          }
        })
        this.getJobapplication();
      }
    });
  }
  checkResumeCount = (job: SiteModel.JobSearch, template: TemplateRef<any>) => {
    if (this.profile_docs.length == 0) {
      this.base.showNotification(SiteModel.MessageSeverity.Danger, "Apply Job", "Please upload resume before apply");
      return;
    }
    if (this.profile_docs.length == 1) {
      this.job = job;
      this.application.job = job.id;
      this.application.resume = this.profile_docs[0].id;
      this.ApplyJob();
    }
    else {
      this.job = job;
      this.application.job = job.id;
      this.openModal(template);
    }
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  openDefaultModal(modalDefault: TemplateRef<any>, jobDescription: string) {
    this.jobDescription = jobDescription;
    this.defaultModal = this.modalService.show(modalDefault, this.default);
  }
  ApplyJob = () => {
    this.jobsearchService.applyJob(this.application).subscribe(result => {
      if (result) {
        this.base.showNotification(SiteModel.MessageSeverity.Success, "Apply Job", "Job Applied Successfully");
        this.joblist.filter(h => h.id == this.job.id).forEach(o => {
          o.applied = true;
        })
        this.modalRef.hide();
      }
    },
      error => {
        this.base.showNotification(SiteModel.MessageSeverity.Danger, "Apply Job", "Problem in job apply");
      });

  }

  getJobapplication = () => {
    this.appliedjobsService.getJobapplication().subscribe(result => {
      if (result) {
        this.jobApplicationList = result;
        this.joblist.forEach(j => {
          j.applied = false;
          var t = this.jobApplicationList.filter(h => h.job === j.id);
          if (t.length > 0) {
            j.applied = true;
          }
        })
      }
    });
  }
}
