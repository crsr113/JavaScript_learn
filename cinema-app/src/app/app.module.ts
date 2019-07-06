import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmComponent } from './film/film.component';
import { CinemaLocationComponent } from './cinema-location/cinema-location.component';
import { DatesComponent } from './dates/dates.component';
import { HallComponent } from './hall/hall.component';
import { PlacesComponent } from './places/places.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmComponent,
    CinemaLocationComponent,
    DatesComponent,
    HallComponent,
    PlacesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
