import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-Profile',
  templateUrl: './Profile.component.html',
  styleUrls: ['./Profile.component.scss']
})
export class ProfileComponent implements OnInit {

  authUser: any;
  profileJson: string = null;
  finishedLoading: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
      //Set the logged in user
      this.authService.user$.subscribe(
        au => {
          (this.profileJson = JSON.stringify(au, null, 2));
          this.authUser = au;
          this.finishedLoading = true;
        }
          
      )
  }

}
