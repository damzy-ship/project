import styled from "styled-components";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";

const Container = styled.div`
  border-radius: 12px;
  background-color: #f5f5f5;

  display: flex;
  flex-direction: column;
`;
const ImgContainer = styled.div`
  height: 150px;
  width: 100%;
  background-color: #d9d9d9;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

const ContentBox = styled.div`
  padding: 13px 13px 18px 13px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ContentTextBox = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 3px;
  margin-bottom: 20px;
`;
const TopLeftContentBox = styled.div``;

const Title = styled.p`
  font-weight: 500;
  font-size: 13px;
  margin-bottom: 3px;
`;
const Price = styled.p`
  font-weight: 700;
  font-size: 16px;
`;

const Button = styled.button`
  font-weight: 700;
  font-size: 15px;
  background-color: #2196d9;
  border: none;
  border-radius: 5px;
  text-transform: uppercase;
  color: #fff;
  padding: 5px 10px;
  width: 100%;
`;

const ProductItem = (props) => {
  return (
    <Container>
      <ImgContainer></ImgContainer>
      <ContentBox>
        <ContentTextBox>
          <TopLeftContentBox>
            <Title>{props.title}</Title>
            <Price>₦{props.price}</Price>
          </TopLeftContentBox>
          <FavoriteBorderRoundedIcon style={{ fontSize: 25 }} />
        </ContentTextBox>
        <Button>View Product</Button>
      </ContentBox>
    </Container>
  );
};

export default ProductItem;
