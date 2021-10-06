import React from "react";
import Image from "next/image";
const Logo = () => {
  return (
    <div style={{ display: "block", objectFit: "contain" }}>
      <Image src="/images/logo-img.png" width="120" height="40" />
    </div>
  );
};

export default Logo;
