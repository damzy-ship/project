import styled from "styled-components";
import Slider from "../../utils/Slider";

const ImgContainer = styled.div`
  height: 78vw;
  min-width: calc(100% / 1.2);
  background-color: #d9d9d9;
`;

const ImgSlider = () => {
  return (
    <Slider pd="13px" bgColor="#F5F5F5">
      <ImgContainer></ImgContainer>
      <ImgContainer></ImgContainer>
      <ImgContainer></ImgContainer>
      <ImgContainer></ImgContainer>
    </Slider>
  );
};

export default ImgSlider;
