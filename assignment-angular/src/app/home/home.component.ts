import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  assignments = ['Assignment 1', 'Assignment 2', 'Assignment 3',
    'Assignment 4', 'Assignment 5', 'Assignment 6', 'Assignment 7'];

  constructor() { }

  ngOnInit(): void {
  }

}
