import { Router } from '@angular/router';
import { AvailTrips } from './../../shared/model/availTrips';
import { Observable } from 'rxjs/Observable';
import { BookingsService } from './../../services/bookings.service';
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
  selectedBooking: BookingDetails = new BookingDetails('', '', '', '', null, '', '', '', null, '', '');
  selectedTrip: AvailTrips;
  isViewOnly: Boolean = false;
  // isEdit: Boolean = false;

  constructor(
    private fb: FormBuilder,
    private bookingsService: BookingsService,
    private router: Router) {
    this.createForm();
  }

  ngOnInit() {
    this.bookingsService.selectedBooking$
      .subscribe(
      selectedBooking => {
        if (selectedBooking) {
          this.bookingsService.isEditBooking$
            .subscribe(
            action => {
              // this.isEdit = isEdit;
              if (action.edit || action.view) {
                // this.bookingsService.toggleEditBooking({edit: false, view: false});
                this.isViewOnly = action.view;
                this.selectedBooking = selectedBooking;
                this.passengerDetailsForm.setValue({
                  name: selectedBooking.name,
                  email: selectedBooking.email,
                  mobile: selectedBooking.mobileNumber,
                });
              }
            }
            );
        }
      }
      );
  }

  revert() { this.rebuildForm(); }

  rebuildForm() {
    this.passengerDetailsForm.reset({
      name: this.selectedBooking.name,
      email: this.selectedBooking.email,
      mobile: this.selectedBooking.mobileNumber,
    });
  }

  edit() {
    this.isViewOnly = !this.isViewOnly;
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
    if (this.selectedBooking.bookingId) {                   // If there is a booking id, then this is an update task.
      this.bookingsService.updateBooking(this.bookingdetails);
      this.router.navigate(['confirmation']);
    } else {                                                // Else, this is a create new task.
      this.bookingsService.saveBooking(this.bookingdetails);
      this.router.navigate(['confirmation']);
    }
  }

  prepareBookingDetails() {
    this.bookingsService.selectedTrip$
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
