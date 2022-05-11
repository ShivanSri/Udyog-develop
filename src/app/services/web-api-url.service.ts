import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable()
export class WebApiUrlService {
  private apiBaseURL: string;
  constructor() {
    this.apiBaseURL = environment.baseUrl;
  }

  //#region Admin 

  public authendication(): string {
    return this.apiBaseURL + '/auth/login';
  }

  public googleLogin(): string{
    return this.apiBaseURL + '/auth/google/';
  }

  public createEmployer(): string {    
    return this.apiBaseURL + '/auth/users';
  }

  public createJobSeeker(): string {    
    return this.apiBaseURL + '/auth/users';
  }

  public createAdmin(): string {
    return this.apiBaseURL + '/auth/users';
  }

  // Roles

  public createRoles(): string {
    
    return this.apiBaseURL + '/auth/roles';
  }

  public changePassword(): string {
    return this.apiBaseURL + '/auth/change-password';
  }

  public getAllUsers(): string {
    return this.apiBaseURL + '/auth/users';
  }

  public getUserById(id: number): string {
    return this.apiBaseURL + '/auth/user/' + id;
  }

  public getUserByType(usertype: string): string {
    return this.apiBaseURL + '/auth/user-type/' + usertype;
  }

  public resetPassword(): string {
    
    return this.apiBaseURL + '/auth/password_reset';
  }

  public resetPasswordConfirm(): string {
    return this.apiBaseURL + '/auth/password_reset/confirm/';
  }

  //#endregion

  //#region Roles

  public createRole(): string {
    return this.apiBaseURL + '/auth/roles';
  }

  public updateRole(): string {
    return this.apiBaseURL + '/auth/role/{{role_id}}';
  }

  public getAllRoles(): string {
    return this.apiBaseURL + '/auth/roles';
  }

  public getRoleById(): string {
    return this.apiBaseURL + '/auth/role/{{role_id}}';
  }

  //#endregion

  //#region Profile

  public getAllProfile(): string {
    return this.apiBaseURL + '/jobseekers/profiles';
  }

  public getProfileById(id: number): string {
    return this.apiBaseURL + '/jobseekers/profile/' + id;
  }

  //#endregion

  //#region Permissions

  public createPermission(): string {
    return this.apiBaseURL + '/auth/permissions';
  }

  public updatePermission(): string {
    return this.apiBaseURL + '/auth/permission/{{permission_id}}';
  }

  public getAllPermissions(): string {
    return this.apiBaseURL + '/auth/permissions';
  }

  public getPermissionById(): string {
    return this.apiBaseURL + '/auth/permission/{{permission_id}}';
  }

  //#endregion

  //#region  Country
  public getAllCountry(): string {
    return this.apiBaseURL + '/commons/countries';
  }

  public getCountryByID(id): string {
    return this.apiBaseURL + 'commons/country/' + id;
  }

  public createCountry(): string {
    return this.apiBaseURL + '/commons/countries';
  }

  public updateCountry(): string {
    return this.apiBaseURL + 'commons/country/{{country_id}}';
  }

  //#endregion

   //#region  States
  public getAllStates(): string {
    return this.apiBaseURL + '/commons/states';
  }

  public getStateByID(id): string {
    return this.apiBaseURL + '/commons/state/' + id;
  }

  public createState(): string {
    return this.apiBaseURL + '/commons/states';
  }

  public updateState(): string {
    return this.apiBaseURL + '/commons/state/{{state_id}}';
  }
  //#endregion

  //#region City
  public getAllCities(): string {
    return this.apiBaseURL + '/commons/cities';
  }

  public getCityByID(id): string {
    return this.apiBaseURL + '/commons/city/' + id;
  }

  public createCity(): string {
    return this.apiBaseURL + '/commons/cities';
  }

  public updateCity(): string {
    return this.apiBaseURL + '/commons/city/{{city_id}}';
  }
  //#endregion

