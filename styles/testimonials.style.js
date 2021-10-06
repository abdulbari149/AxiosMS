import { Box } from "./main.style";
import styled from "styled-components";
export const TestimonialsBox = styled(Box)`
  border: 2px solid ${(props) => props.theme.colors.blue};
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1), -2px 0px 3px rgba(0, 0, 0, 0.234);
flex-shrink: 0;
  ${(props) =>
    !props.active &&
    `
        transform: scale(.8);   
    
    `}
`;
