import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

import { Place } from '../shared/model/place';
import { PlacesService } from '../services/places.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector:  'app-select-places',
  templateUrl:  './select-places.component.html',
  styleUrls:  ['./select-places.component.css']
})
export class SelectPlacesComponent implements OnInit {

  places:  Place[];
  places2:  any[];

  source: string;
  destination: string;

  selectTripForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private placesService:  PlacesService,
    private route: ActivatedRoute,
    private router: Router) {
      this.createForm();
    }

  ngOnInit() {
    this.placesService.getPlaces();
    // this.placesService.places$
    //   .subscribe(
    //     data => {
    //     this.places = data;
    //     console.log(data);
    //   });
      this.placesService.places2$
      .subscribe(
        data => {
        this.places2 = data;
        console.log(data);
      });
  }

  createForm() {
    this.selectTripForm = this.fb.group({
      source: '',
      destination: ''
    });
  }

  onSubmit() {
    this.router.navigate(['showtrips'], {relativeTo: this.route});
    console.log(this.selectTripForm.value);
  }

}


