import React from "react";
import { useRouter } from "next/dist/client/router";
import { ResponseLayout, HomeLayout, PortfolioLayout } from "../../styles/layout.style";
import { Header, Footer } from "../.";
const Root = ({ children }) => {
  const router = useRouter();
  const html = (
    <>
      {" "}
      <Header />
      {children}
      <Footer />{" "}
    </>
  );
  if (router.route == "/portfolio")
    return <PortfolioLayout>{html}</PortfolioLayout>;

  if (router.route == "/") return <HomeLayout>{html}</HomeLayout>;
  if (router.route.includes("/success"))
    return <ResponseLayout>{html}</ResponseLayout>;

  return html;
};

export default Root;
