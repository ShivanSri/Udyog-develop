import { Component, OnInit } from "@angular/core";
import { Base } from "src/app/common/base";
import { SiteModel } from "src/app/models/sitemodel";
import { AuthService } from "../auth-service";
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Router } from "@angular/router";


@Component({
  selector: "app-login",
  templateUrl: "login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  focus;
  focus1;
  userLogin: SiteModel.UserLogin = new SiteModel.UserLogin();
  userDetails: SiteModel.UserDetails = new SiteModel.UserDetails();
  form: FormGroup;
  constructor(private authService: AuthService, private base: Base, private fb: FormBuilder,private router: Router) { 
    this.createForm();
  }

  ngOnInit() { }
  Authendication = (): void => {
    this.authService.Authendication(this.userLogin).subscribe(result => {
      if (result){
        this.userDetails = result;
        this.base.SaveToken(this.userDetails.access);
        this.base.SetLoggedInUser(result);
        localStorage.setItem('Udyog-UserDetails', JSON.stringify(result));
        if(result.user_type == 'JOB_SEEKER'){
          //window.location.href = '/#/job-seeker/profile'; 
          this.router.navigate(['job-seeker/profile']);         
        }
        else if(result.user_type == 'EMPLOYER'){
          window.location.href = '/#/employer/dashboard';
        }
        else{
          window.location.href = '/#/admin/dashboard';
        }
      }
    },
      error => {
          this.base.showNotification(SiteModel.MessageSeverity.Danger,"Login Error", "Incorrect Username/Password");        
      });
  }


  createForm() {
    
    this.form = this.fb.group({
       username: ['', Validators.required ],
       password: ['', Validators.required ]
    });
  }

  googleSignIn = (): void =>{
    this.authService.GoogleLogin().subscribe(result => {
      if (result){
        console.log('hai');
      }
    },
      error => {
          this.base.showNotification(SiteModel.MessageSeverity.Danger,"Login Error", "Incorrect Username/Password");        
      });
  }
}
