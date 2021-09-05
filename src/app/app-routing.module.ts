import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponentRoute as RouteLandingComponent } from './routes/landing/landing.component';
import { RouteLoginComponent } from './routes/login/route-login/route-login.component';
import { RouteProfileComponent } from './routes/profile/route-profile/route-profile.component';
import { RouteAdsComponent } from './routes/route-ads/route-ads.component';
import { RouteSignUpComponent } from './routes/sign-up/route-sign-up.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: RouteLandingComponent
  },
  { path: 'home', component: RouteLandingComponent },
  { path: 'login', component: RouteLoginComponent },
  { path: 'signup', component: RouteSignUpComponent },
  { path: 'ads', component: RouteAdsComponent },
  { path: 'profile', component: RouteProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const ArrayOfComponents = [RouteProfileComponent];