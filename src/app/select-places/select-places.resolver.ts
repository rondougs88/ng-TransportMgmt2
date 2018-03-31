import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { GroupByCity } from '../shared/model/groupByCity';

@Injectable()
export class SelectPlacesResolver implements Resolve<GroupByCity[]> {

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<GroupByCity[]> {

    }
}
