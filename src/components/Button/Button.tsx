import React from "react";
import cx from "classnames";

import "./Button.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  actionType?: "positive" | "negative";
}

export const Button: React.FunctionComponent<ButtonProps> = ({
  actionType,
  className,
  ...props
}) => (
  <button
    className={cx(className || "", {
      Button: true,
      "Button-positive": actionType === "positive",
      "Button-negative": actionType === "negative"
    })}
    {...props}
  />
);
