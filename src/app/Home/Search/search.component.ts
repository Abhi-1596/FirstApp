import { Component, OnInit } from '@angular/core'
import { IHotel } from 'src/app/Listing/hotel.model';
import { HomeService } from 'src/app/services/home.service';
import { ICity } from './location.model';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
    title: String = "Plan your trip with us"
    
    locations: ICity[];

    hotels: IHotel[];

    constructor(private homeService: HomeService) {}

    ngOnInit(): void {
      this.homeService.getCity().subscribe((data) => this.locations = data); 
    }

    selectCity(cityId) {
      // console.log(cityId);
      // this.homeService.getHwrtc(cityId).subscribe((data) => {console.log(data)});
      this.homeService.getHwrtc(cityId).subscribe((data) => this.hotels = data);
    }
}