import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit {

  startDate: any;
  date:any;
  dateMax:any;

  constructor() {
    this.startDate = Date.now();
    this.date=Date.now();
    this.dateMax="2018-06-18";
    
   }

  ngOnInit() {
  }

  model;

}
