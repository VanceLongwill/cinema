import React from "react";
import cx from "classnames";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCouch } from "@fortawesome/free-solid-svg-icons";
import "./Seat.css";

export interface SeatProps {
  active: boolean;
  selected: boolean;
  onClick?: (id: string) => void;
  id: string;
}

export const Seat: React.FunctionComponent<SeatProps> = ({
  children,
  active,
  id,
  selected,
  onClick
}) => {
  const handleClick = React.useCallback(() => {
    if (active && onClick) {
      onClick(id);
    }
  }, [id, onClick, active]);
  return (
    <div
      className={cx({
        Seat: true,
        "Seat-disabled": !active,
        "Seat-selected": active && selected
      })}
      onClick={handleClick}
    >
      <FontAwesomeIcon className="SeatIcon" icon={faCouch} size="lg" />
      {children}
    </div>
  );
};
