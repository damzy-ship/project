import styled from "styled-components";
import Slider from "../../utils/Slider";

const ImgContainer = styled.div`
  height: 78vw;
  min-width: calc(100% / 1.2);
  max-width: calc(100% / 1.2);
  background-color: #d9d9d9;
  border: solid #0000001c 1px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ImgSlider = ({ imageUrls }) => {
  return (
    <Slider pd="13px" bgColor="#F5F5F5">
      {imageUrls &&
        imageUrls.map((url) => (
          <ImgContainer key={url}>
            <Image src={`/img/products/${url}`} />
          </ImgContainer>
        ))}
      {!imageUrls && <ImgContainer></ImgContainer>}
      {!imageUrls && <ImgContainer></ImgContainer>}
    </Slider>
  );
};

export default ImgSlider;
