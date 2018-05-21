import { Component, OnInit, Input } from '@angular/core';
import { PieChartConfig } from '../../../../shared/models/PieChartConfig';
import { GooglePieChartService } from '../../../../shared/services/google-pie-chart.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  @Input() data: any[];
  @Input() config: PieChartConfig;
  @Input() elementId: string;

  width: number;

  constructor(private _pieChartService: GooglePieChartService) { }

  ngOnInit(): void {
    this.width=window.screen.width*5/100;
    this._pieChartService.BuildPieChart(this.elementId, this.data, this.config);
    
  }

  //resize when screen size change
  onResize() {
    this._pieChartService.BuildPieChart(this.elementId, this.data, this.config);
  }
}
