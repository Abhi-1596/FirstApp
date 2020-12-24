import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IHotel } from "../Listing/hotel.model";

@Injectable()

export class HotelService {
    private hotelUrl = "https://developerfunnel.herokuapp.com/hoteltrip";

    constructor(private http: HttpClient) {}

    getHotel(id): Observable<IHotel[]> {
        return this.http.get<IHotel[]>(`${this.hotelUrl}/${id}`) ;
    }
}