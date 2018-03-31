import { SelectPlacesResolver } from './select-places/select-places.resolver';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {routerConfig} from './router.config';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { PlacesService } from './services/places.service';
import { HttpModule } from '@angular/http';
import { SelectPlacesComponent } from './select-places/select-places.component';
import { ReportAvailableTripsComponent } from './report-available-trips/report-available-trips.component';


@NgModule({
  declarations: [
    AppComponent,
    SelectPlacesComponent,
    ReportAvailableTripsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routerConfig),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [
    PlacesService,
    SelectPlacesResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
