import React from "react";
import { services } from "../constants/servicesData";
import {
  Heading3,
  Text,
  Box,
  List,
  Item,
  Main,
  BoxBackground,
} from "../styles/main.style";
import { AiOutlineCheck } from "react-icons/ai";
import Section from "./shared/Section";

const ServicesContainer = () => {

  return (
    <Main id="services" name="services">
      <Section
        title="What we offer"
        data={services}
        flex={{
          justifyContent: "justify",
          space: 30,
          wrap: "wrap",
        }}
        render={data => <Service data={data} key={data.id} />}
      />
    </Main>
  );
};

export const Service = ({ data }) => {
  return (
    <Box layout={3} background="gradient">
      <BoxBackground image={`/images/services/${data.image}`} />
      <Heading3 color="white">{data.title}</Heading3>
      <List>
        {data.list.map((item, idx) => (
          <Item key={idx}>
            <AiOutlineCheck />
            <Text color="white">{item}</Text>
          </Item>
        ))}
      </List>
    </Box>
  );
};

export default ServicesContainer;
