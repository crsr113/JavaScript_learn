import { Seat } from './seat.i';

export interface Hall_show {
    id: number;
    name: string;
    desc: string;
    tech: string;
    rows: [
      {
        rownum: number;
        seats: Seat[];
      }
    ]
}
  
