import { Component, OnInit, Input, ChangeDetectorRef, OnChanges, DoCheck } from '@angular/core';
import { Hall } from '../../shared/interface/hall.i';
import { SessionsService } from '../../shared/sessions.service';
import { DatePipe } from '@angular/common';
import { Seat, BookedSeat, SeatFull } from '../../shared/interface/seat.i';
import { log } from 'util';
import { Hall_show } from '../../shared/interface/hall_show.i';
import { Selection } from '../../shared/interface/selection.i';
import { SelectionsService } from '../../shared/selections.service';


@Component({
  selector: 'app-hall',
  templateUrl: './hall.component.html',
  styleUrls: ['./hall.component.scss']
})
export class HallComponent implements OnInit {
  @Input() hallId: number;
  @Input() sesstime: string;
  @Input() sess_id: number;
  @Input() selections: Selection[];

  private hall: Hall;
  private session_time: string;
  private seats: Seat[];
  private bookedSeats: BookedSeat[];
  private hall_show: Hall_show;
  // hall_mtrx: [
  //   {rownum: number,
  //    seats: Seat[]}
  // ]
  private hall_mtrx: any;
  // selected_data: Selection[] = [];

  constructor(
    // private ref: ChangeDetectorRef,
    private sessionService: SessionsService,
    private datepipe: DatePipe,
    private selectedData: SelectionsService
  ) { }

  async ngOnInit() {
    let i = 1;  
    let tmp: any;

    this.selectedData.selections_u.subscribe(sel => this.selections = sel);

    this.hall = await this.sessionService.getHall(this.hallId);
    this.session_time = this.datepipe.transform(this.sesstime, 'HH:mm');
    this.seats = await this.sessionService.getSeats(this.hallId);
    this.bookedSeats = await this.sessionService.getSeatsonSession(this.sess_id);

    tmp = await this.seats.filter(s => s.Row_Num === i);
    await tmp.forEach(f => {f['isBooked'] = false; f['isBookedByMe'] = false});

    this.hall_mtrx = []; 
    while (tmp.length !== 0) {
      this.hall_mtrx.push( {rownum: i, 
                            seats: tmp} );
      i++;
      tmp = this.seats
    .filter(s => s.Row_Num === i); 
    tmp.forEach(f => {f['isBooked'] = false; f['isBookedByMe'] = false});
    tmp.forEach(f => {this.isBookedSeat(f) });
    } 
    
    this.hall_show = { ...this.hall, rows: this.hall_mtrx};

        
  }

  
  isBookedSeat (curr_seat: any) {
         this.bookedSeats.forEach(r => 
          {if ((r.Row_Num === curr_seat.Row_Num) && (r.Seat_Num === curr_seat.Seat_Num) && r.session_id === this.sess_id) 
            {curr_seat.isBooked = true;}
          });
          this.selections.forEach(r => 
            {if ((r.Row_Num === curr_seat.Row_Num) && (r.Seat_Num === curr_seat.Seat_Num) && r.session_id === this.sess_id ) 
              {curr_seat.isBookedByMe = true;}
            })
  }

  toggleSelection(seat: SeatFull, session_id: number, current_row_seats: SeatFull[]) {
    //  console.log('toggleSelection! ' + settingDouble);
    //  console.log(seat);
     let seat_double: SeatFull;
     
     if (seat.isBlank || seat.isBooked) {console.log('is Booked');
      return;} 
     seat.isBookedByMe = !seat.isBookedByMe;
     if (seat.Double === 'L') {
      //  console.log(seat_double);
       
       seat_double = current_row_seats.filter(f => {if (f.Seat_Num === seat.Seat_Num + 1) {return true;}})[0];
      //  console.log(seat_double);
       seat_double.isBookedByMe = !seat_double.isBookedByMe;
     };
     if (seat.Double === 'R') {
      seat_double = current_row_seats.filter(f => {if (f.Seat_Num === seat.Seat_Num - 1) {return true;}})[0];
       seat_double.isBookedByMe = !seat_double.isBookedByMe;
     };
     if (seat.isBookedByMe) {
      this.selections = [...this.selections, {session_id: session_id,
                                              Row_Num: seat.Row_Num,
                                              Seat_Num: seat.Seat_Num,
                                              isVip: seat.isVip,
                                              count: 1
                                            }]
                                            // console.log('is not booked by me');
      if (seat_double) {
        this.selections = [...this.selections, {session_id: session_id,
          Row_Num: seat_double.Row_Num,
          Seat_Num: seat_double.Seat_Num,
          isVip: seat_double.isVip,
          count: 1
        }]
        // current_row_seats.filter(f => {f.Seat_Num = seat_double.Seat_Num})[0].isBookedByMe = true;
      }                                              
     }
     else { 
      this.selections = this.selections
                        .filter(s => 
                           {if(s.session_id === session_id && 
                               s.Row_Num === seat.Row_Num && 
                               s.Seat_Num === seat.Seat_Num ) 
                               { return false;}
                            return true;});
                            // console.log('is booked by me');
      if (seat_double) { 
        this.selections = this.selections
                        .filter(s => 
                           {if(s.session_id === session_id && 
                               s.Row_Num === seat_double.Row_Num && 
                               s.Seat_Num === seat_double.Seat_Num ) 
                               { return false;}
                            return true;});
      };
     }
    this.changeSelections(this.selections);
    
      
    console.log('Hall comp, selection data:');
    
    console.log(this.selections.length);
   
  }
  
  changeSelections(sel: Selection[]) {
    // this.selectedData.selections_u.next(sel);
    this.selectedData.changeSelections(sel);
  }
 
}
