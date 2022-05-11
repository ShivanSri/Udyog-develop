import { Component, OnInit } from "@angular/core";
import Chart from "chart.js";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "../../../variables/charts";
import { MasterDataService } from '../../../services/masterdata.service';
import { Base } from '../../../common/base';

@Component({
  selector: "app-dashboard",
  templateUrl: "dashboard.component.html"
})
export class DashboardComponent implements OnInit {
  public datasets: any;
  public data: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  token: any;

  constructor(private masterDataService: MasterDataService, private base: Base) {}

  ngOnInit() {
   this.token = localStorage.getItem('Udyog-Web-Token');
   this.GetAllCountry(); 
    this.datasets = [
      [0, 20, 10, 30, 15, 40, 20, 60, 60],
      [0, 20, 5, 25, 10, 30, 15, 40, 40]
    ];
    this.data = this.datasets[0];
  

    var chartOrders = document.getElementById("chart-bars");

    parseOptions(Chart, chartOptions());

    var ordersChart = new Chart(chartOrders, {
      type: "bar",
      options: chartExample2.options,
      data: chartExample2.data
    });

    var chartSales = document.getElementById("chart-sales-dark");

    this.salesChart = new Chart(chartSales, {
      type: "line",
      options: chartExample1.options,
      data: chartExample1.data
    });


  }


  GetAllCountry = (): void => {
    
    this.masterDataService.getAllCountry().subscribe(result => {
      if(result) {
        
        console.log(result);
      }
    })
  }

  public updateOptions() {
    this.salesChart.data.datasets[0].data = this.data;
    this.salesChart.update();
  }
}
