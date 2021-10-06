import React from "react";
import { bannerData } from "../constants/bannerData";
import {
  ContactUs,
  Root,
  Header,
  Banner,
  About,
  Portfolio,
  Services,
  ChooseUs,
  Testimonials,
  Footer
} from "../components";
export default function Home() {
  return (
    <Root>
      <Header />
      {bannerData.map((banner) => (
        <Banner key={banner.id} banner={banner} />
      ))}
      <About />
      <Services />
      <Portfolio />
      <ChooseUs />
      <Testimonials />
      <ContactUs />
      <Footer />
    </Root>
  );
}
