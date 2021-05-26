import { Component } from '@angular/core';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'App-Knap';
  authUser: any = null;
  items: MenuItem[];

  constructor(private authService: AuthService){

  }

  //Angular lifecycle hook
  ngOnInit() {
    //get the user
    this.authService.user$.subscribe(
      au =>{
        this.authUser = au;
        if(this.authUser != null){
          this.items = [
            {
              label: "Home",
              icon: "pi pi-fw pi-home",
              routerLink: ['home']
            },
            {
              label: "Profile",
              icon: "pi pi-fw pi-user",
              routerLink: ['profile']
            },
            {
              label: "Your Applications",
              icon: "pi pi-fw pi-file",
              routerLink: ['applications']
            },
            {
              label: "Locations",
              icon: "pi pi-fw pi-map",
              routerLink: ['locations']
            },
            {
              label: "Logout",
              icon: "pi pi-fw pi-sign-out",
              command: (event) => {
                //Login the user
                this.authService.logout({returnTo: document.location.origin});
              }
            },
          ];
        }else{
          this.items = [
            {
              label: "Home",
              icon: "pi pi-fw pi-home",
              routerLink: ['home']
            },
            {
              label: "Locations",
              icon: "pi pi-fw pi-map",
              routerLink: ['locations']
            },
            {
              label: "Login",
              icon: "pi pi-fw pi-sign-in",
              command: (event) => {
                //Login the user
                this.authService.loginWithRedirect();
              }
            },
    
          ];
        }
      }//anon function
        
    )//End of sub
  }//End of ngOnInit()

}
