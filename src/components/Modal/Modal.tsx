import React from "react";
import cx from "classnames";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

import "./Modal.css";

export interface ModalProps {
  show: boolean;
  handleClose?: () => void;
}

export const Modal: React.FunctionComponent<ModalProps> = ({
  show,
  handleClose,
  children
}) => {
  return (
    <div
      className={cx({ Modal: true, "Modal-open": show })}
      // onClick={handleClose && handleClose}
    >
      <div className="ModalContent">
        <span className="ModalCloseIcon" onClick={handleClose && handleClose}>
          <FontAwesomeIcon icon={faWindowClose} size="lg" />
        </span>

        {children}
      </div>
    </div>
  );
};
