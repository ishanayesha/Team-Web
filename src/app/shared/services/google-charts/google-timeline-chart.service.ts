import { GoogleChartsBaseService } from './google-charts-base.service';
import { TimelineChartConfig } from '../../models/TimelineChartConfig';
import { Injectable } from '@angular/core';

declare var google: any;

@Injectable()
export class GoogleTimelineChartService extends GoogleChartsBaseService {

  constructor() { super(); }

  public BuildTimelineChart(elementId: string, data: any[], config: TimelineChartConfig): void {
    var chartFunc = () => { return new google.visualization.Timeline(document.getElementById(<string>elementId)); };
    var options = {
      avoidOverlappingGridLines: config.avoidOverlappingGridLines,
      timeline: config.timeline,
      backgroundColor: '#FFF9E8',
      colors: ['#28BF68', '#F1DF24'],
      
    };

    this.buildTimeLineChart(data, chartFunc, options);
  }

}