import { Injectable } from '@angular/core';
import { Session } from "src/app/shared/interface/session.i";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Hall } from "src/app/shared/interface/hall.i";
import { Seat, BookedSeat } from './interface/seat.i';
import { log } from 'util';

@Injectable({
  providedIn: 'root'
})
export class SessionsService {

  constructor(private http: HttpClient) { }

  getSessions() {
    return this.http
           .get<Session[]>("http://localhost:3000/session")
           .toPromise();
  }

  getSession(id: number) {
    return this.http
           .get<Session>("http://localhost:3000/session/" + id)
           .toPromise();
  }


  getActualSessionsByFilm(film_id: number): Promise<Session[]> {
    return this.http
      .get<Session[]>("http://localhost:3000/session?film_id=" + film_id)
      .pipe(
        map(sessions => {
          const currentDate = new Date();
          return sessions.filter(s => new Date(s.dtime) > currentDate);
        })
      )
      .toPromise();
  }

  getHall(id: number) {
    return this.http
           .get<Hall>("http://localhost:3000/hall/" + id)
           .toPromise();
  }

  getSeats(id: number) {
    return this.http
           .get<Seat[]>("http://localhost:3000/seat?hall_id=" + id)
           .toPromise();
  }

  getSeatsonSession(session_id: number) {
    return this.http
           .get<BookedSeat[]>("http://localhost:3000/booked_seats?session_id=" + session_id)
           .toPromise();
  }
}
