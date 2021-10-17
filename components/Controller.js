import { Wrapper, Flex, IconStyles } from "../styles/main.style";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { IconButton } from "@mui/material";
function Controllers({ index, setIndex, maximum, isMobile }) {
  return (
    <Wrapper top="50px">
      <Flex style={{ padding: "0 8vw" }} justifyContent="space-between">
        <IconStyles
          as={IconButton}
          onClick={() => {
            setIndex((prev) => prev - 1);
            console.log({ index, maximum });
          }}
          disabled={index === 0}
        >
          <IoMdArrowBack />
        </IconStyles>

        <IconStyles
          as={IconButton}
          onClick={() => {
            setIndex((prev) => prev + 1);
            console.log({ index, maximum });
          }}
          disabled={!isMobile ? index === maximum - 3 : index === maximum}
        >
          <IoMdArrowForward />
        </IconStyles>
      </Flex>
    </Wrapper>
  );
}

export default Controllers;
