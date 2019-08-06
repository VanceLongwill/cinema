import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Booking, { PropsWithoutRouter } from "./Booking";

import { AppState } from "../../types";
import { bookingActions } from "../../actions";

export function mapStateToProps(
  state: AppState
): Omit<PropsWithoutRouter, "fetchSeats"> {
  return {
    loading: state.booking.seats.loading,
    error: state.booking.seats.error,
    seats: state.booking.seats.all
  };
}

const actionCreators = {
  fetchSeats: bookingActions.fetchSeats
};

export default withRouter(
  connect(
    mapStateToProps,
    actionCreators
  )(Booking)
);
