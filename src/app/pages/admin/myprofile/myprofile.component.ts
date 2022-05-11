import { Component, OnInit } from '@angular/core';
import { SiteModel } from 'src/app/models/sitemodel';
import { MyProfileService } from './myprofileservice.service';
@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})
export class MyprofileComponent implements OnInit {
  entries: number = 10;
  selected: any[] = [];
  rows: any = [];
  temp = [];
  activeRow: any;
  profile: SiteModel.CreateProfile = new SiteModel.CreateProfile();
  isShown: boolean = false;
  constructor(private myprofileservice: MyProfileService) { }

  ngOnInit(): void {
    this.isShown = false;
    this.getProfiles();
  }

  showHide = (): void => {
    
    this.isShown = true;
  }

  getProfiles = (): void => {
    this.myprofileservice.getAllProfiles().subscribe(result => {
      if(result) {
        console.log(result);
        this.profile = result;
        console.log(this.profile);
      }
    })
  }

  createUser = (): void => {
    
    console.log(this.profile);
    this.myprofileservice.createProfile(this.profile).subscribe(result => {
      if (result) {
        
        console.log(result);
      }
  });
}

}
