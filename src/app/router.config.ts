import { SelectPlacesResolver } from './select-places/select-places.resolver';
import { SelectPlacesComponent } from './select-places/select-places.component';
import { ReportAvailableTripsComponent } from './report-available-trips/report-available-trips.component';
import { Routes } from '@angular/router';

export const routerConfig: Routes = [
    {
        path: '',
        component: SelectPlacesComponent,
        resolve: {
            detail: SelectPlacesResolver
        }
    },
    {
        path: 'showtrips',
        component: ReportAvailableTripsComponent
    },
];
