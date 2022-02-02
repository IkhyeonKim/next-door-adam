import React from "react";
import styled from "styled-components";
import useScrollWithOpacity from "../../hooks/useScrollWithOpacity";

const HeroWrapper = styled.div`
  width: 100%;
  display: flex;
  position: sticky;
  top: 0;
  opacity: 1;
  flex-direction: column;
  margin: auto;
  padding: 8rem 0 4rem 8rem;

  background-color: var(--primary-yellow);

  .content-wrapper {
    width: 980px;
    position: relative;
  }

  h1 {
    color: var(--primary-blue);
    margin-bottom: 0rem;
  }

  @media only screen and (max-width: 1068px) {
    padding: 4rem 0 2rem 4rem;
  }
`;

const SideTitle = styled.div`
  font-size: 18.5rem;
  font-family: "TmonMonsori";
  position: absolute;
  top: 130px;
  left: -79px;
  letter-spacing: -1px;
  color: #4f7cb1;
  opacity: 0.15;
  white-space: nowrap;
  cursor: default;

  @media only screen and (max-width: 1068px) {
    top: 109px;
    left: -49px;
  }
`;

const HeroContent = styled.div`
  font-family: "TmonMonsori";
  font-size: 2rem;
  font-weight: bold;
  color: var(--primary-blue);

  transform: translate(8px, 0);
`;

const HeroSection = () => {
  const refOpacity = useScrollWithOpacity(undefined, 1);
  return (
    <HeroWrapper ref={refOpacity} id="hero-section" className="section">
      <div className="content-wrapper">
        <h1 className="main-title">
          이웃집
          <br />
          아담
        </h1>
        <HeroContent>영문 번역/카피라이팅이 필요 할 땐?</HeroContent>
        <HeroContent>이웃집 아담에게 부탁하세요!</HeroContent>
        <SideTitle>Nextdoor Adam</SideTitle>
      </div>
    </HeroWrapper>
  );
};

export default HeroSection;
