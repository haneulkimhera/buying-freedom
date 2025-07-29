import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";

function Businesses() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <BusinessesPageContainer>
      <Header />

      <PageHeaderSection>
        <HeaderContentSection>
          <MainTitle>주요업무</MainTitle>
          <SubTitle>Our Businesses</SubTitle>
        </HeaderContentSection>
      </PageHeaderSection>

      <IntroSection>
        <IntroContent>
          <IntroTitle>미래 도시를 만들어가는 네 가지 핵심 역량</IntroTitle>
          <IntroDescription>
            부동산 개발부터 프롭테크, 라이프스타일 숙소, 금융투자까지
            <br />
            통합적인 솔루션으로 새로운 가치를 창조합니다
          </IntroDescription>
          <ScrollIndicator>
            <ChevronIcon>
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9.5L12 15.5L18 9.5"
                  stroke="#94A3B8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </ChevronIcon>
            <ScrollText>아래로 스크롤</ScrollText>
          </ScrollIndicator>
        </IntroContent>
      </IntroSection>

      <BusinessAreasSection>
        <BusinessArea>
          <BusinessContent>
            <BusinessInfo>
              <BusinessTitle>부동산 자산 개발 및 운영</BusinessTitle>
              <BusinessDescription>
                입지 분석부터 개발, 임대를 아우르는 종합 부동산 투자·개발 사업을 전개합니다.
              </BusinessDescription>
            </BusinessInfo>
            <ImageSlider>
              <SliderContainer>
                <BusinessImage
                  src="https://api.builder.io/api/v1/image/assets/TEMP/2bf145e56026a10ba3dc7e88b864fc3be49ef843?width=720"
                  alt="부동산 개발 프로젝트 1"
                />
                <BusinessImage
                  src="https://api.builder.io/api/v1/image/assets/TEMP/fc6c7232c273cd1b99dd912cd15c58edca6a42d0?width=720"
                  alt="부동산 개발 프로젝트 2"
                />
                <BusinessImage
                  src="https://api.builder.io/api/v1/image/assets/TEMP/fc6c7232c273cd1b99dd912cd15c58edca6a42d0?width=720"
                  alt="부동산 개발 프로젝트 3"
                />
                <BusinessImage
                  src="https://api.builder.io/api/v1/image/assets/TEMP/fc6c7232c273cd1b99dd912cd15c58edca6a42d0?width=720"
                  alt="부동산 개발 프로젝트 4"
                />
              </SliderContainer>
            </ImageSlider>
          </BusinessContent>
        </BusinessArea>

        <BusinessArea>
          <BusinessContent $reverse>
            <ImageSlider>
              <SliderContainer>
                <BusinessImage
                  src="https://api.builder.io/api/v1/image/assets/TEMP/2bf145e56026a10ba3dc7e88b864fc3be49ef843?width=720"
                  alt="프롭테크 솔루션 1"
                />
                <BusinessImage
                  src="https://api.builder.io/api/v1/image/assets/TEMP/fc6c7232c273cd1b99dd912cd15c58edca6a42d0?width=720"
                  alt="프롭테크 솔루션 2"
                />
                <BusinessImage
                  src="https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=720"
                  alt="프롭테크 솔루션 3"
                />
                <BusinessImage
                  src="https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=720"
                  alt="프롭테크 솔루션 4"
                />
              </SliderContainer>
            </ImageSlider>
            <BusinessInfo>
              <BusinessTitle>프롭테크 솔루션 개발</BusinessTitle>
              <BusinessDescription>
                부동산 시장의 효율성과 투명성을 높이는 데이터 기반 플랫폼 및 기술 솔루션을 개발합니다.
              </BusinessDescription>
            </BusinessInfo>
          </BusinessContent>
        </BusinessArea>

        <BusinessArea>
          <BusinessContent>
            <BusinessInfo>
              <BusinessTitle>라이프스타일 숙소 비즈니스</BusinessTitle>
              <BusinessDescription>
                도시 속 차별화된 거주 경험을 제공하는 단기임대 중심의 공간을 기획·운영하며, 지역의 매력을 반영한 숙박 경험을 제공합니다.
              </BusinessDescription>
            </BusinessInfo>
            <ImageSlider>
              <SliderContainer>
                <BusinessImage
                  src="https://api.builder.io/api/v1/image/assets/TEMP/2bf145e56026a10ba3dc7e88b864fc3be49ef843?width=720"
                  alt="라이프스타일 숙소 1"
                />
                <BusinessImage
                  src="https://api.builder.io/api/v1/image/assets/TEMP/fc6c7232c273cd1b99dd912cd15c58edca6a42d0?width=720"
                  alt="라이프스타일 숙소 2"
                />
                <BusinessImage
                  src="https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=720"
                  alt="라이프스타일 숙소 3"
                />
                <BusinessImage
                  src="https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=720"
                  alt="라이프스타일 숙소 4"
                />
              </SliderContainer>
            </ImageSlider>
          </BusinessContent>
        </BusinessArea>

        <BusinessArea>
          <BusinessContent $reverse>
            <ImageSlider>
              <SliderContainer>
                <BusinessImage
                  src="https://api.builder.io/api/v1/image/assets/TEMP/2bf145e56026a10ba3dc7e88b864fc3be49ef843?width=720"
                  alt="금융투자 1"
                />
                <BusinessImage
                  src="https://api.builder.io/api/v1/image/assets/TEMP/fc6c7232c273cd1b99dd912cd15c58edca6a42d0?width=720"
                  alt="금융투자 2"
                />
                <BusinessImage
                  src="https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=720"
                  alt="금융투자 3"
                />
                <BusinessImage
                  src="https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=720"
                  alt="금융투자 4"
                />
              </SliderContainer>
            </ImageSlider>
            <BusinessInfo>
              <BusinessTitle>금융투자업</BusinessTitle>
              <BusinessDescription>
                부동산 및 관련 산업군을 중심으로 한 전략적 투자 및 자산 운용을 수행합니다.
              </BusinessDescription>
            </BusinessInfo>
          </BusinessContent>
        </BusinessArea>
      </BusinessAreasSection>

      <Footer />
    </BusinessesPageContainer>
  );
}

