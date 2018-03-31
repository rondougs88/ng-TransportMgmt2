import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { Observable } from 'rxjs/Observable';
import { Place } from '../shared/model/place';
import { Stop } from '../shared/model/stop';
import { GroupByCity } from '../shared/model/groupByCity';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class PlacesService {

  private subject = new BehaviorSubject<GroupByCity[]>([]);

  places$: Observable<GroupByCity[]> = this.subject.asObservable();

  constructor(private firebase: AngularFireDatabase) { }

  getPlaces() {
    this.firebase.list('places')
      .snapshotChanges()
      .subscribe(res => {
        const groups: GroupByCity[] = [];
        const places: Place[] = [];
        let findGroup: GroupByCity;

        res.forEach(element => {
          const place = element.payload.toJSON();
          place['$key'] = element.key;
          places.push(place as Place);
        });

        places.forEach(
          place => {
            findGroup = groups.find(
              group => group.city === place.city
            );
            if (findGroup) {
              findGroup.stops.push(new Stop(place.id, place.description));
            } else {
              groups.push(new GroupByCity(place.city, [new Stop(place.id, place.description)]));
            }
          }
        );
        this.subject.next(groups);
        console.log('groups: ', groups);
      }
      );
  }
}
