import { bookingActions } from "../actions";
import { BookingState } from "../types";

const defaultState: BookingState = {
  seats: {
    loading: false,
    error: false,
    all: []
  }
};

export default function bookingReducer(
  state: BookingState = defaultState,
  action: bookingActions.ActionTypes
): BookingState {
  switch (action.type) {
    case bookingActions.FETCH_SEATS:
      return {
        ...state,
        seats: {
          ...state.seats,
          loading: true,
          error: false
        }
      };
    case bookingActions.FETCH_SEATS_SUCCESS:
      return {
        ...state,
        seats: {
          ...state.seats,
          loading: false,
          all: action.payload.seats
        }
      };
    case bookingActions.FETCH_SEATS_FAIL:
      return {
        ...state,
        seats: {
          ...state.seats,
          loading: false,
          error: action.payload.error
        }
      };
    default:
      return state;
  }
}
