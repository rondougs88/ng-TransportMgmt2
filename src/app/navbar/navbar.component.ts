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
  linkClicked = null;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoMyBookingsList() {
    this.isCollapsed = true;
    this.linkClicked = 'mybookingslist';
    this.router.navigate(['mybookingslist']);
  }

  login() {
    this.isCollapsed = true;
    this.linkClicked = 'login';
    this.router.navigate(['login']);
  }

  register() {
    this.isCollapsed = true;
    this.linkClicked = 'register';
    this.router.navigate(['register']);
  }

}
