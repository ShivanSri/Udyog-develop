import { Component, OnInit } from '@angular/core';
import { Base } from "src/app/common/base";
import { SiteModel } from "src/app/models/sitemodel";
import { AuthService } from "../auth-service";

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  focus;
  isRequested: boolean = false;
  resetpassword: SiteModel.ResetPassword = new SiteModel.ResetPassword();
  resetconfirm: SiteModel.ResetPasswordConfirm = new SiteModel.ResetPasswordConfirm();
  constructor(private authService: AuthService, private base: Base) { }

  ngOnInit(): void {
  }

  ResetPassword = (): void => {
    this.authService.ResetPassword(this.resetpassword).subscribe(result => {
      if (result){
        console.log(result);
        //window.location.href = '/#/dashboards/dashboard';
      }
    },
      error => {
          this.base.showNotification(SiteModel.MessageSeverity.Danger,"Password Update Error", "Incorrect Email address");        
      });
  }

  ResetPasswordConfirm = (): void => {
    this.authService.ResetPasswordConfirm(this.resetconfirm).subscribe(result => {
      if (result){
        console.log(result);
        //window.location.href = '/#/dashboards/dashboard';
      }
    },
      error => {
          this.base.showNotification(SiteModel.MessageSeverity.Danger,"Password Update Error", "Incorrect Email address");        
      });
  }

  EmailFormatValidation() {
    if (this.resetpassword.email) {
      var isEmailFormat = this.base.emailRegEx.test(String(this.resetpassword.email).toLowerCase());
      if (!(isEmailFormat)) {
        this.base.showNotification(SiteModel.MessageSeverity.Danger,"Email format failed !", "Enter the correct Email Address.");        
        return false;
      }
    }
  }

}
