import { Component, OnInit } from '@angular/core';
import { AllocationService } from '../../../shared/services/allocation.service';
import { Issue } from '../../../shared/models/Issue';

import { TimelineChartConfig } from '../../../shared/models/TimelineChartConfig';

@Component({
  selector: 'app-all-allocations',
  templateUrl: './all-allocations.component.html',
  styleUrls: ['./all-allocations.component.css']
})
export class AllAllocationsComponent implements OnInit {

  showFilters: boolean = false;

  timelineData: any[];
  config: TimelineChartConfig;
  elementId: String;

  allAllocationsArr: { id: string, role: string, user: string, start: string, end: string }[] = [];


  constructor(private allocationService: AllocationService) { }

  ngOnInit() {

    //todo
    let userId: number = 1;
    this.allocationService.getAllAllocations().subscribe(data => {

      for (let issue of data) {

        if (issue.dev != "N/A") {

          let dev = {
            "id": issue.jiraId,
            "role": "dev",
            "user": issue.dev,
            "start": issue.devStart,
            "end": issue.devEnd
          };
          this.allAllocationsArr.push(dev);
        }

        if (issue.qa != "N/A") {

          let qa = {
            "id": issue.jiraId,
            "role": "qa",
            "user": issue.qa,
            "start": issue.qaStart,
            "end": issue.qaEnd
          };
          this.allAllocationsArr.push(qa);
        }
      }

      //Timeline Data & Config
      this.timelineData = this.allAllocationsArr;
      this.config = new TimelineChartConfig(false, [{ groupByRowLabel: true }]);
      this.elementId = 'timeLineAll';

    });
  }

  filtersVisibility() {
    this.showFilters = !this.showFilters;
  }

}
