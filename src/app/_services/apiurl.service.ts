import { Injectable, OnInit } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class ApiUrlService implements OnInit {
    public environmentName = environment.envName;
    public apiRoot = environment.apiRoot;
    public urlRegister: string;
    public urlLogin: string;
    public urlGoogleLogin: string;
    public urlFacebookLogin: string;
    public jsonRequestOptions: RequestOptions;

    constructor() {
        this.urlRegister = this.apiRoot + 'rest-auth/registration/';
        this.urlLogin = this.apiRoot + 'rest-auth/login/';
        this.urlGoogleLogin = this.apiRoot + 'rest-auth/google/';
        this.urlFacebookLogin = this.apiRoot + 'rest-auth/facebook/';
        this.jsonRequestOptions = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json' }) });
    }

    ngOnInit() {
        this.printAllUrls();
    }

    printAllUrls() {
        console.log('apiRoot: ' + this.apiRoot);
        console.log('urlRegister: ' + this.urlRegister);
        console.log('urlLogin: ' + this.urlLogin);
        console.log('urlGoogleLogin: ' + this.urlGoogleLogin);
        console.log('urlFacebookLogin: ' + this.urlFacebookLogin);
    }

}