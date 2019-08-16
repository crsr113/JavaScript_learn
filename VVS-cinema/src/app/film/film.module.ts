import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmPageComponent } from './film-page/film-page.component';
import { FilmRoutingModule } from './film-routing.module';
import { FilmsService } from '../shared/films.service';
import { OrderModule } from '../order/order.module';



@NgModule({
  declarations: [FilmPageComponent],
  imports: [
    CommonModule,
    FilmRoutingModule,
    OrderModule
  ],
  providers: [
    FilmsService
  ]
})
export class FilmModule { }
