import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, ROUTES } from "@angular/router";
import { OrderComponent } from './order/order.component';
import { FilmPageComponent } from '../film/film-page/film-page.component'
// import { FilmsComponent } from '../films/films/films.component';

const routes: Routes = [
  {
    path: "",
    component: OrderComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
