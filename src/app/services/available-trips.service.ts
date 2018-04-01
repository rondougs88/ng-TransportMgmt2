import { BookingDetails } from './../shared/model/booking-details';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AvailTrips } from './../shared/model/availTrips';
import { Injectable } from '@angular/core';

@Injectable()
export class AvailableTripsService {

  private selectedTripsubject = new BehaviorSubject<AvailTrips>(new AvailTrips('', '', '', null, '', ''));

  private bookingDetails: BookingDetails;
  private selectedTrip: AvailTrips;

  availableTrips$: Observable<AvailTrips[]>;
  selectedTrip$: Observable<AvailTrips> = this.selectedTripsubject.asObservable();

  constructor(private http: Http) { }

  getFormValue(formValue: AvailTrips) {
    this.availableTrips$ =
    this.http.get(`http://localhost:8010/api/trips/${formValue.source}/${formValue.destination}`)
                .map(res => res.json());
  }

  processBooking(trip: AvailTrips) {
    this.selectedTrip = trip;
    this.selectedTripsubject.next(trip);
  // this.bookingDetails = new BookingDetails(
  //       'testBookingNumber12345',
  //       new Date,
  //       name: string,
  //       email: string,
  //       mobileNumber: number,
  //       bus_id: string,
  //       destination: string,
  //       from_time: string,
  //       price: number,
  //       source: string,
  //       to_time: string,
  // );
  }

}
