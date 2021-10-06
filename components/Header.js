import React from "react";
import { HeaderMain, Navbar, NavLink, NavItem } from "../styles/header.style";
import { Container } from "../styles/main.style";
import { navData } from "../constants/navData";
import Link from "next/link";
import Logo from "./Logo";
import Button from "./shared/Button";


const Header = () => {
  return (
    <HeaderMain background="black" as="header" name="header">
      <Container>
        <Logo />
        <Navbar>
          {navData.map(({ id, body, href }) => (
            <NavItem key={id}>
              <Link href={href} passHref>
                <NavLink>{body}</NavLink>
              </Link>
            </NavItem>
          ))}
        </Navbar>
        <Button variant="outlined" width={15} height={5}>
          Hire Us
        </Button>
      </Container>
    </HeaderMain>
  );
};



export default Header;
