import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {

  showFilters: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  filtersVisibility() {
    this.showFilters = !this.showFilters;
  }

}
