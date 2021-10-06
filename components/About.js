import React from "react";
import styled from "styled-components";
import { Main,Container, Heading2, TextContainer, Text } from "../styles/main.style";
import Image from "./shared/Image";
const About = () => {
  return (
    <Main name="about">
      <Container alignItems="center" direction="column" gap="10px">
        <TextContainer direction="column" gap={25}>
          <Heading2>About Us</Heading2>
          <Text>
            <strong>Axios Media Solutions </strong>furnishes your business with
            extremely strategic marketing tactics, we aim to highlight your
            business in the digital world to secure your position as a
            successful business. Our vital goal is to level up your business by
            furnishing efficient media solutions and setting you up on a medium
            where your business is recognized amongst well reputed firms. Axios
            Media Solutions guarantees client satisfaction and systematic
            proceedings with helpful advices to take your business on another
            level.
          </Text>
        </TextContainer>
        <Image src="/images/about-us-img.png" width={1200} height={500} />
      </Container>
    </Main>
  );
};



export default About;
