import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Place } from '../shared/model/place';
import { PlacesService } from '../services/places.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // places$: Observable<Place[]>;
  places$;

  constructor(private placesService: PlacesService) { }

  ngOnInit() {
    this.places$ = this.placesService.getPlaces();
  }

}
