import { Injectable } from '@angular/core';

declare var google: any;

export class GoogleChartsBaseService {
  constructor() {
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.load("current", { packages: ["timeline"] });
  }

  protected buildChart(data: any[], chartFunc: any, options: any): void {
    var func = (chartFunc, options) => {
      var datatable = google.visualization.arrayToDataTable(data);
      chartFunc().draw(datatable, options);
    };
    var callback = () => func(chartFunc, options);
    google.charts.setOnLoadCallback(callback);
  }

  protected buildTimeLineChart(data: any[], chartFunc: any, options: any, ): void {
    var func = (chartFunc, options) => {
      var datatable = new google.visualization.DataTable();

      // datatable.addColumn({ type: 'string', id: 'JiraId' });
      datatable.addColumn({ type: 'string', id: 'Role' });
      datatable.addColumn({ type: 'string', id: 'Name' });
      datatable.addColumn({ type: 'date', id: 'Start' });
      datatable.addColumn({ type: 'date', id: 'End' });

      for (let entry of data) {

        let startDate: Date = new Date(entry['start'] + "T00:00:00+05:30");
        let endDate: Date = new Date(entry['end'] + "T23:59:00+05:30");

         console.log( entry['role']);
        // console.log(endDate + "end");

        datatable.addRows([
          [entry['id'], entry['user'], startDate, endDate]]);

      }

      // datatable.addRows([
      //   ['VH-7262', 'George Washington', new Date(2018, 5, 15), new Date(2018, 5, 16)],
      //   ['VH-7262', 'Thomas Jefferson', new Date(2018, 5, 17), new Date(2018, 5, 20)]]);
      // datatable.addRows([
      //   ['VH-7263', 'George Washington', new Date(2018, 5, 16), new Date(2018, 5, 18)],
      //   ['VH-7263', 'Thomas Jefferson', new Date(2018, 5, 21), new Date(2018, 5, 22)]]);

      chartFunc().draw(datatable, options);
    };
    var callback = () => func(chartFunc, options);
    google.charts.setOnLoadCallback(callback);
  }

}
