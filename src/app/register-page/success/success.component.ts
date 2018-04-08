import { UserService } from './../../services/user-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  name: string;
  showspinner = false;

  constructor(private router: Router,
              private userService: UserService) { }

  ngOnInit() {
    this.showspinner = true;
    this.userService.user$
      .subscribe(
      res => {
        if (res._body) {
          this.showspinner = false;
          const body = JSON.parse(res._body);
          this.name = body.obj.name;
        }
      }
      );
  }

  login() {
    this.router.navigate(['login']);
  }

}
