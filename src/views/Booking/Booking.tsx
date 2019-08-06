import React from "react";

import { RouteComponentProps } from "react-router";

import CinemaLayout from "../../components/CinemaLayout";
import Seat from "../../components/Seat";
import Price from "../../components/Price";
import SeatNumber from "../../components/SeatNumber";
import Modal from "../../components/Modal";
import Ticket from "../../components/Ticket";
import Button from "../../components/Button";

import { SeatInfo } from "../../types";
import { getSeatByNumber } from "../../utils";

import "./Booking.css";

export interface MatchParams {
  id?: string;
  confirm?: "confirm";
}

export interface PropsWithoutRouter {
  fetchSeats: () => void;
  seats: SeatInfo[];
  loading: boolean;
  error: false | string;
}
export interface Props
  extends RouteComponentProps<MatchParams>,
    PropsWithoutRouter {}

export interface State {
  selectedSeat: SeatInfo | null;
  showModal: boolean;
}

export default class Booking extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    let selectedSeat = null;
    if (props.match.params.id && props.seats.length) {
      selectedSeat =
        getSeatByNumber(props.match.params.id, props.seats) || null;
    }
    const showModal = !!props.match.params.confirm;
    this.state = {
      selectedSeat,
      showModal
    };
  }
  public componentDidMount(): void {
    document.title = "CINEMA | Book your seat";
    if (!this.props.seats.length) {
      this.props.fetchSeats();
    }
  }
  public static getDerivedStateFromProps(
    props: Props,
    state: State
  ): Partial<State> | null {
    const { id } = props.match.params;
    // use url slug as source of truth
    if (id && id !== (state.selectedSeat && state.selectedSeat.seatNumber)) {
      const selectedSeat = getSeatByNumber(id, props.seats);
      if (selectedSeat) {
        return { selectedSeat };
      }
    }
    return null;
  }
  private handleSeatClick = (seatNumber: string) => {
    const selectedSeat = getSeatByNumber(seatNumber, this.props.seats);
    if (!selectedSeat) {
      return;
    }
    this.props.history.push(`/book/${seatNumber}/confirm`);
    this.setState({ selectedSeat, showModal: true });
  };
  private handleCloseModal = () => {
    const { selectedSeat } = this.state;
    if (selectedSeat === null) {
      return;
    }
    this.props.history.push(`/book/${selectedSeat.seatNumber}`);
    this.setState({ showModal: false });
  };
  private handleConfimBooking = () => {
    this.handleCloseModal();
  };

  public renderModal = () => {
    const { selectedSeat, showModal } = this.state;
    if (selectedSeat === null) {
      return;
    }
    return (
      <Modal show={showModal} handleClose={this.handleCloseModal}>
        <div className="FlexColumn">
          <h2>Purchase ticket</h2>
          <Ticket
            seatNumber={selectedSeat.seatNumber}
            price={selectedSeat.price}
          />
          <Button actionType="positive" onClick={this.handleConfimBooking}>
            Confirm booking
          </Button>
        </div>
      </Modal>
    );
  };

  public render(): JSX.Element {
    const { selectedSeat } = this.state;
    const { seats, loading, error } = this.props;

    if (loading) {
      return <h1>Loading seats...</h1>;
    }

    if (error) {
      return <h1>{error}</h1>;
    }

    return (
      <div className="Booking">
        <h1>Book your seat</h1>
        <div className="CinemaContainer">
          <div className="FlexColumn LegendContainer">
            <div>
              <div className="Legend Legend-available" />
              Available
            </div>
            <div>
              <div className="Legend Legend-unavailable" />
              Occupied
            </div>
          </div>
          <CinemaLayout>
            {seats.map(seat => (
              <Seat
                key={seat.seatNumber}
                id={seat.seatNumber}
                active={seat.available}
                selected={
                  !!selectedSeat && seat.seatNumber === selectedSeat.seatNumber
                }
                onClick={this.handleSeatClick}
              >
                <SeatNumber value={seat.seatNumber} />
                <Price value={seat.price} />
              </Seat>
            ))}
          </CinemaLayout>
        </div>
        {selectedSeat && this.renderModal()}
      </div>
    );
  }
}