  //#region  User

  
  public updateUser(userid): string {
    return this.apiBaseURL + '/auth/users/' + userid;
  }

  // public updateEducation(educationid: number): string {
  //   return this.apiBaseURL + '/jobseekers/education/' + educationid;
  // }

  public updateCurrentUser(id: number): string {
    return this.apiBaseURL + '/auth/users/' + id;
  }

  public deleteUser(): string {
    return this.apiBaseURL + '/auth/user/{{user_id}}';
  }

  public getEmployerById(id: number): string {
    return this.apiBaseURL + '/auth/user/' + id;
  }

  //#endregion

  //#region Company
  public getAllCompany(): string {
    return this.apiBaseURL + '/employers/companies';
  }

  public getCompanyByID(id: number): string {
    return this.apiBaseURL + '/employers/company/' + id;
  }

  public getCompanyByCode(): string {
    return this.apiBaseURL + '/employers/companybycode/?code={{company_code}}';
  }

  public createCompany(): string {
    return this.apiBaseURL + '/employers/companies';
  }

  public updateCompany(companyid: number): string {
    return this.apiBaseURL + '/employers/company/' + companyid;
  }

  public uploadCompanyImage(): string {
    return this.apiBaseURL + '/employers/upload-company-image/{{company_id}}';
  }
  //#endregion

  //#region  Category
  public getcategoryById(): string {
    return this.apiBaseURL + '/employers/category/{{category_id}}';
  }

  public createCategory(): string {
    return this.apiBaseURL + '/employers/categories';
  }

  public updateCategory(): string {
    return this.apiBaseURL + '/employers/category/{{category_id}}';
  }
  //#endregion

  //#region Jobs
  public createJobsAdmin(): string {
    return this.apiBaseURL + '/employers/jobs';
  }

  public createJobsEmployer(): string {
    return this.apiBaseURL + '/employers/jobs';
  }

  public getAllJobs(): string {
    return this.apiBaseURL + '/employers/jobs';
  }

  public getJobsById(): string {
    return this.apiBaseURL + '/employers/jobs/{{job_id}}';
  }

  public updateJobs(jobid: number): string {
    return this.apiBaseURL + '/employers/jobs/' + jobid;
  }
  //#endregion

  //#region Languages

  public createLanguages(): string {
    return this.apiBaseURL + '/commons/languages';
  }

  public updateLanguages(): string {
    return this.apiBaseURL + '/commons/language/{{language_id}}';
  }

  public getAllLang(): string {
    return this.apiBaseURL + '/commons/languages';
  }

  public getbylangID(): string {
    return this.apiBaseURL + '/commons/language/{{language_id}}';
  }
  //#endregion

  //#region  Qualifications

  public createQualifications(): string {
    return this.apiBaseURL + '/commons/qualifications';
  }

  public updateQualifications(): string {
    return this.apiBaseURL + '/commons/qualification/{{qualification_id}}';
  }

  public getAllQual(): string {
    return this.apiBaseURL + '/commons/qualifications';
  }

  public getQualByID(): string {
    return this.apiBaseURL + '/commons/qualification/{{qualification_id}}';
  }
  //#endregion

  //#region  Skills

  public createSkill(): string {
    return this.apiBaseURL + '/commons/skills';
  }

  public updateSkill(): string {
    return this.apiBaseURL + '/commons/skill/{{skill_id}}';
  }

  public getAllSkills(): string {
    return this.apiBaseURL + '/commons/skills';
  }

  public getSkillByID(): string {
    return this.apiBaseURL + '/commons/skills/{{skill_id}}';
  }
  //#endregion

  //#region Universities

  public createUniversity(): string {
    return this.apiBaseURL + '/commons/universities';
  }

  public updateUniversity(): string {
    return this.apiBaseURL + '/commons/university/{{university_id}}';
  }

  public getAllUniversities(): string {
    return this.apiBaseURL + '/commons/universities';
  }