// Styled Components
const BusinessesPageContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  font-family: "Inter", -apple-system, Roboto, Helvetica, sans-serif;
  background-color: #fff;
`;

const HeaderContent = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  padding: 0 80px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f1f5f9;
  background-color: #fff;
  @media (max-width: 991px) {
    padding: 0 40px;
  }
  @media (max-width: 640px) {
    padding: 0 20px;
  }
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
`;

const Logo = styled.div`
  display: flex;
  width: 48px;
  height: 48px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: #1e3a8a;
`;

const LogoText = styled.div`
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  line-height: 21.6px;
`;

const CompanyName = styled.div`
  color: #1e293b;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  @media (max-width: 991px) {
    gap: 24px;
  }
  @media (max-width: 640px) {
    display: none;
  }
`;

const NavItem = styled.div`
  color: #64748b;
  font-size: 16px;
  font-weight: 400;
  line-height: 19.2px;
  cursor: pointer;
  transition: color 0.2s ease;
  
  &:hover {
    color: #1e3a8a;
  }
  
  @media (max-width: 991px) {
    font-size: 14px;
  }
`;

const ContactButton = styled.div`
  display: flex;
  width: 120px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  cursor: pointer;
  background-color: #1e3a8a;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #1e40af;
  }
  
  @media (max-width: 640px) {
    width: 100px;
    height: 36px;
  }
`;

const ContactButtonText = styled.div`
  color: #94a3b8;
  font-size: 14px;
  font-weight: 400;
  line-height: 16.8px;
  @media (max-width: 640px) {
    font-size: 12px;
  }
`;

const PageHeaderSection = styled.div`
  display: flex;
  width: 100%;
  height: 320px;
  padding: 80px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(225deg, #1e293b 14.64%, #334155 85.36%);
  @media (max-width: 991px) {
    padding: 60px 40px;
    height: 280px;
  }
  @media (max-width: 640px) {
    padding: 40px 20px;
    height: 240px;
  }
`;

const HeaderContentSection = styled.div`
  display: flex;
  width: 800px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  @media (max-width: 991px) {
    width: 100%;
    max-width: 600px;
  }
`;

