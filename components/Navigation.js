import { useContext, useState } from "react";
import Link from "next/link";

export default function Navigation() {
  const [open, setOpen] = useState(false);

  const theme = useContext(ThemeContext);
  const isLarge = useMediaQuery(
    `(min-width: ${theme.breakPoints.large.min}px)`
  );

  return (
    <Navbar role="navigation">
      {!isLarge && (
        <MenuToggle onClick={() => setOpen((prevOpen) => !prevOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </MenuToggle>
      )}
      {navList}
    </Navbar>
  );
}
