/* eslint-disable no-console */
import * as cors from "cors";
import * as express from "express";
import * as mongoose from "mongoose";

import seatData from "../src/seatData";

import { Seat, SeatDB, ISeatDB } from "./seat.model";

import * as seatHandlers from "./seat.controllers";

const port = "8080";

async function initDB(): Promise<ISeatDB> {
  // Read the db connection url from environment variable
  const dbUrl = process.env.DB_URL;
  if (!dbUrl) {
    console.error("Enviroment variable DB_URL must be provided!");
    process.exit();
  }

  // connect to mongodb
  try {
    await mongoose.connect(dbUrl, { useNewUrlParser: true });
    // Seed the db if there's no existing Seat documents
    const count = await Seat.collection.countDocuments();
    if (!count) {
      const seedSeats = seatData.seats.map(seat => new Seat(seat));
      try {
        await Seat.collection.insertMany(seedSeats);
      } catch (e) {
        console.error(e);
        process.exit();
      }
    }
    return new SeatDB();
  } catch (e) {
    console.error(`Cant connect to mongo instance: ${e}`);
    process.exit();
  }
}

const app = express();

async function initApp(app: express.Application): Promise<void> {
  app.options("*", cors());
  app.use(cors());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  const db: ISeatDB = await initDB();

  // Map routes
  app.get("/seatData", seatHandlers.getSeatData(db));
  app.get("/availableSeats", seatHandlers.getAvailableSeats(db));
  app.get("/cheapestSeat", seatHandlers.getCheapestSeats(db));
  app.post("/bookSeat", seatHandlers.bookSeat(db));
}

/**
 * Start the server to listen on port 8080
 */
initApp(app).then(() => {
  app.listen(port, function() {
    console.log("Server is running on " + port + " port");
  });
});
