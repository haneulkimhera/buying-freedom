import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import project1 from "../assets/projects/project1.png"
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "The 853",
      location: "서울시 서초구 방배로27길 19-1 (방배동)",
      description: "근린생활시설 신축공사\n\n지하1층 지상 4층\n연면적 459.52제곱미터\n건폐율 59.749%\n용적률 199.7376%",
      thumbnail: <img src={project1} alt="The 853" className="project-thumb" />
    }
  ];

  return (
    <div className="projects-page">
      <Header />
      
      {/* Project Hero Section */}
      <div className="project-hero">
        <div className="project-header">
          <h1 className="hero-title">우리가 만든 공간들</h1>
          <p className="hero-subtitle">시간을 사는 사람들의 프로젝트를 소개합니다</p>
        </div>
      </div>

      {/* Projects Section */}
      <div className="projects-section">
        <div className="projects-grid">
          <div className="project-row">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  {project.thumbnail}
                </div>
                <div className="project-info">
                  <div className="project-details">
                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-location">
                      <svg className="location-icon" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.3333 7.16683C13.3333 10.4955 9.64063 13.9622 8.40063 15.0328C8.28511 15.1197 8.14449 15.1667 7.99996 15.1667C7.85543 15.1667 7.71481 15.1197 7.59929 15.0328C6.35929 13.9622 2.66663 10.4955 2.66663 7.16683C2.66663 5.75234 3.22853 4.39579 4.22872 3.39559C5.22892 2.3954 6.58547 1.8335 7.99996 1.8335C9.41445 1.8335 10.771 2.3954 11.7712 3.39559C12.7714 4.39579 13.3333 5.75234 13.3333 7.16683Z" stroke="#64748B" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8 9.1665C9.10457 9.1665 10 8.27107 10 7.1665C10 6.06193 9.10457 5.1665 8 5.1665C6.89543 5.1665 6 6.06193 6 7.1665C6 8.27107 6.89543 9.1665 8 9.1665Z" stroke="#64748B" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="location-text">{project.location}</span>
                    </div>
                    <p className="project-description">{project.description}</p>
                  </div>
                  {/* <div className="project-cta">
                    <span className="cta-text">자세히 보기</span>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
