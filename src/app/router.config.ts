import { SuccessComponent } from './register-page/success/success.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MyBookingsListComponent } from './my-bookings-list/my-bookings-list.component';
import { ConfirmationPageComponent } from './confirmation-page/confirmation-page.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { SelectPlacesComponent } from './select-places/select-places.component';
import { ReportAvailableTripsComponent } from './report-available-trips/report-available-trips.component';
import { Routes } from '@angular/router';

export const routerConfig: Routes = [
    {
        path: '',
        component: SelectPlacesComponent
    },
    {
        path: 'showtrips',
        component: ReportAvailableTripsComponent
    },
    {
        path: 'showtrips/providedetails',
        component: BookingDetailsComponent
    },
    {
        path: 'confirmation',
        component: ConfirmationPageComponent
    },
    {
        path: 'mybookingslist',
        component: MyBookingsListComponent
    },
    {
        path: 'login',
        component: LoginPageComponent
    },
    {
        path: 'register',
        component: RegisterPageComponent
    },
    {
        path: 'register/registrationsuccess',
        component: SuccessComponent
    },
];
