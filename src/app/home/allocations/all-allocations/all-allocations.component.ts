import { Component, OnInit } from '@angular/core';

import { TimelineChartConfig } from '../../../shared/models/TimelineChartConfig';

@Component({
  selector: 'app-all-allocations',
  templateUrl: './all-allocations.component.html',
  styleUrls: ['./all-allocations.component.css']
})
export class AllAllocationsComponent implements OnInit {

  showFilters: boolean = false;
  
  data2: any[];
  config2: TimelineChartConfig;
  elementId2: String;

  constructor() { }

  ngOnInit() {

    //Timeline Data & Config
    this.data2 = [['Task', 'Hours per Day'],
    ['Eat', 3],
    ['Eat', 2],
    ['Watch TV', 5],
    ['Video games', 4],
    ['Eat', 10]];

    this.config2 = new TimelineChartConfig(false, [{ groupByRowLabel: true }]);
    this.elementId2 = 'myPieChart2';

  }

  filtersVisibility() {
    this.showFilters = !this.showFilters;
  }

}
