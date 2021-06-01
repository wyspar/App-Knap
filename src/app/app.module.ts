import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';

//Custom modules
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';
import {Button, ButtonModule} from 'primeng/button';
import {TabViewModule} from 'primeng/tabview';
import { AuthModule } from '@auth0/auth0-angular';
import {HttpClientModule} from '@angular/common/http';
import {DataViewModule} from 'primeng/dataview';
import {PanelModule} from 'primeng/panel';
import {RatingModule} from 'primeng/rating';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DialogModule} from 'primeng/dialog';
import {RippleModule} from 'primeng/ripple';

//My components
import { ApplicationsComponent } from './Components/Applications/Applications.component';
import { HomeComponent } from './Components/Home/Home.component';
import { LocationsComponent } from './Components/Locations/Locations.component';
import { ProfileComponent } from './Components/Profile/Profile.component';
import { CreateAnAppComponent } from './Components/CreateAnApp/CreateAnApp.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationsComponent,
    HomeComponent,
    LocationsComponent,
    ProfileComponent,
    CreateAnAppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    TabViewModule,
    InputTextModule,
    ButtonModule,
    HttpClientModule,
    DataViewModule,
    PanelModule,
    RatingModule,
    DropdownModule,
    FormsModule,
    BrowserAnimationsModule,
    DialogModule,
    RippleModule,
    AuthModule.forRoot(
      {
        domain: environment.DOMAIN,
        clientId: environment.CLIENT_ID
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
