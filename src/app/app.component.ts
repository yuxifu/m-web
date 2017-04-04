import { Component } from '@angular/core';
//import { MockBackendService } from "./_mock-backend/mock-backend.service";
//import { MockBackendHeroes } from './_mock-backend/mock-backend.heroes';
//import { MockBackendAuth } from './_mock-backend/mock-backend.auth';

@Component({
    moduleId: module.id + '',
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    //providers: [MockBackendService]
})
export class AppComponent {
    title = 'Angular 2';

    constructor(){}
    /*constructor(
        private mockBackendService: MockBackendService,
        private mockBackendHeroes: MockBackendHeroes,
        private mockBackendAuth: MockBackendAuth
    ) {
        this.mockBackendService.register(mockBackendHeroes);
        this.mockBackendService.register(mockBackendAuth);
        this.mockBackendService.start();
    }*/
}
