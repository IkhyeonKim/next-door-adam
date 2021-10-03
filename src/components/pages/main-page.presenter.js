import React from "react";
import BrandSection from "../section/brand-section";
import HeroSection from "../section/hero-section";
import PricingSection from "../section/pricing-section";

const MainPagePresenter = () => {
  return (
    <>
      <HeroSection />
      <BrandSection />
      <PricingSection />
    </>
  );
};

export default MainPagePresenter;
