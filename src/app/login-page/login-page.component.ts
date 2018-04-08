import { User } from './../shared/model/user';
import { UserService } from './../services/user-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

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
      email: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  onSubmit() {
    const user = new User(
      '',
      this.passengerDetailsForm.value.email,
      this.passengerDetailsForm.value.password);

    this.userService.login(user)
      .subscribe(
      data => {
        localStorage.setItem('token', data.token);
        localStorage.setItem('userId', data.userId);
        this.router.navigateByUrl('/');
      },
      error => console.error(error)
      );
    this.passengerDetailsForm.reset();
  }

}
