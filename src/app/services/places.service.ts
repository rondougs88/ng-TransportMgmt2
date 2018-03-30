import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'; 
import { Observable } from 'rxjs/Observable';
import { Place } from '../shared/model/place';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class PlacesService {

  private subject = new BehaviorSubject<Place[]>([]);

  places$: Observable<Place[]> = this.subject.asObservable();

  constructor(private http: Http) { }

  getPlaces() {
   this.http.get('https://ng-transportmgmt.firebaseio.com/places.json')
      .subscribe(
        (response: Response) => {
          const places = response.json();
          this.subject.next(places);
        }
      );
  }

}
