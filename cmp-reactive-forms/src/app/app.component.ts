import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  genders = ['male', 'female'];
  forbiddenUsername = ['Mr', 'Miss'];
  signUpForm: FormGroup;

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      'userData': new FormGroup(
        {
          'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
          'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmail)
        }
      ),

      'gender': new FormControl('female'),
      'hobbies': new FormArray([])
    });

    this.signUpForm.valueChanges.subscribe(
      (value) => console.log(value)
    );

    this.signUpForm.statusChanges.subscribe(
      (value) => console.log(value)
    );
  }

  onSubmit() {
    console.log(this.signUpForm);
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);

  }

  getHobbies() {
    return (this.signUpForm.get('hobbies') as FormArray).controls;
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsername.indexOf(control.value) != -1) {
      return { 'nameIsForbidden': true };
    }
    return null;
  }

  forbiddenEmail(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "test@test.com") {
          resolve({ 'emailIsForbidden': true });
        }
        else {
          resolve(null);
        }
      }, 1500);
    })

    return promise;
  }
}
