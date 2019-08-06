import React from "react";

import "./SeatNumber.css";

export const SeatNumber: React.FunctionComponent<{ value: string }> = ({
  value
}) => <span className="SeatNumber">{value}</span>;
