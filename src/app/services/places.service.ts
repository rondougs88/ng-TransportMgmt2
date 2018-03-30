import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as _ from 'lodash';

import { Observable } from 'rxjs/Observable';
import { Place } from '../shared/model/place';
import { GroupByCity } from '../shared/model/groupByCity';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class PlacesService {

  private subject = new BehaviorSubject<Place[]>([]);
  private subject2 = new BehaviorSubject<any[]>([]);

  places$: Observable<Place[]> = this.subject.asObservable();
  places2$: Observable<any[]> = this.subject2.asObservable();

  private places: Place[] = [];

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
        // console.log(this.getGroupsByCity(this.places));
        this.subject.next(this.places);
        const result = _.chain(this.places).groupBy('city').map(function(v, i) {
          return {
            name: i,
            /* age: _.get(_.find(v, 'age'), 'age'), */
            stop: _.map(v, 'description')
          };
        }).value();
        this.subject2.next(result);
        // result.forEach( item => {
        //   return item.stop.forEach(stop => stop['value'] = stop );
        // });
        // const output = getOptionNames(this.places)
        // //  map the names into the desired structure
        // .map((buffer, name) =>
        //    new GroupByCity(name, groupByOptionName(this.places, name))
        //     // Name: name,
        //     // Data: groupByOptionName(this.places, name)
        // );
        console.log('TEST: ', result);
        //   this.places.map(entry => {
        //     if ( entry.optionName === "Color") output[0].Data.push({ Id: entry.Id, Name: entry.Name });
        //     if ( entry.optionName === "Size") output[1].Data.push({ Id: entry.Id, Name: entry.Name });
        // });
        // console.log('TEST2: ', JSON.stringify([...groupBy(this.places, 'city')], null, 4));
        // this.subject2.next(places_2);
      }
      );
    //  this.http.get('https://ng-transportmgmt.firebaseio.com/places.json')
    //     .subscribe(
    //       (response: Response) => {
    //         const places = response.json();
    //         this.subject.next(places);
    //       }
    //     );
  }




}

// //  ES2015/ES6 version (does exactly the same as the one above)
// function getOptionNames(list) {
//   return list
//       //  map the array into a list of optionNames
//       .map(item => item.city)
//       //  remove duplicates
//       .filter((item, index, all) => all.indexOf(item) === index);
// }
// //  ES2015/ES6 version
// function groupByOptionName(list, optionName) {
//   return list
//     //  filter out any item whose optionName does not match the desired name
//     .filter(item => item.city === optionName)
//     //  map the item into the desired shape
//     //  (appears to be everything except optionName itself
//     .map(item => {
//       id: item.Id,
//       Name: item.desc
//     });
// }

// function groupBy(arr, key) {
//   return arr.reduce(
//     (sum, item) => {
//       const groupByVal = item[key];
//       const groupedItems = sum.get(groupByVal) || [];
//       groupedItems.push(item);
//       return sum.set(groupByVal, groupedItems);
//       },
//     new Map()
//     );
// }

// function groupBy(arr, key) {
//   const newArr = [],
//       types = {},
//       newItem, i, j, cur;
//   for (i = 0, j = arr.length; i < j; i++) {
//       cur = arr[i];
//       if (!(cur[key] in types)) {
//           types[cur[key]] = { type: cur[key], data: [] };
//           newArr.push(types[cur[key]]);
//       }
//       types[cur[key]].data.push(cur);
//   }
//   return newArr;
// }
