import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order/order.component';
import { DatePipe } from '@angular/common';
// import { OrderRoutingModule } from './order-routing.module';



@NgModule({
  declarations: [OrderComponent],
  imports: [
    CommonModule
    // OrderRoutingModule
  ],
  exports: [OrderComponent],
  providers: [DatePipe]
})
export class OrderModule { }
