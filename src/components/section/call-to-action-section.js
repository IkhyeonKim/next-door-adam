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
            ?????? ?????? ?????? ????????? ????????? ??? ????????? ?????? ????????? ?????? ?????????.
          </li>
          <li className="paragraph__line paragraph__line--opacity paragraph__line--2">
            ????????? ????????? ????????? ?????? ???????????? ?????? ????????? ????????????.
          </li>
          <li className="paragraph__line paragraph__line--opacity paragraph__line--3">
            ?????? ????????? ??????????????? ???????????? ????????? ?????? ????????? ????????????????
          </li>
          <li className="paragraph__line paragraph__line--opacity paragraph__line--4">
            ????????? ???????????? ????????? ????????? ????????? ???????????? ???????????? ???????????? ??????????????? ???????????? ?????? ?????? ????????????.
          </li>
          <li className="paragraph__line paragraph__line--opacity paragraph__line--5">
            ?????? ????????? ???????????? ????????? ???????????????. ????????? ????????? ?????? ????????? ?????? ???????????????!
          </li>
          <li className="paragraph__line paragraph__line--opacity paragraph__line--6">
            ?????? ????????? ??? ????????????, ?????? ??????????????? ???????????? ????????? ?????? ??????????????????.
          </li>
        </ul>
        <div className="btn-wrapper">
          <ButtonPrimary onClick={() => showModal(true, 1)} buttonSize="super">
            ?????? ????????????
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
