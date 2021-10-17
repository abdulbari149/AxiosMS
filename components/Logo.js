import React from "react";
import Image from "next/image";
import Link from "next/link";
const Logo = ({ href }) => {
  return (
    <Link href={href} passHref>
      <a style={{ display: "block", objectFit: "contain", cursor: "pointer" }}>
        <Image src="/images/logo-img.png" width="120" height="40" />
      </a>
    </Link>
  );
};

export default Logo;
