import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FilmsComponent } from './films/films.component';
import { FilmsRoutingModule } from './films-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { OrderComponent } from '../order/order/order.component';
// import { OrderRoutingModule } from '../order/order-routing.module';
import { OrderModule } from '../order/order.module';


@NgModule({
  declarations: [FilmsComponent],
  imports: [
    CommonModule,
    FilmsRoutingModule,
    RouterModule,
    NgbModule,
    OrderModule
    // OrderRoutingModule
  ],
  bootstrap: [FilmsComponent]
})
export class FilmsModule { }
