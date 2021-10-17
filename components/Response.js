import React from "react";
import {
  Text,
  Item,
  Main,
  Container,
  Heading4,
  Flex,
} from "../styles/main.style";
import { AiOutlineCheck } from "react-icons/ai";
import { SocialMedia } from ".";
const Response = () => {
  return (
    <Main>
      <Container space={30} direction="column">
        <Item size={60}>
          <AiOutlineCheck />
        </Item>
        <Text style={{ textAlign: "center" }}>
          We have successfully received your Email. We will try contact you
          through your whatsapp or via Email address.
        </Text>
        <Flex direction="column" alignItems="center">
          <Heading4>You can visit us on:</Heading4>
          <SocialMedia
            color="black"
            flex={{
              justifyContent: "center",
            }}
          />
        </Flex>
      </Container>
    </Main>
  );
};

export default Response;
