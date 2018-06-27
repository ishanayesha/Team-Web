import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../../shared/models/User';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  team: User[];

  constructor(private userService: UserService, private http: HttpClient) { }

  ngOnInit() {

    //retrive all team members
    this.userService.getAllUsers().subscribe(data => this.team = data);
  }

}
