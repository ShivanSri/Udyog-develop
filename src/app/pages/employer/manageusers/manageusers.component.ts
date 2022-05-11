import { Component, OnInit, TemplateRef } from '@angular/core';
import { SelectionType } from '@swimlane/ngx-datatable';
import { AuthService } from '../../../layouts/auth-layout/auth-service';
import { IMultiSelectOption } from 'ngx-bootstrap-multiselect';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Base } from 'src/app/common/base';
import { SiteModel } from 'src/app/models/sitemodel';
import { Manageuserservice } from './manageuserservice.service';
import { MasterDataService } from '../../../services/masterdata.service';
import * as moment from "moment";
import { throwIfEmpty } from 'rxjs/operators';
import { BehaviorSubject } from "rxjs";
import { callbackify } from 'util';
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
  users: SiteModel.User[] = [];
  filteredUsers: SiteModel.User[] = [];
  employer: SiteModel.CreateUser = new SiteModel.CreateUser();
  user: SiteModel.updateUserByEmployer = new SiteModel.updateUserByEmployer();
  empuser: SiteModel.User = new SiteModel.User;
  userDetails: SiteModel.UserDetails;
  userAvailability: SiteModel.UserAvailability = new SiteModel.UserAvailability();
  errMessage: string = '';
  isUserAlreadyExist: boolean = true;
  filteredusers: SiteModel.User[] = [];
  roles: SiteModel.Role [] = [];
  multiSelectRoles: IMultiSelectOption[];
  //user: SiteModel.CreateUser[] = [];
  userBtnText: string = "Save";
  modalRef: BsModalRef;
  isUserAdding: boolean = true;
  isShown: boolean = false;
  show: boolean =  false;
  hide: boolean = true;
  id: number;
  userid : number;
  userData: SiteModel.User;
  now = new Date();
  year = this.now.getFullYear();
  month = this.now.getMonth();
  day = this.now.getDay();
  disable : boolean;
  maxDate = moment({year: this.year - 20, month: this.month, day: this.day}).format('YYYY-MM-DD');
  private UserDetailsSubject = new BehaviorSubject<SiteModel.UserDetails>(JSON.parse(localStorage.getItem('Udyog-UserDetails')));
  
  public SetLoggedInUser = (userDetails: SiteModel.UserDetails) => this.UserDetailsSubject.next(userDetails);

  public GetLoggedInUser = (): SiteModel.UserDetails => 
  {
    debugger;
    this.UserDetailsSubject.value;
    this.userid = this.UserDetailsSubject.value.id;
    return this.UserDetailsSubject.value;

  } 
  
  constructor(private authService: AuthService,private manageuserservice: Manageuserservice, private masterdata: MasterDataService, private modalService: BsModalService,private base: Base) { 
  }

  ngOnInit(): void {
    this.GetLoggedInUser();
    this.isShown = false;
    this.getAllUsers();
    this.getAllRoles();
    this.GetUserByType();
    var data  = (JSON.parse(localStorage.getItem('Udyog-UserDetails')));
    // const mapped = data.valueOf();
    // var selec = mapped
    // alert(selec);
    alert(this.userid);

  }

  getAllUsers = (): void => {
    this.manageuserservice.getAllUsers().subscribe(result => {
      if (result) {
        this.users = result;
        this.filteredUsers = this.users;
        // this.temp = this.userlist.map((prop, key) => {
        //   return {
        //     ...prop,
        //     id: key
        //   };
        // });
      }
    });
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

  GetUserByType = (): void => {
    this.masterdata.getUserByType('EMPLOYER').subscribe(result => {
      if (result) {
        this.users = result;
        this.filteredusers = result;
      }
    })
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
  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    //this.selected.push(...selected);
    this.userlist.push(this.selected[0]);
  }
  onActivate(event) {
    this.activeRow = event.row;
  }

  adduser = (): void => {
    this.isUserAdding = true;
    this.userBtnText = "Add";
    this.employer = new SiteModel.CreateUser;
    this.show = true;
    this.hide = false;
    this.disable = false;
  }

  addEmployer = (): void => {

  }

  editUser = (template: TemplateRef<any>, user: SiteModel.CreateUser): void => {
    debugger;
    this.user = new SiteModel.updateUserByEmployer();
    this.id = user.id;
    this.user.first_name = user.first_name;
    this.user.last_name = user.last_name;
    this.user.username = user.username;
    this.user.dob = user.dob;
    this.user.mobile_no = user.mobile_no;
    this.user.email = user.email;
    this.openModal(template);
    this.userBtnText = "Update";
  }

  editData = (userData: SiteModel.User): void => {
    this.show = true;
    this.hide = false;
    this.userData = new SiteModel.User();
    this.id = userData.id;
    this.userData.first_name = userData.first_name;
    this.userData.last_name = userData.last_name;
    this.userData.dob = userData.dob;
    this.userData.email = userData.email;
    this.userData.mobile_no = userData.mobile_no;
    this.userData.password = userData.password;
    this.userData.username = userData.username;
    this.userData.company_name = userData.company_name;
    this.userData.company_code = userData.company_code;
    this.userData.company_desc = userData.company_desc;
    this.userData.location = userData.location;
    this.userData.user_type = 'EMPLOYER';
  }

  ClearValues = () : void => {
    this.employer = new SiteModel.CreateUser;
  }

  editEmployer = (empuser : SiteModel.CreateUser) : void => {
    debugger;
    this.show = true;
    this.hide = false;
    this.disable = true;
    this.id = empuser.id;
    this.employer.first_name = empuser.first_name;
    this.employer.last_name = empuser.last_name;
    this.employer.dob = empuser.dob;
    this.employer.mobile_no = empuser.mobile_no;
    this.employer.email = empuser.email;
    this.employer.password = empuser.password;
    this.employer.company_name = empuser.company_name;
    this.employer.company_code = empuser.company_code;
    this.employer.company_desc = empuser.company_desc;
    this.employer.location = empuser.location;
    this.employer.username = empuser.username;
    
    this.employer.user_type = 'EMPLOYER';
  }

  ShowHide = (): void => {
    this.show = false;
    this.hide = true;
  }

  deleteUser = ({ selected }): void => {
    this.isUserAdding = false;
    this.selected.splice(0, this.selected.length);
    //this.selected.push(...selected);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
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
    console.log(this.user);
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
            this.getAllUsers();
            this.hide = true;
            this.show = false;
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

  updateUser = (): void=> {
    debugger;
    this.user.userType = 'EMPLOYER';
    this.manageuserservice.updateCurrentUser(this.id,this.user).subscribe(result => {
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
}
