import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthUserInterface} from "../../types/authUser.interface";

@Component({
  selector: 'cm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submit = false;
  optionValidatorsEmail: Validators = [
    Validators.required,
    Validators.email
  ];
  optionValidatorsPassword: Validators = [
    Validators.required,
    Validators.minLength(8),
  ]

  ngOnInit(): void {
    this.initializationLoginForm();
  }

  initializationLoginForm = (): void => {
    this.loginForm = new FormGroup({
      email: new FormControl(null, this.optionValidatorsEmail),
      password: new FormControl(null, this.optionValidatorsPassword),
    });
  };

  onSubmitLoginForm = (): void => {
    if (this.loginForm.invalid) return;
    this.submit = true;

    const user: AuthUserInterface = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };
    console.log(user);
  };
}
