import { Component, OnInit, Input } from '@angular/core';
import { Film } from '../../shared/interface/film.i';
import { ActivatedRoute } from '@angular/router';
import { FilmsService } from '../../shared/films.service';
import { log } from 'util';

@Component({
  selector: 'app-film-page',
  templateUrl: './film-page.component.html',
  styleUrls: ['./film-page.component.scss']
})
export class FilmPageComponent implements OnInit {
  @Input() selections: any;
  currentFilmId: number;
  currentFilm: Film;

  constructor(
    private activatedRoute: ActivatedRoute,
    private filmsService: FilmsService,
  ) {  }

  async ngOnInit() {
    this.currentFilmId = +this.activatedRoute.snapshot.params.filmId;
    this.currentFilm = await this.filmsService.getFilm(this.currentFilmId);
    console.log('film-page comp, selection data:');
    console.log(this.selections);
    
  }
}
