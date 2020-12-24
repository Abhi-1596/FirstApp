import { Component, OnInit } from '@angular/core'
import { ITrip } from './trip.model';
import { HomeService } from '../../services/home.service'

@Component({
    selector: 'app-quick-search',
    templateUrl: './quickSearch.component.html',
    styleUrls: ['./quickSearch.component.css']
})

export class QuickSearchComponent implements OnInit {
    hotelType: ITrip[];

    constructor(private homeService: HomeService) {}

    ngOnInit(): void {
        this.homeService.getTrip().subscribe((data) => this.hotelType = data);
    }
}