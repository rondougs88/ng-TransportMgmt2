import { BookingsService } from './../services/bookings.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AvailTrips } from './../shared/model/availTrips';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-available-trips',
  templateUrl: './report-available-trips.component.html',
  styleUrls: ['./report-available-trips.component.css']
})
export class ReportAvailableTripsComponent implements OnInit {

  availableTrips$: Observable<AvailTrips[]>;
  selectedRowIndex: Number = -1;

  constructor(private http: Http,
              private bookingsService: BookingsService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.availableTrips$ = this.bookingsService.availableTrips$;
    this.availableTrips$.subscribe(data => console.log(data));
  }

  chooseTrip(trip: AvailTrips, index: number) {
    this.selectedRowIndex = index;
    this.bookingsService.processBooking(trip);
    this.bookingsService.toggleEditBooking({edit: false, view: false});
    this.router.navigate(['providedetails'], { relativeTo: this.route });
  }

}
