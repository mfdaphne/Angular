import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  username: String = 'adminUser';
  disableUser = false;
  constructor() { }

  ngOnInit(): void {
  }

  isUsernamePresent(){
    if(this.username == ''){
      this.disableUser = true;
    }

    return this.disableUser;
  }

  resetUser(){
    this.username = '';
  }
}
