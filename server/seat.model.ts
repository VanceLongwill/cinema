import * as mongoose from "mongoose";

import { SeatInfo } from "../src/types";

export interface SeatDocument extends mongoose.Document, SeatInfo {}

export const seatSchema = new mongoose.Schema({
  seatNumber: String,
  price: String,
  available: Boolean,
  disabilityAccessible: Boolean
});

export const Seat = mongoose.model<SeatDocument>("Seat", seatSchema);

// store agnostic db abstraction making it easy to swap out mongodb or mongoose for something else e.g. Postgres
export interface ISeatDB {
  markUnavailable(seatNumber: string): Promise<SeatInfo>;
  getSeatByNumber(seatNumber: string): Promise<SeatInfo>;
  getAvailableDisabilityAccessibleSeats(): Promise<SeatInfo[]>;
  getAvailableSeats(): Promise<SeatInfo[]>;
}

// mongoose implementation
export class SeatDB implements ISeatDB {
  public async markUnavailable(seatNumber: string): Promise<SeatInfo> {
    // Atomic update, record won't be changed before it's updated
    const seatBeforeUpdate = await Seat.findOneAndUpdate(
      { seatNumber },
      { available: false }
    );
    return seatBeforeUpdate;
  }
  public async getSeatByNumber(seatNumber: string): Promise<SeatInfo> {
    const seat = await Seat.findOne({ seatNumber });
    return seat;
  }
  public async getAvailableSeats(): Promise<SeatInfo[]> {
    const seats = await Seat.find({ available: true });
    return seats;
  }
  public async getAvailableDisabilityAccessibleSeats(): Promise<SeatInfo[]> {
    const seats = await Seat.find({
      available: true,
      disabilityAccessible: true
    });
    return seats;
  }
}
