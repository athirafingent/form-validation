import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmEqualValidatorDirective } from './confirm-equal-validator.directive';

declare var NgForm:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frorm-validation';
  regForm:FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.regForm = this.fb.group({
      'name': ["", Validators.required],
      'email': ["",  Validators.required, Validators.email],
      'phone': ["", Validators.required],
      'password': ["", Validators.required, Validators.minLength(6)],
      'confirmPassword': ["", Validators.required],
      'tnc': ["", Validators.required]
    });
  }

  get fval() {
    return this.regForm.controls;
  }

  signup() {
    console.log(this.regForm.value);
    this.submitted = true;
    if (this.regForm.invalid == false) {
      return;
    }
    alert('form fields are validated successfully!');
  }
}
