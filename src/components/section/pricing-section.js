import React from "react";
import styled from "styled-components";

import ButtonPrimary from "../atoms/Button";

const PricingWrapper = styled.div`
  width: 100%;
  max-width: 980px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 2rem;
  grid-template-rows: auto 30rem;

  padding: 4rem 2rem;
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;

  h2 {
    grid-column: 1 / -1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 4rem;
    margin-bottom: 0;
  }
`;

const CardWrapper = styled.div`
  perspective: 90rem;
  position: relative;

  h3 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.4rem;
    line-height: 2.2rem;
    margin-bottom: 0.8rem;
  }

  p.price {
    margin-bottom: 2rem;
  }

  .card-side {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 1s;
    backface-visibility: hidden;

    &--front {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      /* border: solid 2px #1965c0; */
      /* background-color: #90caf9; */
    }

    &--back {
      /* background-color: #2495f3; */
      transform: rotateY(180deg);

      &-standard {
        /* background: linear-gradient(to right bottom, #1965c0, #bbdefb); */
        /* background-color: #f8d46c; */
        border: solid 2px #f8d46c;
      }
    }
  }

  /* &:hover .card-side--front {
    transform: rotateY(180deg);
  }

  &:hover .card-side--back {
    transform: rotateY(0);
  } */
`;

const PricingSection = () => {
  return (
    <PricingWrapper className="section section-content">
      <h2>아담의 번역 솔루션</h2>
      <CardWrapper>
        <div className="card-side card-side--front">
          <h3>아담의 스탠다드 솔루션</h3>
          <p>300단어</p>
          <p>원어민 검수</p>
          <p>이메일, 유튜브 자막</p>
          <p className="price">₩5,000</p>
          <ButtonPrimary>견적 문의하기</ButtonPrimary>
        </div>
        <div className="card-side card-side--back card-side--back-standard">CARD1 Back</div>
      </CardWrapper>

      <CardWrapper>
        <div className="card-side card-side--front">
          <h3>아담의 디럭스 솔루션</h3>
          <p>300단어</p>
          <p>원어민 검수</p>
          <p>제품설명, 영문 이력서</p>
          <p className="price">₩6,000</p>
          <ButtonPrimary>견적 문의하기</ButtonPrimary>
        </div>
        <div className="card-side card-side--back">CARD2 Back</div>
      </CardWrapper>

      <CardWrapper>
        <div className="card-side card-side--front">
          <h3>아담의 스위트 솔루션</h3>
          <p>300단어</p>
          <p>원어민 검수</p>
          <p>논문 및 특수 필드</p>
          <p className="price">₩10,000</p>
          <ButtonPrimary>견적 문의하기</ButtonPrimary>
        </div>
        <div className="card-side card-side--back">CARD3 Back</div>
      </CardWrapper>
    </PricingWrapper>
  );
};

export default PricingSection;
