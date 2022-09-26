import React from "react";
import { Number, Box, Main, Heading3, Text } from "../styles/main.style";
import { Section, Image } from ".";
import { chooseUsData } from "../constants/chooseUsData";

const ChooseUsContainer = () => {
  return (
    <Main id="choose-us" name="chooseus" background="gradient">
      <Image
        objectFit="cover"
        layout="fill"
        src="/images/why-choose-us-img.png"
        alt='choose-up-image'
      />
      <Section
        data={chooseUsData}
        title="Why Choose Us"
        textColor="white"
        flex={{ wrap: "wrap", space: 50, alignItems: "flex-start" }}
        render={data => <ChooseUs data={data} key={data.id} />}
      />
    </Main>
  );
};

const ChooseUs = ({ data }) => {
  return (
    <Box space={15} layout={3}>
      <Number> 0{data.id}</Number>
      <Heading3 color="white">{data.title}</Heading3>
      <Text color="white">{data.body}</Text>
    </Box>
  );
};

export default ChooseUsContainer;
