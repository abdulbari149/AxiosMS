import React from "react";
import { IconStyles } from "../../styles/main.style";
import { IconButton } from "@mui/material";
const Icon = ({ component, color, size, ...props }) => {
  return (
    <IconStyles as={IconButton} iconcolor={color} size={size} {...props}>
      {component}
    </IconStyles>
  );
};

export default Icon;
