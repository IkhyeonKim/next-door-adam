import React from "react";
import AboutUsSection from "../section/about-us-section";
import BrandSection from "../section/brand-section";
import HeroSection from "../section/hero-section";
import PricingSection from "../section/pricing-section";

const MainPagePresenter = () => {
  return (
    <div id="root-wrapper">
      <HeroSection />
      <BrandSection />
      <PricingSection />
      <AboutUsSection />
      <div style={{ width: "100%", height: "800px", background: "purple" }}>Another section</div>
    </div>
  );
};

export default MainPagePresenter;
