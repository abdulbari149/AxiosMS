import React from "react";
import { Text, ButtonStyles } from "../../styles/main.style";

const Button = ({ children,...props }) => {
  return (
    <ButtonStyles {...props}>
      <Text>{children}</Text>
    </ButtonStyles>
  );
};

export default Button;

