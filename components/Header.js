import React from "react";
import { NavItem, NavLink } from "../styles/header.style";
import { navData } from "../constants/navData";
import { Logo, Button } from ".";
import { AppBar, Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import MobileNav from "./MobileNav";
import { useTheme } from "styled-components";
import { useMediaQuery } from "../hooks";
import Link from "next/link";
const useStyles = makeStyles((theme) => ({
  mobileNav: {
    position: "absolute",
    top: "10px",
    left: "-30px",
  },
  container: {
    width: "80vw",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  appBar: {
    backgroundColor: "black",
    display: "grid",
    placeItems: "center",
    height: "7.5rem",
  },
  navList: {
    display: "flex",
    position: "relative",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: "2em",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    // marginLeft: 20,
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function Header() {
  const classes = useStyles();

  const theme = useTheme();
  const isLarge = useMediaQuery(
    `(min-width: ${theme.breakPoints.large.min}px)`
  );
  return (
    <AppBar className={classes.appBar} position="static">
      <Toolbar className={classes.container}>
        {!isLarge && (
          <div className={classes.mobileNav}>
            <MobileNav isMobile={!isLarge} />
          </div>
        )}
        <Logo href="/" />
        {isLarge && (
          <div className={classes.navList}>
            {navData.map(({ id, body, href }) => (
              <NavItem key={id}>
                <Link href={href} passHref>
                  <NavLink color="white">{body}</NavLink>
                </Link>
              </NavItem>
            ))}
          </div>
        )}
        <Button
          variant="outlined"
          w={13}
          h={4}
          route={{
            path: "#contactus",
            options: {
              shallow: true,
            },
          }}
        >
          Hire Us
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
