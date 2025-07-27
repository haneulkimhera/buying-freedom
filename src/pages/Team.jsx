import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TeamMember from "../components/TeamMember";
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
              <svg
                className="user-icon"
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M80 80H0V0H80V80Z" stroke="#94A3B8"></path>
                <path
                  d="M63.3334 70V63.3333C63.3334 59.7971 61.9286 56.4057 59.4281 53.9052C56.9276 51.4048 53.5362 50 50 50H30C26.4638 50 23.0724 51.4048 20.5719 53.9052C18.0714 56.4057 16.6667 59.7971 16.6667 63.3333V70"
                  stroke="#94A3B8"
                  strokeWidth="6.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M40 36.6667C47.3638 36.6667 53.3334 30.6971 53.3334 23.3333C53.3334 15.9695 47.3638 10 40 10C32.6362 10 26.6667 15.9695 26.6667 23.3333C26.6667 30.6971 32.6362 36.6667 40 36.6667Z"
                  stroke="#94A3B8"
                  strokeWidth="6.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <div className="ceo-name">000 대표이사</div>
          </div>
          <div className="ceo-info">
            <div className="ceo-details">
              <div className="name-and-title">
                <h3 className="ceo-full-name">이름</h3>
                <div className="ceo-title">대표이사 / CEO</div>
              </div>
              <div className="quote-section">
                <p className="ceo-quote">"소개말"</p>
              </div>
              <div className="experience">
                <h4 className="experience-title">주요 경력</h4>
                <div className="experience-list">
                  <div className="experience-item">
                    <svg
                      className="check-icon"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16 16.5H0V0.5H16V16.5Z" stroke="#10B981"></path>
                      <path
                        d="M13.3334 4.5L6.00002 11.8333L2.66669 8.5"
                        stroke="#10B981"
                        strokeWidth="1.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span className="experience-text">
                      부동산 개발 및 투자 15년 경력
                    </span>
                  </div>
                  <div className="experience-item">
                    <svg
                      className="check-icon"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16 16.5H0V0.5H16V16.5Z" stroke="#10B981"></path>
                      <path
                        d="M13.3334 4.5L6.00002 11.8333L2.66669 8.5"
                        stroke="#10B981"
                        strokeWidth="1.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span className="experience-text">
                      강남권 프리미엄 부동산 전문
                    </span>
                  </div>
                  <div className="experience-item">
                    <svg
                      className="check-icon"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16 16.5H0V0.5H16V16.5Z" stroke="#10B981"></path>
                      <path
                        d="M13.3334 4.5L6.00002 11.8333L2.66669 8.5"
                        stroke="#10B981"
                        strokeWidth="1.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span className="experience-text">
                      공인중개사, 감정평가사 자격 보유
                    </span>
                  </div>
                  <div className="experience-item">
                    <svg
                      className="check-icon"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16 16.5H0V0.5H16V16.5Z" stroke="#10B981"></path>
                      <path
                        d="M13.3334 4.5L6.00002 11.8333L2.66669 8.5"
                        stroke="#10B981"
                        strokeWidth="1.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span className="experience-text">
                      공인중개사, 감정평가사 자격 보유
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
            <TeamMember name="이름" position="직무" description="소개말" />
            <TeamMember name="이름" position="직무" description="소개말" />
            <TeamMember name="이름" position="직무" description="소개말" />
          </div>
          <div className="team-row">
            <TeamMember name="이름" position="직무" description="소개말" />
            <TeamMember name="이름" position="직무" description="소개말" />
            <TeamMember name="이름" position="직무" description="소개말" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Team;
