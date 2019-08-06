/* eslint-disable no-console */
import * as cors from "cors";
import * as express from "express";
const port = "8080";
const app = express();
app.options("*", cors());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("*", (_, res) => {
  res.status(200).json({ msg: "Hello World" });
});

/**
 * Start the server to listen on port 8080
 */
app.listen(port, function() {
  console.log("Server is running on " + port + " port");
});
