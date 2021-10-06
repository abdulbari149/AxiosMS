import React, { useState, useCallback, useMemo } from "react";
import {
  Main,
  Heading3,
  Text,
  Number,
  TextContainer,
} from "../styles/main.style";
import { TestimonialsBox } from "../styles/testimonials.style";
import { testimonialsData } from "../constants/testimonialsData";
import { IoMdQuote } from "react-icons/io";
import { Controller,Section } from "."
const Testimonials = () => {

  const [slide, useSlide] = useState("")
  const [currentSlideIdx, setCurrentSlideIdx] = useState(2)

  const slideValue = useMemo(() => 300 * currentSlideIdx, [currentSlideIdx])
  console.log({ slideValue })
  return (
    <Main name="testimonials">
      <Section
        color="black"
        title="Client's Testimonials"
        data={testimonialsData}
        flex={{
          space: 30,
          style: {
            overflow: "hidden"
          }
        }}
      >
        {(item) => (
          <TestimonialsBox
            layout={3}
            active={item.id === currentSlideIdx}
            space={40}
            alignItems="center"
            key={item.id}
          >
            <img {...item.image} />
            <Heading3>John Doe</Heading3>
            <TextContainer>
              <Number
                style={{ transform: "translate(-60%, -70%)", opacity: 1 }}
              >
                <IoMdQuote style={{ transform: "rotate(180deg)" }} />
              </Number>
              <Text>
                I had a very good experience at axios. Love their communication
                skills. I want to work again with them.
              </Text>
            </TextContainer>
          </TestimonialsBox>
        )}
      </Section>
      <Controller currentSlideIdx={currentSlideIdx}  setCurrentSlideIdx={setCurrentSlideIdx}/>
    </Main>
  );
};

export default Testimonials;