  public getUniversityByID(): string {
    return this.apiBaseURL + '/commons/university/{{university_id}}';
  }
  //#endregion

  //#region Job Applicaton Status

  public createJobStatus(): string {
    return this.apiBaseURL + '/employers/statuses';
  }

  public updateJobStatus(): string {
    return this.apiBaseURL + '/employers/status/{{status_id}}/';
  }

  public getAllJobStatus(): string {
    return this.apiBaseURL + '/employers/statuses';
  }

  public getJobStatusByID(): string {
    return this.apiBaseURL + '/employers/status/{{status_id}}/';
  }
  //#endregion

  //#region Job Application Status Transition

  public createJobTrans(): string {
    return this.apiBaseURL + '/employers/status-transitions';
  }

  public updateJobTrans(): string {
    return this.apiBaseURL + '/employers/status-transition/{{status_transitions_id}}';
  }

  public getAllJobTrans(): string {
    return this.apiBaseURL + '/employers/status-transitions';
  }

  public getJobTransByID(): string {
    return this.apiBaseURL + '/employers/status-transition/{{status_transitions_id}}';
  }

  //#endregion

  //#region  Application

  public createApplication(): string {
    return this.apiBaseURL + '/employers/job-applications';
  }

  public updateApplicationStatus(): string {
    return this.apiBaseURL + '/employers/application-status/{{application_id}}';
  }

  public getAllApplication(): string {
    return this.apiBaseURL + '/employers/job-applications';
  }

  public getApplicationByID(): string {
    return this.apiBaseURL + '/employers/job-application/{{application_id}}';
  }

  public getApplicationByJobId(id: number): string {
    return this.apiBaseURL + '/employers/job-application/job/' + id;
  }

  //#endregion

    //#region  Firebase

    public firebaseSignUp(): string {
      return this.apiBaseURL + '/auth/firebase-signup';
    }
  
    public firebaseLogin(): string {
      return this.apiBaseURL + '/auth/firebase-login';
    }
  
    public firebaseLoginVerify(): string {
      return this.apiBaseURL + '/auth/firebase-verify';
    }
  
    //#endregion

    //#region  Tickets

    public createTickets(): string {
      return this.apiBaseURL + '/commons/cs-ticket';
    }

    public updateTickets(): string {
      return this.apiBaseURL + '/commons/cs-ticket/{{cs_tickets}}';
    }

    public updateTicketStatus(): string {
      return this.apiBaseURL + '/commons/cs-ticket-status/{{cs_tickets}}';
    }

    public getAllTickets(): string {
      return this.apiBaseURL + '/commons/cs-tickets/';
    }

    public getTicketsById(): string {
      return this.apiBaseURL + '/commons/cs-tickets/{{cs_tickets}}';
    }

    public uploadMedia(): string {
      return this.apiBaseURL + '/commons/cs-ticket-media/{{cs_tickets}}';
    }

    //#endregion

    //#region Ticket Conversion

    public createTicketConver(): string {
      return this.apiBaseURL + '/commons/ticket-conversation';
    }

    //#endregion

    //#region Application Ticket

    public createAppTicket(): string {
      return this.apiBaseURL + '/commons/app-ticket';
    }

    public updateAppTicket(): string {
      return this.apiBaseURL + '/commons/app-ticket/{{app_tickets}}';
    }

    public updateAppTicketStatus(): string {
      return this.apiBaseURL + '/commons/app-ticket-status/{{app_tickets}}';
    }

    public getAllAppTickets(): string {
      return this.apiBaseURL + '/commons/app-tickets/';
    }

    public getAppTicketsById(): string {
      return this.apiBaseURL + '/commons/app-tickets/{{app_tickets}}';
    }

    public uploadAppMedia(): string {
      return this.apiBaseURL + '/commons/app-ticket-media/{{app_tickets}}';
    }

    //#endregion

    //#region Application Ticket Conversation

    public createTicketCon(): string {
      return this.apiBaseURL + '/commons/app-conversation';
    }

