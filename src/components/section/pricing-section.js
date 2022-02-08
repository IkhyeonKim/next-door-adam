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

  padding: 10rem 0rem;

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

  @media only screen and (max-width: 1068px) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 744px;
  }

  @media only screen and (max-width: 734px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 8rem 2rem;
    max-width: 434px;
  }
`;

const CardWrapper = styled.div`
  min-height: 40rem;
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
    width: 100%;
    height: 100%;
    transition: all 1s;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media only screen and (max-width: 1068px) {
    margin-bottom: 2rem;
  }
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
