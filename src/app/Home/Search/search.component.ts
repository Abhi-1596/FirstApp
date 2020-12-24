import { Component, OnInit } from '@angular/core'
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

    constructor(private homeService: HomeService) {}

    ngOnInit(): void {
      this.homeService.getCity().subscribe((data) => this.locations = data); 
    }
}