import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../_services/index';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  loading = false;
  error = '';
  data: any;
  form: FormGroup;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private fb: FormBuilder) {
    this.form = fb.group({
      // 1st item: default value if any; then validator(s). 
      'username': null,
      'email': [null, Validators.compose([
        Validators.required,
        Validators.email])],
      'password': [null, Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(1000)])],
      'password2': [null, Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(1000)])],
    })
  }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();
  }

  submit(value: any) {
    console.log(value);
    this.data = value;
    this.regesiter();
  }

  regesiter() {
    this.loading = true;
    this.authenticationService.register(this.data['username'],
      this.data['email'], this.data['password'])
      .subscribe(result => {
        console.log(result);
        if (result.succeed) {
          this.router.navigate(['/']);
        } else {
            this.loading = false;
            this.error = result.errorMessage;
        }
      }, error => {
        console.log(error);
        this.loading = false;
        this.error = error;
      });
  }
}

