import { Component, OnInit } from '@angular/core';
import { Selection } from '../../shared/interface/selection.i';
import { SelectionsService } from '../../shared/selections.service';
import { SessionsService } from '../../shared/sessions.service';
import { FilmsService } from '../../shared/films.service';
import { Session } from '../../shared/interface/session.i';
import { Film } from '../../shared/interface/film.i';
import { Order } from '../../shared/interface/order.i';
import { DatePipe } from '@angular/common';
import { log } from 'util';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  private selected_data: Selection[];// = [];
  private session: Session;
  private film: Film;
  private orders: Order[];
  private totalSum: number = 0;
  
  constructor(
    private selectedData: SelectionsService,
    private sessionService: SessionsService,
    private filmService: FilmsService,
    private dataPipe: DatePipe
  ) {
    this.selectedData.selections_u.subscribe(sel => {
      this.selected_data = sel; 
      // console.log('order sel_data: ');
      // console.log(this.selected_data);
      // console.log(this.orders);
      this.readData();
    });
   }

  async ngOnInit() {
    
    this.readData();

    // console.log('Orders[]:');
    
    // console.log(this.orders);
    
  };

  private async readData() {
    // console.log('Order comp, selected data:');
    // console.log(this.selected_data.length);
    
    this.orders = [];
    let selected_data_group: Selection[] = [];

    this.selected_data.forEach(f => {
      let tmp = selected_data_group.filter(fg => {
        if (fg.session_id === f.session_id && fg.isVip === f.isVip) {
          return true;
        }
      })
  
      console.log(tmp);
      
        if (tmp.length === 0) { selected_data_group = selected_data_group.concat(f); }
    });

    selected_data_group.forEach(f => {
      f.count = this.selected_data.filter(r => { if (f.session_id === r.session_id && f.isVip === r.isVip) {return true}; 
      }).length;
      
    })
    
    await selected_data_group.forEach(async f => {
      this.session = await this.sessionService.getSession(f.session_id);
      this.film = await this.filmService.getFilm(this.session.film_id);
      let tmp_date = this.dataPipe.transform(this.session.dtime, 'dd-MM-yyyy HH:mm') //new Date(this.session.dtime).toISOString();
      // tmp_date = tmp_date.slice(0,10) + ' ' + tmp_date.slice(11,16)
      // console.log(tmp_date);
      
      this.orders = [...this.orders, {
                                      Film_name: this.film.name,
                                      Film_id: this.film.id,
                                      seat_count: f.count,
                                      price: this.calcPrice(this.session.price, f.isVip, this.session.vipbonus)*f.count,
                                      isVip: f.isVip,
                                      time: tmp_date
                                    
      } ]
          
    });
    this.totalSum = this.calcTotalPrice();
  }

  private calcPrice(price: number, isVip: boolean, vipbonus: number) {
    if (isVip){
      return (price + price * vipbonus);
    }
    return price;
  }

  private calcTotalPrice () {
    let sum: number = 0;
    this.orders.forEach(f => {sum = sum + + f.price });
    return sum;
  }

}
