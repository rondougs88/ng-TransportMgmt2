import { BookingDetails } from './../shared/model/booking-details';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { AvailTrips } from './../shared/model/availTrips';
import { Injectable } from '@angular/core';

@Injectable()
export class AvailableTripsService {

  private selectedTripsubject = new BehaviorSubject<AvailTrips>(new AvailTrips('', '', '', null, '', ''));
  private savedBookingSubject = new Subject<any>();
  private myBookingsSubject = new BehaviorSubject<BookingDetails[]>([]);

  private bookingDetails: BookingDetails;
  private selectedTrip: AvailTrips;

  availableTrips$: Observable<AvailTrips[]>;
  selectedTrip$: Observable<AvailTrips> = this.selectedTripsubject.asObservable();
  saveBooking$: Observable<any> = this.savedBookingSubject.asObservable();
  myBookings$: Observable<BookingDetails[]> = this.myBookingsSubject.asObservable();

  constructor(private http: Http) { }

  getFormValue(formValue: AvailTrips) {
    this.availableTrips$ =
      this.http.get(`http://localhost:8010/api/trips/${formValue.source}/${formValue.destination}`)
        .map(res => res.json());
  }

  processBooking(trip: AvailTrips) {
    this.selectedTrip = trip;
    this.selectedTripsubject.next(trip);
  }

  saveBooking(bookingdetails: BookingDetails) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';

    // this.saveBooking$ =
     this.http.post('http://localhost:8010/api/savebooking' + token, bookingdetails, options)
         .subscribe(
          res => this.savedBookingSubject.next(res)
         );
    // return this.saveBooking$;
  }

  getMyBookings(): Observable<BookingDetails[]> {
    const token = localStorage.getItem('token')
    ? '?token=' + localStorage.getItem('token')
    : '';
    this.myBookings$ = this.http.get('http://localhost:8010/api/getmybookings' + token)
                          .map(res => {
                            const data = res.json();
                            return data;
                            // return data.array.forEach(element => {
                            //   return new BookingDetails()
                            });
    return this.myBookings$;
  }

}
