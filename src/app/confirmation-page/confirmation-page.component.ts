import { BookingDetails } from './../shared/model/booking-details';
import { Observable } from 'rxjs/Observable';
import { AvailableTripsService } from './../services/available-trips.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmation-page',
  templateUrl: './confirmation-page.component.html',
  styleUrls: ['./confirmation-page.component.css']
})
export class ConfirmationPageComponent implements OnInit {

  bookingID: number;
  showspinner = true;

  constructor(private availableTripsService: AvailableTripsService) { }

  ngOnInit() {
    this.availableTripsService.saveBooking$
      .subscribe(
      res => {
        if (res) {
          this.showspinner = false;
          this.bookingID = JSON.parse(res._body).obj.bookingId;
        }
      }
      );
  }

}
