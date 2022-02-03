import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ButtonPrimary from "../atoms/button";
import ModalForm from "../molcules/modalForm";

const CtaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* max-width: 92%; */

  height: 260vh;
  padding: 6rem 4rem;

  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 4rem;
  }

  .btn-wrapper {
    margin-top: 1rem;
  }

  .paragraph {
    font-size: 7rem;
    font-weight: bold;
    margin-bottom: 0;
    color: var(--primary-blue);
    transform: matrix(1, 0, 0, 1, 0, 0);

    &__line {
      display: inline;
      word-break: keep-all;
      opacity: 0.25;
      transition-property: opacity;
      transition-duration: 0.5s;
      transition-timing-function: cubic-bezier(0.25, 1, 0.5, 1);

      &.active {
        opacity: 1;
      }
    }

    &__line:not(:first-child) {
      margin-left: 0.8rem;
    }
  }

  @media only screen and (max-width: 1068px) {
    padding: 3rem 2rem;
    height: 200vh;

    .paragraph {
      font-size: 5rem;
    }
  }

  @media only screen and (max-width: 734px) {
    padding: 2rem 1rem;
    height: 210vh;

    .paragraph {
      font-size: 4.5rem;
    }
  }
`;

const CtaSection = () => {
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

  const rootWrapper = useRef();
  const hero = useRef();
  const brand = useRef();
  const pricing = useRef();
  const about = useRef();
  const cta = useRef();

  const refPrevRange = useRef(0);
  const refCurrentRange = useRef(0);

  useEffect(() => {
    rootWrapper.current = document.querySelector("#root-wrapper");
    hero.current = document.querySelector("#hero-section");
    brand.current = document.querySelector("#brand-section");
    pricing.current = document.querySelector("#pricing-section");
    about.current = document.querySelector("#about-us-section");
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        hero.current === undefined ||
        brand.current === undefined ||
        pricing.current === undefined ||
        about.current === undefined
      )
        return;

      const currentScrollY = window.scrollY + window.innerHeight;
      const ctaSectionHeight = cta.current.offsetHeight;

      const aboveHeight = window.scrollY + cta.current.getBoundingClientRect().top;

      if (currentScrollY > aboveHeight) {
        const allLines = document.querySelectorAll(".paragraph__line");
        const allLinesLength = allLines.length;
        const eachRange = 1 / allLinesLength;
        const progress = (currentScrollY - aboveHeight) / ctaSectionHeight;
        const SMOOTH = 0.015;

        const currentRange = Math.floor(progress / (eachRange + SMOOTH));
        const currentElement = allLines[currentRange];

        refCurrentRange.current = currentRange;

        if (currentElement && refPrevRange.current !== currentRange) {
          // if (progress < 0.21) return;
          allLines[refPrevRange.current].classList.remove("active");
          refPrevRange.current = currentRange;

          currentElement.classList.add("active");
        }
      } else {
        // Do nothing
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="section-content" ref={cta}>
      <CtaWrapper>
        <ul className="paragraph">
          <li className="paragraph__line paragraph__line--opacity paragraph__line--1 active">
            자동 번역 기술 덕분에 우리는 참 번역이 쉬운 세계에 살고 있어요.
          </li>
          <li className="paragraph__line paragraph__line--opacity paragraph__line--2">
            하지만 여전히 맛있는 글로 표현하는 것은 어려운 일입니다.
          </li>
          <li className="paragraph__line paragraph__line--opacity paragraph__line--3">
            글의 목적에 맞으면서도 표현력이 훌륭한 글을 만들고 싶으신가요?
          </li>
          <li className="paragraph__line paragraph__line--opacity paragraph__line--4">
            저희는 고객님의 상황과 목적을 충분히 이해하여 원하시는 목소리로 원어민에게 들리도록 글을 바꿔 드릴게요.
          </li>
          <li className="paragraph__line paragraph__line--opacity paragraph__line--5">
            이제 무엇을 전달하고 싶은지 고민하세요. 어떻게 전달할 지는 저희가 대신 고민할게요!
          </li>
          <li className="paragraph__line paragraph__line--opacity paragraph__line--6">
            본래 의미를 잘 반영하고, 가장 자연스럽고 센스있는 표현의 글로 바꿔드릴게요.
          </li>
        </ul>
        <div className="btn-wrapper">
          <ButtonPrimary onClick={() => showModal(true, 1)} buttonSize="super">
            견적 문의하기
          </ButtonPrimary>
        </div>

        {modalOption.visible ? (
          <ModalForm visible={modalOption.visible} product={modalOption.productNumber} setVisible={showModal} />
        ) : (
          ""
        )}
      </CtaWrapper>
    </div>
  );
};

export default CtaSection;
