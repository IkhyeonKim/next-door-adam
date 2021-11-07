import React from "react";
import styled from "styled-components";

const HeroWrapper = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  margin: auto;
  padding: 8rem 0 4rem 8rem;

  background-color: #f8d46c;

  .content-wrapper {
    width: 980px;
    position: relative;
  }

  h1 {
    color: #1965c0;
    margin-bottom: 0rem;
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
`;

const HeroContent = styled.div`
  font-family: "TmonMonsori";
  font-size: 2rem;
  font-weight: bold;
  color: #1965c0;

  transform: translate(8px, 0);
`;

// 영문 번역/카피라이팅이 필요 할 땐?
// 이웃집 아담에게 부탁하세요!
// 이웃집 아담
// 여러분의 목소리를 전달합니다.

// 오른쪽에

const HeroSection = () => {
  return (
    <HeroWrapper id="hero-section" className="section section-content">
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
