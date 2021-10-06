import styled from "styled-components";
import { ButtonStyles, Box } from "./main.style";
export const FullWidthBtn = styled(ButtonStyles)`
  width: 100%;
  max-width: 100%;
`;

export const PortfolioBox = styled(Box)`
  cursor: pointer;
  padding: 10px;
  height: ${(props) => props.height}px;
  & img {
    border-radius: 1em;
  }
`;
