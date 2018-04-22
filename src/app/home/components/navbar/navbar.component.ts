import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toggleSideBar:boolean;
  @Output() notify: EventEmitter<boolean>=new EventEmitter<boolean>();

  toggleSideMenu() {

    this.toggleSideBar = !this.toggleSideBar;
    this.notify.emit(this.toggleSideBar);
  }
}
