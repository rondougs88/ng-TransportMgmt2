import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { RequestOptions, Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from './../shared/model/user';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class UserService {

  private UserSubject = new BehaviorSubject<any>('');

  user$: Observable<any> = this.UserSubject.asObservable();

  constructor(private http: Http,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  registerUser(user: User) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    this.http.post('http://localhost:8010/api/user/registeruser', user, options)
      .subscribe(
      res => {
        this.UserSubject.next(res);
        this.router.navigate(['register/registrationsuccess']);
      }
      );
  }

  login(user: User) {
    const body = JSON.stringify(user);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post('http://localhost:8010/api/user/login', body, { headers: headers })
      .map(response => response.json())
      .catch((err: Response) => {
        const details = err.json();
        return Observable.throw(details);
     });
  }

  logout() {
    localStorage.clear();
  }

  isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }

}
