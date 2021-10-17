import React from "react";
import PropTypes from "prop-types";
import { Main, Container, Heading2, Flex } from "../../styles/main.style";

const Section = ({
  children,
  data = [],
  title = "",
  flex,
  textColor,
  render,
  ...props
}) => {
  return (
    <Container {...props} space={60} direction="column" alignItems="center">
      <Heading2 color={textColor}>{title}</Heading2>
      <Flex {...flex}>{data.map((item) => render(item))}</Flex>
    </Container>
  );
};

Section.propTypes = {
  children: PropTypes.func,
  render: PropTypes.func,
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  flex: PropTypes.shape({
    direction: PropTypes.string,
    alignItems: PropTypes.string,
    justifyContent: PropTypes.string,
    space: PropTypes.number,
    wrap: PropTypes.string,
    ref: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.shape({ current: PropTypes.any }),
    ]),
  }),
};

export default Section;
