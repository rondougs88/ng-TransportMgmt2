import { AvailableTripsService } from './../services/available-trips.service';
import { BookingDetails } from './../shared/model/booking-details';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-bookings-list',
  templateUrl: './my-bookings-list.component.html',
  styleUrls: ['./my-bookings-list.component.css']
})
export class MyBookingsListComponent implements OnInit {

  myBookings$: Observable<BookingDetails[]>;

  constructor(private availableTripsService: AvailableTripsService) { }

  ngOnInit() {
    this.myBookings$ = this.availableTripsService.getMyBookings();
    this.myBookings$
      .subscribe(
        res => console.log('my bookings list: ', res)
      );
  }

}
