import React, { useState, useCallback, useRef, useEffect } from "react";
import {
  Main,
  Heading3,
  Text,
  Quotes,
  TextContainer,
} from "../styles/main.style";
import { TestimonialsBox } from "../styles/testimonials.style";
import { testimonialsData } from "../constants/testimonialsData";
import { IoMdQuote } from "react-icons/io";
import { Controller, Section } from ".";
import { useComputeStyles, useMediaQuery } from "../hooks";
const TestimonialsContainer = () => {
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(null);
  const boxRef = useRef(null);
  const flexRef = useRef(null);

  const { getStyles } = useComputeStyles(["width"]);
  const isMobile = useMediaQuery("(max-width: 1023px)")

  const translateBoxes = useCallback(
    (value) => {
      const translateValue = (parseInt(value) + 30) * index * -1;
      console.log({ translateValue, value });
      flexRef.current.style.transform = `translateX(${translateValue}px)`;
      flexRef.current.style.transition = "400ms ease-in-out";
    },
    [index]
  );


  function handleStyles(){
    const styles = getStyles(flexRef.current.children[0]);
    setWidth(parseInt(styles.width));
  }


  useEffect(() => {
    handleStyles()
    window.addEventListener("resize", handleStyles)
    return () => window.removeEventListener("resize", handleStyles)
  }, []);

  useEffect(() => {
    translateBoxes(width);
  }, [index]);


  return (
    <Main name="testimonials">
      <Section
        title="Client's Testimonials"
        data={testimonialsData}
        className="testimonials"
        flex={{
          space: 30,
          ref: flexRef,
        }}
        render={(data) => (
          <Testimonial
            data={data}
            index={index}
            key={data.id}
            ref={boxRef}
            isMobile={isMobile}
            
          />
        )}
      />

      <Controller
        index={index}
        setIndex={setIndex}
        maximum={testimonialsData.length - 1}
        isMobile={isMobile}
      />
    </Main>
  );
};

const Testimonial = React.forwardRef(({ data, index, isMobile }, ref) => {
  return (
    <TestimonialsBox
      alignItems="center"
      space={40}
      layout={3}
      ref={ref}
      active={!isMobile && data.id === index + 1}
    >
      <img {...data.image} />
      <Heading3>{data.name}</Heading3>
      <TextContainer>
        <Quotes>
          <IoMdQuote />
        </Quotes>
        <Text style={{ textAlign: "center" }}>{data.feedback}</Text>
      </TextContainer>
    </TestimonialsBox>
  );
});

export default TestimonialsContainer;