    //#endregion

    //#region SMS Template

    public createSMS(): string {
      return this.apiBaseURL + '/commons/sms_template';
    }

    public updateSMS(): string {
      return this.apiBaseURL + '/commons/sms_template/{{user_id}}';
    }

    public getAllSMS(): string {
      return this.apiBaseURL + '/commons/sms_template';
    }

    public getSMSById(): string {
      return this.apiBaseURL + '/commons/sms_template/{{user_id}}';
    }

    //#endregion

    //#region Email Template

    public createEmail(): string {
      return this.apiBaseURL + '/commons/email_template';
    }

    public updateEmail(): string {
      return this.apiBaseURL + '/commons/sms_template/{{user_id}}';
    }

    public getAllEmail(): string {
      return this.apiBaseURL + '/commons/email_template';
    }

    public getEmailById(): string {
      return this.apiBaseURL + '/commons/sms_template/{{user_id}}';
    }

    //#endregion

    //#region Resume Parser

    public resumeUpload(): string {
      return this.apiBaseURL + '/jobseekers/resume-parse';
    }

    //#endregion

  public getMyProfile(): string {
    return this.apiBaseURL + '/jobseekers/my-profile';
  }

  public createProfile(): string {
    return this.apiBaseURL + '/jobseekers/profiles';
  }

  public addExperience(): string {
    return this.apiBaseURL + '/jobseekers/experiences';
  }

  public updateExperience(experienceid: number): string {
    return this.apiBaseURL + '/jobseekers/experience/' + experienceid;
  }

  public addEducation(): string {
    return this.apiBaseURL + '/jobseekers/educations';
  }

  public updateEducation(educationid: number): string {
    return this.apiBaseURL + '/jobseekers/education/' + educationid;
  }

  public addCertification(): string {
    return this.apiBaseURL + '/jobseekers/certifications_and_awards';
  }

  public updateCertification(certificationid: number): string {
    return this.apiBaseURL + '/jobseekers/certifications_and_award/' + certificationid;
  }

  public addLanguage(): string {
    return this.apiBaseURL + '/jobseekers/known_languages';
  }

  public updateLanguage(languageid: number): string {
    return this.apiBaseURL + '/jobseekers/known_language/' + languageid;
  }

  public getAllLanguages(): string {
    return this.apiBaseURL + '/commons/languages';
  }

  public UploadProfileImage(): string {
    return this.apiBaseURL + '/jobseekers/upload-profile-image';
  }

  public uploadDocument(): string {
    return this.apiBaseURL + '/jobseekers/upload-document';
  }

  public searchJobs(searchKey: string): string {
    return this.apiBaseURL + '/search/jobs/?search=' + searchKey + '&ordering=-created_at&limit=100';
  }

  public searchAllJobs(): string {
    return this.apiBaseURL + '/search/jobs/?ordering=-created_at&limit=100';
  }

  public getJobapplication(): string {
    return this.apiBaseURL + '/employers/job-applications';
  }

  public getMyProfileEmployer(): string {
    return this.apiBaseURL + '/employers/my-employer-profile';
  }

  public createProfileEmployer(): string {
    return this.apiBaseURL + '/employers/employer-profiles';
  }
  
  public getDashboardDetails(): string {
    return this.apiBaseURL + '/employers/dashboard';
  }

  public checkUserAvailability(): string {
    return this.apiBaseURL + '/auth/check-user-name/';
  }

  public getCurrencies(): string {
    return this.apiBaseURL + '/commons/currencies'
  }

  public getCurrencyByID(currencyId:number): string {
    return this.apiBaseURL + '/commons/currency/' + currencyId;
  }

  public updateUserByEmployer(userID: number): string {
    return this.apiBaseURL + '/auth/user/' + userID;
  }

  public cloneJobs(id: number): string {
    return this.apiBaseURL + '/employers/job/clone/' + id;
  }

}
