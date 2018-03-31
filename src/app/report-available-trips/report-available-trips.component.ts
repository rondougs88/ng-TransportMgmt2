import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-available-trips',
  templateUrl: './report-available-trips.component.html',
  styleUrls: ['./report-available-trips.component.css']
})
export class ReportAvailableTripsComponent implements OnInit {

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get(`http://localhost:8010/api/trips`)
                .map(res => res.json())
                .subscribe(data => console.log(data));
  }

}
