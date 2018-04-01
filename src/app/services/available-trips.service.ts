import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AvailTrips } from './../shared/model/availTrips';
import { Injectable } from '@angular/core';

@Injectable()
export class AvailableTripsService {

  private subject = new BehaviorSubject<AvailTrips[]>([]);
  // private formValue: AvailTrips;

  availableTrips$: Observable<AvailTrips[]> = this.subject.asObservable();

  constructor(private http: Http) { }

  getFormValue(formValue: AvailTrips) {
    // this.formValue = formValue;
    this.availableTrips$ =
    this.http.get(`http://localhost:8010/api/trips/${formValue.source}/${formValue.destination}`)
    // this.http.get(`http://localhost:8010/api/trips/1/2`)
                .map(res => res.json());
                // .subscribe(data => console.log(data));
  }

}
