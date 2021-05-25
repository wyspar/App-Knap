import { Component } from '@angular/core';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'App-Knap';

  items: MenuItem[];

  //Angular lifecycle hook
  ngOnInit() {
    this.items = [
      {
        label: "Home",
        icon: "pi pi-fw pi-home"
      },
      {
        label: "Login",
        icon: "pi pi-fw pi-sign-in"
      },
      {
        label: "Logout",
        icon: "pi pi-fw pi-sign-out"
      },
      {
        label: "Profile",
        icon: "pi pi-fw pi-user"
      },
      {
        label: "Your Applications",
        icon: "pi pi-fw pi-file"
      },
      {
        label: "Locations",
        icon: "pi pi-fw pi-map"
      },
    ];

  }//End of ngOnInit()

}
