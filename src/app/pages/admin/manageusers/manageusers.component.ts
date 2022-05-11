import { Component, OnInit, TemplateRef } from '@angular/core';
import { SelectionType } from '@swimlane/ngx-datatable';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Base } from 'src/app/common/base';
import { SiteModel } from 'src/app/models/sitemodel';
import { Manageuserservice } from './manageuserservice.service';
import * as moment from "moment";
@Component({
  selector: 'app-manageusers',
  templateUrl: './manageusers.component.html',
  styleUrls: ['./manageusers.component.scss']
})
export class ManageusersComponent implements OnInit {
  entries: number = 10;
  selected: SiteModel.CreateUser[] = [];
  temp = [];
  activeRow: any;
  SelectionType = SelectionType;
  userlist: SiteModel.CreateUser[] = [];
  user: SiteModel.CreateUser = new SiteModel.CreateUser();
  //user: SiteModel.CreateUser[] = [];
  userBtnText: string = "Save";
  modalRef: BsModalRef;
  isUserAdding: boolean = true;
  isShown: boolean = false;
  now = new Date();
  year = this.now.getFullYear();
  month = this.now.getMonth();
  day = this.now.getDay();
  maxDate = moment({year: this.year - 20, month: this.month, day: this.day}).format('YYYY-MM-DD');
  constructor(private manageuserservice: Manageuserservice, private modalService: BsModalService,private base: Base) { }

  ngOnInit(): void {
    this.isShown = false;
    this.getAllUsers();
  }

  getAllUsers = (): void => {
    this.manageuserservice.getAllUsers().subscribe(result => {
      if (result) {
        this.userlist = result;
        this.temp = this.userlist.map((prop, key) => {
          return {
            ...prop,
            id: key
          };
        });
      }
    });
  }

  entriesChange($event) {
    this.entries = $event.target.value;
  }
  filterTable($event) {
    let val = $event.target.value;
    this.temp = this.userlist.filter(function (d) {
      for (var key in d) {
        if (d[key] != null && d[key].toString().toLowerCase().indexOf(val) !== -1) {
          return true;
        }
      }
      return false;
    });
  }
  onSelect({ selected }, template: TemplateRef<any>) {
    this.selected.splice(0, this.selected.length);
    //this.selected.push(...selected);
    console.log(this.selected);
    this.user = Object.assign({}, ...this.selected);
    console.log(this.user);
    this.isUserAdding = true;
    this.updateUser(template, this.user);
    }
  onActivate(event) {
    this.activeRow = event.row;
  }

  adduser = (template: TemplateRef<any>): void => {
    this.isUserAdding = true;
    this.userBtnText = "Add";
    this.openModal(template)
  }

  editUser = (template: TemplateRef<any>, user: SiteModel.CreateUser):void => {
    debugger;
    this.user  = user;
    this.userBtnText = "Add";
    this.openModal(template)
  }

  updateUser = (template: TemplateRef<any>, user: SiteModel.CreateUser): void => {
    console.log(this.user);
    this.isUserAdding = true;
    this.userBtnText = "Update";
    this.openModal(template);

  }

  deleteUser = ({ selected }): void => {
    this.isUserAdding = false;
    // this.selected.splice(0, this.selected.length);
    // this.selected.push(...selected);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  //     error => {
  //       for (var entry in error.error) {
  //         this.errMessage += entry + ':' + error.error[entry] + '    ';
  //       }
  //       this.base.showNotification(SiteModel.MessageSeverity.Danger,"Registration Error", "Correct Error and try again");        
  //     });
  // }


  // createUser = (): void => {
  //   debugger;
  //   console.log(this.user);
  //   if (this.isUserAdding) {
  //     debugger;
  //     this.user.user_type = "JOB_SEEKER";
  //     this.manageuserservice.CreateJobseeker(this.user).subscribe(result => {
  //       if (result) {
  //         debugger;
  //         this.base.showNotification(SiteModel.MessageSeverity.Success, "Create User", "User created Successfully");
  //         this.modalRef.hide();
  //       }
  //     },
  //       error => {
  //         this.base.showNotification(SiteModel.MessageSeverity.Danger, "Create User", "Problem in user creation");
  //       });
  //   }
    // else {
    //   debugger;
    //   this.manageuserservice.updateUser(this.id).subscribe(result => {
    //     if (result) {
    //       this.base.showNotification(SiteModel.MessageSeverity.Success, "Update User", "User updated Successfully");
    //       this.modalRef.hide();
    //     }
    //   },
    //     error => {
    //       this.base.showNotification(SiteModel.MessageSeverity.Danger, "Update User", "Problem in user update");
    //     });
    // }
   //}

}
