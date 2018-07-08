import { Component, OnInit } from '@angular/core';
import { IssueService } from '../../../shared/services/issue.service';
import { Issue } from '../../../shared/models/Issue';
import { UserService } from '../../../shared/services/user.service';
import { User } from '../../../shared/models/User';

@Component({
  selector: 'app-ongoing-issues',
  templateUrl: './ongoing-issues.component.html',
  styleUrls: ['./ongoing-issues.component.css']
})
export class OngoingIssuesComponent implements OnInit {

  showFilters: boolean = true;
  issues: Issue[] = [];
  team: User[] = [];

  filterColumn: string = null;
  searchText: string = null;
  jiraId: string = null;
  dev: string = null;
  qa: string = null;
  type: string = null;

  devList: boolean = false;
  qaList: boolean = false;

  orderColumn: string = null;
  ascending: boolean = null;
  constructor(private issueService: IssueService, private userService: UserService) { }

  ngOnInit() {
    //load ngoing issues
    this.issueService.getOngoingIssues().subscribe(data => this.issues = data);

    //load members
    this.userService.getAllUsers().subscribe(data => this.team = data);
  }

  filtersVisibility() {
    this.showFilters = !this.showFilters;
  }

  setFilterVal(column, text) {
    this.filterColumn = column;
    this.searchText = text;

    if (!text) {
      this.devList = false;
      this.qaList = false;
    }
    else {

      if (column == 'jiraId') {
        this.dev = '';
        this.qa = '';
        this.type = '';
      }
      else if (column == 'dev') {
        this.jiraId = '';
        this.qa = '';
        this.type = '';
        this.devList = true;
      }
      else if (column == 'qa') {
        this.dev = '';
        this.jiraId = '';
        this.type = '';
        this.qaList = true;
      }
      else if (column == 'type') {
        this.dev = '';
        this.qa = '';
        this.jiraId = '';
      }
    }
  }

  setOrderByVal(column) {

    if (this.ascending == null) {
      this.ascending = true;
    } else {
      this.ascending = !this.ascending;
    }
    this.orderColumn = column;
  }

}
