import { Component, OnInit, Input } from '@angular/core';
import { Place } from '../shared/model/place';
import { PlacesService } from '../services/places.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.css']
})
export class PlacesListComponent implements OnInit {

  places$: Observable<Place[]>;

  constructor(private placesService: PlacesService) { }

  ngOnInit() {
    // this.places$ = this.placesService.places$;
  }

}
