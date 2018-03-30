import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {routerConfig} from './router.config';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlacesListComponent } from './places-list/places-list.component';
import { PlacesService } from './services/places.service';
import { HttpModule } from '@angular/http';
import { SelectPlacesComponent } from './select-places/select-places.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlacesListComponent,
    SelectPlacesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routerConfig),
    FormsModule
  ],
  providers: [PlacesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
