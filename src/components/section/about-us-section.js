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

  padding: 0rem 0rem 10rem 0rem;
  margin-top: 3rem;
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
      transform: matrix(1, 0, 0, 1, 0, 150);
      opacity: 1;
    }

    &-2 {
      background-color: pink;
      transform: matrix(1, 0, 0, 1, 0, 150);
      opacity: 1;
    }

    &-3 {
      background-color: maroon;
      transform: matrix(1, 0, 0, 1, 0, 150);
      opacity: 1;
    }
  }
`;

const firstThreshHold = 0.4;
const secondThreshHold = 0.7;
const thirdThreshHold = 1;

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
      const currentScrollY = window.scrollY + window.innerHeight;
      const aboveHeight = hero.current.offsetHeight + brand.current.offsetHeight + pricing.current.offsetHeight;
      const aboutSectionHeight = about.current.offsetHeight;

      const profile1Element = profile1.current;
      const profile2Element = profile2.current;
      const profile3Element = profile3.current;

      if (currentScrollY > aboveHeight && currentScrollY < aboveHeight + aboutSectionHeight) {
        const currentPosition = currentScrollY - aboveHeight;
        const progress = currentPosition / aboutSectionHeight;
        console.log({ currentPosition, aboutSectionHeight, progress });
        if (progress <= firstThreshHold) {
          //  0   0.1,  0.2,   0.3,  0.4
          //  0   25    50     75    100 (%)
          // 100  75    50     25    0  (target value)

          let t = progress * 375; // 0 ~ 0.4 총 4단계
          let ty = 150 - t;
          // console.log({ progress, t, ty });

          if (ty < 0) ty = 0;
          // console.log({ progress, t, ty });

          profile1Element.style.transform = `matrix(1, 0, 0, 1, 0 , ${ty})`;
        }

        if (progress >= 0.3 && progress <= secondThreshHold) {
          //  0   0.1,  0.2,  0.3   0.4 (progress)
          // 0      25    50    75    100 (%)
          // 0     37.5   75   112.5   150 (target value)
          // 30 percent of 150 is 45
          // 150 * 0.3 = 45
          // 150x = 45 x = 45 / 150
          // 구하고자 하는 수 / 전체 수 = 백분율
          // 구하고자 하는 수 = 백분율 * 전체 수

          let t = (progress - 0.3) * 375; // 0 ~ 0.4 총 4단계
          let ty = 150 - t;
          if (ty < 0) ty = 0;

          if (progress >= 0.4) {
            //NOTE
            // To prevent the situation that when the users scoll down so quickly
            // and the event wouldn't be catchable
            // To make sure that at certain points, these card are aligned
            profile1Element.style.transform = `matrix(1, 0, 0, 1, 0 , 0)`;
          }
          profile2Element.style.transform = `matrix(1, 0, 0, 1, 0 , ${ty})`;
        }

        if (progress >= 0.6 && progress <= thirdThreshHold) {
          let t = (progress - 0.6) * 375;
          let ty = 150 - t;

          if (ty < 0) ty = 0;
          if (progress >= 0.7) {
            //NOTE
            // To prevent the situation that when the users scoll down so quickly
            // and the event wouldn't be catchable
            // To make sure that at certain points, these card are aligned
            profile1Element.style.transform = `matrix(1, 0, 0, 1, 0 , 0)`;
            profile2Element.style.transform = `matrix(1, 0, 0, 1, 0 , 0)`;
          }

          profile3Element.style.transform = `matrix(1, 0, 0, 1, 0 , ${ty})`;
        }
      } else if (currentScrollY >= aboveHeight + aboutSectionHeight) {
        profile1Element.style.transform = `matrix(1, 0, 0, 1, 0 , 0)`;
        profile2Element.style.transform = `matrix(1, 0, 0, 1, 0 , 0)`;
        profile3Element.style.transform = `matrix(1, 0, 0, 1, 0 , 0)`;
      }
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
