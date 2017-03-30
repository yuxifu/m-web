import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Hero } from './hero';

@Injectable()
export class HeroSearchService {

    constructor(private http: Http) { }

    search(term: string): Observable<Hero[]> {
        let heroes = this.http
            .get(`http://localhost:4200/heroes/?name=${term}`)
            .map(response => response.json() as Hero[]);
        console.log(heroes);
        return heroes;
    }
}