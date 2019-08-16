import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SessionsComponent } from './sessions/sessions.component';

const routes: Routes = [
  {
    path: "",
    component: SessionsComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    // CommonModule
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SessionsRoutingModule { }
