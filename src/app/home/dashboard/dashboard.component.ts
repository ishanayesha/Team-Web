import { Component, OnInit } from '@angular/core';
import { PieChartConfig } from '../../shared/models/PieChartConfig';

///
import { TimelineChartConfig } from '../../shared/models/TimelineChartConfig';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  data1: any[];
  config1: PieChartConfig;
  elementId1: String;

  data2: any[];
  config2: TimelineChartConfig;
  elementId2: String;

  constructor() { }

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

    //Timeline Data & Config
    this.data2 = [['Task', 'Hours per Day'],
    ['Eat', 3],
    ['Commute', 2],
    ['Watch TV', 5],
    ['Video games', 4],
    ['Sleep', 10]];

    this.config2 = new TimelineChartConfig(false,[]);
    this.elementId2 = 'myPieChart2';

  }

}
