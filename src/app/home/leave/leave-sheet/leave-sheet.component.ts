import { Component, OnInit } from '@angular/core';
import { LeaveService } from '../../../shared/services/leave.service';
import { Leave } from '../../../shared/models/Leave';

@Component({
  selector: 'app-leave-sheet',
  templateUrl: './leave-sheet.component.html',
  styleUrls: ['./leave-sheet.component.css']
})
export class LeaveSheetComponent implements OnInit {

  leaveArr: Leave[] = [];
  sprintPeriod:string[]=['2018-06-10','2018-06-11','2018-06-12','2018-06-13','2018-06-14','2018-06-15','2018-06-16','2018-06-17'];

  constructor(private leaveService: LeaveService) { }

  ngOnInit() {
    this.leaveService.getAllLeave().subscribe(data => this.leaveArr = data);
  }

}
