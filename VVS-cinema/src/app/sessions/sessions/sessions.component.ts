import { Component, OnInit, Input } from '@angular/core';
import { Film } from 'src/app/shared/interface/film.i';
import { ActivatedRoute } from '@angular/router';
import { SessionsService } from '../../shared/sessions.service';
import { Session } from '../../shared/interface/session.i';
import { log } from 'util';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss']
})
export class SessionsComponent implements OnInit {
  private filmId: number;
  private filmName: string;
  private sessions: Session[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private sessionsService: SessionsService
  ) { }

  
  async ngOnInit() {
  await this.activatedRoute.queryParams.subscribe(params => 
          {this.filmId = params.id;
           this.filmName = params.name;});
          //  console.log('session comp');
           
  //  await console.log(this.filmId, this.filmName);
  this.sessions = await this.sessionsService.getActualSessionsByFilm(this.filmId);
  //  await console.log(this.sessions);
  
    
  }

}
