import { Component, OnInit, TemplateRef } from '@angular/core';
import { SelectionType } from '@swimlane/ngx-datatable';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Base } from 'src/app/common/base';
import { SiteModel } from 'src/app/models/sitemodel';
import { MasterDataService } from 'src/app/services/masterdata.service';
import { ManagecompaniesService } from './managecompanies.service';

@Component({
  selector: 'app-managecompanies',
  templateUrl: './managecompanies.component.html',
  styleUrls: ['./managecompanies.component.scss']
})
export class ManagecompaniesComponent implements OnInit {

  entries: number = 10;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  SelectionType = SelectionType;
  companieslist: SiteModel.Companies[] = [];
  filteredcompanieslist: SiteModel.Companies[] = [];
  company: SiteModel.Companies = new SiteModel.Companies();
  companyBtnText: string = "Save";
  modalRef: BsModalRef;
  iscompanyAdding: boolean = true;
  cities: SiteModel.City[] = [];
  users: SiteModel.User [] = [];

  constructor(private modalService: BsModalService,
    private masterdata: MasterDataService,
    private base: Base,
    private managecompaniesService: ManagecompaniesService) { }

  ngOnInit(): void {
    this.getAllCities();
    this.getAllCompanies();
    this.GetUserByType();
  }

  getAllCities = (): void => {
    this.masterdata.getAllCities().subscribe(result => {
      if (result) {
        this.cities = result;
      }
    });
  }

  getAllCompanies = (): void => {
    this.managecompaniesService.getAllCompanies().subscribe(result => {
      if (result) {
        this.companieslist = result;
        this.filteredcompanieslist = result;
      }
    });
  }
  GetUserByType = (): void => {
    this.masterdata.getUserByType('EMPLOYER').subscribe(result => {
      if(result) {
        this.users = result;
      }
    })
  }

  entriesChange($event) {
    this.entries = $event.target.value;
  }
  filterTable($event) {
    let val = $event.target.value;
    this.filteredcompanieslist = this.companieslist;
    this.filteredcompanieslist = this.filteredcompanieslist.filter(function (d) {
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

  addcompany = (template: TemplateRef<any>): void => {
    this.company = new SiteModel.Companies();
    this.iscompanyAdding = true;
    this.companyBtnText = "Add";
    this.openModal(template)
  }

  updateCompany = (template: TemplateRef<any>, company: SiteModel.Companies): void => {
    this.company = company;
    this.iscompanyAdding = false;
    this.companyBtnText = "Update";
    this.openModal(template)
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  createCompanies = (): void => {
    if (this.iscompanyAdding) {
      this.managecompaniesService.createCompany(this.company).subscribe(result => {
        if (result) {
          this.getAllCompanies();
          this.base.showNotification(SiteModel.MessageSeverity.Success, "Create Company", "Company created Successfully");
          this.modalRef.hide();
        }
      },
        error => {
          this.base.showNotification(SiteModel.MessageSeverity.Danger, "Create Company", "Problem in company creation");
        });
    }
    else {
      this.managecompaniesService.updateCompany(this.company).subscribe(result => {
        if (result) {
          this.getAllCompanies();
          this.base.showNotification(SiteModel.MessageSeverity.Success, "Update Company", "Company updated Successfully");
          this.modalRef.hide();
        }
      },
        error => {
          this.base.showNotification(SiteModel.MessageSeverity.Danger, "Update Company", "Problem in Company update");
        });
    }
  }
}
