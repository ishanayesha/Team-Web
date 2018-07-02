import { Component, OnInit } from '@angular/core';
import { PieChartConfig } from '../../shared/models/PieChartConfig';
import { DashboardService } from '../../shared/services/dashboard.service';
import { User } from '../../shared/models/User';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', './dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  newLeaveDiv: boolean = false;

  data1: any[];
  config1: PieChartConfig;
  elementId1: String;

  text: any = {
    Year: 'Year',
    Month: 'Month',
    Weeks: "Weeks",
    Days: "Days",
    Hours: "Hours",
    Minutes: "Minutes",
    Seconds: "Seconds",
    MilliSeconds: "MilliSeconds"
  };

  importantDates: any[] = [];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {

    //Piechart1 Data & Config
    this.data1 = [['Task', 'Hours per Day'],
    ['Eat', 3],
    ['Commute', 2],
    ['Watch TV', 5],
    ['Video games', 4],
    ['Sleep', 10]];

    this.config1 = new PieChartConfig('My Daily Activities at 20 years old', 0.4);
    this.elementId1 = 'myPieChart1';

    //load codefreeze date
    this.dashboardService.getImportantDates().subscribe(
      data => this.importantDates = data
    );


  }

  addLeave() {
    this.newLeaveDiv = !this.newLeaveDiv;
  }

}
