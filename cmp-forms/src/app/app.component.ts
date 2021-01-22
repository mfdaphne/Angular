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
  genders = ['male', 'female'];
  isSubmitted = false;

  user = {
    username: '',
    email: '',
    question: '',
    answer: '',
    gender: ''
  };
  suggestUserName() {
    const suggestedName = 'Superuser';
    this.formContent.form.patchValue({
      userDataGroup: {
        username: suggestedName
      }
    });
  }

  // onSubmit(ele: NgForm) {
  //   console.log(ele.value);
  //   console.log('Email : ' + ele.value.email);
  // }

  onSubmit() {
    this.isSubmitted = true;
    this.user.username = this.formContent.value.userDataGroup.username;
    this.user.email = this.formContent.value.userDataGroup.email;
    this.user.question = this.formContent.value.secret;
    this.user.answer = this.formContent.value.questionAnswer;
    this.user.gender = this.formContent.value.gender;

    this.formContent.reset();
  }
}
