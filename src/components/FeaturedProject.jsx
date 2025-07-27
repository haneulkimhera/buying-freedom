import React from "react";
import "./FeaturedProject.css";

const FeaturedProject = () => {
  return (
    <div className="featured-project">
      <div className="project-header">
        <div className="project-main-title">주요 프로젝트</div>
        <div className="project-subtitle">
          현재 운영 중인 대표 프로젝트를 소개합니다
        </div>
      </div>
      <div className="project-content">
        <div className="project-image">
          <svg
            className="image-icon"
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50.6667 8H13.3333C10.3878 8 8 10.3878 8 13.3333V50.6667C8 53.6122 10.3878 56 13.3333 56H50.6667C53.6122 56 56 53.6122 56 50.6667V13.3333C56 10.3878 53.6122 8 50.6667 8Z"
              stroke="#94A3B8"
              strokeWidth="5.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M24 29.3332C26.9455 29.3332 29.3334 26.9454 29.3334 23.9998C29.3334 21.0543 26.9455 18.6665 24 18.6665C21.0545 18.6665 18.6667 21.0543 18.6667 23.9998C18.6667 26.9454 21.0545 29.3332 24 29.3332Z"
              stroke="#94A3B8"
              strokeWidth="5.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M56 39.9998L47.7707 31.7705C46.7705 30.7707 45.4142 30.209 44 30.209C42.5858 30.209 41.2295 30.7707 40.2293 31.7705L16 55.9998"
              stroke="#94A3B8"
              strokeWidth="5.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="project-info">
          <div className="project-details">
            <div className="project-title">프리미엄 오피스 빌딩</div>
            <div className="project-description">
              서울 서초구에 위치한 최신 오피스 빌딩으로, 현대적인 시설과 편리한
              교통 접근성을 자랑합니다. 총 5층 규모로 다양한 규모의 기업에
              최적화된 공간을 제공합니다.
            </div>
            <div className="project-stats">
              <div className="stat-item">
                <svg
                  className="check-icon"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.1675 8.33357C18.5481 10.2013 18.2768 12.1431 17.399 13.8351C16.5212 15.527 15.0899 16.8669 13.3438 17.6313C11.5976 18.3957 9.64218 18.5384 7.80357 18.0355C5.96497 17.5327 4.35432 16.4147 3.24022 14.8681C2.12613 13.3214 1.57593 11.4396 1.68138 9.53639C1.78683 7.63318 2.54156 5.82364 3.8197 4.40954C5.09784 2.99545 6.82214 2.06226 8.70505 1.76561C10.5879 1.46897 12.5156 1.82679 14.1667 2.7794"
                    stroke="#10B981"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.5 9.16683L10 11.6668L18.3333 3.3335"
                    stroke="#10B981"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="stat-text">입주율 95% 달성</div>
              </div>
              <div className="stat-item">
                <svg
                  className="check-icon"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.1675 8.33357C18.5481 10.2013 18.2768 12.1431 17.399 13.8351C16.5212 15.527 15.0899 16.8669 13.3438 17.6313C11.5976 18.3957 9.64218 18.5384 7.80357 18.0355C5.96497 17.5327 4.35432 16.4147 3.24022 14.8681C2.12613 13.3214 1.57593 11.4396 1.68138 9.53639C1.78683 7.63318 2.54156 5.82364 3.8197 4.40954C5.09784 2.99545 6.82214 2.06226 8.70505 1.76561C10.5879 1.46897 12.5156 1.82679 14.1667 2.7794"
                    stroke="#10B981"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.5 9.16683L10 11.6668L18.3333 3.3335"
                    stroke="#10B981"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="stat-text">지하철역 도보 3분</div>
              </div>
              <div className="stat-item">
                <svg
                  className="check-icon"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.1675 8.33357C18.5481 10.2013 18.2768 12.1431 17.399 13.8351C16.5212 15.527 15.0899 16.8669 13.3438 17.6313C11.5976 18.3957 9.64218 18.5384 7.80357 18.0355C5.96497 17.5327 4.35432 16.4147 3.24022 14.8681C2.12613 13.3214 1.57593 11.4396 1.68138 9.53639C1.78683 7.63318 2.54156 5.82364 3.8197 4.40954C5.09784 2.99545 6.82214 2.06226 8.70505 1.76561C10.5879 1.46897 12.5156 1.82679 14.1667 2.7794"
                    stroke="#10B981"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.5 9.16683L10 11.6668L18.3333 3.3335"
                    stroke="#10B981"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="stat-text">24시간 보안 시스템</div>
              </div>
            </div>
          </div>
          <div className="project-cta">
            <span className="cta-text">자세히 보기</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;
