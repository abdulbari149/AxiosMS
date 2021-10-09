import styled from "styled-components";

export const ButtonStyles = styled.button`
  padding: 10px 15px;
  display: grid;
  place-content: center;
  border-radius: 0.5em;
  cursor: pointer;
  z-index: 10;
  ${(props) => {
    switch (props.variant) {
      case "contained":
        return `
                background-color: ${props.theme.colors.blue};
                border: none;
                color: ${props.color};
              `;
      case "outlined":
        return `
                background: none;
                border: 3px solid ${props.theme.colors.v_blue};
                color: ${props.color || "white"};
              `;
      default:
        break;
    }
  }}

  width: 100%;
  max-width: ${(props) => +props.width}rem;
  max-height: ${(props) => +props.height}rem;
  min-width: ${(props) => +props.width * 0.4}rem;
  min-height: ${(props) => +props.height * 0.4}rem;
  & > * {
    opacity: 1;
    color: inherit !important;
    display: inline-block;
    font-weight: 800;
  }
`;

export const Container = styled.section`
  position: relative;
  max-width: 80vw;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  align-items: ${(props) => props.alignItems || "center"};
  justify-content: ${(props) => props.justifyContent || "space-between"};
  gap: ${(props) => props.space || 10}px;
  background-color: inherit;
`;

export const Text = styled.p`
  font-size: clamp(1.2rem, 1.2vw, 1.8vw);
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

const Heading = (props) => `
  text-transform: capitalize;
  line-height: 1.5;
  color: ${props.theme.colors[props.color] || "black"};
  font-weight: bold;
  white-space: pre-wrap;
`;

export const Heading1 = styled.h1`
  ${(props) => Heading(props)}
  font-size: clamp(3vw, 4.2rem, 5vw);
`;
export const Heading2 = styled.h2`
  ${(props) => Heading(props)}
  font-size: clamp(2.5vw, 3.8rem, 4.6vw);
`;

export const Heading3 = styled.h3`
  ${(props) => Heading(props)}
  font-size: clamp(2vw, 2.4rem, 3.8vw);
`;
export const Heading4 = styled.h4`
  ${(props) => Heading(props)}
  font-size: clamp(2rem, 2.2rem, 2.8rem);
`;


export const TextContainer = styled.div`
  position:relative;
  width:100%;
`;

export const ImageContainer = styled.div`
  height: ${(props) => props.height}px;
  width: 100%;
  max-width: 100%;
  object-fit: cover;
  aspect-ratio: 16/9;
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
  flex-direction: ${(props) => props.direction || "row"};
  align-items: ${(props) => props.alignItems || "center"};
  ${(props) => `justify-content: ${props.justifyContent};`}
  flex-wrap: ${(props) => (props.wrap === "wrap" ? "wrap" : "nowrap")};
  gap: var(--space);
`;

export const Box = styled.div`
  --box-count: ${(props) => +props.layout};
  --calculated-width: calc(
    calc(100% - calc(var(--space) * calc(var(--box-count) - 1))) /
      var(--box-count)
  );
  padding: clamp(3em, 6rem, 5vh) var(--space);
  width: 100%;
  max-width: var(--calculated-width);
  height: fit-content;
  flex: 1 1 var(--calculted-width);
  aspect-ratio: 16/9;
  display: flex;
  flex-direction: column;
  align-items: ${props => props.alignItems || "flex-start"};
  justify-content: center;
  border-radius: 1em;
  position: relative;
  ${(props) => props.space && `gap: ${props.space}px`}
  ${(props) =>
    props.background &&
    `background: ${props.theme.background[props.background]}`};

  @media (max-width: ${(props) => props.theme.breakPoints.medium.max + "px"}) {
    --box-count: 2;
  }

  @media (max-width: ${(props) => props.theme.breakPoints.small.max + "px"}) {
    flex: 1 1 100%;
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
    background-size: 100%;`}
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
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 5px;
  & > *:nth-child(1) {
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    color: ${(props) => props.theme.colors.white};
    z-index: 2;
    width: 25px;
    height: 25px;
    background-color: ${(props) => props.theme.colors.blue};
    border-radius: 100vh;
  }
`;


export const Main = styled.section`
  grid-area: ${(props) => props.name};
  width: 100vw;
  max-width: 100%;
  display: grid;
  place-items: center;
  position: relative;
 ${props => props.background && `background-color: ${props.theme.colors[props.background]}`};

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

export const Number = styled.div`
  color: ${(props) => props.theme.colors.v_blue};
  opacity: 0.5;
  font-size: 100px;
  font-weight: bold;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(-50%) translateY(-50%);
`;

export const IconStyles = styled.span`
  font-size: 40px;
  line-height: 100%;
  height: 100%;
  vertical-align: middle;
  cursor: pointer;
  color:${props => props.color};
  ${props => props.size === "sm" && `font-size : 25px;`}
`