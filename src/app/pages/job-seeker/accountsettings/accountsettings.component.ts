import { Component, OnInit } from '@angular/core';
import { SiteModel } from 'src/app/models/sitemodel';
import { ProfileserviceService } from '../profile/profileservice.service';
import swal from "sweetalert2";
import { Base } from 'src/app/common/base';

@Component({
  selector: 'app-accountsettings',
  templateUrl: './accountsettings.component.html',
  styleUrls: ['./accountsettings.component.scss']
})
export class AccountsettingsComponent implements OnInit {
  profile: SiteModel.Profile = new SiteModel.Profile();
  focus: boolean;
  constructor(private profileservice: ProfileserviceService, private base: Base) { }

  ngOnInit(): void {
    this.getMyProfile();
  }

  getMyProfile = (): void => {
    this.profileservice.getMyProfile().subscribe(result => {
      if (result) {
        this.profile = result;
      }
    });
  }

  updateProfileStatus() {
    swal.fire({
      title: "Are you sure?",
      icon: "question",
      buttonsStyling: false,
      customClass: {
        confirmButton: "btn btn-default"
      }
    });
    swal.fire({
      title: 'Do you want to update your profile status',
      icon: "question",
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: 'No',
      customClass: {
        actions: 'my-actions',
        cancelButton: 'order-1 right-gap',
        confirmButton: 'order-2',
        denyButton: 'order-3',
      }
    }).then((result) => {
      if (result.isConfirmed) {
        this.updateProfile();
      } 
    })
  }

  updateProfile = (): void => {
    this.profileservice.createProfile(this.profile).subscribe(result => {
      if (result) {
        this.base.showNotification(SiteModel.MessageSeverity.Success, "Update Profile Status", "Status Updated Successfully");
      }
    },
      error => {
        this.base.showNotification(SiteModel.MessageSeverity.Danger, "Update Profile Status", "Problem in status update");
      });
  }
}
