import React from "react";
import {
  Number,
  Box,
  Main,
  Wrapper,
  Heading3,
  Text,
} from "../styles/main.style";
import { Section, Image } from ".";
import { chooseUsData } from "../constants/chooseUsData";

const ChooseUs = () => {
  return (
    <Main name="chooseus">
      <Image
        background="gradient"
        c_height="800px"
        layout="fill"
        src="/images/why-choose-us-img.png"
      />
      <Wrapper top="0%" left="0%">
        <Section
          data={chooseUsData}
          title="Why Choose Us"
          textColor="white"
          flex={{ wrap: "wrap", space: 50 }}
        >
          {(item) => (
            <Box space={15} layout={3} key={item.id}>
              <Number> 0{item.id}</Number>
              <Heading3 color="white">{item.title}</Heading3>
              <Text color="white">{item.body}</Text>
            </Box>
          )}
        </Section>
      </Wrapper>
    </Main>
  );
};

export default ChooseUs;
