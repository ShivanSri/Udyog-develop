import { Component, OnInit } from '@angular/core';
import { SiteModel } from 'src/app/models/sitemodel';
import { DashboardService } from './dashboard.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dashboardDetails: SiteModel.DashboardDetails = new SiteModel.DashboardDetails();
  constructor(private dashboardService: DashboardService, private route: Router) { }

  ngOnInit(): void {
    this.getDashboardDetails();
  }

  getDashboardDetails = (): void => {
    this.dashboardService.getDashboardDetails().subscribe(result => {
      if (result) {
        this.dashboardDetails = result;
      }
    });
  }

  // navigateJobs = () : void => {
  //   this.route.navigate(['/employer/managejobs']);
  // }

  // navigateApplications = (): void => {
  //   this.route.navigate(['/employer/manageapplications']);
  // }

}
