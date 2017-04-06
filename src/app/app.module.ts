import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule} from "@angular/flex-layout";
import { } from 'primeng/primeng';
import {
  OrderListModule, DataTableModule, SharedModule,
  MessagesModule, ButtonModule, GalleriaModule, ChartModule,
  GrowlModule
} from 'primeng/primeng';
import 'hammerjs';

// imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './heroes/in-memory-data.service';

// app components
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// layout components
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';

// auth component
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './account/login/login.component';
import { SignupComponent } from './account/signup/signup.component';
import { AdminComponent } from './account/admin/admin.component';
import { ProfileComponent } from './account/profile/profile.component';
import { LogoutComponent } from './account/logout/logout.component'

// home
import { HomeComponent } from './home/home.component';
import { HomeAComponent, DialogResultExampleDialog } from './home/home-a/home-a.component';
import { HomeBComponent } from './home/home-b/home-b.component';

// heroes
import { HeroesPanelComponent } from './heroes/heroes-panel/heroes-panel.component';
import { HeroDetailComponent } from './heroes/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroService } from './heroes/hero.service';
import { DashboardComponent } from './heroes/dashboard.component';
import { HeroSearchComponent } from './heroes/hero-search.component';

// experimental
import { ExpcomponentComponent } from './exp/expcomponent/expcomponent.component';
import { ExpdirectiveDirective } from './exp/expdirective.directive';
import { ExppipePipe } from './exp/exppipe.pipe';

// graphics
import { GraphicsComponent } from './graphics/graphics/graphics.component';
import { PanoramaEquirectangularComponent } from './graphics/panorama-equirectangular/panorama-equirectangular.component';
import { CubeComponent } from './graphics/cube/cube.component';

// primeng
import { PrimengComponent } from './primeng/primeng/primeng.component';
import { CarService } from './service/carservice';

//
import { EqualValidator } from './_directives/equal-validator.directive';

// fake backend
// ng build --prod failure, see https://github.com/angular/angular-cli/issues/5707
/*import { MockHttpBackend } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions, Http } from '@angular/http';
import { MockBackendHeroes } from './_mock-backend/mock-backend.heroes';
import { MockBackendAuth } from './_mock-backend/mock-backend.auth';
*/

// auth
import { AuthGuard } from './_guards/index';
import { AuthenticationService, UserService, ApiUrlService } from './_services/index';

//
import { FormService } from './_services/form.service';

// named exported function
/*export function httpFactory(backend: MockBackend, options: BaseRequestOptions) {
    return new Http(backend, options);
}*/

@NgModule({
  imports: [
    MaterialModule,
    FlexLayoutModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { passThruUnknownUrl: true }),
    AppRoutingModule,
    OrderListModule, DataTableModule, SharedModule, MessagesModule,
    ButtonModule, GalleriaModule, ChartModule, GrowlModule
  ],
  declarations: [
    AppComponent,

    HeroesPanelComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    HeroSearchComponent,

    NavbarComponent,
    FooterComponent,

    AuthComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    ProfileComponent,
    LogoutComponent,

    ExpcomponentComponent,
    ExpdirectiveDirective,
    ExppipePipe,

    HomeComponent,
    HomeAComponent,
    DialogResultExampleDialog,
    HomeBComponent,

    GraphicsComponent,
    PanoramaEquirectangularComponent,
    CubeComponent,

    PrimengComponent,
    EqualValidator,
  ],
  providers: [
    HeroService,
    CarService,

    // auth
    AuthGuard,
    AuthenticationService,
    UserService,
    ApiUrlService,

    /*
    // providers used to create fake backend
    MockBackend,
    BaseRequestOptions,
    {
      provide: Http,
      deps: [MockBackend, BaseRequestOptions],
      useFactory: httpFactory, 
      //code below is not working
      //useFactory: (backend: MockBackend, options: BaseRequestOptions) => { return new Http(backend, options); }
    },
    MockBackendHeroes,
    MockBackendAuth,
    */

    //
    FormService
  ],
  entryComponents: [DialogResultExampleDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
