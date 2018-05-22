import { Component, OnInit } from '@angular/core';

import { TimelineChartConfig } from '../../shared/models/TimelineChartConfig';

@Component({
  selector: 'app-my-allocation',
  templateUrl: './my-allocation.component.html',
  styleUrls: ['./my-allocation.component.css']
})
export class MyAllocationComponent implements OnInit {

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

    this.config2 = new TimelineChartConfig(false, [{groupByRowLabel: true}]);
    this.elementId2 = 'myPieChart2';

  }

}
