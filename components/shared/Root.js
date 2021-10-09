import React from "react";
import { useRouter } from "next/dist/client/router";
import { HomeLayout, PortfolioLayout } from "../../styles/layout.style"
const Root = ({ children }) => {
  const router = useRouter()

  let html = null;

  if(router.route == "/portfolio") return <PortfolioLayout>{children}</PortfolioLayout>
  
  return <HomeLayout>{children}</HomeLayout>;
};

export default Root;
