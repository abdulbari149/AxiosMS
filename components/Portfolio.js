import React from "react";
import { useRouter } from "next/dist/client/router";
import { portfolioData } from "../constants/portfolioData";
import { Main } from "../styles/main.style";
import { PortfolioBox } from "../styles/portfolio.style";
import Button from "./shared/Button";
import Section from "./shared/Section";
import Image from "./shared/Image";
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
          >
            <Image {...item.image} />
            <Button
              width={item.button.size.width}
              height={item.button.size.height}
              color={item.button.color}
              variant={item.button.variant}
            >
              View Full Project
            </Button>
          </PortfolioBox>
        )}
      </Section>
      <Button
        style={{ marginTop: "50px" }}
        width={30}
        height={10}
        variant="outlined"
        color="black"
      >
        view More
      </Button>
    </Main>
  );
};

export default Portfolio;
