import React, { useState } from "react";
import { Drawer, List } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Link from "next/link";
import { NavItem, NavLink, NavList } from "../styles/header.style";
import { Icon } from ".";
import { MdMenu } from "react-icons/md";
import { navData } from "../constants/navData";

function MobileNav({ isMobile }) {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <NavList>
          {navData.map(({ id, body, href }) => (
            <NavItem
              onClick={() => setOpenDrawer(false)}
              key={id}
              mobileView={isMobile}
            >
              <Link href={href} passHref>
                <NavLink color="black">{body}</NavLink>
              </Link>
            </NavItem>
          ))}
        </NavList>
      </Drawer>
      <Icon
        onClick={() => setOpenDrawer(!openDrawer)}
        component={<MdMenu />}
        iconcolor="white"
        size="sm"
      />
    </>
  );
}
export default MobileNav;
