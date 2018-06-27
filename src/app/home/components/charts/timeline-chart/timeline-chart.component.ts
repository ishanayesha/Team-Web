import { Component, OnInit, Input } from '@angular/core';
import { TimelineChartConfig } from '../../../../shared/models/TimelineChartConfig';
import { GoogleTimelineChartService } from '../../../../shared/services/google-charts/google-timeline-chart.service';

@Component({
  selector: 'app-timeline-chart',
  templateUrl: './timeline-chart.component.html',
  styleUrls: ['./timeline-chart.component.css']
})
export class TimelineChartComponent implements OnInit {

  @Input() data: any[];
  @Input() config: TimelineChartConfig;
  @Input() elementId: string;

  constructor(private _timelineChartService: GoogleTimelineChartService) { }

  ngOnInit(): void {
    this._timelineChartService.BuildTimelineChart(this.elementId, this.data, this.config);
  }

}
