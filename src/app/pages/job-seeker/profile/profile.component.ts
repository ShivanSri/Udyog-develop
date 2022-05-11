import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {TranslateService} from "@ngx-translate/core";
import { ActivatedRoute } from '@angular/router';
import Selectr from 'mobius1-selectr';
import { IMultiSelectOption } from 'ngx-bootstrap-multiselect';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Base } from 'src/app/common/base';
import { SiteModel } from 'src/app/models/sitemodel';
import { MasterDataService } from 'src/app/services/masterdata.service';
import { ProfileserviceService } from './profileservice.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
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
  focus11: boolean; focus12: boolean;
  focus13: boolean;
  focus14: boolean;
  focus15: boolean;
  focus16: boolean;
  focus17: boolean; focus18: boolean;
  focus19: boolean;
  focus20: boolean;
  focus21: boolean;
  focus22: boolean;
  focus23: boolean; focus24: boolean;
  focus25: boolean;
  focus26: boolean;
  focus27: boolean;
  focus28: boolean;
  focus29: boolean; focus30: boolean;
  focus31: boolean;
  focus32: boolean;
  focus33: boolean;
  focus34: boolean;
  focus35: boolean;
  focus36: boolean;
  username: string;
  userWorkSummary: SiteModel.Experience[] = [];
  isExperienced: boolean = true;
  modalRef: BsModalRef;
  edumodalRef: BsModalRef;
  crtmodalRef: BsModalRef;
  langmodalRef: BsModalRef;
  cities: SiteModel.City[] = [];
  currencies: SiteModel.Currency[] = [];
  profile: SiteModel.Profile = new SiteModel.Profile();
  multiSelectCities: IMultiSelectOption[];
  experience: SiteModel.Experience = new SiteModel.Experience();
  education: SiteModel.Education = new SiteModel.Education();
  certification: SiteModel.CertificatioandRewards = new SiteModel.CertificatioandRewards();
  language: SiteModel.Knownlanguage = new SiteModel.Knownlanguage();
  companies: SiteModel.Companies = new SiteModel.Companies();
  expBtnText: string = "Add";
  eduBtnText: string = "Add";
  crtBtnText: string = "Add";
  langBtnText: string = "Add";
  isExpAdding: boolean = true;
  isEduAdding: boolean = true;
  isCrtAdding: boolean = true;
  isLangAdding: boolean = true;
  universities: SiteModel.University[] = [];
  languages: SiteModel.Languages[] = [];
  documents: SiteModel.Documents[] = [];
  selectedDocument: SiteModel.Documents = new SiteModel.Documents();
  user: SiteModel.UpdateUser = new SiteModel.UpdateUser();
  userDetails: SiteModel.UserDetails = new SiteModel.UserDetails();
  userId: number = 0;

  constructor(private modalService: BsModalService,
    private profileservice: ProfileserviceService,
    private masterdata: MasterDataService,
    private base: Base,
    private translate: TranslateService,
    private activatedRoute: ActivatedRoute ) { translate.addLangs(['en', 'nl']); translate.setDefaultLang('it')}

  ngOnInit(): void {
    // var selectr: any = document.getElementById("companyname");
    // var options = {};
    // var selectorDefault = new Selectr(selectr, options);
    if (this.activatedRoute.snapshot.paramMap.get('Id') != null) {
      this.userId = parseInt(this.activatedRoute.snapshot.paramMap.get('Id'));
    }
    this.userDetails = this.base.GetLoggedInUser();
    this.getLanguage();
    this.getAllCities();
    this.getAllCompany();
    this.getAllUniversities();
    this.getAllLanguages();
    this.getAllCurrencies();
    this.getUserById();
    if(this.userId != 0){
      this.getProfileById();
    }
    else{
      this.getMyProfile();
    }
    this.documents = this.base.documenttype;
    //this.selectedDocument = this.documents[0];
  }

  switchLang(lang: string) {
    debugger;
    this.translate.use(lang);
  }

  getLanguage = (): void => {
    debugger;
    var lang = this.translate.getLangs();
  }

  EmailFormatValidation() {
    if (this.user.email) {
      var isEmailFormat = this.base.emailRegEx.test(String(this.user.email).toLowerCase());
      if (!(isEmailFormat)) {
        this.base.showNotification(SiteModel.MessageSeverity.Danger, "Email format failed !", "Enter the correct Email Address.");
        return false;
      }
    }
  }

  getToday(): string {
    return new Date().toISOString().split('T')[0]
  }

  addExperience = (template: TemplateRef<any>): void => {
    this.experience = new SiteModel.Experience();
    this.isExpAdding = true;
    this.expBtnText = "Add";
    this.openModal(template)
  }
  updateExperience = (template: TemplateRef<any>, experience: SiteModel.Experience): void => {
    this.experience = experience;
    this.isExpAdding = false;
    this.expBtnText = "Update";
    this.openModal(template)
  }

  addEducation = (template: TemplateRef<any>): void => {
    this.education = new SiteModel.Education();
    this.isEduAdding = true;
    this.eduBtnText = "Add";
    this.openEduModal(template)
  }
  updateEducation = (template: TemplateRef<any>, education: SiteModel.Education): void => {
    this.education = education;
    this.isEduAdding = false;
    this.eduBtnText = "Update";
    this.openEduModal(template)
  }

  addCertification = (template: TemplateRef<any>): void => {
    this.certification = new SiteModel.CertificatioandRewards();
    this.isCrtAdding = true;
    this.crtBtnText = "Add";
    this.openCrtModal(template)
  }
  updateCertification = (template: TemplateRef<any>, certification: SiteModel.CertificatioandRewards): void => {
    this.certification = certification;
    this.isCrtAdding = false;
    this.crtBtnText = "Update";
    this.openCrtModal(template)
  }

  addLanguage = (template: TemplateRef<any>): void => {
    this.language = new SiteModel.Knownlanguage();
    this.isLangAdding = true;
    this.langBtnText = "Add";
    this.openLangModal(template)
  }
  updateLanguage = (template: TemplateRef<any>, language: SiteModel.Knownlanguage): void => {
    this.language = language;
    this.isLangAdding = false;
    this.langBtnText = "Update";
    this.openLangModal(template)
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  openEduModal(template: TemplateRef<any>) {
    this.edumodalRef = this.modalService.show(template);
  }

  openCrtModal(template: TemplateRef<any>) {
    this.crtmodalRef = this.modalService.show(template);
  }

  openLangModal(template: TemplateRef<any>) {
    this.langmodalRef = this.modalService.show(template);
  }

  getAllCities = (): void => {
    this.masterdata.getAllCities().subscribe(result => {
      if (result) {
        this.cities = result;
        this.multiSelectCities = result;
      }
    });
  }

  getAllCurrencies = (): void => {
    this.masterdata.getAllCurrencies().subscribe(result => {
      if (result) {
        this.currencies = result;
      }
    })
  }

  getAllUniversities = (): void => {
    this.masterdata.getAllUniversities().subscribe(result => {
      if (result) {
        this.universities = result;
      }
    });
  }

  getAllCompany = (): void => {
    this.masterdata.getAllCompany().subscribe(result => {
      if (result) {
        this.companies = result;
      }
    });
  }

  getAllLanguages = (): void => {
    this.masterdata.getAllLanguages().subscribe(result => {
      if (result) {
        this.languages = result;
      }
    });
  }


  getMyProfile = (): void => {
    this.profileservice.getMyProfile().subscribe(result => {
      if (result) {
        debugger;
        this.profile = result;
        this.base.SetProfileImage(this.profile.profile_image_url);
        this.profile.profile_docs.sort(this.sortFunc);
        this.profile.experience.sort((a, b) => { return a.end_date < b.end_date ? 1 : -1 });
        this.profile.education.sort((a, b) => { return a.passed_out_year < b.passed_out_year ? 1 : -1 });
        this.profile.profile_docs.forEach(o => {
          var filename = o.document_location.split("-");
          if (filename.length > 0) {
            o.fileName = filename[1];
          }
        })
      }
    });
  }

  getProfileById = (): void => {
    this.profileservice.getProfileById(this.userId).subscribe(result => {
      if (result) {
        this.profile = result;
        //this.base.SetProfileImage(this.profile.profile_image_url);
        this.profile.profile_docs.sort(this.sortFunc);
        this.profile.experience.sort((a, b) => { return a.end_date < b.end_date ? 1 : -1 });
        this.profile.education.sort((a, b) => { return a.passed_out_year < b.passed_out_year ? 1 : -1 });
        this.profile.profile_docs.forEach(o => {
          var filename = o.document_location.split("-");
          if (filename.length > 0) {
            o.fileName = filename[1];
          }
        })
      }
    },
    error => {
      this.base.showNotification(SiteModel.MessageSeverity.Danger,"Profile Error", "Profile not Found");        
    });
  }

  getUserById = (): void => {
    this.masterdata.getUserById(this.userDetails.id).subscribe(result => {
      if (result) {
        this.user = result;
      }
    })
  }

  createProfile = (): void => {
    this.profile.dob = this.user.dob;
    this.profile.mobile_no = parseInt(this.user.mobile_no);
    this.profileservice.createProfile(this.profile).subscribe(result => {
      if (result) {
        this.base.showNotification(SiteModel.MessageSeverity.Success, "Save Profile", "Profile Data Updated Successfully");
        //this.updateUser();
      }
    },
      error => {
        this.base.showNotification(SiteModel.MessageSeverity.Danger, "Save Profile", "Problem in profile save");
      });
  }
  updateUser = (): void => {
    this.user.id = this.profile.id;
    this.profileservice.updateUser(this.user).subscribe(result => {
      if (result) {
        this.base.showNotification(SiteModel.MessageSeverity.Success, "Save Profile", "Profile Data Updated Successfully");
      }
    },
      error => {
        this.base.showNotification(SiteModel.MessageSeverity.Danger, "Save Profile", "Problem in profile save");
      });
  }
  saveExperience = (): void => {
    if (this.experience.start_date > this.experience.end_date) {
      this.base.showNotification(SiteModel.MessageSeverity.Danger, "Add Experience", "Joining date is greater than relieving date");
    }
    else {
      if (this.isExpAdding) {
        var precom = this.profile.experience.filter(o => o.present_company && this.experience.present_company);
        var exp = this.profile.experience.filter(o => (this.experience.start_date >= o.start_date && this.experience.start_date <= o.end_date) ||
          (this.experience.end_date >= o.start_date && this.experience.end_date <= o.end_date));
        if (precom.length === 0) {
          if (exp.length === 0) {
            this.profileservice.addExperience(this.experience).subscribe(result => {
              if (result) {
                this.base.showNotification(SiteModel.MessageSeverity.Success, "Add Experience", "Experience added Successfully");
                this.profile.experience.push(this.experience);
                this.profile.experience.sort((a, b) => { return a.created_at < b.created_at ? 1 : -1 });
                this.modalRef.hide();
              }
            },
              error => {
                this.base.showNotification(SiteModel.MessageSeverity.Danger, "Add Experience", "Problem in experience add");
              });
          }
          else {
            this.base.showNotification(SiteModel.MessageSeverity.Danger, "Add Experience", "Experience Overlapping with existing experience");
          }
        }
        else {
          this.base.showNotification(SiteModel.MessageSeverity.Danger, "Add Experience", "Duplicate present company");
        }
      }
      else {
        var precom = this.profile.experience.filter(o => o.present_company && this.experience.present_company && o.id != this.experience.id);
        var exp = this.profile.experience.filter(o => o.id != this.experience.id && ((this.experience.start_date >= o.start_date && this.experience.start_date <= o.end_date) ||
          (this.experience.end_date >= o.start_date && this.experience.end_date <= o.end_date)));
        if (precom.length === 0) {
          if (exp.length === 0) {
            this.profileservice.updateExperience(this.experience).subscribe(result => {
              if (result) {
                this.base.showNotification(SiteModel.MessageSeverity.Success, "Update Experience", "Experience updated Successfully");
                this.modalRef.hide();
              }
            },
              error => {
                this.base.showNotification(SiteModel.MessageSeverity.Danger, "Update Experience", "Problem in experience update");
              });
          }
          else {
            this.base.showNotification(SiteModel.MessageSeverity.Danger, "Add Experience", "Experience Overlapping with existing experience");
          }
        }
        else {
          this.base.showNotification(SiteModel.MessageSeverity.Danger, "Add Experience", "Duplicate present company");
        }
      }
    }
  }

  saveEducation = (): void => {
    if (this.isEduAdding) {
      this.profileservice.addEducation(this.education).subscribe(result => {
        if (result) {
          this.base.showNotification(SiteModel.MessageSeverity.Success, "Add Education", "Education added Successfully");
          this.profile.education.push(this.education);
          this.profile.education.sort((a, b) => { return a.passed_out_year < b.passed_out_year ? 1 : -1 });
          this.edumodalRef.hide();
        }
      },
        error => {
          this.base.showNotification(SiteModel.MessageSeverity.Danger, "Add Education", "Problem in education add");
        });
    }
    else {
      this.profileservice.updateEducation(this.education).subscribe(result => {
        if (result) {
          this.base.showNotification(SiteModel.MessageSeverity.Success, "Update Education", "Education updated Successfully");
          this.edumodalRef.hide();
        }
      },
        error => {
          this.base.showNotification(SiteModel.MessageSeverity.Danger, "Update Education", "Problem in education update");
        });
    }
  }

  saveCertification = (): void => {
    if (this.isCrtAdding) {
      this.profileservice.addCertification(this.certification).subscribe(result => {
        if (result) {
          this.base.showNotification(SiteModel.MessageSeverity.Success, "Add Certification", "Certification added Successfully");
          this.profile.certifications_and_awards.push(this.certification);
          this.crtmodalRef.hide();
        }
      },
        error => {
          this.base.showNotification(SiteModel.MessageSeverity.Danger, "Add Certification", "Problem in certification add");
        });
    }
    else {
      this.profileservice.updateCertification(this.certification).subscribe(result => {
        if (result) {
          this.base.showNotification(SiteModel.MessageSeverity.Success, "Update Certification", "Certification updated Successfully");
          this.crtmodalRef.hide();
        }
      },
        error => {
          this.base.showNotification(SiteModel.MessageSeverity.Danger, "Update Certification", "Problem in certification update");
        });
    }
  }

  saveLanguage = (): void => {
    if (this.isLangAdding) {
      var lang = this.profile.known_language.filter(o => o.language_name == this.language.language_name);
      if (lang.length === 0) {
        this.profileservice.addLanguage(this.language).subscribe(result => {
          if (result) {
            this.base.showNotification(SiteModel.MessageSeverity.Success, "Add Language", "Language added Successfully");
            this.profile.known_language.push(this.language);
            this.langmodalRef.hide();
          }
        },
          error => {
            this.base.showNotification(SiteModel.MessageSeverity.Danger, "Add Language", "Problem in language add");
          });
      }
      else {
        this.base.showNotification(SiteModel.MessageSeverity.Danger, "Add Language", "Language already added");
      }

    }
    else {
      var lang = this.profile.known_language.filter(o => o.language_name == this.language.language_name && o.id != this.language.id);
      if (lang.length === 0) {
        this.profileservice.updateLanguage(this.language).subscribe(result => {
          if (result) {
            this.base.showNotification(SiteModel.MessageSeverity.Success, "Update Language", "Language updated Successfully");
            this.langmodalRef.hide();
          }
        },
          error => {
            this.base.showNotification(SiteModel.MessageSeverity.Danger, "Update Language", "Problem in language update");
          });
      }
      else {
        this.base.showNotification(SiteModel.MessageSeverity.Danger, "Add Language", "Language already added");
      }
    }
  }

  uploadDocument = (files: any) => {

    if (files.target.files[0].length === 0) {
      return;
    }
    var file = files.target.files[0];
    const formData = new FormData();
    formData.append('file', file, file.name);
    formData.append('document_type', this.selectedDocument.document_type_value);
    formData.append('alias_name', this.selectedDocument.alias_name ? this.selectedDocument.alias_name : "");
    this.profileservice.uploadDocument(formData).subscribe(result => {
      if (result) {
        //this.base.SetProfileImage(result["profile_image"]);
        //this.modalRef.hide();
        this.base.showNotification(SiteModel.MessageSeverity.Success, "Add Document", "Document added Successfully");
        var filename = result.document_location.split("-");
        if (filename.length > 0) {
          result.fileName = filename[1];
        }

        this.profile.profile_docs.push(result);
        this.profile.profile_docs.sort(this.sortFunc);
      }
    },
      error => {
        this.base.showNotification(SiteModel.MessageSeverity.Danger, "Add Document", "Problem in Document upload");
      });
  }

  isValidFile = (file: any): boolean => {
    if (file.name.endsWith(".docx")) {
      return true;
    }
    else {
      //this.commonService.ShowMessage("Error", "File Format accepts only xlsx,xlsm", SiteModel.MessageSeverity.Error);
      return false;
    }
  }

  sortFunc(a, b) {
    if (a.created_at < b.created_at) {
      return 1;
    }
    if (a.created_at > b.created_at) {
      return -1;
    }
    return 0;
  }
}
