import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IHotel } from "../Listing/hotel.model";

@Injectable()

export class DetailPageService {
    private detailsUrl = "https://developerfunnel.herokuapp.com/hotelsdetails";

    constructor(private http: HttpClient) {}

    getDetails(id): Observable<IHotel[]> {
        return this.http.get<IHotel[]> (`${this.detailsUrl}/${id}`);
    }
}