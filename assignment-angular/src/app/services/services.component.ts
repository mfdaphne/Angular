import { Component, OnInit } from '@angular/core';
import { UsersService } from './UsersService.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  providers: [UsersService]
})
export class ServicesComponent implements OnInit {

  activeUsers = [];
  inactiveUsers = [];

  constructor(private userService: UsersService) {

  }

  ngOnInit() {
    this.activeUsers = this.userService.activeUsers;
    this.inactiveUsers = this.userService.inactiveUsers;
  }

}
