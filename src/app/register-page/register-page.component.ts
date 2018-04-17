import { User } from './../shared/model/user';
import { UserService } from './../services/user-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style, group, query } from '@angular/animations';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(+100%)'}),
        animate('400ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({transform: 'translateY(-100%)'}))
      ])
    ])
  ]
})
export class RegisterPageComponent implements OnInit {

  passengerDetailsForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService: UserService) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.passengerDetailsForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      mobile: '',
      password: [null, Validators.required],
    });
  }

  onSubmit() {
    const user = new User(
      this.passengerDetailsForm.value.name,
      this.passengerDetailsForm.value.email,
      this.passengerDetailsForm.value.password);

    this.userService.registerUser(user);
  }

}
