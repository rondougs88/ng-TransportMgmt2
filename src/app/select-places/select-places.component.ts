import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

import { PlacesService } from '../services/places.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { GroupByCity } from '../shared/model/groupByCity';

@Component({
  selector: 'app-select-places',
  templateUrl: './select-places.component.html',
  styleUrls: ['./select-places.component.css']
})
export class SelectPlacesComponent implements OnInit {

  places: GroupByCity[];
  showspinner: Boolean = true;
  // source: string;
  // destination: string;

  selectTripForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private placesService: PlacesService,
    private route: ActivatedRoute,
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
      source: '',
      destination: ''
    });
  }

  onSubmit() {
    this.router.navigate(['showtrips'], { relativeTo: this.route });
    console.log(this.selectTripForm.value);
  }

}


