import { Component, OnInit } from '@angular/core';
import {LocationService} from "../../Services/location.service";
import {Router, NavigationExtras} from "@angular/router";
import {Location} from "../../Models/Location";
import {Address} from "../../Models/Address";
import { AuthService } from '@auth0/auth0-angular';
import {SelectItem} from 'primeng/api';
import { ClearbitApiService } from '../../services/clearbit-api.service';

@Component({
  selector: 'app-Locations',
  templateUrl: './Locations.component.html',
  styleUrls: ['./Locations.component.scss']
})
export class LocationsComponent implements OnInit {

  authUser: any;
  locations: Location[] = [];
  sortOptions: SelectItem[];
  sortOrder: number;
  sortField: string;
  finishedLoading: boolean = false;

  constructor(private authService: AuthService, private locationService: LocationService, private clearbitApiService: ClearbitApiService, private router: Router) { }

  async ngOnInit() {

    //Set the logged in user
    this.authService.user$.subscribe(
      au =>
        this.authUser = au
    )

    //Sort options
    this.sortOptions = [
        {label: 'Price High to Low', value: '!cost'},
        {label: 'Price Low to High', value: 'cost'},
        {label: 'Rating High to Low', value: '!rating'},
        {label: 'Rating Low to High', value: 'rating'},
    ];

  }//ngOnInit()

  async ngAfterContentInit(){
    //Selects the first half and returns the second half of the string
    var newReg = new RegExp("(?:[^\/]*)$");
    //Get locations, loop through the result
    this.locationService.GetTopRatingLocations().subscribe(
      result => {
        result.forEach(e => {
          this.locations.push(e);
          let foundLogo = this.clearbitApiService.FindLogoFromName(e.name);
          foundLogo.toPromise().then(data => {
            //console.log(data.logo);
            e.logo = data.logo;
            e.website = newReg.exec(data.logo);
          });
        });
        console.log(this.locations);
        this.finishedLoading = true;
      });
      
  }//ngAfterContentInit

  //Sort's the order of a given input
  onSortChange(event) {
      let value = event.value;

      if (value.indexOf('!') === 0) {
          this.sortOrder = -1;
          this.sortField = value.substring(1, value.length);
      }
      else {
          this.sortOrder = 1;
          this.sortField = value;
      }
  }

  //When the user clicks the create app button
  //send them to the create app form
  sendToCreateAppForm(chosenLocation: Location, theAddress: Address){
    console.log("name: " + chosenLocation.address.city);
    console.log("address: " + theAddress.city);
    let navigationExtras: NavigationExtras = {
      queryParams: {
          ...chosenLocation,
          ...theAddress

      }
    };
    this.router.navigate(["/createanapp"], navigationExtras);
  }

}
