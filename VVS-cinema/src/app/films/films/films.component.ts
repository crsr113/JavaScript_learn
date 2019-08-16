import { Component, OnInit } from '@angular/core';
import { Film } from '../../shared/interface/film.i';
import { FilmsService } from '../../shared/films.service';
import { SelectionsService } from '../../shared/selections.service';


@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
  films: Film[] = [];
  private selected_data: Selection[];
  constructor(
    private filmsService: FilmsService,
    private selectedData: SelectionsService
  ) { 
    this.selectedData.selections_u.subscribe(sel => this.selected_data = sel);
  }

  async ngOnInit() {
    this.films = await this.filmsService.getFilms();
    // await console.log('film comp, selection data: ');
    // await console.log(this.selected_data.length);
    
    
  }

}
