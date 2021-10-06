import React from "react";
import { Main, Container, Heading2, Flex } from "../../styles/main.style";
const Section = ({ children, data, title, flex, textColor }) => {
  return (
    <Container space={60} direction="column" alignItems="center">
      <Heading2 color={textColor} >{title}</Heading2>
      <Flex {...flex}>{data.map((item) => children(item))}</Flex>
    </Container>
  );
};

export default Section;
