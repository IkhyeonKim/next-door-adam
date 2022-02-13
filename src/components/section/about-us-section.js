import React, { useRef } from "react";
import styled from "styled-components";
import useScrollEffect from "../../hooks/useScroll";

const START_TY = 150;

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

const Profile = styled.div`
  position: relative;

  @media only screen and (max-width: 1068px) {
    margin-bottom: 2rem;
    min-height: 380px;
  }

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
      transform: matrix(1, 0, 0, 1, 0, 0);
      opacity: 1;
    }

    &-3 {
      transform: matrix(1, 0, 0, 1, 0, 0);
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

const AboutUs = () => {
  const about = useRef();

  const profile1 = useScrollEffect(about, START_TY);
  const profile2 = useScrollEffect(about, START_TY, 0.7);
  const profile3 = useScrollEffect(about, START_TY, 1.0);

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
