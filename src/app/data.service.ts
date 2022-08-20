import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private TIKUS_DELIVERY_API = 'https://staging.tikusdelivery.com/api/searchDishesAndRestaurants';

  constructor(
    private http: HttpClient
  ) { }


  //search data by input value longitude = 38.780127 and restaurantName and pagenumber = 1 POST method
  searchData(longitude: number,latitude: number, restaurantName: string, pageNumber: number): Observable<any> {

    const body = {
      latitude: latitude,
      longitude: longitude,
      restaurantName: restaurantName,
      pageNumber: pageNumber
    };

    

    return this.http.post(this.TIKUS_DELIVERY_API, body);
  }
}
