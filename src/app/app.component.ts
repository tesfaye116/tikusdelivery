import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'tikusdelivery';
  results: any;
  dishes: any;
  
  longitude = 38.780127;
  latitude = 9.003869;
  //restaurantName will be the input value from the search bar
  restaurantName = "";
  pageNumber = 1;

  

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.searchData();
  }

  onKey(event: any) {
    this.restaurantName = event.target.value;
  }

  searchData() {
    this.dataService.searchData(this.longitude, this.latitude, this.restaurantName, this.pageNumber).subscribe(data => {
      this.results = data;
      //get listRestaurants from the results object
      this.results = this.results.listRestaurants;

      //get listDishes from the results object
      this.dishes = data.listDishes;
      console.log("thsi is returants",this.results);
      console.log("thsi is dishes",this.dishes);
    }
    );
  }



}
