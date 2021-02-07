import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-assignment-seven-reactiveforms',
  templateUrl: './assignment-seven-reactiveforms.component.html',
  styleUrls: ['./assignment-seven-reactiveforms.component.css']
})
export class AssignmentSevenReactiveformsComponent implements OnInit {
  projectStatus = ['Stable', 'Critical', 'Finished'];
  forbiddenNames = ['Test'];

  pName: string;
  pEmail: string;
  pStatus: string;

  viewSubmit: boolean = false;

  projectForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.projectForm = new FormGroup(
      {
        'projectData': new FormGroup(
          {
            'projectName': new FormControl(null, [Validators.required, this.forbiddenProjectNames.bind(this)]),
            'email': new FormControl(null, [Validators.required, Validators.email])
          }),
        projectStatus: new FormControl
      });
  }
  onSubmit() {
    this.viewSubmit = true;
    console.log(this.projectForm);

    this.pName = this.projectForm.get('projectData.projectName').value;
    this.pEmail = this.projectForm.get('projectData.email').value;
    this.pStatus = this.projectForm.get('projectStatus').value;

    this.projectForm.reset();
  }

  forbiddenProjectNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenNames.indexOf(control.value) != -1) {
      return { 'nameIsForbidden': true };
    }
    return null;
  }
}
