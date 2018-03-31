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

  private subject = new BehaviorSubject<Place[]>([]);
  private subject2 = new BehaviorSubject<GroupByCity[]>([]);


  // places$: Observable<Place[]> = this.subject.asObservable();
  places2$: Observable<GroupByCity[]> = this.subject2.asObservable();


  // private places2: GroupByCity[] = [];

  prevCity: string;
  findGroup: GroupByCity;
  name: string;
  stop: Stop;

  constructor(private firebase: AngularFireDatabase) { }

  getPlaces() {
    this.firebase.list('places')
      .snapshotChanges()
      .subscribe(res => {
        const groups: GroupByCity[] = [];
        const places: Place[] = [];

        res.forEach(element => {
          const place = element.payload.toJSON();
          place['$key'] = element.key;
          places.push(place as Place);
        });
        // this.subject.next(this.places);

        // if (this.groups !== []) {
          places.forEach(
            place => {
              this.findGroup = groups.find(
                group => group.city === place.city
              );
              if (this.findGroup) {
                this.findGroup.stops.push(new Stop(place.id, place.description));
              } else {
                groups.push(new GroupByCity(place.city, [new Stop(place.id, place.description)]));
              }
            }
          );
          this.subject2.next(groups);
        // }
        console.log('groups: ', groups);
        // console.log('PLACES2: ', this.places2);
      }
      );
  }
}
