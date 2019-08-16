import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Selection } from './interface/selection.i';
import { log } from 'util';

@Injectable({
  providedIn: 'root'
})
export class SelectionsService {
  selections_u = new BehaviorSubject([]);//this.selections);

  constructor() {
    
    
   }

  changeSelections(sel: Selection[]) {
    this.selections_u.next(sel);
    // console.log('selections shared changed');
    
    // console.log(this.selections_u.observers.values);
  }
}
