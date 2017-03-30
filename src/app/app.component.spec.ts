import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {
  RouterTestingModule
} from '@angular/router/testing';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AuthenticationService } from './_services/index';
import { HttpModule } from '@angular/http';
import { MockBackendService } from "./_mock-backend/mock-backend.service";
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions, Http } from '@angular/http';


describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, NavbarComponent, FooterComponent
      ],
      imports: [RouterTestingModule, HttpModule],
      providers: [
        AuthenticationService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          deps: [MockBackend, BaseRequestOptions],
          useFactory: (backend: MockBackend, options: BaseRequestOptions) => { return new Http(backend, options); }
        },
      ]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Angular 2'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Angular 2');
  }));

});
