import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/models/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  myProfile: User = null;

  constructor(private userService: UserService) { }

  ngOnInit() {

    //todo get user id from session
    const userId: number = 1;

    this.userService.getMyProfile(userId).subscribe(
      data => this.myProfile = data
    );
  }

}
