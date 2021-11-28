import React, { useState } from "react";
import styled from "styled-components";

import ButtonPrimary from "../atoms/button";
import ModalForm from "../molcules/modalForm";

const PricingWrapper = styled.div`
  width: 100%;
  max-width: 980px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 2rem;
  grid-template-rows: auto 40rem;

  padding: 10rem 0rem;
  /* margin-top: 2rem; */
  margin-left: auto;
  margin-right: auto;

  h2 {
    grid-column: 1 / -1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 4rem;
    margin-bottom: 3rem;
  }
`;

const CardWrapper = styled.div`
  perspective: 90rem;
  position: relative;

  background-color: white;
  border-radius: 12px;
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
  const [modalOption, setModalOption] = useState({
    visible: false,
    productNumber: 1,
  });

  const showModal = (visibility, productNumber) => {
    setModalOption({
      productNumber,
      visible: visibility,
    });
  };
  // #1965c0
  return (
    <PricingWrapper id="pricing-section" className="section section-content">
      <h2>
        <span style={{ color: "#1965c0" }}>아담</span>의 솔루션
      </h2>
      <CardWrapper>
        <div className="card-side card-side--front">
          <h3>아담의 카피라이팅</h3>
          <p>헤드카피, 바디카피</p>
          <p>원어민 검수</p>
          <p>견적문의 필수</p>
          <p className="price">₩100,000</p>
          <ButtonPrimary onClick={() => showModal(true, 1)}>견적 문의하기</ButtonPrimary>
        </div>
        <div className="card-side card-side--back card-side--back-standard">CARD1 Back</div>
      </CardWrapper>

      <CardWrapper>
        <div className="card-side card-side--front">
          <h3>아담의 아마존 패키지</h3>
          <p>불렛 포인트, 상세 설명</p>
          <p>원어민 검수</p>
          <p>키워드 리스팅 제공</p>
          <p className="price">₩80,000</p>
          <ButtonPrimary onClick={() => showModal(true, 2)}>견적 문의하기</ButtonPrimary>
        </div>
        <div className="card-side card-side--back">CARD2 Back</div>
      </CardWrapper>

      <CardWrapper>
        <div className="card-side card-side--front">
          <h3>아담의 일반번역</h3>
          <p>100단어</p>
          <p>원어민 검수</p>
          <p>유튜브 자막, 비즈니스 이메일 등</p>
          <p className="price">₩5,000</p>
          <ButtonPrimary onClick={() => showModal(true, 3)}>견적 문의하기</ButtonPrimary>
        </div>
        <div className="card-side card-side--back">CARD3 Back</div>
      </CardWrapper>

      {modalOption.visible ? (
        <ModalForm visible={modalOption.visible} product={modalOption.productNumber} setVisible={showModal} />
      ) : (
        ""
      )}
    </PricingWrapper>
  );
};

export default PricingSection;
