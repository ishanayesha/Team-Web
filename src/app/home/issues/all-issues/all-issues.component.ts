import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-issues',
  templateUrl: './all-issues.component.html',
  styleUrls: ['./all-issues.component.css']
})
export class AllIssuesComponent implements OnInit {

  showFilters: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  filtersVisibility() {
    this.showFilters = !this.showFilters;
  }

}
