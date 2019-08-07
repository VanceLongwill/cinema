import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Booking from "../views/Booking";

// Github pages
const baseName = process.env.NODE_ENV === "production" ? "/cinema" : "";
const Router: React.FunctionComponent = () => (
  <BrowserRouter basename={baseName}>
    <Switch>
      {/* Cinema booking view */}
      <Route
        // optional confirm param triggers the display of ticket/confirm info
        path="/book/:id?/:confirm?"
        component={Booking}
      />
      <Route path="/" exact component={() => <Redirect to="/book" />} />
      {/* 404 / fallback  */}
      <Route component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Router;
