import React from "react";
import { IconStyles } from "../../styles/main.style";

const Icon = ({ component, color, size }) => {
  return <IconStyles color={color || "black"} size={size}>{component}</IconStyles>;
};

export default Icon;
