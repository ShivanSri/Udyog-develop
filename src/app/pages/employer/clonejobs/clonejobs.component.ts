import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Base } from 'src/app/common/base';
import { SiteModel } from 'src/app/models/sitemodel';
import { AppliedjobsService } from '../../job-seeker/appliedjobs/appliedjobs.service';
import { ProfileserviceService } from '../../job-seeker/profile/profileservice.service';
import { CloneJobService } from './clonejobs.service';

@Component({
  selector: 'app-clonejobs',
  templateUrl: './clonejobs.component.html',
  styleUrls: ['./clonejobs.component.scss']
})
export class ClonejobsComponent implements OnInit {
  focus: boolean;
  focus1: boolean;
  focus2: boolean;
  focus3: boolean;
  focus4: boolean;
  focus5: boolean;
  id: number;
  joblist: SiteModel.JobSearch[] = [];
  searchKey: string = "";
  profile: SiteModel.Profile = new SiteModel.Profile();
  profile_docs: SiteModel.ProfileDocs[] = [];
  application: SiteModel.Application = new SiteModel.Application();
  modalRef: BsModalRef;
  jobApplicationList: SiteModel.JobApplication[] = [];
  job: SiteModel.JobSearch = new SiteModel.JobSearch();
  defaultModal: BsModalRef;
  cloned: boolean = false;
  archievedJobs: boolean = true;
  clonedJobs: boolean = false;
  default = {
    keyboard: true,
    class: "modal-dialog-centered"
  };
  jobDescription: string = "";
  constructor(private clonejobservice: CloneJobService,
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
        this.clonejobservice.searchJobs(this.searchKey).subscribe(result => {
          if (result) {
            let res = result.results.filter(a => a.job_status != "InActive");
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
      debugger;
      this.clonejobservice.searchAllJobs().subscribe(result => {
        if (result) {
          let res = result.results.filter(a => a.job_status == "Inactive");
          this.joblist = res;
          this.joblist.forEach(o => {
            if (o.job_desc.length > 50) {
              o.readMore = true;
            }
          })
          this.clonedJobs = false;
          this.archievedJobs = true;
          this.getJobapplication();
        }
      });
    }

    ActiveJobs = () => {
      debugger;
      this.clonejobservice.searchAllJobs().subscribe(result => {
        if (result) {
          let res = result.results.filter(a => a.job_status != "Inactive");
          this.joblist = res;
          this.joblist.forEach(o => {
            if (o.job_desc.length > 50) {
              o.readMore = true;
            }
          })
          this.clonedJobs = true;
          this.archievedJobs = false;
        }
      });
    }
  
    CloneJob = (job: SiteModel.Jobs) => {
      debugger;
      this.id = job.id;
      this.clonejobservice.updateCloneJobs(this.id, job).subscribe(result => {
        if (result) {
          this.base.showNotification(SiteModel.MessageSeverity.Success, "Clone Job", "Job Cloned Successfully");
          // this.joblist.filter(h => h.id == this.job.id).forEach(o => {
          //   debugger;
          //   o.job_status = 'Inactive';
          //   this.joblist;
            //this.cloned = true;
          //})
          this.clonedJobs = true;
          this.archievedJobs = false;
          this.ActiveJobs();
          this.modalRef.hide();
        }
      },
        error => {
          this.base.showNotification(SiteModel.MessageSeverity.Danger, "Clone Job", "Problem in Job Clone");
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
