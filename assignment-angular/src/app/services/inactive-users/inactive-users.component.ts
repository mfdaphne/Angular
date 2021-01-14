import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersService } from '../UsersService.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() users: string[];
 
  constructor(private userService : UsersService){

  }

  onSetToActive(id: number) {
    this.userService.setActive(id);
  }

}
