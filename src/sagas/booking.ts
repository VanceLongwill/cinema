import { put, takeLatest, delay } from "redux-saga/effects";
import { bookingActions } from "../actions";

import seatData from "../seatData";

export function* handleFetchSeats(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _: bookingActions.FetchSeats
): IterableIterator<any> {
  try {
    // delay for 500ms to simulate the async nature of a network request
    yield delay(500);
    // if (res.statusCode !== 200) {
    //   throw new Error(data.message);
    // }
    yield put(
      bookingActions.fetchSeatsSuccess({
        seats: seatData.seats
      })
    );
  } catch (e) {
    yield put(bookingActions.fetchSeatsFail(e.message as string));
  }
}

export default function* watchForecast(): IterableIterator<any> {
  yield takeLatest(bookingActions.FETCH_SEATS, handleFetchSeats);
}
