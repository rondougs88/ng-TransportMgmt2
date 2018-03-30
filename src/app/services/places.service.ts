import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as _ from 'lodash';

import { Observable } from 'rxjs/Observable';
import { Place } from '../shared/model/place';
import { Stop } from '../shared/model/stop';
import { GroupByCity } from '../shared/model/groupByCity';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class PlacesService {

  private subject = new BehaviorSubject<Place[]>([]);
  private subject2 = new BehaviorSubject<GroupByCity[]>([]);

  places$: Observable<Place[]> = this.subject.asObservable();
  places2$: Observable<GroupByCity[]> = this.subject2.asObservable();

  private places: Place[] = [];
  private places2: GroupByCity[] = [];

  prevCity: string;
  groups: GroupByCity[] = [];
  findGroup: GroupByCity;
  name: string;
  stop: Stop;
  // stops: Stop[];

  constructor(private firebase: AngularFireDatabase) { }

  getPlaces() {
    return this.firebase.list('places')
      .snapshotChanges()
      .subscribe(res => {
        res.forEach(element => {
          const place = element.payload.toJSON();
          place['$key'] = element.key;
          this.places.push(place as Place);
        });
        this.subject.next(this.places);
        const stops = [];
        const result = _.chain(this.places).groupBy('city').map(function (v, i) {
          return {
            name: i,
            stops: _.map(v, 'description')
          };
        }).value();

        _.orderBy(this.places, 'city');

        // this.places.forEach(
        //   place => {
        //     if (this.prevCity === place.city) {
        //       this.groups.push( new );
        //     }

        //     this.prevCity = place.city;
        //   }
        // );


        // result.forEach(city => {
        //   // this.name = city.name;
        //   city.stops.forEach(stop => {
        //     stops.push( new Stop(stop, stop) );
        //   });
        //   this.groups.push( new GroupByCity(city.name, stops) );
        //   stops = [];
        // }
        // );

        this.places.forEach(
          place => {
            this.findGroup = this.groups.find(
              group => group.city === place.city
            );
            if (this.findGroup) {
              this.findGroup.stops.push( new Stop(place.id, place.description) );
            } else {
              this.groups.push( new GroupByCity(place.city, [new Stop(place.id, place.description)]) );
            }
          }
        );


    this.subject2.next(this.groups);
    console.log('result: ', result);
    console.log('groups: ', this.groups);
    console.log('PLACES2: ', this.places2);
  }
  );
}
}
