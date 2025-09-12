import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";
import { supabase } from "../config/supabaseClient";

function Gallery() {
  const navigate = useNavigate();
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
        const { data, error } = await supabase
        .storage
        .from("buying-freedom") // ✅ 버킷 이름
        .list("gallery", { limit: 100 });
        
        console.log("list result:", { data, error }); // ✅ 1단계 확인

        if (error) {
            console.error(error);
            return;
        }

        // 파일 이름 → public URL 변환
        const urls = data.map((file) =>
            supabase
            .storage
            .from("buying-freedom")      // ✅ 버킷 이름
            .getPublicUrl(`gallery/${file.name}`).data.publicUrl // ✅ 폴더/파일 경로
        );

        console.log("public URLs:", urls); // ✅ 2단계 확인
        setImages(urls);
    };

    fetchImages();
  }, []);

  return (
    <GalleryPageContainer>
      <Header />

      <PageHeaderSection>
        <HeaderContentSection>
          <MainTitle>갤러리</MainTitle>
          <SubTitle>Projects Gallery</SubTitle>
        </HeaderContentSection>
      </PageHeaderSection>

      <GallerySection>
        <ImageGrid>
          {images.map((url, idx) => (
            <ImageWrapper key={idx}>
              <img src={url} alt={`gallery-${idx}`} />
            </ImageWrapper>
          ))}
        </ImageGrid>
      </GallerySection>

      <Footer />
    </GalleryPageContainer>
  );
}

// Styled Components
const GalleryPageContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  font-family: "Inter", -apple-system, Roboto, Helvetica, sans-serif;
  background-color: #fff;
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

const GallerySection = styled.div`
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

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
  width: 100%;
  max-width: 1200px;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;  /* 정사각형 슬롯 유지 */
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* 비율 유지하면서 꽉 채우기 */
    transition: transform 0.3s ease;
  }

  &:hover img {
    object-fit: contain;
    // transform: scale(1.05); /* 마우스 올리면 살짝 확대 */
  }
`;


export default Gallery;