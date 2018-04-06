import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { RequestOptions, Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from './../shared/model/user';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

user$: Observable<any>;

  constructor(private http: Http) { }

  registerUser(user: User) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    this.user$ = this.http.post('http://localhost:8010/api/registeruser', user, options);
    return this.user$;
  }

}
