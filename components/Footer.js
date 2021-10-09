import React from "react";
import { Main, Text, Flex } from "../styles/main.style";
const Footer = () => {
  return (
    <Main
      style={{ height: "7rem", marginBottom: "0px" }}
      background="black"
      name="footer"
    >
      <Flex alignItems="center" justifyContent="center">
        <Text color="white">&copy; copyright 2021 by Axios Media Solution </Text>
      </Flex>
    </Main>
  );
};

export default Footer;
