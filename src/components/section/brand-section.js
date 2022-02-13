import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const BrandWrapper = styled.div`
  position: relative;
  background-color: white;

  p {
    width: 100%;
    height: 100%;
    font-size: 6rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const HiddenSection = styled.div`
  clip-path: circle(150px at 50% 50%);
  width: 100%;
  height: 55rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8d46c;
  cursor: none;
`;

const VisibleSection = styled.div`
  position: absolute;
  width: 100%;
  height: 55rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BrandSection = () => {
  const hiddenRef = useRef();
  const sectionRef = useRef();

  useEffect(() => {
    const sectionRefElement = sectionRef.current;
    const hddienRefElement = hiddenRef.current;

    if (!sectionRefElement) return;

    const handleMouseMove = (e) => {
      if (hddienRefElement) {
        const offsetX = e.offsetX > 0 ? e.offsetX : 0;
        const offsetY = e.offsetY > 0 ? e.offsetY : 0;

        console.log({ e, offsetX, offsetY });

        hddienRefElement.style.clipPath = `circle(150px at ${offsetX}px ${offsetY}px)`;
      }
    };

    sectionRefElement.addEventListener("mousemove", handleMouseMove);
    sectionRefElement.addEventListener("mouseenter", handleMouseMove);
    sectionRefElement.addEventListener("mouseleave", handleMouseMove);

    return () => {
      sectionRefElement.removeEventListener("mousemove", handleMouseMove);
      sectionRefElement.removeEventListener("mouseenter", handleMouseMove);
      sectionRefElement.removeEventListener("mouseleave", handleMouseMove);
    };
  }, []);
  return (
    <BrandWrapper ref={sectionRef} id="brand-section">
      <VisibleSection className="visible-section">
        <p>
          번역만 하지않습니다. <br /> 여러분의 이야기를 전달합니다.
        </p>
      </VisibleSection>
      <HiddenSection className="hidden-section" ref={hiddenRef}>
        <p>
          We don't just translate <br /> We tell a story{" "}
        </p>
      </HiddenSection>
    </BrandWrapper>
  );
};

export default BrandSection;
