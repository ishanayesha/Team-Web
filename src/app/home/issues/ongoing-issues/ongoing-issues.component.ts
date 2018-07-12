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

  showFilters: boolean = false;
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
  ascending: boolean = true;
  constructor(private issueService: IssueService, private userService: UserService) { }

  ngOnInit() {
    //load ngoing issues
    this.issueService.getOngoingIssues().subscribe(data => this.issues = data);

    //load members
    this.userService.getAllUsers().subscribe(data => this.team = data);

    this.ascending = true;
    this.orderColumn = "jiraId";
  }

  filtersVisibility() {
    this.showFilters = !this.showFilters;
  }

  setFilterVal(column: string, text: string, effectTolist: boolean) {
    this.filterColumn = column;

    //filter apply to table or not
    if (effectTolist) {
      this.searchText = text;
    }

    if (!text) {
      //hide list when text is empty
      this.devList = false;
      this.qaList = false;
      this.searchText = null;
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

    this.ascending = !this.ascending;
    this.orderColumn = column;
  }

  selectMember(column: string, firstName: string, lastName: string) {
alert("ssss")
    if (column == "dev") {
      this.dev = firstName + " " + lastName;
    } console.log("qa");

    if (column == "qa") {
      this.qa = firstName + " " + lastName;
      console.log(this.qa+"qa");
      
    }

    this.searchText = firstName + " " + lastName;
    this.devList = false;
    this.qaList = false;
  }

  // hideDevList() {
  //   this.devList = false;
  // }

  // hideQAList() {
  //   this.qaList = false;
  // }

}