const MainTitle = styled.div`
  color: #fff;
  text-align: center;
  font-size: 48px;
  font-weight: 700;
  line-height: 57.6px;
  @media (max-width: 991px) {
    font-size: 36px;
    line-height: 43.2px;
  }
  @media (max-width: 640px) {
    font-size: 28px;
    line-height: 33.6px;
  }
`;

const SubTitle = styled.div`
  color: #94a3b8;
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  line-height: 21.6px;
  @media (max-width: 640px) {
    font-size: 16px;
  }
`;

const IntroSection = styled.div`
  display: flex;
  width: 100%;
  height: 400px;
  padding: 80px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8fafc;
  @media (max-width: 991px) {
    padding: 60px 40px;
    height: 350px;
  }
  @media (max-width: 640px) {
    padding: 40px 20px;
    height: 300px;
  }
`;

const IntroContent = styled.div`
  display: flex;
  width: 800px;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  @media (max-width: 991px) {
    width: 100%;
    max-width: 600px;
  }
`;

const IntroTitle = styled.div`
  color: #1e293b;
  text-align: center;
  font-size: 36px;
  font-weight: 700;
  line-height: 54px;
  @media (max-width: 991px) {
    font-size: 28px;
    line-height: 42px;
  }
  @media (max-width: 640px) {
    font-size: 24px;
    line-height: 36px;
  }
`;

const IntroDescription = styled.div`
  color: #64748b;
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  line-height: 28.8px;
  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 25.6px;
  }
`;

const ScrollIndicator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const ChevronIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ScrollText = styled.div`
  color: #94a3b8;
  font-size: 14px;
  font-weight: 400;
  line-height: 16.8px;
`;

const BusinessAreasSection = styled.div`
  display: flex;
  width: 100%;
  padding: 120px 80px;
  flex-direction: column;
  align-items: center;
  gap: 80px;
  background-color: #fff;
  @media (max-width: 991px) {
    padding: 80px 40px;
    gap: 60px;
  }
  @media (max-width: 640px) {
    padding: 60px 20px;
    gap: 40px;
  }
`;

const BusinessArea = styled.div`
  display: flex;
  width: 1280px;
  height: 500px;
  padding: 60px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  box-shadow: 0 8px 40px 0 rgba(0, 0, 0, 0.03);
  background-color: #fff;
  @media (max-width: 991px) {
    width: 100%;
    max-width: 900px;
    height: auto;
    padding: 40px;
  }
  @media (max-width: 640px) {
    padding: 30px 20px;
  }
`;

const BusinessContent = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
  width: 100%;
  flex-direction: ${props => props.$reverse ? 'row-reverse' : 'row'};
  @media (max-width: 991px) {
    flex-direction: column;
    gap: 40px;
  }
  @media (max-width: 640px) {
    gap: 30px;
  }
`;

const BusinessInfo = styled.div`
  display: flex;
  width: 500px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const BusinessTitle = styled.div`
  color: #1e293b;
  font-size: 32px;
  font-weight: 700;
  line-height: 38.4px;
  @media (max-width: 991px) {
    font-size: 28px;
    line-height: 33.6px;
  }
  @media (max-width: 640px) {
    font-size: 24px;
    line-height: 28.8px;
  }
`;

const BusinessDescription = styled.div`
  color: #64748b;
  font-size: 18px;
  font-weight: 400;
  line-height: 28.8px;
  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 25.6px;
  }
`;

const ImageSlider = styled.div`
  display: flex;
  width: 600px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 16px;
  overflow-x: auto;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch; /* 터치 스크롤 부드럽게 */
  scrollbar-width: thin; /* 파이어폭스 스크롤바 얇게 */
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const SliderContainer = styled.div`
  display: inline-flex;
  width: fit-content;
  height: 380px;
  padding: 20px;
  align-items: flex-start;
  gap: 20px;
  @media (max-width: 991px) {
    width: 100%;
    height: 300px;
    padding: 10px;
    gap: 10px;
    overflow-x: auto;
  }
  @media (max-width: 640px) {
    height: 250px;
    padding: 5px;
    gap: 5px;
  }
`;

const BusinessImage = styled.img`
  display: inline-block;
  width: 360px;
  height: 340px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 12px;
  object-fit: cover;
  @media (max-width: 991px) {
    width: 280px;
    height: 280px;
  }
  @media (max-width: 640px) {
    width: 220px;
    height: 240px;
  }
`;

export default Businesses;
