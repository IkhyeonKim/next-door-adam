import React from "react";
import BrandSection from "../section/brand-section";
import HeroSection from "../section/hero-section";
import PricingSection from "../section/pricing-section";

const MainPagePresenter = () => {
  return (
    <div id="root-wrapper">
      <HeroSection />
      <BrandSection />
      <PricingSection />
    </div>
  );
};

export default MainPagePresenter;
