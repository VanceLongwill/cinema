import * as express from "express";

import { ISeatDB } from "./seat.model";
import { SeatInfo } from "../src/types";

export const getSeatData = (db: ISeatDB): express.Handler => async (
  req,
  res
) => {
  try {
    const seatNumber = req.query.seatNumber;
    if (!seatNumber) {
      res.status(401).json({ message: "No seatNumber param provided" });
      return;
    }
    const seat = await db.getSeatByNumber(seatNumber);
    if (!seat) {
      res
        .status(404)
        .json({ message: `Unable to find seat with seatNumber ${seatNumber}` });
      return;
    }
    res.status(200).json(seat);
  } catch (e) {
    res.status(500).json({ message: e.message });
    return;
  }
};

export const getAvailableSeats = (db: ISeatDB): express.Handler => async (
  req,
  res
) => {
  const disabled = req.query.disabled;
  let seats: SeatInfo[] = [];
  try {
    if (disabled) {
      seats = await db.getAvailableDisabilityAccessibleSeats();
    } else {
      seats = await db.getAvailableSeats();
    }
  } catch (e) {
    res.status(500).json({ message: e.message });
    return;
  }
  res.status(200).json({
    seats: seats.map(seat => seat.seatNumber)
  });
};

// Converts "£19.99" to 19.99
function priceToNumber(price: string): number {
  return Number(price.substr(1));
}
export const getCheapestSeats = (db: ISeatDB): express.Handler => async (
  _,
  res
) => {
  try {
    const availableSeats = await db.getAvailableSeats();
    const cheapestSeats = availableSeats.reduce((acc, seat) => {
      if (!acc.length) {
        return acc.concat(seat);
      }
      const lowestPrice = priceToNumber(acc[0].price);
      const price = priceToNumber(seat.price);
      if (price < lowestPrice) {
        return [seat];
      }
      if (price === lowestPrice) {
        return acc.concat(seat);
      }
      return acc;
    }, []);
    res.status(200).json({
      seats: cheapestSeats.map(seat => seat.seatNumber)
    });
  } catch (e) {
    res.status(500).json({ message: e.message });
    return;
  }
};

export const bookSeat = (db: ISeatDB): express.Handler => async (req, res) => {
  const seatNumber = req.body.seatNumber;
  if (!seatNumber) {
    res.status(401).json({ message: `Body must contain a 'seatNumber' field` });
    return;
  }
  try {
    const seatBeforeUpdate = await db.markUnavailable(seatNumber);
    if (!seatBeforeUpdate.available) {
      res.status(403).json({ message: `Seat is already marked unavailable` });
    }
    const seatAfterUpdate = await db.getSeatByNumber(seatNumber);
    // return the changed doc
    res.status(200).json(seatAfterUpdate);
  } catch (e) {
    res.status(500).send({
      message: `An error occurred while marking seat unavailable`
    });
    return;
  }
};
