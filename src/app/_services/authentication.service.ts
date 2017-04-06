import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { ApiUrlService } from './apiurl.service';
import { ApiResult } from '../_models/api-result.model';

@Injectable()
export class AuthenticationService {
    public token: string;
    public userName: string;
    public email: string;
    public userStorageKey: string = 'currentUser';

    constructor(private http: Http, private url: ApiUrlService) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem(this.userStorageKey));
        this.token = currentUser && currentUser.token;
        this.userName = currentUser && currentUser.username;
        this.email = currentUser && currentUser.email;
    }

    private handleError(error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        return Observable.throw(errMsg);
    }

    register(username: string, email: string, password: string): Observable<ApiResult> {
        let result: ApiResult = new ApiResult();
        result.url = this.url.urlRegister;
        return this.http.post(this.url.urlRegister,
            JSON.stringify({
                username: username, email: email, password1: password, password2: password
            }), this.url.jsonRequestOptions)
            .map((response: Response) => {
                result.status = response.status;
                result.statusText = response.statusText;
                let token = response.json() && response.json().key;
                if (token) {
                    // set token property
                    this.token = token;
                    this.userName = username;
                    this.email = email;

                    // store username and token in local storage to keep user logged in between page refreshes
                    localStorage.setItem(this.userStorageKey,
                        JSON.stringify({ username: username, email: email, token: token }));

                    // return true to indicate successful
                    result.succeed = true;
                    return result;
                }
                else {
                    // return false to indicate failed
                    result.succeed = false;
                    result.errorMessage = 'API server returned unexpected data.';
                    result.debugInfo = response.text();
                    return result;
                }
            })
            .catch(this.handleError);
    }

    private loginJson(emailOrUsername: string, password: string): any {
        if (emailOrUsername.indexOf('@') != -1) {
            return { email: emailOrUsername, password: password };
        }
        else {
            return { username: emailOrUsername, password: password };
        }
    }

    private loginEmail(emailOrUsername: string): string {
        if (emailOrUsername.indexOf('@') != -1) {
            return emailOrUsername;
        }
        else {
            return '';
        }
    }

    private loginUsername(emailOrUsername: string): string {
        if (emailOrUsername.indexOf('@') != -1) {
            var nameParts = emailOrUsername.split("@");
            return nameParts.length == 2 ? nameParts[0] : '';
        }
        else {
            return emailOrUsername;
        }
    }

    login(emailOrUsername: string, password: string): Observable<ApiResult> {
        let result: ApiResult = new ApiResult();
        result.url = this.url.urlLogin;
        return this.http.post(this.url.urlLogin,
            JSON.stringify(this.loginJson(emailOrUsername, password)), this.url.jsonRequestOptions)
            .map((response: Response) => {
                result.status = response.status;
                result.statusText = response.statusText;
                let token = response.json() && response.json().key;
                if (token) {
                    // set token property
                    this.token = token;
                    this.userName = this.loginUsername(emailOrUsername);
                    this.email = this.loginEmail(emailOrUsername);

                    // store username and token in local storage to keep user logged in between page refreshes
                    localStorage.setItem(this.userStorageKey,
                        JSON.stringify({
                            username: this.loginUsername(emailOrUsername),
                            email: this.loginEmail(emailOrUsername), token: token
                        }));

                    // return true to indicate successful
                    result.succeed = true;
                    return result;
                }
                else {
                    // return false to indicate failed
                    result.succeed = false;
                    result.errorMessage = 'API server returned unexpected data.';
                    result.debugInfo = response.text();
                    return result;
                }
            })
            .catch(this.handleError);
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        this.email = null;
        this.userName = null;
        localStorage.removeItem(this.userStorageKey);
    }

    isLoggedIn() {
        return localStorage.getItem(this.userStorageKey);
    }

    getCurrentUserDisplayName() {
        return this.userName || '';
    }

    isAdmin() {
        return false;
    }

}