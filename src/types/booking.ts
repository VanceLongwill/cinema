import { SeatInfo } from "./seatInfo";

export interface BookingState {
  seats: {
    loading: boolean;
    error: false | string;
    all: SeatInfo[];
  };
}
