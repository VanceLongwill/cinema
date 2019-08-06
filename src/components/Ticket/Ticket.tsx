import React from "react";

import "./Ticket.css";

export interface TicketProps {
  price: string;
  seatNumber: string;
}

export const Ticket: React.FunctionComponent<TicketProps> = ({
  price,
  seatNumber
}) => (
  <div className="Ticket">
    <div className="TicketLeftEdge">
      <span className="LeftArrow" />
      <span className="LeftArrow" />
      <span className="LeftArrow" />
      <span className="LeftArrow" />
      <span className="LeftArrow" />
      <span className="LeftArrow" />
      <span className="LeftArrow" />
    </div>
    <div className="TicketContent">
      <span>ADMIT ONE</span>
      <span>PRICE: {price}</span>
      <span>SEAT NO:{seatNumber}</span>
    </div>
    <div className="TicketRightEdge">
      <span className="RightArrow" />
      <span className="RightArrow" />
      <span className="RightArrow" />
      <span className="RightArrow" />
      <span className="RightArrow" />
      <span className="RightArrow" />
      <span className="RightArrow" />
    </div>
  </div>
);
