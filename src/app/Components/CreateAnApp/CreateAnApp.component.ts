import { Component, Input, OnInit } from '@angular/core';
import {Location} from "../../Models/Location";
import {Address} from "../../Models/Address";
import { AuthService } from '@auth0/auth0-angular';
import {SelectItem} from 'primeng/api';
import { ClearbitApiService } from '../../services/clearbit-api.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-CreateAnApp',
  templateUrl: './CreateAnApp.component.html',
  styleUrls: ['./CreateAnApp.component.scss']
})
export class CreateAnAppComponent implements OnInit {

  // @Input() location: {
  //   id: number,
  //   name: string,
  //   cost: number,
  //   rent: boolean,
  //   address: Address,
  //   minMonths: number,
  //   maxMonths: number,
  //   rating: number,
  //   website: string,
  //   logo: string,
  // }
  location: Location = {
    id: 0,
    name: "",
    cost: 0,
    rent: false,
    address: {
      id: 0,
      city: "",
      state: "",
      street: "",
      zip: ""
    },
    minMonths: 0,
    maxMonths: 0,
    rating: 0,
    website: "",
    logo: "",
  };
  authUser: any;
  finishedLoading: boolean = false;

  constructor(private authService: AuthService, private clearbitApiService: ClearbitApiService, private route: ActivatedRoute) {

  }

  ngOnInit() {
      //Set the logged in user
      this.authService.user$.subscribe(
        au =>{
          this.authUser = au;
        }
      )
      this.route.queryParams.subscribe(params => {
        //this.location = params["location"];
        this.location.name = params["name"],
        this.location.cost = params["cost"];
        this.location.rent = params["rent"];
        // minMonths: 0;
        // maxMonths: 0;
        this.location.rating = params["rating"];
        this.location.website = params["website"];
        this.location.logo = params["logo"];
        this.location.address.city = params["city"];
        this.location.address.state = params["state"];
        console.log(params["city"]);
        this.finishedLoading = true;
      });
  }

}
