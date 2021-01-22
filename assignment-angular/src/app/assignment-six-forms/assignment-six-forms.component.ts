import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-assignment-six-forms',
  templateUrl: './assignment-six-forms.component.html',
  styleUrls: ['./assignment-six-forms.component.css']
})
export class AssignmentSixFormsComponent implements OnInit {
  @ViewChild('f') formContent: NgForm;
  defaultSubscription = 'advanced';
  isSubmitted = false;

  formData = {
    email: '',
    subscription: '',
    password: ''
  };
  constructor() { }

  ngOnInit(): void {

  }
  onSubmit() {
    console.log(this.formContent);
    this.isSubmitted = true;
    this.formData.email = this.formContent.value.email;
    this.formData.subscription = this.formContent.value.subscription;
    this.formData.password = this.formContent.value.password;

    this.formContent.reset();
  }
}
