import styled from "styled-components";
import { Main } from "./main.style";
import { Drawer, IconButton, List } from "@mui/material";

export const HeaderMain = styled(Main)`
  height: 8rem;
  box-shadow: 2px 0px 3px 5px ${(props) => props.theme.colors.v_black},
    1px -2px 2px 2px ${(props) => props.theme.colors.white};
`;


export const NavList = styled(List)`
  height: 100vh;
  width: 40vw;
  background-color: white;
  padding: 20px 0;
  display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
`;

export const NavItem = styled.div`
  font-size: 1.6em;
  line-height: 40px;
  position: relative;
  &::before {
    content: "";
    width: 0;
    border-top: 2px solid white;
    border-radius: 0.6em;
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    transition: 300ms ease-in-out;
  }
  &:hover::before {
    width: 100%;
  }

 ${props => !!props.mobileView && `
  padding: 0px 50px;
  color:white;
  &::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 0;
    height: 100%;
    background-color:#232411;
    z-index: -1;
  }
  &:hover{
    & a{
      color:white;
    }
    &::before{
      width: 100%;
    }

    transition: 400ms ease-in;
  }
 `}
`;
export const NavLink = styled.a`
  text-decoration: none;
  color: ${props => props.theme.colors[props.color]};
  letter-spacing: 0.6px;

`;

export const MenuToggle = styled.div`
  --height: 25px;
  --space: 4px;
  z-index: 2;
  position: absolute;
  top: 5px;
  left: 0;
  transform: translateX(-120%) translateY(0%);
  width: 32px;
  height: var(--height);
  & span{
    display: inline-block;
    margin-bottom: var(--space);
    width: 100%;
    height: calc(calc(var(--height) - (var(--space)*2) )/3);
    background-color: white;
    z-index: 2;
    border-radius: .3em;
  }

`;

