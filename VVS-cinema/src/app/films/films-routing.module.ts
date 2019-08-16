import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FilmsComponent } from "./films/films.component";
// import { OrderModule } from '../order/order.module'
// import { OrderComponent } from "../order/order/order.component";

const routes: Routes = [
  {
    path: "",
    component: FilmsComponent
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], 
  exports: [RouterModule]
})
export class FilmsRoutingModule {}
