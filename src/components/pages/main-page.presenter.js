import React, { useEffect, useRef } from "react";
import AboutUsSection from "../section/about-us-section";
import BrandSection from "../section/brand-section";
import CtaSection from "../section/call-to-action-section";
import HeroSection from "../section/hero-section";
import PricingSection from "../section/pricing-section";

const MainPagePresenter = () => {
  const rootWrapper = useRef();
  const hero = useRef();
  const brand = useRef();
  const pricing = useRef();
  const about = useRef();

  useEffect(() => {
    rootWrapper.current = document.querySelector("#root-wrapper");
    hero.current = document.querySelector("#hero-section");
    brand.current = document.querySelector("#brand-section");
    pricing.current = document.querySelector("#pricing-section");
    about.current = document.querySelector("#about-us-section");
  }, []);

  return (
    <div id="root-wrapper">
      <HeroSection />
      <BrandSection />
      <PricingSection />
      <AboutUsSection />
      <CtaSection aboveHeight={hero.current?.offsetHeight} />
    </div>
  );
};

export default MainPagePresenter;
