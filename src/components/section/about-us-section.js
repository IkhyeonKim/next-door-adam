import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const AboutWrapper = styled.div`
  width: 100%;
  max-width: 980px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 2rem;
  grid-template-rows: 40rem;
  justify-items: stretch;
  align-items: stretch;

  padding: 3rem 0rem 10rem 0rem;
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;

  background-color: violet;
`;

const Profile = styled.div`
  position: relative;
  .profile {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &-1 {
      background-color: palegreen;
      transform: matrix(1, 0, 0, 1, 0, 100);
      opacity: 1;
    }

    &-2 {
      background-color: pink;
      transform: matrix(1, 0, 0, 1, 0, 80);
      opacity: 1;
    }

    &-3 {
      background-color: maroon;
      transform: matrix(1, 0, 0, 1, 0, 140);
      opacity: 1;
    }
  }
`;

const AboutUs = () => {
  const [scrollHeight, setScrollHeight] = useState(0);

  const rootWrapper = useRef();
  const hero = useRef();
  const brand = useRef();
  const pricing = useRef();
  const about = useRef();

  const profile1 = useRef();
  const profile2 = useRef();
  const profile3 = useRef();

  const eventCountRef = useRef();

  useEffect(() => {
    rootWrapper.current = document.querySelector("#root-wrapper");
    hero.current = document.querySelector("#hero-section");
    brand.current = document.querySelector("#brand-section");
    pricing.current = document.querySelector("#pricing-section");
  }, []);

  useEffect(() => {
    // window.innerHeight is just the height of the "what you see when the page loads".
    // window.innerHeight is the height of the browser window's viewport.

    const handleScroll = (e) => {
      const padding = 100;
      const currentScrollY = window.scrollY + window.innerHeight;
      const aboveHeight = hero.current.offsetHeight + brand.current.offsetHeight + pricing.current.offsetHeight;
      const aboutSectionHeight = about.current.offsetHeight;

      // console.log({ currentScrollY, aboveHeight });

      if (currentScrollY > aboveHeight && currentScrollY < aboveHeight + aboutSectionHeight) {
        const profile1Element = profile1.current;
        // console.log("It's about section", currentScrollY);
        const currentPosition = currentScrollY - aboveHeight;
        const progress = currentPosition / aboutSectionHeight;

        if (progress < 0.4) {
          let t = progress * 3.33;
          let ty = 100 - t * 100;

          if (ty < 0) ty = 0;
          console.log({ progress, t, ty });

          profile1Element.style.transform = `matrix(1, 0, 0, 1, 0 , ${ty})`;
        }

        // profile1Element.style.opacity = `${opac}`;

        // to -> transform: matrix(1, 0, 0, 1, 0, 0);
        // TODO: use transform matrix and opacity
      }
      // console.log("handleScroll", {
      //   offsetHeight: rootWrapper.current.offsetHeight,
      //   clientHeight: rootWrapper.current.clientHeight,
      //   scrollTop: rootWrapper.current.scrollTop,
      // });
      // console.log("handleScroll", hero.current.offsetHeight, hero.current.scrollHeight);
      // console.log("handleScroll", brand.current.offsetHeight, brand.current.scrollHeight);
      // console.log("handleScroll", pricing.current.offsetHeight, pricing.current.scrollHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AboutWrapper ref={about} id="about-us-section" className="section section-content">
      <Profile>
        <div ref={profile1} className="profile profile-1">
          Adam
        </div>
      </Profile>
      <Profile>
        <div ref={profile2} className="profile profile-2">
          Sofia
        </div>
      </Profile>
      <Profile>
        <div ref={profile3} className="profile profile-3">
          Ikhyeon
        </div>
      </Profile>
    </AboutWrapper>
  );
};

export default AboutUs;
