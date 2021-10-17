import React from "react";
import { Text, ButtonStyles } from "../../styles/main.style";
import { useRouter } from "next/dist/client/router"
const Button = ({ children, route, ...props }) => {
const router = useRouter()
  const handleRouting = (e) => {
    if(!route) return;
    router.push({
      pathname: route.path,
    }, null, route.options)
  }

  return (
    <ButtonStyles onClick={handleRouting} {...props}>
      <Text>{children}</Text>
    </ButtonStyles>
  );
};

export default Button;

