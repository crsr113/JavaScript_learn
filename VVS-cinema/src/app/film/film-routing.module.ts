import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FilmPageComponent } from "./film-page/film-page.component";

const routes: Routes = [
  {
    path: "",
    component: FilmPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmRoutingModule {}
