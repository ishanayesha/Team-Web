import { Injectable } from '@angular/core';

declare var google: any;

export class GoogleChartsBaseService {
  constructor() { 
    google.charts.load('current', {'packages':['corechart']});
    google.charts.load("current", {packages:["timeline"]});
  }

  protected buildChart(data: any[], chartFunc: any, options: any) : void {
    var func = (chartFunc, options) => {
      var datatable = google.visualization.arrayToDataTable(data);
      chartFunc().draw(datatable, options);
    };   
    var callback = () => func(chartFunc, options);
    google.charts.setOnLoadCallback(callback);
  }
  
  protected buildTimeLineChart(data: any[], chartFunc: any, options: any, ) : void {
    var func = (chartFunc, options) => {
      var datatable = new google.visualization.DataTable();

      datatable.addColumn({ type: 'string', id: 'Role' });
      datatable.addColumn({ type: 'string', id: 'Name' });
      datatable.addColumn({ type: 'date', id: 'Start' });
      datatable.addColumn({ type: 'date', id: 'End' });
      datatable.addRows([
        [ 'Dev', 'George Washington', new Date(2018, 5, 13), new Date(2018, 5, 15) ],
        [ 'QA', 'Thomas Jefferson',  new Date(2018, 5, 16), new Date(2018, 5, 20) ]]);
  
      chartFunc().draw(datatable, options);
    };   
    var callback = () => func(chartFunc, options);
    google.charts.setOnLoadCallback(callback);
  }

}
