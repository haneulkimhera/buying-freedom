import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="header">
      <div className="header-container">
        <div className="logo-section">
          <Link
            to="/"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div className="logo">
              <span className="logo-text">BF</span>
            </div>
            <div className="company-name">시간을 사는 사람들</div>
          </Link>
        </div>
        <nav className="navigation">
          <div className="nav-item" onClick={() => handleNavigation("/team")}>
            구성원 소개
          </div>
          <div className="nav-item" onClick={() => handleNavigation("/businesses")}>주요업무</div>
          <div className="nav-item" onClick={() => handleNavigation("/projects")}>프로젝트</div>
          <div
            className="nav-item"
            onClick={() => handleNavigation("/disclosures")}
          >
            공시사항
          </div>
          <div className="nav-item" onClick={() => handleNavigation("/contact")}>
            오시는 길
          </div>
          <div className="nav-item">갤러리</div>
        </nav>
        <div className="contact-button">
          <span className="contact-text">문의하기</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
