import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-title">가치 있는 자산으로 미래를 설계합니다</div>
          <div className="hero-subtitle">
            부동산 투자와 개발을 통해 지속 가능한 가치를 창출하는 전문 투자
            회사입니다
          </div>
        </div>
        <div className="hero-cta">
          <span className="cta-text" onClick={() => handleNavigation("/projects")}>프로젝트 보기</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
