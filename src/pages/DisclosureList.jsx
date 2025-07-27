import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../config/supabaseClient";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./DisclosureList.css";

const DisclosureList = () => {
  const navigate = useNavigate();
  const [disclosures, setDisclosures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // 🔍 Supabase에서 공시사항 조회
  useEffect(() => {
    const fetchDisclosures = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("disclosure")
        .select("*")
        .order("date", { ascending: false }); // 최신순 정렬

      if (error) {
        console.error("공시사항 불러오기 실패:", error.message);
      } else {
        setDisclosures(data);
      }

      setLoading(false);
    };

    fetchDisclosures();
  }, []);

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
                      {/* <svg
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
                      </svg> */}
                      <span className="file-type-text">{disclosure.file_type}</span>
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
