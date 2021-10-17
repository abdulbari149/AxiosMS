import React from "react";
import { bannerData } from "../constants/bannerData";
import {
  ContactUs,
  Root,
  Header,
  Banner,
  About,
  Services,
  ChooseUs,
  Testimonials,
  Footer,
  Loading,
} from "../components";
import { useGlobal } from "../store/context/global";

export default function Home() {
  const { value, dispatch } = useGlobal();
  return value?.loading ? (
    <Loading />
  ) : (
    <Root>
      {bannerData.map((banner) => (
        <Banner key={banner.id} banner={banner} />
      ))}
      <About />
      <Services />
      <ChooseUs />
      <Testimonials />
      <ContactUs />
    </Root>
  );
}
