import React from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="company-info">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <span className="footer-logo-text">BF</span>
              </div>
              <div className="footer-company-name">Buying Freedom</div>
            </div>
            <div className="company-description">
              부동산 솔루션을 제공하는 전문 기업입니다.
            </div>
            <div className="social-icons">
              <div className="social-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 1.6665H12.5C11.395 1.6665 10.3352 2.10549 9.55376 2.88689C8.77236 3.66829 8.33337 4.7281 8.33337 5.83317V8.33317H5.83337V11.6665H8.33337V18.3332H11.6667V11.6665H14.1667L15 8.33317H11.6667V5.83317C11.6667 5.61216 11.7545 5.4002 11.9108 5.24391C12.0671 5.08763 12.279 4.99984 12.5 4.99984H15V1.6665Z"
                    stroke="#94A3B8"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="social-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.1666 1.6665H5.83329C3.53211 1.6665 1.66663 3.53198 1.66663 5.83317V14.1665C1.66663 16.4677 3.53211 18.3332 5.83329 18.3332H14.1666C16.4678 18.3332 18.3333 16.4677 18.3333 14.1665V5.83317C18.3333 3.53198 16.4678 1.6665 14.1666 1.6665Z"
                    stroke="#94A3B8"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.3334 9.47476C13.4362 10.1683 13.3178 10.8766 12.9948 11.4989C12.6719 12.1213 12.161 12.6259 11.5347 12.9412C10.9085 13.2564 10.1987 13.3661 9.50653 13.2547C8.81431 13.1433 8.17484 12.8165 7.67907 12.3207C7.1833 11.825 6.85648 11.1855 6.7451 10.4933C6.63371 9.80106 6.74343 9.09134 7.05865 8.46507C7.37386 7.83881 7.87853 7.32788 8.50086 7.00496C9.12319 6.68205 9.8315 6.56359 10.525 6.66643C11.2325 6.77133 11.8874 7.10098 12.3931 7.60669C12.8988 8.11239 13.2285 8.76733 13.3334 9.47476Z"
                    stroke="#94A3B8"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.5834 5.4165H14.5917"
                    stroke="#94A3B8"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="social-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.3334 6.6665C14.6595 6.6665 15.9312 7.19329 16.8689 8.13097C17.8066 9.06865 18.3334 10.3404 18.3334 11.6665V17.4998H15V11.6665C15 11.2245 14.8244 10.8006 14.5119 10.488C14.1993 10.1754 13.7754 9.99984 13.3334 9.99984C12.8913 9.99984 12.4674 10.1754 12.1549 10.488C11.8423 10.8006 11.6667 11.2245 11.6667 11.6665V17.4998H8.33337V11.6665C8.33337 10.3404 8.86016 9.06865 9.79784 8.13097C10.7355 7.19329 12.0073 6.6665 13.3334 6.6665Z"
                    stroke="#94A3B8"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.99996 7.5H1.66663V17.5H4.99996V7.5Z"
                    stroke="#94A3B8"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.33329 4.99984C4.25377 4.99984 4.99996 4.25365 4.99996 3.33317C4.99996 2.4127 4.25377 1.6665 3.33329 1.6665C2.41282 1.6665 1.66663 2.4127 1.66663 3.33317C1.66663 4.25365 2.41282 4.99984 3.33329 4.99984Z"
                    stroke="#94A3B8"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="quick-links">
            <div className="footer-section-title">빠른 링크</div>
            <div
              className="footer-link"
              onClick={() => handleNavigation("/team")}
            >
              구성원 소개
            </div>
            <div className="footer-link" onClick={() => handleNavigation("/businesses")}>주요업무</div>
            <div className="footer-link">프로젝트</div>
            <div
              className="footer-link"
              onClick={() => handleNavigation("/disclosures")}
            >
              공시사항
            </div>
          </div>
          <div className="contact-info">
            <div className="footer-section-title">연락처</div>
            <div className="contact-item">
              <svg
                className="contact-icon"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.3333 6.66683C13.3333 9.9955 9.64067 13.4622 8.40067 14.5328C8.28515 14.6197 8.14454 14.6667 8.00001 14.6667C7.85547 14.6667 7.71486 14.6197 7.59934 14.5328C6.35934 13.4622 2.66667 9.9955 2.66667 6.66683C2.66667 5.25234 3.22858 3.89579 4.22877 2.89559C5.22896 1.8954 6.58552 1.3335 8.00001 1.3335C9.41449 1.3335 10.771 1.8954 11.7712 2.89559C12.7714 3.89579 13.3333 5.25234 13.3333 6.66683Z"
                  stroke="#94A3B8"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 8.6665C9.10457 8.6665 10 7.77107 10 6.6665C10 5.56193 9.10457 4.6665 8 4.6665C6.89543 4.6665 6 5.56193 6 6.6665C6 7.77107 6.89543 8.6665 8 8.6665Z"
                  stroke="#94A3B8"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="contact-text">서울시 서초구 방배동 853-3번지</div>
            </div>
            <div className="contact-item">
              <svg
                className="contact-icon"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.22133 11.0455C9.35901 11.1087 9.51413 11.1232 9.66112 11.0865C9.80812 11.0497 9.93822 10.964 10.03 10.8435L10.2667 10.5335C10.3909 10.3679 10.5519 10.2335 10.737 10.1409C10.9222 10.0484 11.1263 10.0002 11.3333 10.0002H13.3333C13.6869 10.0002 14.0261 10.1406 14.2761 10.3907C14.5262 10.6407 14.6667 10.9799 14.6667 11.3335V13.3335C14.6667 13.6871 14.5262 14.0263 14.2761 14.2763C14.0261 14.5264 13.6869 14.6668 13.3333 14.6668C10.1507 14.6668 7.09848 13.4025 4.84805 11.1521C2.59761 8.90167 1.33333 5.84943 1.33333 2.66683C1.33333 2.31321 1.4738 1.97407 1.72385 1.72402C1.9739 1.47397 2.31304 1.3335 2.66666 1.3335H4.66666C5.02028 1.3335 5.35942 1.47397 5.60947 1.72402C5.85952 1.97407 5.99999 2.31321 5.99999 2.66683V4.66683C5.99999 4.87382 5.9518 5.07797 5.85923 5.26311C5.76666 5.44825 5.63226 5.6093 5.46666 5.7335L5.15466 5.9675C5.03227 6.06095 4.94601 6.19389 4.91052 6.34373C4.87504 6.49357 4.89252 6.65108 4.95999 6.7895C5.87112 8.64007 7.36961 10.1367 9.22133 11.0455Z"
                  stroke="#94A3B8"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="contact-text">010-3284-0425</div>
            </div>
            <div className="contact-item">
              <svg
                className="contact-icon"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.6667 4.6665L8.67266 8.4845C8.46926 8.60265 8.23822 8.66487 8.00299 8.66487C7.76777 8.66487 7.53673 8.60265 7.33333 8.4845L1.33333 4.6665"
                  stroke="#94A3B8"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.3333 2.6665H2.66666C1.93028 2.6665 1.33333 3.26346 1.33333 3.99984V11.9998C1.33333 12.7362 1.93028 13.3332 2.66666 13.3332H13.3333C14.0697 13.3332 14.6667 12.7362 14.6667 11.9998V3.99984C14.6667 3.26346 14.0697 2.6665 13.3333 2.6665Z"
                  stroke="#94A3B8"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="contact-text">mdkhp@naver.com</div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="copyright">
            © 2024 Buying Freedom. All rights reserved.
          </div>
          <div className="footer-links">
            <div className="footer-bottom-link">개인정보처리방침</div>
            <div className="footer-bottom-link">이용약관</div>
            <div className="footer-bottom-link">쿠키 정책</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
