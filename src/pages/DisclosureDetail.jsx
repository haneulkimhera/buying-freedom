import React, { useEffect, useState } from "react";
import { supabase } from "../config/supabaseClient";
import { useNavigate } from "react-router-dom";
import { useLocation, useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./DisclosureDetail.css";

const DisclosureDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  // const disclosure = location.state;
  const [disclosure, setDisclosure] = useState(location.state || null);
  useEffect(() => {
    const fetchDisclosure = async () => {
      if (!disclosure && id) {
        const { data, error } = await supabase
          .from("disclosure")
          .select("*")
          .eq("id", id)
          .single();

        if (error) {
          console.error("공시 상세 불러오기 실패:", error.message);
        } else {
          setDisclosure(data);
        }
      }
    };

    fetchDisclosure();
  }, [id, disclosure]);

  if (!disclosure) {
    return <div>잘못된 접근입니다. 리스트에서 항목을 클릭해주세요.</div>;
  }

  const handleBackToList = () => {
    navigate("/disclosures");
  };

  const handleDownload = async () => {
    if (!disclosure.file_path || !disclosure.file_name || !disclosure.file_type) return;
    const filePath = `${disclosure.file_path}${disclosure.file_name}.${disclosure.file_type.toLowerCase()}`;
    const { data, error } = supabase.storage
      .from("buying-freedom")       // 버킷 이름
      .getPublicUrl(filePath);      // 파일 경로

    if (error) {
      console.error(error);
    } else {
      window.open(data.publicUrl, "_blank");  // 새 창 열기 (다운로드 혹은 뷰어)
    }
  };

  return (
    <div className="disclosure-detail-page">
      <Header />

      <div className="breadcrumb-section">
        <div className="breadcrumb">
          <span className="breadcrumb-item">홈</span>
          <svg
            className="chevron-right"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M6 12L10 8L6 4"
              stroke="#9CA3AF"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="breadcrumb-item">공시사항</span>
          <svg
            className="chevron-right"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M6 12L10 8L6 4"
              stroke="#9CA3AF"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="breadcrumb-item current">
            {disclosure.title}
          </span>
        </div>
      </div>

      <div className="content-section">
        <div className="article-header">
          <button className="back-button" onClick={handleBackToList}>
            <svg
              className="arrow-left"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M9.99999 15.8337L4.16666 10.0003L9.99999 4.16699"
                stroke="#64748B"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.8333 10H4.16666"
                stroke="#64748B"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="back-text">목록으로 돌아가기</span>
          </button>

          <div className="title-section">
            <h1 className="article-title">{disclosure.title}</h1>
            <div className="meta-info">
              <div className="date-info">
                <svg
                  className="calendar-icon"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.33334 1.33301V3.99967"
                    stroke="#64748B"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.6667 1.33301V3.99967"
                    stroke="#64748B"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.6667 2.66699H3.33333C2.59695 2.66699 2 3.26395 2 4.00033V13.3337C2 14.07 2.59695 14.667 3.33333 14.667H12.6667C13.403 14.667 14 14.07 14 13.3337V4.00033C14 3.26395 13.403 2.66699 12.6667 2.66699Z"
                    stroke="#64748B"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 6.66699H14"
                    stroke="#64748B"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="date-text">공시일자: {disclosure.date}</span>
              </div>
              <div className="file-info">
                <svg
                  className="file-icon"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M10 1.33301H4.00002C3.6464 1.33301 3.30726 1.47348 3.05721 1.72353C2.80716 1.97358 2.66669 2.31272 2.66669 2.66634V13.333C2.66669 13.6866 2.80716 14.0258 3.05721 14.2758C3.30726 14.5259 3.6464 14.6663 4.00002 14.6663H12C12.3536 14.6663 12.6928 14.5259 12.9428 14.2758C13.1929 14.0258 13.3334 13.6866 13.3334 13.333V4.66634L10 1.33301Z"
                    stroke="#DC2626"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.33331 1.33301V3.99967C9.33331 4.3533 9.47379 4.69244 9.72384 4.94248C9.97389 5.19253 10.313 5.33301 10.6666 5.33301H13.3333"
                    stroke="#DC2626"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.66665 6H5.33331"
                    stroke="#DC2626"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.6666 8.66699H5.33331"
                    stroke="#DC2626"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.6666 11.333H5.33331"
                    stroke="#DC2626"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {/* <span className="file-text">첨부파일: {disclosure.title.replace(/\s/g, "_")}.pdf</span> */}
                <span className="file-text">
                  첨부파일: {disclosure.file_name && disclosure.file_type
                    ? `${disclosure.file_name}.${disclosure.file_type.toLowerCase()}`
                    : "없음"}
                </span>
              </div>
              {disclosure.file_name && disclosure.file_type && (
                <button className="download-button" onClick={handleDownload}>
                  <svg
                    className="download-icon"
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                  >
                    <path
                      d="M8.5 10V2"
                      stroke="white"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.5 10V12.6667C14.5 13.0203 14.3595 13.3594 14.1095 13.6095C13.8594 13.8595 13.5203 14 13.1667 14H3.83333C3.47971 14 3.14057 13.8595 2.89052 13.6095C2.64048 13.3594 2.5 13.0203 2.5 12.6667V10"
                      stroke="white"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.16669 6.66699L8.50002 10.0003L11.8334 6.66699"
                      stroke="white"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="download-text">파일 다운로드</span>
                </button>
              )}
            </div>
          </div>
          <div className="divider"></div>
        </div>

        <div className="article-content">
          <div className="content-body">
            <h2 className="content-title">공시 내용</h2>
            <p className="content-text">
              {disclosure.content}
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DisclosureDetail;
