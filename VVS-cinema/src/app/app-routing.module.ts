import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./films/films.module").then(mod => mod.FilmsModule)
  },
  {
    path: "film/:filmId",
    loadChildren: () => import("./film/film.module").then(mod => mod.FilmModule)
  },
  {
    path: "film/:filmId/sessions",
    loadChildren: () => import("./sessions/sessions.module").then(mod => mod.SessionsModule)
  },
  { 
    path: "order",
    loadChildren: () => import("./order/order.module").then(mod => mod.OrderModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
