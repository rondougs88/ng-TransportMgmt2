import { ActivatedRoute, Router } from '@angular/router';
import { AvailTrips } from './../shared/model/availTrips';
import { Observable } from 'rxjs/Observable';
import { AvailableTripsService } from './../services/available-trips.service';
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
              private availableTripsService: AvailableTripsService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.availableTrips$ = this.availableTripsService.availableTrips$;
  }

  chooseTrip(trip: AvailTrips, index: number) {
    this.selectedRowIndex = index;
    this.availableTripsService.processBooking(trip);
    this.router.navigate(['providedetails'], { relativeTo: this.route });
  }

}
