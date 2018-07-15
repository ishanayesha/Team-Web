import { Component, OnInit } from '@angular/core';
import { IssueService } from '../../../shared/services/issue.service';
import { UserService } from '../../../shared/services/user.service';
import { Issue } from '../../../shared/models/Issue';

@Component({
  selector: 'app-my-issues',
  templateUrl: './my-issues.component.html',
  styleUrls: ['./my-issues.component.css']
})
export class MyIssuesComponent implements OnInit {

  issues: Issue[] = [];
  userRole: string = null;

  constructor(private issueService: IssueService, private userService: UserService) { }

  ngOnInit() {
    //todo
    this.userRole = "dev";

    let userId: number = 1;
    this.issueService.getMyIssues(userId).subscribe(data => this.issues = data);
  }

}
