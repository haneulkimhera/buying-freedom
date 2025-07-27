import React from "react";
import styled from "styled-components";

const ServicesSection = styled.section`
  display: flex;
  width: 100%;
  padding: 80px 80px 120px 80px;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  background: #fff;
  position: relative;
`;

const ServicesHeader = styled.div`
  display: flex;
  width: 100%;
  max-width: 1130px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  position: relative;
`;

const ServicesTitle = styled.h2`
  align-self: stretch;
  color: #1e293b;
  text-align: center;
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 36px;
  font-weight: 700;
  line-height: 43.2px;
  position: relative;
`;

const ServicesDescription = styled.p`
  width: 998px;
  color: #64748b;
  text-align: center;
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  position: relative;
`;

const ServicesRow = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  position: relative;
`;

const ServiceCard = styled.div`
  display: flex;
  width: 360px;
  height: 280px;
  padding: 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  background: #fff;
  box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.03);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.08);
  }
`;

const IconContainer = styled.div`
  display: flex;
  width: 64px;
  height: 64px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: ${(props) => props.bg || "#eef2ff"};
`;

const ServiceIcon = styled.svg`
  width: 32px;
  height: 32px;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
`;

const CardTitle = styled.h3`
  color: #111827;
  font-family: "Noto Sans KR", -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
`;

const CardDescription = styled.p`
  color: #6b7280;
  font-family: "Noto Sans KR", -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
`;

const Services = () => {
  return (
    <ServicesSection>
      <ServicesHeader>
        <ServicesTitle>기업 소개</ServicesTitle>
        <ServicesDescription>
          주식회사 시간을 사는 사람들은 가치 대비 저평가되어 있는 자산을 찾아
          개발행위를 통하여 자산을 증식시키고 이렇게 증가된 자산을 이용하여 더
          나은 투자처를 발굴하는 활동을 영위합니다. 주로 투자가치가 높은 강남권의
          숨어있는 알짜 부동산을 매입하여 사업을 진행합니다. 부동산 뿐 아니라
          부동산, 증권, 지적재산, 자문, F&B 등 가치가 있는 모든 대상이 저희들의
          사업 대상 입니다.
        </ServicesDescription>
      </ServicesHeader>
      <ServicesRow>
        <ServiceCard>
          <IconContainer bg="#eef2ff">
            <ServiceIcon
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 2.6665H8.00004C6.52728 2.6665 5.33337 3.86041 5.33337 5.33317V26.6665C5.33337 28.1393 6.52728 29.3332 8.00004 29.3332H24C25.4728 29.3332 26.6667 28.1393 26.6667 26.6665V5.33317C26.6667 3.86041 25.4728 2.6665 24 2.6665Z"
                stroke="#1E3A8A"
                strokeWidth="2.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 29.3333V24H20V29.3333"
                stroke="#1E3A8A"
                strokeWidth="2.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M10.6666 8H10.68" stroke="#1E3A8A" strokeWidth="2.66667" />
              <path d="M21.3334 8H21.3467" stroke="#1E3A8A" strokeWidth="2.66667" />
              <path d="M16 8H16.0133" stroke="#1E3A8A" strokeWidth="2.66667" />
              <path d="M16 13.3335H16.0133" stroke="#1E3A8A" strokeWidth="2.66667" />
              <path d="M16 18.6665H16.0133" stroke="#1E3A8A" strokeWidth="2.66667" />
              <path d="M21.3334 13.3335H21.3467" stroke="#1E3A8A" strokeWidth="2.66667" />
              <path d="M21.3334 18.6665H21.3467" stroke="#1E3A8A" strokeWidth="2.66667" />
              <path d="M10.6666 13.3335H10.68" stroke="#1E3A8A" strokeWidth="2.66667" />
              <path d="M10.6666 18.6665H10.68" stroke="#1E3A8A" strokeWidth="2.66667" />
            </ServiceIcon>
          </IconContainer>
          <CardContent>
            <CardTitle>부동산 개발</CardTitle>
            <CardDescription>example</CardDescription>
          </CardContent>
        </ServiceCard>
      </ServicesRow>
    </ServicesSection>
  );
};

export default Services;
