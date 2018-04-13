import { Router, ActivatedRoute } from '@angular/router';
import { BookingsService } from './../services/bookings.service';
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

  constructor(private bookingsService: BookingsService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.myBookings$ = this.bookingsService.getMyBookings();
    this.myBookings$
      .subscribe(
      res => console.log('my bookings list: ', res)
      );
  }

  viewBooking(mybooking: BookingDetails) {
    this.bookingsService.toggleEditBooking({edit: false, view: true});
    this.bookingsService.selectBooking(mybooking);
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

}
