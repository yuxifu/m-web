import { Injectable } from "@angular/core";
import { Hero } from '../heroes/hero'
import { HEROES } from "../heroes/mock-heroes";
import { MockBackendSubscriber } from './mock-backend.subscriber';
import { MockBackend, MockConnection } from "@angular/http/testing";
import { ResponseOptions, Response, RequestMethod } from "@angular/http";

@Injectable()
export class MockBackendHeroes implements MockBackendSubscriber {
    heroes: Hero[] = HEROES;

    getNewHeroId(): number {
        let newId = 1;
        for (let hero of this.heroes) {
            if (hero.id >= newId) {
                newId = hero.id + 1;
            }
        }
        return newId;
    }

    subscribe(backend: MockBackend) {
        backend.connections.subscribe((c: MockConnection) => {
            const URL = "http://localhost:4200/heroes";
            let heroesIdRegex = /\/heroes\/([0-9]+)/i;
            let heroesNameRegex = /\/heroes\/\?name=(.+)/i;

            // Get, Post
            if (c.request.url === URL) {
                switch (c.request.method) {
                    case RequestMethod.Get:
                        c.mockRespond(new Response(new ResponseOptions({
                            body: JSON.stringify(this.heroes)
                        })));
                        break;
                    case RequestMethod.Post:
                        let name = JSON.parse(c.request.getBody()).name;
                        let newHero = { id: this.getNewHeroId(), name: name };
                        this.heroes.push(newHero);
                        c.mockRespond(new Response(new ResponseOptions({
                            body: JSON.stringify(newHero)
                        })));
                        break;
                    default:
                        break;
                }
            } else if (c.request.url.match(heroesIdRegex)) {
                let id = Number(c.request.url.match(heroesIdRegex)[1]);
                switch (c.request.method) {
                    case RequestMethod.Get:
                        let matches = this.heroes.filter((hero) => {
                            return hero.id === id
                        });
                        c.mockRespond(new Response(new ResponseOptions({
                            body: JSON.stringify(matches[0])
                        })));
                        break;
                    case RequestMethod.Put:
                        let index = 0;
                        for (let hero of this.heroes) {
                            if (hero.id == id) {
                                this.heroes[index] = JSON.parse(c.request.getBody());
                                break;
                            }
                            index++;
                        }
                        c.mockRespond(new Response(new ResponseOptions({})));
                        break;
                    case RequestMethod.Patch:
                        break;
                    case RequestMethod.Delete:
                        index = 0;
                        for (let hero of this.heroes) {
                            if (hero.id == id) {
                                this.heroes.splice(index, 1);
                                break;
                            }
                            index++;
                        }
                        c.mockRespond(new Response(new ResponseOptions({})));
                        break;
                    default:
                        break;
                }
            }
            else if (c.request.url.match(heroesNameRegex)) {
                let name = c.request.url.match(heroesNameRegex)[1];
                let regex = new RegExp(name, "i");
                let filtered = this.heroes.filter(hero => regex.test(hero.name))
                let data = JSON.stringify(filtered);
                console.log(data);
                c.mockRespond(new Response(new ResponseOptions({
                    body: data
                })));
            }
        });
    }
}