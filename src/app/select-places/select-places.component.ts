import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Place } from '../shared/model/place';
import { PlacesService } from '../services/places.service';

@Component({
  selector:  'app-select-places',
  templateUrl:  './select-places.component.html',
  styleUrls:  ['./select-places.component.css']
})
export class SelectPlacesComponent implements OnInit {

  places:  Place[];

  source: string;
  destination: string;

  constructor(private placesService:  PlacesService) { }

  ngOnInit() {
    this.placesService.places$
      .subscribe(
      data => {
        this.places = data;
        console.log(data);
      });
  }

}


