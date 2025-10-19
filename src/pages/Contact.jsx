import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Contact.css";

import mapImage from '../assets/contact/map.png';
import mainBuilding from "../assets/contact/building1.jpeg";
import subBuilding1 from "../assets/contact/building2.jpeg";
import subBuilding2 from "../assets/contact/building3.jpeg";
import subBuilding3 from "../assets/contact/building4.jpeg";
import subBuilding4 from "../assets/contact/building5.jpeg";
import subBuilding5 from "../assets/contact/building6.jpeg";
import subBuilding6 from "../assets/contact/building7.jpeg";

const Contact = () => {
  return (
    <div className="contact-page">
      <Header />
      
      <div className="page-header">
        <div className="header-content">
          <h1 className="page-title">오시는 길</h1>
          <p className="page-description">
            시간을 사는 사람들 사무실에 방문하시는 길을 안내해 드립니다
          </p>
        </div>
      </div>

      <div className="main-content">
        {/* Office Info Section */}
        <div className="office-info-section">
          <div className="section-header">
            <h2 className="section-title">사무실 정보</h2>
          </div>
          <div className="info-cards">
            <div className="info-card address-card">
              <div className="icon-container">
                <svg className="map-pin-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M26.6667 13.3337C26.6667 19.991 19.2814 26.9243 16.8014 29.0657C16.5703 29.2394 16.2891 29.3333 16 29.3333C15.711 29.3333 15.4297 29.2394 15.1987 29.0657C12.7187 26.9243 5.33337 19.991 5.33337 13.3337C5.33337 10.5047 6.45718 7.79157 8.45757 5.79119C10.458 3.7908 13.1711 2.66699 16 2.66699C18.829 2.66699 21.5421 3.7908 23.5425 5.79119C25.5429 7.79157 26.6667 10.5047 26.6667 13.3337Z" stroke="#1E3A8A" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 17.333C18.2091 17.333 20 15.5421 20 13.333C20 11.1239 18.2091 9.33301 16 9.33301C13.7909 9.33301 12 11.1239 12 13.333C12 15.5421 13.7909 17.333 16 17.333Z" stroke="#1E3A8A" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="card-content">
                <h3 className="card-title">주소</h3>
                <p className="address-main">경상남도 창원시 성산구<br />원이대로 863번길 19<br />203동 2004호</p>
                <p className="address-postal">우편번호: 51485</p>
              </div>
            </div>

            <div className="info-card contact-card">
              <div className="icon-container">
                <svg className="phone-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.4427 22.091C18.7181 22.2175 19.0283 22.2463 19.3223 22.1729C19.6163 22.0995 19.8765 21.9281 20.06 21.687L20.5334 21.067C20.7817 20.7358 21.1038 20.467 21.4741 20.2819C21.8444 20.0967 22.2527 20.0003 22.6667 20.0003H26.6667C27.3739 20.0003 28.0522 20.2813 28.5523 20.7814C29.0524 21.2815 29.3334 21.9597 29.3334 22.667V26.667C29.3334 27.3742 29.0524 28.0525 28.5523 28.5526C28.0522 29.0527 27.3739 29.3337 26.6667 29.3337C20.3015 29.3337 14.197 26.8051 9.69612 22.3042C5.19525 17.8033 2.66669 11.6989 2.66669 5.33366C2.66669 4.62641 2.94764 3.94814 3.44774 3.44804C3.94783 2.94794 4.62611 2.66699 5.33335 2.66699H9.33335C10.0406 2.66699 10.7189 2.94794 11.219 3.44804C11.7191 3.94814 12 4.62641 12 5.33366V9.33366C12 9.74765 11.9036 10.1559 11.7185 10.5262C11.5334 10.8965 11.2645 11.2186 10.9334 11.467L10.3094 11.935C10.0646 12.1219 9.89205 12.3878 9.82107 12.6875C9.7501 12.9871 9.78506 13.3022 9.92002 13.579C11.7423 17.2801 14.7393 20.2734 18.4427 22.091Z" stroke="#1E3A8A" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="card-content">
                <h3 className="card-title">연락처</h3>
                <p className="contact-phone">전화: 010-3284-0425</p>
                <p className="contact-email">이메일: mdkhp@naver.com</p>
              </div>
            </div>

            <div className="info-card hours-card">
              <div className="icon-container">
                <svg className="clock-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 29.3337C23.3638 29.3337 29.3333 23.3641 29.3333 16.0003C29.3333 8.63653 23.3638 2.66699 16 2.66699C8.63621 2.66699 2.66667 8.63653 2.66667 16.0003C2.66667 23.3641 8.63621 29.3337 16 29.3337Z" stroke="#1E3A8A" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 8V16L21.3333 18.6667" stroke="#1E3A8A" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="card-content">
                <h3 className="card-title">운영시간</h3>
                <p className="hours-main">평일: 09:00 - 18:00</p>
                <p className="hours-note">방문 전 사전 예약 필수</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="map-section">
          <div className="map-header">
            <h2 className="section-title">위치 안내</h2>
          </div>
          <div className="map-container">
            <div className="map-placeholder">
              <img
                src={mapImage}
                alt="지도 위치"
                className="map-image"
              />
            </div>
          </div>
        </div>

        {/* Transportation Section */}
        <div className="transportation-section">
          <div className="public-transport">
            <div className="transport-header">
              <h2 className="section-title">대중교통 이용안내</h2>
              <p className="section-description">지하철과 버스를 이용한 접근 방법입니다</p>
            </div>
            <div className="transport-options">
              <div className="transport-option subway-info">
                <div className="transport-option-header">
                  <svg className="train-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 3.09961V6.99961C8 8.06048 8.42143 9.07789 9.17157 9.82804C9.92172 10.5782 10.9391 10.9996 12 10.9996C13.0609 10.9996 14.0783 10.5782 14.8284 9.82804C15.5786 9.07789 16 8.06048 16 6.99961V3.09961" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 15L8 14" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 15L16 14" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 19C6.2 19 4 16.8 4 14V10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10V14C20 16.8 17.8 19 15 19H9Z" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 19L6 22" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 19L18 22" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <h3 className="transport-title">지하철</h3>
                </div>
                <div className="subway-details">
                  <div className="subway-line">
                    <div className="line-badge line-2">2</div>
                    <span className="line-description">방배역 3번 출구 도보 5분</span>
                  </div>
                  <div className="subway-line">
                    <div className="line-badge line-7">7</div>
                    <span className="line-description">내방역 1번 출구 도보 8분</span>
                  </div>
                </div>
              </div>

              <div className="transport-option bus-info">
                <div className="transport-option-header">
                  <svg className="bus-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 6V12" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 6V12" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12H21.6" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18 18H21C21 18 21.5 16.3 21.8 15.2C21.9 14.8 22 14.4 22 14C22 13.6 21.9 13.2 21.8 12.8L20.4 7.8C20.1 6.8 19.1 6 18 6H4C3.46957 6 2.96086 6.21071 2.58579 6.58579C2.21071 6.96086 2 7.46957 2 8V18H5" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 20C8.10457 20 9 19.1046 9 18C9 16.8954 8.10457 16 7 16C5.89543 16 5 16.8954 5 18C5 19.1046 5.89543 20 7 20Z" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 18H14" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 20C17.1046 20 18 19.1046 18 18C18 16.8954 17.1046 16 16 16C14.8954 16 14 16.8954 14 18C14 19.1046 14.8954 20 16 20Z" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <h3 className="transport-title">버스</h3>
                </div>
                <div className="bus-details">
                  <p className="bus-line">간선버스: 146, 406, 540</p>
                  <p className="bus-line">지선버스: 5413, 5528</p>
                  <p className="bus-stop">방배동 주민센터 정류장 하차</p>
                </div>
              </div>
            </div>
          </div>

          {/* Parking Info */}
          <div className="parking-info">
            <div className="parking-header">
              <h2 className="section-title">주차 안내</h2>
              <p className="section-description">차량 이용 시 주차 정보를 확인해 주세요</p>
            </div>
            <div className="parking-details">
              <div className="parking-option building-parking">
                <div className="parking-option-header">
                  <svg className="car-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 17H21C21.6 17 22 16.6 22 16V13C22 12.1 21.3 11.3 20.5 11.1C18.7 10.6 16 10 16 10C16 10 14.7 8.6 13.8 7.7C13.3 7.3 12.7 7 12 7H5C4.4 7 3.9 7.4 3.6 7.9L2.2 10.8C2.06758 11.1862 2 11.5917 2 12V16C2 16.6 2.4 17 3 17H5" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 19C8.10457 19 9 18.1046 9 17C9 15.8954 8.10457 15 7 15C5.89543 15 5 15.8954 5 17C5 18.1046 5.89543 19 7 19Z" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 17H15" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17 19C18.1046 19 19 18.1046 19 17C19 15.8954 18.1046 15 17 15C15.8954 15 15 15.8954 15 17C15 18.1046 15.8954 19 17 19Z" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <h3 className="parking-title">건물 내 주차장</h3>
                </div>
                <div className="parking-details-content">
                  <p className="parking-detail">지상 1층 주차장 이용 가능</p>
                  <p className="parking-detail">방문객 전용 주차구역 운영</p>
                  <p className="parking-detail">주차요금: 시간당 2,000원</p>
                </div>
              </div>

              <div className="parking-option nearby-parking">
                <div className="parking-option-header">
                  <svg className="parking-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 17V7H13C13.7956 7 14.5587 7.31607 15.1213 7.87868C15.6839 8.44129 16 9.20435 16 10C16 10.7956 15.6839 11.5587 15.1213 12.1213C14.5587 12.6839 13.7956 13 13 13H9" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <h3 className="parking-title">인근 공영주차장</h3>
                </div>
                <div className="parking-details-content">
                  <p className="parking-detail">방배동 공영주차장 (도보 2분)</p>
                  <p className="parking-detail">서초구청 공영주차장 (도보 5분)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Building Photo Section */}
        <div className="building-photo-section">
          <div className="photo-header">
            <h2 className="section-title">건물 외관</h2>
            <p className="section-description">방문 시 건물 외관 사진을 참고해주세요</p>
          </div>
          <div className="building-photos">
            <div className="main-photo">
              <div className="photo-placeholder">
                <img src={mainBuilding} alt="건물 메인 외관" className="photo-main-img" />
              </div>
            </div>
            <div className="detail-photos">
              <div className="photo-row">
                <div className="photo-item">
                  <img src={subBuilding1} alt="건물 외관 상세 1" className="photo-img" />
                </div>
                <div className="photo-item">
                  <img src={subBuilding2} alt="건물 외관 상세 2" className="photo-img" />
                </div>
              </div>
              <div className="photo-row">
                <div className="photo-item">
                  <img src={subBuilding3} alt="건물 외관 상세 3" className="photo-img" />
                </div>
                <div className="photo-item">
                  <img src={subBuilding4} alt="건물 외관 상세 4" className="photo-img" />
                </div>
              </div>
              <div className="photo-row">
                <div className="photo-item">
                  <img src={subBuilding5} alt="건물 외관 상세 5" className="photo-img" />
                </div>
                <div className="photo-item">
                  <img src={subBuilding6} alt="건물 외관 상세 6" className="photo-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
