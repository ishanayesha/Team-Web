import { Component, OnInit } from '@angular/core';
import { AllocationService } from '../../../shared/services/allocation.service';
import { Issue } from '../../../shared/models/Issue';

import { TimelineChartConfig } from '../../../shared/models/TimelineChartConfig';

@Component({
  selector: 'app-my-allocation',
  templateUrl: './my-allocation.component.html',
  styleUrls: ['./my-allocation.component.css']
})
export class MyAllocationComponent implements OnInit {

  timelineData: any[];
  config: TimelineChartConfig;
  elementId: String;

  issues: Issue[] = [];
  userRole: string = null;

  myAllocationsArr: { id: string, role: string, user: string, start: string, end: string }[] = [];

  constructor(private allocationService: AllocationService) { }

  ngOnInit() {
    //todo
    this.userRole = "dev";
    let userId: number = 1;

    this.allocationService.getMyAllocations(userId).subscribe(data => {
      this.issues = data;

      for (let issue of data) {

        if (issue.dev != "N/A") {

          let dev = {
            "id": issue.jiraId,
            "role": "dev",
            "user": issue.dev,
            "start": issue.devStart,
            "end": issue.devEnd
          };
          this.myAllocationsArr.push(dev);
        }

        if (issue.qa != "N/A") {

          let qa = {
            "id": issue.jiraId,
            "role": "qa",
            "user": issue.qa,
            "start": issue.qaStart,
            "end": issue.qaEnd
          };
          this.myAllocationsArr.push(qa);
        }
      }


      //Timeline Data & Config
      this.timelineData = this.myAllocationsArr;

      this.config = new TimelineChartConfig(false, [{ groupByRowLabel: true }]);
      this.elementId = 'myTimeLine';

    });
  }



}