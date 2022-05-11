import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth-service";
import { SiteModel } from '../../../models/sitemodel';
import { Base } from '../../../common/base';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import * as moment from "moment";

@Component({
  selector: "app-register",
  templateUrl: "register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  type: number = 1;
  employer: SiteModel.CreateUser = new SiteModel.CreateUser();
  formData: SiteModel.CreateJobseeker = new SiteModel.CreateJobseeker();
  errMessage: string = '';
  userAvailability: SiteModel.UserAvailability = new SiteModel.UserAvailability();
  isUserAlreadyExist: boolean = true;
  now = new Date();
  year = this.now.getFullYear();
  month = this.now.getMonth();
  day = this.now.getDay();
  maxDate = moment({year: this.year - 20, month: this.month, day: this.day}).format('YYYY-MM-DD');


  constructor(private authService: AuthService, private base: Base, private router: Router) { }

  ngOnInit() { }

  RegisterJobseeker = (): void => {
    this.errMessage = "";
    console.log(this.formData);
    var enteredValue = this.formData.dob;
    this.checkUserAvailability(this.formData.username);
    if (!this.isUserAlreadyExist) {
      var enteredAge = this.getAge(enteredValue);
      if (enteredAge >= 20) {
        this.errMessage = '';
        this.formData.user_type = "JOB_SEEKER";
        this.authService.CreateJobseeker(this.formData).subscribe(result => {
          if (result) {
            this.base.showNotification(SiteModel.MessageSeverity.Success, "Registration Success", "Jobseeker Registered Successfully");
            this.router.navigate(['/auth/login']);
          }
        },
          error => {
            for (var entry in error.error) {
              this.errMessage += entry + ':' + error.error[entry] + '    ';
            }
            this.base.showNotification(SiteModel.MessageSeverity.Danger, "Registration Error", "Correct Error and try again");
          });
      }
      else {
        //alert("DOB not valid");
        this.base.showNotification(SiteModel.MessageSeverity.Warn, "DOB Error", "DOB must be greater than or equal to 20");
      }
    }
  }

  backClick = (): void => {
    this.router.navigate(['/auth/login']);
  }

  getAge(DOB) {
    var today = new Date();
    var birthDate = new Date(DOB);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  RegisterEmployer = (): void => {
    this.errMessage = "";
    console.log(this.employer);
    this.checkUserAvailability(this.employer.username);
    if (!this.isUserAlreadyExist) {
      var enteredValue = this.employer.dob;
      var enteredAge = this.getAge(enteredValue);
      if (enteredAge >= 20) {
        this.errMessage = '';
        this.employer.user_type = "EMPLOYER";
        this.authService.CreateEmployer(this.employer).subscribe(result => {
          if (result) {
            this.base.showNotification(SiteModel.MessageSeverity.Success, "Registration Success", "Employer Registered Successfully");
            this.router.navigate(['/auth/login']);
          }
        },
          error => {
            for (var entry in error.error) {
              this.errMessage += entry + ':' + error.error[entry] + '    ';
            }
            this.base.showNotification(SiteModel.MessageSeverity.Danger, "Registration Error", "Correct Error and try again");
          });
      }
      else {
        //alert("DOB not valid");
        this.base.showNotification(SiteModel.MessageSeverity.Warn, "DOB Error", "DOB must be greater than or equal to 20");

      }
    }

  }
  checkUserAvailability = (username: string) => {
    this.errMessage = "";
    this.userAvailability.username = username;
    if (username && username != '') {
      this.authService.checkUserAvailability(this.userAvailability).subscribe(result => {
        if (result) {
          this.isUserAlreadyExist = false;
          //this.base.showNotification(SiteModel.MessageSeverity.Success, "Username availability", "Username is available");
        }
      },
        error => {
          // for (var entry in error.error) {
          //   this.errMessage += entry + ':' + error.error[entry] + '    ';
          // }
          this.isUserAlreadyExist = true;
          this.base.showNotification(SiteModel.MessageSeverity.Danger, "Username availability", "Username already exists");
        });
    }
  }

}
