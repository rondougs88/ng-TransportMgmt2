import { AvailTrips } from './../shared/model/availTrips';
import { Observable } from 'rxjs/Observable';
import { BookingsService } from './../services/bookings.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {

  selectedTrips$: Observable<AvailTrips>;

  constructor(private availableTripsService: BookingsService) { }

  ngOnInit() {
    this.selectedTrips$ = this.availableTripsService.selectedTrip$;
  }

}
