import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';
import { User } from '../../../shared/models/User';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  myProfile: User = null;

  constructor(private userService: UserService) { }

  ngOnInit() {

    //todo get user id from session
    const userId: number = 1;

    this.userService.getMyProfile(userId).subscribe(
      data => this.myProfile = data
    );
  }

  toggleSideBar: boolean;
  @Output() notify: EventEmitter<boolean> = new EventEmitter<boolean>();

  toggleSideMenu() {
    this.toggleSideBar = !this.toggleSideBar;
    this.notify.emit(this.toggleSideBar);
  }
}
