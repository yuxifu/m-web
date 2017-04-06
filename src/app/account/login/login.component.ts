import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../_services/index';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
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
            'emailorusername': [null, Validators.required],
            'password': [null, Validators.compose([
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
        this.login();
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.data['emailorusername'], this.data['password'])
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
