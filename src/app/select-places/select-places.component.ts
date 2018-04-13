import { BookingsService } from './../services/bookings.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl, ValidatorFn } from '@angular/forms';

import { PlacesService } from '../services/places.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { GroupByCity } from '../shared/model/groupByCity';

@Component({
  selector: 'app-select-places',
  templateUrl: './select-places.component.html',
  styleUrls: ['./select-places.component.css']
})
export class SelectPlacesComponent implements OnInit {

  @ViewChild('source') source: RegExp;

  places: GroupByCity[];
  showspinner: Boolean = true;
  titleAlert: String = 'This field is required';
  // source: string;
  // destination: string;

  selectTripForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private placesService: PlacesService,
    private route: ActivatedRoute,
    private availableTripsService: BookingsService,
    private router: Router) {
    this.createForm();

  }

  ngOnInit() {

    this.placesService.places$
      .subscribe(
      data => {
        this.places = data;
        if (data.length !== 0) { this.showspinner = false; } // if the places have been retrieved then hide loading spinner
        console.log(data);
      });
    this.placesService.getPlaces();
  }

  createForm() {
    this.selectTripForm = this.fb.group({
      source: [null, Validators.required],
      destination: [null, [Validators.required]]
    },
      { validator: matchingStops('source', 'destination') }
    );
  }

  onSubmit() {
    this.availableTripsService.getFormValue(this.selectTripForm.value);
    this.router.navigate(['showtrips'], { relativeTo: this.route });
    console.log(this.selectTripForm.value);
  }

}

function matchingStops(source: string, destination: string) {
  return (group: FormGroup) => {
    const source2 = group.controls[source];
    const destination2 = group.controls[destination];
    if (source2.value === destination2.value && destination2.value !== null) {
      console.log('dest2 val:', destination2.value);
      return destination2.setErrors({ 'theSame': true });
    } else if (destination2.value) {
      return destination2.setErrors(null);
    }
  };
}


