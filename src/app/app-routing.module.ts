import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';

import { ApplicationsComponent } from './Components/Applications/Applications.component';
import { HomeComponent } from './Components/Home/Home.component';
import { LocationsComponent } from './Components/Locations/Locations.component';
import { ProfileComponent } from './Components/Profile/Profile.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'applications', component: ApplicationsComponent, canActivate: [AuthGuard]},
  {path: 'locations', component: LocationsComponent},
  {path: 'home', component: HomeComponent},
  {path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
