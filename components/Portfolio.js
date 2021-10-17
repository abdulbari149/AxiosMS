import React from "react";
import { useRouter } from "next/dist/client/router";
import { portfolioData } from "../constants/portfolioData";
import { Main, Heading3, BoxBackground, TextContainer, Text } from "../styles/main.style";
import { PortfolioBox } from "../styles/portfolio.style";
import Button from "./shared/Button";
import Section from "./shared/Section";
import NextImage from "next/image"
const Portfolio = () => {


  return (
    <Main name="portfolio">
      <Section
        title="Our Work"
        data={portfolioData}
        flex={{
          direction: "row",
          alignItems: "center",
          justifyContent: "space-between",
          space: 30,
          wrap: "wrap",
        }}
      >
        {(item) => (
          <PortfolioBox
            height={400}
            layout={2}
            key={item.id}
            background="gradient"
          > 
            <BoxBackground image={item.image.src}></BoxBackground>
            <TextContainer>
            <Heading3>{item?.title}</Heading3>
            <Text></Text>
            </TextContainer>
            
            <Button
              w={item.button.size.width}
              h={item.button.size.height}
              color={item.button.color}
              variant={item.button.variant}
              style={{ 
                marginTop: "auto"
              }}
            >
              View Full Project
            </Button>
          </PortfolioBox>
        )}
      </Section>
    </Main>
  );
};




export default Portfolio;
