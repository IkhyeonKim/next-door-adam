import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: white;
`;

const AboutWrapper = styled.div`
  width: 100%;
  max-width: 980px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 2rem;
  grid-template-rows: auto 40rem;
  justify-items: stretch;
  align-items: stretch;

  margin-left: auto;
  margin-right: auto;

  padding: 10rem 0;

  h2 {
    grid-column: 1 / -1;
    display: flex;
    align-items: center;
    justify-content: start;
    font-weight: bold;
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const Profile = styled.div`
  position: relative;
  .profile {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #fff1c9;
    padding-top: 6rem;
    border-radius: 0.8rem;

    &-1 {
      transform: matrix(1, 0, 0, 1, 0, 150);
      opacity: 1;
    }

    &-2 {
      transform: matrix(1, 0, 0, 1, 0, 150);
      opacity: 1;
    }

    &-3 {
      transform: matrix(1, 0, 0, 1, 0, 150);
      opacity: 1;
    }

    &__picture {
      width: 15rem;
      height: 15rem;

      border-radius: 50%;
      background-color: white;

      margin-bottom: 3rem;
    }

    &__info {
      display: flex;
      flex-direction: column;

      .name {
        font-size: 1.6rem;
        font-weight: bold;
        text-align: center;

        margin-bottom: 0.3rem;
      }

      li {
        font-size: 1.2rem;
      }
    }
  }
`;

const firstThreshHold = 0.4;
const secondThreshHold = 0.7;
const thirdThreshHold = 1;

const AboutUs = () => {
  const rootWrapper = useRef();
  const hero = useRef();
  const brand = useRef();
  const pricing = useRef();
  const about = useRef();

  const profile1 = useRef();
  const profile2 = useRef();
  const profile3 = useRef();

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
      if (
        hero.current === undefined ||
        brand.current === undefined ||
        pricing.current === undefined ||
        about.current === undefined
      )
        return;

      const padding = 40;
      const currentScrollY = window.scrollY + window.innerHeight;
      const aboveHeight = hero.current.offsetHeight + brand.current.offsetHeight + pricing.current.offsetHeight;
      const aboutSectionHeight = about.current.offsetHeight + padding;

      const profile1Element = profile1.current;
      const profile2Element = profile2.current;
      const profile3Element = profile3.current;

      if (currentScrollY > aboveHeight && currentScrollY < aboveHeight + aboutSectionHeight) {
        const currentPosition = currentScrollY - aboveHeight;
        const progress = currentPosition / aboutSectionHeight;
        // console.log({ currentPosition, aboutSectionHeight, progress });
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

        if (progress >= 0.55 && progress <= thirdThreshHold) {
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
    <Wrapper>
      <AboutWrapper ref={about} id="about-us-section" className="section section-content">
        <h2>아담과 친구들을 만나보세요!</h2>
        <Profile>
          <div ref={profile1} className="profile profile-1">
            <div className="profile__picture"></div>
            <div className="profile__info">
              <span className="name">Adam</span>
              <ul>
                <li>Penn State University</li>
                <li>한국기업 마케팅 부서 근무</li>
              </ul>
            </div>
          </div>
        </Profile>
        <Profile>
          <div ref={profile2} className="profile profile-2">
            <div className="profile__picture"></div>
            <div className="profile__info">
              <span className="name">Sofia</span>
              <ul>
                <li>한국외국대학교 졸업</li>
                <li>국내기업 외국 법인장 통역 비서</li>
                <li>미국기업 세일즈 파이프라인 담당</li>
              </ul>
            </div>
          </div>
        </Profile>
        <Profile>
          <div ref={profile3} className="profile profile-3">
            <div className="profile__picture"></div>
            <div className="profile__info">
              <span className="name">Ikhyeon</span>
              <ul>
                <li>미국기업 영문 웹페이지 개발</li>
              </ul>
            </div>
          </div>
        </Profile>
      </AboutWrapper>
    </Wrapper>
  );
};

export default AboutUs;
