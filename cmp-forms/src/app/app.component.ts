import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') formContent: NgForm;
  defaultQuestion = 'pet';
  answer = '';

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // onSubmit(ele: NgForm) {
  //   console.log(ele.value);
  //   console.log('Email : ' + ele.value.email);
  // }

  onSubmit() {
    console.log(this.formContent);
  }
}
