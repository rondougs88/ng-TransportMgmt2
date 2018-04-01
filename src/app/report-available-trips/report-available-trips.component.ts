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

  constructor(private http: Http,
              private availableTripsService: AvailableTripsService) { }

  ngOnInit() {
    // this.http.get(`http://localhost:8010/api/trips`)
    //             .map(res => res.json())
    //             .subscribe(data => console.log(data));
    this.availableTrips$ = this.availableTripsService.availableTrips$;
      // .subscribe(
      //   data => console.log('logging this:', data)
      // );
  }

}
