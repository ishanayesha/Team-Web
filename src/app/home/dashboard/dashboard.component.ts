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
  currentSprint: any[] = [];
  remainingDays: number = null;
  environments: any[] = [];
  leaveDetails: Leave[] = [];
  sprintSummary: number[] = [];

  data: any[];
  config: PieChartConfig;
  elementId: String;

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

    this.config = new PieChartConfig('Current Sprint Summary', 0.4);
    this.elementId = 'myPieChart';

    //load sprint summary
    this.dashboardService.getSprintSummary().subscribe(
      p => {
        this.sprintSummary = p

        this.data = [['Task', 'Count'],
        ['Not Started', this.sprintSummary['notStarted']],
        ['Inprogress', this.sprintSummary['inprogress']],
        ['On Hold', this.sprintSummary['onhold']],
        ['Verified', this.sprintSummary['verified']],
        ['Closed', this.sprintSummary['close']]]
      });


    //load important dates
    let today: Date = new Date(this.datepipe.transform(new Date(), 'yyyy-MM-dd'));
    let differenece: number = 0;

    this.dashboardService.getCurrentSprint().subscribe(
      data => {
        this.currentSprint = data,
          differenece = (new Date(this.currentSprint["endDate"]).getTime() - today.getTime()) / (1000 * 3600 * 24);
        this.remainingDays = differenece > 0 ? differenece : 0;
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
