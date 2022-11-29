import styled from "styled-components";

const Container = styled.div`
  min-width: calc(100% / 2.5);
  position: relative;
  display: flex;
  flex-direction: column;
`;

const ImgContainer = styled.div`
  height: 35vw;
  width: 100%;
  background-color: #d9d9d9;
  overflow: hidden;
  margin-bottom: 9px;
`;

const ItemName = styled.p`
  font-weight: 500;
  font-size: 13px;
  /* text-transform: uppercase; */
  margin-bottom: 6px;
`;
const ItemPrice = styled.p`
  font-weight: 700;
  font-size: 16px;
`;

const TopProductItem = (props) => {
  return (
    <Container>
      <ImgContainer></ImgContainer>
      <ItemName>{props.itemName}</ItemName>
      <ItemPrice>₦{props.itemPrice}</ItemPrice>
    </Container>
  );
};

export default TopProductItem;
