import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Base } from 'src/app/common/base';
import { SiteModel } from 'src/app/models/sitemodel';
import { MasterDataService } from 'src/app/services/masterdata.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent implements OnInit {

  changePassword: SiteModel.ChangePassword = new SiteModel.ChangePassword();
  focus: boolean;
  focus1: boolean;
  errMessage: string = '';
  @Input() modalRef: BsModalRef;
  constructor(private masterDataService: MasterDataService,
    private base: Base,
    private router: Router) { }

  ngOnInit(): void {
  }

  ChangePassword = (): void => {
    this.masterDataService.changePassword(this.changePassword).subscribe(result => {
      
      if(result && result["status"] && result["status"] == 'success' ) {
        this.base.ClearToken();        
        this.base.showNotification(SiteModel.MessageSeverity.Success, "Change Password", "Password Changed Successfully");
        this.modalRef.hide();
        this.router.navigate(['/auth/login']);
      }
      else{
        this.base.showNotification(SiteModel.MessageSeverity.Success, "Change Password", "Incorrect Old Password");
      }
    },
    error => {
      this.errMessage = '';
      for (var entry in error.error) {
        this.errMessage += entry + ':' + error.error[entry] + '    ';
      }
      this.base.showNotification(SiteModel.MessageSeverity.Danger,"Change Password Error", "Correct Error and try again");        
    })
  }

}
