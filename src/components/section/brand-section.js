import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const BrandWrapper = styled.div`
  position: relative;

  /* height: 380px; */
`;

const HiddenSection = styled.div`
  clip-path: circle(120px at 50% 50%);
  width: 100%;
  height: 100%;
  padding: 10rem 1rem;
  background-color: #f8d46c;
  cursor: none;

  p {
    font-size: 6rem;
    font-weight: bold;
    text-align: center;
  }
`;

const VisibleSection = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 10rem 1rem;

  p {
    font-size: 6rem;
    font-weight: bold;
    text-align: center;
  }
`;

const BrandSection = () => {
  const hiddenRef = useRef();

  useEffect(() => {
    const refElement = hiddenRef.current;
    const handleMouseMove = (e) => {
      console.log("mousemove", e.path[0]);
      if (
        e.path[0].classList.contains("hidden-section") ||
        e.path[0].classList.contains("visible-section") ||
        e.path[0].classList.contains("visible-content")
      ) {
        if (refElement) {
          const isVisibeSectionY = e.path[0].classList.contains("visible-section") ? 95 : 0;
          const isVisibeSectionX = e.path[0].classList.contains("visible-section") ? 10 : 0;

          const offsetX = e.offsetX > 0 ? e.offsetX : 0;
          const offsetY = e.offsetY > 0 ? e.offsetY : 0;
          refElement.style.clipPath = `circle(120px at ${offsetX + isVisibeSectionX}px ${
            offsetY + isVisibeSectionY
          }px)`;
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <BrandWrapper className="brand-section">
      <VisibleSection className="visible-section">
        <p className="visible-section">
          번역만 하지않습니다. <br /> 여러분의 이야기를 전달합니다.
        </p>
      </VisibleSection>
      <HiddenSection className="hidden-section" ref={hiddenRef}>
        <p className="visible-section">
          We don't just translate <br /> We tell a story{" "}
        </p>
      </HiddenSection>
    </BrandWrapper>
  );
};

export default BrandSection;
