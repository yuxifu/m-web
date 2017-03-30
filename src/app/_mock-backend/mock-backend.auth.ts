import { Injectable } from "@angular/core";
import { MockBackendSubscriber } from './mock-backend.subscriber';
import { MockBackend, MockConnection } from "@angular/http/testing";
import { ResponseOptions, Response, RequestMethod } from "@angular/http";

@Injectable()
export class MockBackendAuth implements MockBackendSubscriber {

    subscribe(backend: MockBackend) {
        backend.connections.subscribe((c: MockConnection) => {
            let testUser = { username: 'test', password: 'test', firstName: 'Test', lastName: 'User' };

            // wrap in timeout to simulate server api call
            setTimeout(() => {

                // fake authenticate api end point
                if (c.request.url.endsWith('/api/authenticate') && c.request.method === RequestMethod.Post) {
                    console.log("fakeBackendProvider Web API: /api/authenticate");

                    // get parameters from post request
                    let params = JSON.parse(c.request.getBody());

                    // check user credentials and return fake jwt token if valid
                    if (params.username === testUser.username && params.password === testUser.password) {
                        c.mockRespond(new Response(
                            new ResponseOptions({ status: 200, body: { token: 'fake-jwt-token' } })
                        ));
                    } else {
                        c.mockRespond(new Response(
                            new ResponseOptions({ status: 200 })
                        ));
                    }
                }

                // fake users api end point
                if (c.request.url.endsWith('/api/users') && c.request.method === RequestMethod.Get) {
                    // check for fake auth token in header and return test users if valid, this security is implemented server side
                    // in a real application
                    console.log("fakeBackendProvider Web API: /api/users");

                    if (c.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                        c.mockRespond(new Response(
                            new ResponseOptions({ status: 200, body: [testUser] })
                        ));
                    } else {
                        // return 401 not authorised if token is null or invalid
                        c.mockRespond(new Response(
                            new ResponseOptions({ status: 401 })
                        ));
                    }
                }

            }, 100);
        });

    }
}