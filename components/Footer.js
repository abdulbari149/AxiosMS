import React from "react";
import { Main, Container, Text } from "../styles/main.style";
const Footer = () => {
  return (
    <Main
      style={{ height: "7rem", marginBottom: "0px" }}
      background="black"
      name="footer"
    >
      <Container>
        <Text>&copy; copyright 2021 by Axios Media Solution </Text>
      </Container>
    </Main>
  );
};

export default Footer;
