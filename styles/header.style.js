import styled from "styled-components";
import { Main } from "./main.style"
export const HeaderMain = styled(Main)`
  height: 8rem;
  box-shadow: 2px 0px 3px 5px ${(props) => props.theme.colors.v_black},
    1px -2px 2px 2px ${(props) => props.theme.colors.white};
`;
export const Navbar = styled.nav`
  max-width: 100%;
  height: 100%;
  display: none;
  @media (min-width: ${(props) => props.theme.breakPoints.large.min + "px" }) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2em;
  }
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
`;
export const NavLink = styled.a`
  text-decoration: none;
  color: white;
  letter-spacing: 0.6px;
`;
