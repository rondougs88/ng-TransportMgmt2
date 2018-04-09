import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CollapseModule, BsDropdownModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routerConfig } from './router.config';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { environment } from '../environments/environment';
import { PlacesService } from './services/places.service';
import { HttpModule } from '@angular/http';
import { SelectPlacesComponent } from './select-places/select-places.component';
import { ReportAvailableTripsComponent } from './report-available-trips/report-available-trips.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { PassengerDetailsComponent } from './booking-details/passenger-details/passenger-details.component';
import { ConfirmationPageComponent } from './confirmation-page/confirmation-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MyBookingsListComponent } from './my-bookings-list/my-bookings-list.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { UserService } from './services/user-service.service';
import { AvailableTripsService } from './services/available-trips.service';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { SuccessComponent } from './register-page/success/success.component';
import { ErrorMessageComponent } from './error-message/error-message.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectPlacesComponent,
    ReportAvailableTripsComponent,
    LoadingSpinnerComponent,
    BookingDetailsComponent,
    PassengerDetailsComponent,
    ConfirmationPageComponent,
    NavbarComponent,
    MyBookingsListComponent,
    LoginPageComponent,
    RegisterPageComponent,
    SuccessComponent,
    ErrorMessageComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routerConfig),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    FormsModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  providers: [
    PlacesService,
    AvailableTripsService,
    UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
