import styled from "styled-components";
import { Button } from "@mui/material";

export const Main = styled.section`
  grid-area: ${(props) => props.name};
  max-width: 100vw;
  display: grid;
  place-items: center;
  position: relative;
  background: ${(props) =>
    props?.background ? props.theme.background[props.background] : "none"};
`;

export const ButtonStyles = styled.button`
  padding: 10px 15px;
  display: grid;
  place-content: center;
  border-radius: 0.5em;
  cursor: pointer;
  z-index: 10;
  border: 2px solid ${(props) => props.theme.colors.blue};

  ${(props) => {
    switch (props.variant) {
      case "contained":
        return `
                background-color: ${props.theme.colors.v_blue};
                color: ${props.color};
              `;
      case "outlined":
        return `
                background-color: transparent;
                color: ${props.color || "white"};
                transition: .3s ease-in-out;
                &:hover{
                  background-color: ${props.theme.colors.v_blue};
                  color:black;
                  opacity: 1;
                }
              `;
      default:
        break;
    }
  }}

  width: 100%;
  max-width: ${(props) => +props.w}rem;
  max-height: ${(props) => +props.h}rem;
  min-width: ${(props) => +props.w * 0.4}rem;
  min-height: ${(props) => +props.h * 0.4}rem;
  & > * {
    opacity: 1;
    color: inherit !important;
    font-weight: bold;
    font-size: 20px;
  }
`;

export const Container = styled.section`
  margin-top: 40px;
  width: 100%;
  max-width: 80vw;
  position: relative;
  display: flex;
  flex-direction: ${(props) => props.direction ?? "row"};
  align-items: ${(props) => props.alignItems ?? "center"};
  justify-content: ${(props) => props.justifyContent ?? "space-between"};
  gap: ${(props) => props.space || 10}px;
  &.testimonials {
    overflow: hidden;
    padding-left: 17px;
  }
`;
export const Text = styled.p`
  font-size: clamp(1.7rem, 1.4vw, 1.5vw);
  letter-spacing: 0.8px;
  font-weight: 500;
  line-height: 1.7;
  opacity: 0.8;
  color: ${(props) => props.color || props.theme.colors.defaultTextColor};
  display: inline-block;
  text-transform: capitalize;
  white-space: pre-wrap;
  ${(props) =>
    !!props.hide &&
    `@media(max-width:${props.theme.breakPoint.small.max}){
    visibility: hidden;
    display:none;
  }`}
`;

export const Heading1 = styled.h1`
  color: ${({ color, theme }) =>
    color ? theme.colors[color] : theme.colors.defaultTextColor};
  font-size: clamp(3vw, 4.2rem, 5vw);
`;
export const Heading2 = styled.h2`
  color: ${({ color, theme }) =>
    color ? theme.colors[color] : theme.colors.defaultTextColor};
  font-size: clamp(2.5vw, 3.8rem, 4.6vw);
`;

export const Heading3 = styled.h3`
  color: ${({ color, theme }) =>
    color ? theme.colors[color] : theme.colors.defaultTextColor};
  font-size: clamp(2vw, 2.4rem, 3.8vw);
`;
export const Heading4 = styled.h4`
  color: ${({ color, theme }) =>
    color ? theme.colors[color] : theme.colors.defaultTextColor};
  font-size: clamp(2rem, 2.2rem, 2.8rem);
`;

export const TextContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const ImageContainer = styled.div`
  height: auto;
  width: 100%;
  max-width: 100%;
  cursor: pointer;
  background: ${(props) => props.theme.background[props.background]};
  & > * {
    min-height: 350px;
    mix-blend-mode: multiply;
  }
`;
export const Flex = styled.div`
  --space: ${(props) => props.space}px;
  padding: 10px 0;
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: ${(props) => props?.direction ?? "row"};
  align-items: ${(props) => props?.alignItems ?? "center"};
  justify-content: ${(props) => props?.justifyContent ?? "justify"};
  flex-wrap: ${(props) => (props.wrap === "wrap" ? "wrap" : "nowrap")};
  gap: var(--space);
  ${(props) => props.mobile && `flex-direction: column-reverse;`}
`;

export const Box = styled.div`
  --box-count: ${(props) => +props.layout};
  --width: calc(
    calc(100% - calc(var(--space) * calc(var(--box-count) - 1))) /
      var(--box-count)
  );
  columns: var(--box-count) var(--width);
  padding: clamp(3em, 6rem, 5vh) var(--space);
  flex: 1 1 var(--width);
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.alignItems || "flex-start"};
  justify-content: center;
  border-radius: 1em;
  position: relative;
  background: ${(props) =>
    props.background ? props.theme.background[props.background] : "none"};
  ${(props) => props.space && `gap: ${props.space}px`}


  & img:hover {
    transform: scale(1.2);
    transition: 400ms ease-in-out;
  }
`;

export const BoxBackground = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  border-radius: inherit;
  ${(props) =>
    props.image &&
    `background: url(${props.image}) no-repeat;
    background-size: cover;
    `}
  mix-blend-mode:overlay;
`;

export const List = styled.ul`
  margin-top: clamp(1.5em, 2em, 2.8em);
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: clamp(1em, 1.2vh, 1.8em);
`;

export const Item = styled.div`
  --size: ${props => props.size ?? 30}px;
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 5px;
  & > *:nth-child(1) {
    font-size: var(--size);
    font-weight: bold;
    text-align: center;
    color: ${(props) => props.theme.colors.white};
    z-index: 2;
    width: calc(var(--size) - 5);
    height: calc(var(--size) - 5);
    background-color: ${(props) => props.theme.colors.blue};
    border-radius: 100vh;
  }
`;

export const Wrapper = styled.div`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  transform: ${(props) => `translate(-${props.left}, -${props.top})`};
  width: 100vw;
  height: 100%;
  display: grid;
  place-items: center;
`;

export const Extra = styled.div`
  color: ${(props) => props.theme.colors.v_blue};
  font-size: 100px;
  font-weight: bold;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Number = styled(Extra)`
  transform: translateX(-50%) translateY(-50%);
  opacity: 0.5;
`;

export const Quotes = styled(Extra)`
  transform: translate(-60%, -70%);
  & > * {
    transform: rotate(180deg);
  }
`;

export const IconStyles = styled.span`
  font-size: 40px;
  line-height: 100%;
  height: 100%;
  vertical-align: middle;
  cursor: pointer;
  color: ${(props) => props.iconcolor ?? "black"};
  ${(props) => props.size === "sm" && `font-size : 25px;`}
`;


export const LoaderMain = styled(Main)`
  height: 100vh;
  background-color: rgba(0,0,0,0.135);
  grid-area: loader;
`
