import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { HotelService } from '../services/hotel.service';
import { IHotel } from './hotel.model';

@Component({
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
    id: string;
    userInput: any;
    hotels: IHotel[];
    roomType;
    filter_Name: string = "Abhilash Mishra";

    constructor(
        private route: ActivatedRoute,
        private hotelService: HotelService
    ) {}

    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        sessionStorage.setItem('tripId', this.id);
        this.hotelService.getHotel(this.id).subscribe((data) => this.hotels = data);
    }

    dataReceiver(roomId: string) {
        this.roomType = roomId;
    }
}