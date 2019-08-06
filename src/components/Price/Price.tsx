import React from "react";

import "./Price.css";

export const Price: React.FunctionComponent<{ value: string }> = ({
  value
}) => <span className="Price">{value}</span>;
