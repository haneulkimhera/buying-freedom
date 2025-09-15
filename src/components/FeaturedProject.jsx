import React from "react";
import "./FeaturedProject.css";
import projectThumbnail from "../assets/home/project_thumbnail.png";

const FeaturedProject = () => {
  return (
    <div className="featured-project">
      <div className="project-header">
        <div className="project-main-title">주요 프로젝트</div>
        <div className="project-subtitle">
          현재 운영 중인 대표 프로젝트를 소개합니다
        </div>
      </div>
      <div className="featured-project-content">
        <div className="project-image">
          <img src={projectThumbnail} alt="프로젝트 썸네일" className="project-thumbnail"/>
        </div>
        <div className="featured-project-info">
          <div className="project-details">
            <div className="project-title">프리미엄 오피스 빌딩 "The 853"</div>
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
                <div className="stat-text">반포 세무서 인접</div>
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
                <div className="stat-text">내방역 도보 5분</div>
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
                <div className="stat-text">래미안 원페를라 아파트 앞</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;
