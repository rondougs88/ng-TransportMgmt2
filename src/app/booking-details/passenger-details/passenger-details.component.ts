import { Router } from '@angular/router';
import { AvailTrips } from './../../shared/model/availTrips';
import { Observable } from 'rxjs/Observable';
import { AvailableTripsService } from './../../services/available-trips.service';
import { BookingDetails } from './../../shared/model/booking-details';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.css']
})
export class PassengerDetailsComponent implements OnInit {

  passengerDetailsForm: FormGroup;
  bookingdetails: BookingDetails;
  selectedTrip: AvailTrips;

  constructor(
    private fb: FormBuilder,
    private availableTripsService: AvailableTripsService,
    private router: Router) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.passengerDetailsForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      mobile: [null, Validators.required],
    });
  }

  onSubmit() {
    this.prepareBookingDetails();
    this.availableTripsService.saveBooking(this.bookingdetails);
    // this.availableTripsService.saveBooking$
    //   .subscribe(
    //   (res) => {
    //     if (res) {
    //       console.log('Saved to database:', res);
    //     }
    //   }
    //   );
    this.router.navigate(['confirmation']);
  }

  prepareBookingDetails() {
    this.availableTripsService.selectedTrip$
      .subscribe(
      selectedTrip => this.selectedTrip = selectedTrip
      );
    this.bookingdetails = new BookingDetails(
      Math.random().toString(36).substr(2, 9), // Booking ID
      this.getDateToday(),  // bookingDate: string,
      this.passengerDetailsForm.value.name,  // name: string,
      this.passengerDetailsForm.value.email,  // email: string,
      this.passengerDetailsForm.value.mobile,  // mobileNumber: number,
      this.selectedTrip.bus_id,  // bus_id: string,
      this.selectedTrip.destination,  // destination: string,
      this.selectedTrip.from_time, // from_time: string,
      this.selectedTrip.price, // price: number,
      this.selectedTrip.source, // source: string,
      this.selectedTrip.to_time, // to_time: string,
    );
  }

  getDateToday(): string {
    const today = new Date();
    const dd = today.getDate();
    const mm = today.getMonth() + 1; // January is 0!
    const yyyy = today.getFullYear();
    let day: string = null;
    let month: string = null;
    if (dd < 10) {
      day = '0' + dd;
    }
    if (mm < 10) {
      month = '0' + mm;
    }
    return month + '/' + day + '/' + yyyy;
  }

}
