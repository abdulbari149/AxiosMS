import { Wrapper, Flex, IconStyles } from "../styles/main.style";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

function Controllers({ currentSlideIdx, setCurrentSlideIdx}) {
  return (
    <Wrapper top="50px">
      <Flex style={{ padding: "0 120px" }} justifyContent="space-between">
        <IconStyles onClick={() => setCurrentSlideIdx(prev => prev - 1)}>
          <IoMdArrowBack />
        </IconStyles>

        <IconStyles onClick={() => setCurrentSlideIdx(prev => prev + 1)}>
          <IoMdArrowForward />
        </IconStyles>
      </Flex>
    </Wrapper>
  );
}

export default Controllers;
