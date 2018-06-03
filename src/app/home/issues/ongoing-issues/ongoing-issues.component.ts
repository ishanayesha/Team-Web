import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ongoing-issues',
  templateUrl: './ongoing-issues.component.html',
  styleUrls: ['./ongoing-issues.component.css']
})
export class OngoingIssuesComponent implements OnInit {

  showFilters: boolean = false;
  
    constructor() { }
  
    ngOnInit() {
    }
  
    filtersVisibility() {
      this.showFilters = !this.showFilters;
    }

}
