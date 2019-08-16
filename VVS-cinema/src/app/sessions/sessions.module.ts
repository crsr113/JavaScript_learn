import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionsRoutingModule } from './sessions-routing.module';
import { SessionsComponent } from './sessions/sessions.component';
import { HallComponent } from './hall/hall.component';
import { DatePipe } from '@angular/common';
import { OrderModule } from '../order/order.module';



@NgModule({
  declarations: [SessionsComponent, HallComponent],
  imports: [
    CommonModule,
    SessionsRoutingModule,
    OrderModule
  ],
  providers: [DatePipe]
})
export class SessionsModule { }
