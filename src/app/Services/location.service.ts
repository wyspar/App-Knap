import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import {Location} from "../Models/Location";


@Injectable({
  providedIn: 'root'
})
export class LocationService {
  
  headers = new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*')
  .set("Access-Control-Expose-Headers","*")
  .set("Access-Control-Expose-Headers","Content-Encoding, Authorization")
  .set("Access-Control-Max-Age","700")
  .set('Content-Type','application/json')
  // .set('Access-Control-Request-Method', 'OPTIONS,GET,PUT,POST,DELETE')
  .set('Access-Control-Allow-Headers','X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding, X-Auth-Token, content-type')
  // .set("Access-Control-Request-Headers","Content-Type")
  // .set("Access-Control-Allow-Credentials","true")
  requestOptions = {  headers: this.headers};  

  url : string = environment.APPSERVICE_LOCATION;

  constructor(private http:HttpClient) { }

  //Get verb for location api, gets the most popular locations
  GetMostPopularLocations() : Observable<any>{
    return this.http.get<Location>(`${this.url}/MostPopularLocations`,this.requestOptions)
  }
  //Get verb for location api, gets the highest rated locations
  GetTopRatingLocations() : Observable<any>{
    return this.http.get<Location>(`${this.url}/TopRatingLocations`,this.requestOptions)
  }
}
