import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styles: [`.countColor {
      color : white;
  }`]
})
export class DirectivesComponent implements OnInit {

  toggle = false;
  countClicks =[];
  count = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onClickDisplayDetails(){
    this.toggle = !this.toggle;
    this.countClicks.push(this.count++);
  }
}
