import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './heroes/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './heroes/hero-detail.component';
import { HomeComponent } from './home/home.component';
import { HomeAComponent } from './home/home-a/home-a.component';
import { HomeBComponent } from './home/home-b/home-b.component';
import { HeroesPanelComponent } from './heroes/heroes-panel/heroes-panel.component';
import { GraphicsComponent } from './graphics/graphics/graphics.component';
import { PrimengComponent } from './primeng/primeng/primeng.component';
import { LoginComponent } from './account/login/login.component';
import { SignupComponent } from './account/signup/signup.component';
import { AdminComponent } from './account/admin/admin.component';
import { ProfileComponent } from './account/profile/profile.component';
import { LogoutComponent } from './account/logout/logout.component'
import { ExpcomponentComponent } from './exp/expcomponent/expcomponent.component';

const routes: Routes = [
    { path: '', redirectTo: '//home/(home-a:a//home-b:b)', pathMatch: 'full' },
    {
        path: 'home', component: HomeComponent, children: [
            { path: '', redirectTo: '/home/(home-a:a//home-b:b)', pathMatch: 'full' },
            { path: 'a', component: HomeAComponent, outlet: 'home-a' },
            { path: 'b', component: HomeBComponent, outlet: 'home-b' },
        ]
    },
    {
        path: 'heroes', component: HeroesPanelComponent, children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'detail/:id', component: HeroDetailComponent },
            { path: 'list', component: HeroesComponent }
        ]
    },
    { path: 'graphics', component: GraphicsComponent },
    { path: 'primeng', component: PrimengComponent },
    { path: 'experimental', component: ExpcomponentComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'signup', component: SignupComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }