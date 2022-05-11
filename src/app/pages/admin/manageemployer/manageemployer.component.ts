import { Component, OnInit, TemplateRef } from '@angular/core';
import { SelectionType } from '@swimlane/ngx-datatable';
import { IMultiSelectOption } from 'ngx-bootstrap-multiselect';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Base } from 'src/app/common/base';
import { SiteModel } from 'src/app/models/sitemodel';
import { MasterDataService } from 'src/app/services/masterdata.service';
import Swal from 'sweetalert2';
import { ManageemployerService } from './manageemployer.service';

@Component({
  selector: 'app-manageemployer',
  templateUrl: './manageemployer.component.html',
  styleUrls: ['./manageemployer.component.scss']
})
export class ManageemployerComponent implements OnInit {
  entries: number = 10;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  SelectionType = SelectionType;
  users: SiteModel.User[] = [];
  user: SiteModel.UpdateCurrentUser = new SiteModel.UpdateCurrentUser();
  filteredusers: SiteModel.User[] = [];
  roles: SiteModel.Role [] = [];
  modalRef: BsModalRef;
  multiSelectRoles: IMultiSelectOption[];
  id: number;
  changepassword: SiteModel.ChangePasswordByAdmin = new SiteModel.ChangePasswordByAdmin();
  constructor(private modalService: BsModalService,
    private masterdata: MasterDataService,
    private base: Base,
    private manageemployerService: ManageemployerService,
    private masterDataService: MasterDataService) { }

  ngOnInit(): void {
    this.GetUserByType();
    this.getAllRoles();
  }

  GetUserByType = (): void => {
    this.masterdata.getUserByType('EMPLOYER').subscribe(result => {
      if (result) {
        this.users = result;
        this.filteredusers = result;
      }
    })
  }

  getAllRoles = (): void => {
    this.masterdata.getAllRoles().subscribe(result => {
      if (result) {
        this.roles = result;
        this.roles.forEach(h => {
          h.name = h.role_name;
        })
        this.multiSelectRoles = this.roles;
      }
    })
  }

  entriesChange($event) {
    this.entries = $event.target.value;
  }
  filterTable($event) {
    let val = $event.target.value;
    this.filteredusers = this.users;
    this.filteredusers = this.filteredusers.filter(function (d) {
      for (var key in d) {
        if (d[key] != null && d[key].toString().toLowerCase().indexOf(val) !== -1) {
          return true;
        }
      }
      return false;
    });
  }
  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    //this.selected.push(...selected);
  }
  onActivate(event) {
    this.activeRow = event.row;
  }

  editUser = (template: TemplateRef<any>, user: SiteModel.User): void => {
    this.user = new SiteModel.UpdateCurrentUser();
    this.id = user.id;
    this.user.first_name = user.first_name;
    this.user.last_name = user.last_name;
    this.user.dob = user.dob;
    this.user.mobile_no = user.mobile_no;
    this.user.email = user.email;
    this.user.roles = user.roles;
    this.openModal(template)
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  updateUser = (): void=> {
    this.manageemployerService.updateCurrentUser(this.id,this.user).subscribe(result => {
      if (result) {
        this.GetUserByType();
        this.base.showNotification(SiteModel.MessageSeverity.Success, "Update User", "User updated Successfully");
        this.modalRef.hide();
      }
    },
      error => {
        this.base.showNotification(SiteModel.MessageSeverity.Danger, "Update User", "Problem in User update");
      });
  }

  resetPassword(id: number) {
    Swal.fire({
      title: "Are you sure?",
      icon: "question",
      buttonsStyling: false,
      customClass: {
        confirmButton: "btn btn-default"
      }
    });
    Swal.fire({
      title: 'Are yoe sure to reset user password?',
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
        this.resetUserPassword(id);
      } 
    })
  }
  resetUserPassword = (id: number): void => {
    this.changepassword.password = 'Admin@123#';
    this.changepassword.password1 = 'Admin@123#';
    this.changepassword.user_id = id;
    this.masterDataService.changePasswordByAdmin(this.changepassword).subscribe(result => {
      if (result) {
        this.base.showNotification(SiteModel.MessageSeverity.Success, "Reset User Password", "Password reset Successfully");
      }
    },
      error => {
        this.base.showNotification(SiteModel.MessageSeverity.Danger, "Reset User Password", "Problem in password reset");
      });
  }
}
