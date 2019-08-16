import { Injectable } from '@angular/core';
import { Film } from "src/app/shared/interface/film.i";
import { HttpClient } from "@angular/common/http";
// import { log } from 'util';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private http: HttpClient) { }

  getFilms(): Promise<Film[]> {
    return this.http.get<Film[]>("http://localhost:3000/film").toPromise();
  }

  getFilm(id: number): Promise<Film> {
    return this.http.get<Film>("http://localhost:3000/film/" + id).toPromise();
  }
}
