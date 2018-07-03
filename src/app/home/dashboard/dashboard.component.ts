import { Component, OnInit } from '@angular/core';
import { PieChartConfig } from '../../shared/models/PieChartConfig';
import { DashboardService } from '../../shared/services/dashboard.service';
import { LeaveService } from '../../shared/services/leave.service';
import { User } from '../../shared/models/User';
import { Leave } from '../../shared/models/Leave';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', './dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  newLeaveDiv: boolean = false;
  importantDates: any[] = [];
  remainingDays = null;
  environments: any[] = [];
  leaveDetails: Leave[] = [];

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



  constructor(private dashboardService: DashboardService, private leaveService: LeaveService, private datepipe: DatePipe) { }

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

    //load important dates
    let today: Date = new Date(this.datepipe.transform(new Date(), 'yyyy-MM-dd'))

    this.dashboardService.getImportantDates().subscribe(
      data => {
        this.importantDates = data,
          this.remainingDays = Math.abs(Math.abs(new Date(this.importantDates["endDate"]).getTime() - today.getTime()) / (1000 * 3600 * 24));
      }
    );

    //load leave details
    this.leaveService.getTodayLeaveSheet().subscribe(
      data => {
        this.leaveDetails = data
      }
    );

    //load environment details
    this.dashboardService.getEnvironmentDetails().subscribe(
      data => this.environments = data
    );
  }

  //div show hide
  addLeave() {
    this.newLeaveDiv = !this.newLeaveDiv;
  }

}
