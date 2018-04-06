import { Router } from '@angular/router';
import { AvailableTripsService } from './../services/available-trips.service';
import { BookingDetails } from './../shared/model/booking-details';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoMyBookingsList() {
    this.router.navigate(['mybookingslist']);
  }

}
