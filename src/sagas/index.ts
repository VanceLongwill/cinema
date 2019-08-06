import { all } from "redux-saga/effects";
import booking from "./booking";

export default function* rootSaga(): IterableIterator<any> {
  yield all([
    booking()
    // more sagas here
  ]);
}
