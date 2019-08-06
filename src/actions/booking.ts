import { SeatInfo } from "../types";
export const FETCH_SEATS = "booking/FETCH_SEATS";
export const FETCH_SEATS_SUCCESS = "booking/FETCH_SEATS_SUCCESS";
export const FETCH_SEATS_FAIL = "booking/FETCH_SEATS_FAIL";

export interface FetchSeats {
  type: typeof FETCH_SEATS;
  payload: {
    // filmId: string;
  };
}

export interface FetchSeatsFail {
  type: typeof FETCH_SEATS_FAIL;
  payload: {
    error: string;
  };
}

export interface FetchSeatsSuccess {
  type: typeof FETCH_SEATS_SUCCESS;
  payload: {
    seats: SeatInfo[];
  };
}

export function fetchSeats(/* filmId: string */): FetchSeats {
  return {
    payload: {
      /* filmId */
    },
    type: FETCH_SEATS
  };
}

export function fetchSeatsFail(error: string): FetchSeatsFail {
  return {
    payload: { error },
    type: FETCH_SEATS_FAIL
  };
}

export function fetchSeatsSuccess(result: {
  seats: SeatInfo[];
}): FetchSeatsSuccess {
  return {
    payload: { seats: result.seats },
    type: FETCH_SEATS_SUCCESS
  };
}

export type ActionTypes = FetchSeatsFail | FetchSeatsSuccess | FetchSeats;
