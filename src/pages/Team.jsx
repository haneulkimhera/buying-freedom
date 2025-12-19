import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TeamMember from "../components/TeamMember";
import ceoProfile from "../assets/team/ceo_profile.png";
import member1Profile from "../assets/team/member_profile.jpeg";
import CheckIcon from "../components/CheckIcon";
import "./Team.css";

const Team = () => {
  return (
    <div className="team-page">
      <Header />

      {/* Page Header Section */}
      <div className="page-header">
        <div className="header-content">
          <h1 className="page-title">구성원 소개</h1>
          <p className="page-description">
            전문성과 경험을 바탕으로 고객의 성공을 이끄는 팀을 소개합니다
          </p>
        </div>
      </div>

      {/* CEO Section */}
      <div className="ceo-section">
        <div className="ceo-header">
          <h2 className="section-title">대표이사</h2>
          <p className="section-description">
            비전과 리더십으로 회사를 이끌어가는 대표를 소개합니다
          </p>
        </div>
        <div className="ceo-profile">
          <div className="ceo-photo-container">
            <div className="photo-frame">
              <img src={ceoProfile} alt="대표 프로필" className="ceo-photo"/>
            </div>
            <div className="ceo-name">김형필 대표</div>
          </div>
          <div className="ceo-info">
            <div className="ceo-details">
              <div className="name-and-title">
                <h3 className="ceo-full-name">김형필</h3>
                <div className="ceo-title">대표이사 / CEO</div>
              </div>
              <div className="quote-section">
                <p className="ceo-quote">"시간의 자유를 찾아서"</p>
              </div>
              <div className="experience">
                <h4 className="experience-title">주요 경력</h4>
                <div className="experience-list">
                  <div className="experience-item">
                    <CheckIcon className="check-icon" />
                    <span className="experience-text">
                      부동산 개발 및 투자 15년 경력
                    </span>
                  </div>
                  <div className="experience-item">
                    <CheckIcon className="check-icon" />
                    <span className="experience-text">
                      강남권 프리미엄 부동산 전문
                    </span>
                  </div>
                  {/* <div className="experience-item">
                    <CheckIcon className="check-icon" />
                    <span className="experience-text">
                      창원 메트로병원장
                    </span>
                  </div> */}
                  <div className="experience-item">
                    <CheckIcon className="check-icon" />
                    <span className="experience-text">
                      영상의학과 전문의
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="team-section">
        <div className="team-header">
          <h2 className="section-title">팀 구성원</h2>
          <p className="section-description">
            각 분야의 전문가들이 함께 최고의 서비스를 제공합니다
          </p>
        </div>
        <div className="team-grid">
          <div className="team-row">
            <TeamMember name="이시환" position="이사" description="이사 이시환 " photo={member1Profile}/>
          </div>
          {/* <div className="team-row">
            <TeamMember name="이름" position="직무" description="소개말" />
            <TeamMember name="이름" position="직무" description="소개말" />
            <TeamMember name="이름" position="직무" description="소개말" />
          </div> */}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Team;
