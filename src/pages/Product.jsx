import styled from "styled-components";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";

import NavBar from "../components/NavBar";
import ImgSlider from "../components/ProductPage/ImgSlider";

const Container = styled.div`
  padding: 13px;
`;
const TopTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;
`;
const ProductName = styled.h1`
  font-weight: 600;
  font-size: 19.5px;
`;
const ProductPrice = styled.h1`
  font-weight: 800;
  font-size: 19.5px;
`;

const ActionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 10px;
  row-gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

const ActionButton = styled.div`
  display: flex;
  flex: 1;
  min-width: 155px;
  justify-content: center;
  align-items: center;
  padding: 8px 0;
  border: 3px solid #2196d9;
  color: ${(props) => props.textColor};
  background-color: ${(props) => props.bgColor};
  border-radius: 6px;
  font-weight: 600;
  font-size: 16px;
`;

const DescriptionBox = styled.div``;

const DescriptionText = styled.div`
  font-weight: 500;
  font-size: 15px;
`;

const ProductPage = () => {
  return (
    <>
      <NavBar />
      <ImgSlider />
      <Container>
        <TopTextContainer>
          <ProductName>Product Name</ProductName>
          <ProductPrice>₦1,250</ProductPrice>
        </TopTextContainer>
        <ActionContainer>
          <ActionButton textColor="#2196D9">
            <WhatsAppIcon
              style={{ color: "#2196D9", fontSize: 25, marginRight: 10 }}
            />
            <p>Show Contact</p>
          </ActionButton>
          <ActionButton textColor="#fff" bgColor="#2196D9">
            <FavoriteBorderRoundedIcon
              style={{ color: "#fff", fontSize: 25, marginRight: 10 }}
            />
            <p>Save Product</p>
          </ActionButton>
        </ActionContainer>
        <DescriptionBox>
          <DescriptionText>
          The best product you get on the market with 
          retals and supping things every where...
          </DescriptionText>
        </DescriptionBox>
      </Container>
    </>
  );
};

export default ProductPage;
