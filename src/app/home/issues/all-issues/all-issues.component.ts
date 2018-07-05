import { Component, OnInit } from '@angular/core';
import { IssueService } from '../../../shared/services/issue.service';
import { Issue } from '../../../shared/models/Issue';

@Component({
  selector: 'app-all-issues',
  templateUrl: './all-issues.component.html',
  styleUrls: ['./all-issues.component.css']
})
export class AllIssuesComponent implements OnInit {

  showFilters: boolean = false;
  issues: Issue[] = [];
  
    constructor(private issueService: IssueService) { }
  
    ngOnInit() {
      this.issueService.getAllIssues().subscribe(data => this.issues = data);
    }

  filtersVisibility() {
    this.showFilters = !this.showFilters;
  }

}
