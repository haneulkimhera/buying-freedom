import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./DisclosureList.css";

const DisclosureList = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Sample disclosure data
  const disclosures = [
    {
      id: 1,
      title: "2024년 4분기 재무제표 공시",
      date: "2024.12.31",
      fileType: "PDF",
      content:
        "2024년 4분기의 재무제표를 공시합니다. 이번 분기의 수익, 비용, 자산, 부채 내역 등을 포함하고 있습니다.",
    },
    {
      id: 2,
      title: "주요 투자 결정 사항 공시",
      date: "2024.11.15",
      fileType: "PDF",
      content:
        "당사는 2024년 11월 주요 부동산 투자 결정을 내렸으며, 해당 내용의 세부 사항을 공시합니다.",
    },
    {
      id: 3,
      title: "정기 주주총회 소집 공고",
      date: "2024.10.20",
      fileType: "PDF",
      content:
        "정기 주주총회가 2024년 10월 30일에 개최될 예정이며, 안건 및 장소 등의 세부 정보를 안내드립니다.",
    },
    {
      id: 4,
      title: "신규 부동산 투자 계획 발표",
      date: "2024.09.05",
      fileType: "PDF",
      content:
        "2025년을 대비한 신규 부동산 투자 계획을 수립하였으며, 투자 대상 및 기대 수익률을 포함한 내용을 안내드립니다.",
    },
    {
      id: 5,
      title: "3분기 경영실적 보고서",
      date: "2024.08.30",
      fileType: "PDF",
      content:
        "2024년 3분기 경영 실적을 보고합니다. 매출 및 영업이익, 당기순이익 등 주요 지표를 포함합니다.",
    },
    {
      id: 6,
      title: "임원 인사 변경 공시",
      date: "2024.07.12",
      fileType: "PDF",
      content:
        "임원 인사에 대한 변경 사항을 공시합니다. 신규 선임 및 사임 관련 내용을 포함합니다.",
    },
    {
      id: 7,
      title: "신규 감사 선임 공시",
      date: "2024.07.10",
      fileType: "PDF",
      content:
        "신규 감사 선임에 관한 공시입니다. 감사의 이력과 임기, 선임 배경 등을 포함합니다.",
    },
    {
      id: 8,
      title: "본사 이전 안내 공시",
      date: "2024.07.01",
      fileType: "PDF",
      content:
        "본사의 사무실 이전이 확정되어 관련 정보를 공시합니다. 이전 일정과 주소 등을 안내드립니다.",
    },
  ];

  const totalPages = Math.ceil(disclosures.length / itemsPerPage);
  const paginatedDisclosures = disclosures.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handleRowClick = (item) => {
    navigate(`/disclosure/${item.id}`, { state: item });
  };

  return (
    <div className="disclosure-list-page">
      <Header />

      <div className="page-header">
        <div className="header-content">
          <h1 className="page-title">공시사항</h1>
          <p className="page-description">
            투명한 경영을 위한 주요 공시 정보를 확인하실 수 있습니다
          </p>
        </div>
      </div>

      <div className="content-section">
        {/* 검색/년도 필터 UI 제거 */}

        <div className="filter-section">
          <div className="results-info">
            <div className="results-count">
              총 {disclosures.length}건의 공시사항
            </div>
            <div className="divider"></div>
          </div>
        </div>

        <div className="disclosure-list">
          <div className="list-header">
            <div className="header-row">
              <div className="header-cell title-header">제목</div>
              <div className="header-cell date-header">공시일자</div>
              <div className="header-cell type-header">파일형식</div>
            </div>
          </div>

          <div className="disclosure-items">
            {paginatedDisclosures.map((disclosure) => (
              <div
                key={disclosure.id}
                className="disclosure-item"
                onClick={() => handleRowClick(disclosure)}
              >
                <div className="item-row">
                  <div className="item-cell title-cell">{disclosure.title}</div>
                  <div className="item-cell date-cell">{disclosure.date}</div>
                  <div className="item-cell type-cell">
                    <div className="file-type">
                      <svg
                        className="file-icon"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M10 1.33301H4.00001C3.64638 1.33301 3.30724 1.47348 3.0572 1.72353C2.80715 1.97358 2.66667 2.31272 2.66667 2.66634V13.333C2.66667 13.6866 2.80715 14.0258 3.0572 14.2758C3.30724 14.5259 3.64638 14.6663 4.00001 14.6663H12C12.3536 14.6663 12.6928 14.5259 12.9428 14.2758C13.1929 14.0258 13.3333 13.6866 13.3333 13.333V4.66634L10 1.33301Z"
                          stroke="#DC2626"
                          strokeWidth="1.33333"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9.33333 1.33301V3.99967C9.33333 4.3533 9.4738 4.69244 9.72385 4.94248C9.9739 5.19253 10.313 5.33301 10.6667 5.33301H13.3333"
                          stroke="#DC2626"
                          strokeWidth="1.33333"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6.66666 6H5.33333"
                          stroke="#DC2626"
                          strokeWidth="1.33333"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10.6667 8.66699H5.33333"
                          stroke="#DC2626"
                          strokeWidth="1.33333"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10.6667 11.333H5.33333"
                          stroke="#DC2626"
                          strokeWidth="1.33333"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="file-type-text">{disclosure.fileType}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pagination">
          <div className="pagination-controls">
            <button
              className="pagination-button prev-button"
              onClick={handlePrev}
              disabled={currentPage === 1}
            >
              <svg
                className="chevron-left"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M10 12L6 8L10 4"
                  stroke="#9CA3AF"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {[...Array(totalPages)].map((_, idx) => {
              const pageNum = idx + 1;
              return (
                <button
                  key={pageNum}
                  className={`pagination-button page-button ${
                    currentPage === pageNum ? "active" : ""
                  }`}
                  onClick={() => handlePageChange(pageNum)}
                >
                  {pageNum}
                </button>
              );
            })}

            <button
              className="pagination-button next-button"
              onClick={handleNext}
              disabled={currentPage === totalPages}
            >
              <svg
                className="chevron-right"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M6 12L10 8L6 4"
                  stroke="#64748B"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DisclosureList;
