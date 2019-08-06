import { SeatInfo } from "../types";

export function getSeatByNumber(
  seatNumber: string,
  seats: SeatInfo[]
): SeatInfo | undefined {
  return seats.find(seat => seat.seatNumber === seatNumber);
}
