import React from "react";
import { services } from "../constants/servicesData";
import {
  Heading3,
  Text,
  Box,
  List,
  Item,
  Main,
  BoxBackground
} from "../styles/main.style";
import { AiOutlineCheck } from "react-icons/ai";
import Section from "./shared/Section";


const Services = () => {
  return (
    <Main name="services">
      <Section
        title="What we offer"
        data={services}
        flex={{
          justifyContent: "justify",
          space: 30,
          wrap: "wrap",
        }}
      >
        {(item) => (
          <Box
            layout={3}
            background="gradient"
            key={item.id}
          >
            <BoxBackground image={`/images/services/${item.image}`} />
            <Heading3 color="white">{item.title}</Heading3>
            <List>
              {item.list.map((listItem, idx) => (
                <Item key={idx}>
                  <AiOutlineCheck />
                  <Text color="white">{listItem}</Text>
                </Item>
              ))}
            </List>
          </Box>
        )}
      </Section>
    </Main>
  );
};

export default Services;
