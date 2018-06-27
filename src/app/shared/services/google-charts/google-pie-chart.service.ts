import { GoogleChartsBaseService } from './google-charts-base.service';
import { PieChartConfig } from '../../models/PieChartConfig';
import { Injectable } from '@angular/core';

declare var google: any;

@Injectable()
export class GooglePieChartService extends GoogleChartsBaseService {

  constructor() { super(); }

  public BuildPieChart(elementId: string, data: any[], config: PieChartConfig) : void {  
    var chartFunc = () => { return new google.visualization.PieChart(document.getElementById(<string>elementId)); };
    var options = {
            title: config.title,
            pieHole: config.pieHole,
            is3D: true
      };

    this.buildChart(data, chartFunc, options);
  }
}
