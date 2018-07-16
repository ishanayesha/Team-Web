import { Component, OnInit } from '@angular/core';
import { AllocationService } from '../../../shared/services/allocation.service';
import { UtilsService } from '../../../shared/services/utils.service';
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


  startDate = new Date("2018-01-20"); //YYYY-MM-DD
  endDate = new Date("2018-01-22"); //YYYY-MM-DD

  allAllocationsArr: { id: string, role: string, user: string, start: string, end: string }[] = [];
  dates: string[] = [];

  constructor(private allocationService: AllocationService, private utilsService: UtilsService) { }

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

    //get sprint plan
    this.dates = this.utilsService.getDateArray(this.startDate, this.endDate);
  }

  filtersVisibility() {
    this.showFilters = !this.showFilters;
  }

}
