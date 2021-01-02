import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { IHotel } from "../Listing/hotel.model";
import { DetailPageService } from "../services/detail_pages.service";

@Component({
    templateUrl: './details.component.html'
})

export class DetailsComponent implements OnInit {
    tripId: string = sessionStorage.getItem('tripId');
    id;
    details;

    constructor(private router: Router,
                private detailService: DetailPageService,
                private activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {
        this.id = this.activatedRoute.snapshot.params['id'];
        this.detailService.getDetails(this.id).subscribe((data) => this.details = data);
    }

    onBack() {
        this.router.navigate(['/listing', this.tripId]);
    }
}