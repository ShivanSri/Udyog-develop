import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Selectr from 'mobius1-selectr';
import { IMultiSelectOption } from 'ngx-bootstrap-multiselect';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Base } from 'src/app/common/base';
import { SiteModel } from 'src/app/models/sitemodel';
import { MasterDataService } from 'src/app/services/masterdata.service';
import { MyProfileserviceService } from './myprofileservice.service';
import { id } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})
export class MyprofileComponent implements OnInit {
  focus: boolean;
  focus1: boolean;
  focus2: boolean;
  focus3: boolean;
  focus4: boolean;
  focus5: boolean;
  focus6: boolean;
  focus7: boolean;
  focus8: boolean;
  focus9: boolean;
  focus10: boolean;
  focus11: boolean;focus12: boolean;
  focus13: boolean;
  focus14: boolean;
  focus15: boolean;
  focus16: boolean;
  focus17: boolean;focus18: boolean;
  focus19: boolean;
  focus20: boolean;
  focus21: boolean;
  focus22: boolean;
  focus23: boolean;focus24: boolean;
  focus25: boolean;
  focus26: boolean;
  focus27: boolean;
  focus28: boolean;
  focus29: boolean;focus30: boolean;
  username: string;
  // userWorkSummary: SiteModel.Experience[] = [];
  // isExperienced: boolean = true;
  modalRef: BsModalRef;
  commodalRef: BsModalRef;
  // crtmodalRef: BsModalRef;
  // langmodalRef: BsModalRef;
  cities: SiteModel.City[] = [];
  profile: SiteModel.EmployerProfile = new SiteModel.EmployerProfile();
  user: SiteModel.CreateUser = new SiteModel.CreateUser();
  companies: SiteModel.Companies = new SiteModel.Companies();
  employers: SiteModel.EmployerProfile = new SiteModel.EmployerProfile();
  // companyProfile: SiteModel.Profile = new SiteModel.Profile();
  multiSelectCities: IMultiSelectOption[];
  // company: SiteModel.Companies = new SiteModel.Companies();
  userDetails: SiteModel.UserDetails;
  // education: SiteModel.Education = new SiteModel.Education();
  // certification: SiteModel.CertificatioandRewards = new SiteModel.CertificatioandRewards();
  // language: SiteModel.Knownlanguage = new SiteModel.Knownlanguage();
  company: SiteModel.Companies[] = [];
  comp: SiteModel.Companies = new SiteModel.Companies();
  comBtnText: string = "Add";
  // crtBtnText: string = "Add";
  // langBtnText: string = "Add";
  // isExpAdding: boolean = true;
  isComAdding: boolean = true;
  // isCrtAdding: boolean = true;
  // isLangAdding: boolean = true;
  // universities: SiteModel.University[] = [];
  // languages: SiteModel.Languages[] = [];
  constructor(private modalService: BsModalService,
    private profileservice: MyProfileserviceService,
    private masterdata: MasterDataService,
    private base: Base) { }

  ngOnInit(): void {
    this.getAllCities();
    this.getAllCompany();
    this.getMyProfile();
  }

  updateCompany = (template: TemplateRef<any>,company: SiteModel.Companies): void => {
    //this.company = company;
    this.isComAdding = false;
    this.comBtnText = "Update";
    this.openComModal(template)
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  openComModal(template: TemplateRef<any>) {
    this.commodalRef = this.modalService.show(template);
  }
  

  getAllCities = (): void => {
    this.masterdata.getAllCities().subscribe(result => {
      if (result) {
        this.cities = result;
        this.multiSelectCities = result;
      }
    });
  }

  getAllCompany = (): void => {
    this.masterdata.getAllCompany().subscribe(result => {
      if (result) {
        // this.company = result;
        // console.log(this.company);
      }
    });
  }

  getMyProfile = (): void => {
    debugger;
    this.profileservice.getMyProfile().subscribe(result => {
      if (result) {
        debugger;
        this.profile = result;
        console.log(this.profile);
        // this.base.SetProfileImage(this.profile.profile_image_url);
        // this.profile.profile_docs.forEach(o => {
        //   var filename = o.document_location.split("-");
        //   if (filename.length > 0) {
        //     o.fileName = filename[1];
        //   }
        //})
      }
    });
  }

  createProfile = (): void => {
    this.profileservice.createProfile(this.profile).subscribe(result => {
      if (result) {
        this.base.showNotification(SiteModel.MessageSeverity.Success, "Save Profile", "Profile Data Updated Successfully");
      }
    },
      error => {
        this.base.showNotification(SiteModel.MessageSeverity.Danger, "Save Profile", "Problem in profile save");
      });
  }

  updateUser = (): void => {
    this.userDetails = this.base.GetLoggedInUser();
    this.profileservice.updateCurrentUser(this.userDetails.id).subscribe(result => {
      if (result) {
        this.base.showNotification(SiteModel.MessageSeverity.Success, "Update Profile", "Profile Data Updated Successfully");  
      }
    })
  }


  saveCompanyDetails = (): void => {
    console.log(this.profile);
      this.comp = this.profile.company_details;
      console.log(this.comp);
      this.profileservice.updateCompany(this.comp).subscribe(result => {
        if (result) {
          this.base.showNotification(SiteModel.MessageSeverity.Success, "Update Company", "Company updated Successfully");
          this.commodalRef.hide();
        }
      },
        error => {
          this.base.showNotification(SiteModel.MessageSeverity.Danger, "Update Company", "Problem in company update");
        });
    }
  }
