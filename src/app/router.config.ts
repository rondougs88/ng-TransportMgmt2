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
];
