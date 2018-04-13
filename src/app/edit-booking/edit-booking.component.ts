import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { BookingDetails } from './../shared/model/booking-details';
import { BookingsService } from './../services/bookings.service';
import { AvailTrips } from './../shared/model/availTrips';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-booking',
  templateUrl: './edit-booking.component.html',
  styleUrls: ['./edit-booking.component.css']
})
export class EditBookingComponent implements OnInit {

  myBooking: BookingDetails;
  passengerDetailsForm: FormGroup;

  constructor(private bookingsService: BookingsService) {

  }

  ngOnInit() {
    this.bookingsService.selectedBooking$
      .subscribe(
      bookingdetails => {
        this.myBooking = new BookingDetails(
          bookingdetails.bookingId,
          bookingdetails.bookingDate,
          bookingdetails.name,
          bookingdetails.email,
          bookingdetails.mobileNumber,
          bookingdetails.bus_id,
          bookingdetails.destination,
          bookingdetails.from_time,
          bookingdetails.price,
          bookingdetails.source,
          bookingdetails.to_time,
        );
      }
      );
  }

}
