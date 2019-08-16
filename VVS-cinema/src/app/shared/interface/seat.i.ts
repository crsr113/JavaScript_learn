export interface Seat {
  hall_id: number;
  Row_Num: number;
  Seat_Num: number;
  Seat_Num_Display: number;
  isVip: boolean;
  Double: string;
  isBlank: boolean;
}

export interface BookedSeat {
  session_id: number;
  Row_Num: number;
  Seat_Num: number;
}

export interface SeatFull {
  hall_id: number;
  Row_Num: number;
  Seat_Num: number;
  Seat_Num_Display: number;
  isVip: boolean;
  Double: string;
  isBlank: boolean;
  isBooked: boolean;
  isBookedByMe: boolean;
}
